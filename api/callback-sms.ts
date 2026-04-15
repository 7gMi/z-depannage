// Vercel Serverless Function : envoie un SMS via OVH a Dragos quand un client
// demande un rappel via le formulaire CallbackForm.
//
// Flow :
//   1. Recoit { phone, panneType, locale } depuis le client
//   2. Insert dans Supabase callback_requests (status='new')
//   3. Appelle OVH SMS API avec signature OVH-style (HMAC SHA1)
//   4. Update status -> 'sms_sent' (ou 'sms_failed' si erreur)
//   5. Retourne { ok: true } au client (200) ou erreur (4xx/5xx)
//
// Env vars requises :
//   OVH_APP_KEY, OVH_APP_SECRET, OVH_CONSUMER_KEY, OVH_SMS_SERVICE,
//   DRAGOS_PHONE, VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

import crypto from 'node:crypto';

const OVH_ENDPOINT = 'https://eu.api.ovh.com/1.0';
const PANNE_LABELS: Record<string, string> = {
  'callback.panne.battery': 'Panne batterie',
  'callback.panne.tire': 'Crevaison / pneu',
  'callback.panne.accident': 'Accident',
  'callback.panne.mechanical': 'Panne mecanique',
  'callback.panne.keys': 'Cles enfermees / perdues',
  'callback.panne.fuel': 'Panne carburant',
  'callback.panne.other': 'Autre',
};

interface VercelRequest {
  method?: string;
  body?: { phone?: string; panneType?: string; locale?: string };
  headers: Record<string, string | string[] | undefined>;
}
interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => VercelResponse;
  setHeader: (name: string, value: string) => void;
}

async function ovhSign(method: string, url: string, body: string, timestamp: number): Promise<string> {
  const { OVH_APP_SECRET, OVH_CONSUMER_KEY } = process.env;
  const toSign = [OVH_APP_SECRET, OVH_CONSUMER_KEY, method, url, body, timestamp].join('+');
  const hash = crypto.createHash('sha1').update(toSign).digest('hex');
  return `$1$${hash}`;
}

async function ovhPost<T = unknown>(path: string, body: unknown): Promise<T> {
  const { OVH_APP_KEY, OVH_CONSUMER_KEY } = process.env;
  if (!OVH_APP_KEY || !OVH_CONSUMER_KEY) throw new Error('Missing OVH env vars');

  const url = `${OVH_ENDPOINT}${path}`;
  const bodyStr = JSON.stringify(body);
  const tsRes = await fetch(`${OVH_ENDPOINT}/auth/time`);
  const timestamp = parseInt(await tsRes.text(), 10);
  const signature = await ovhSign('POST', url, bodyStr, timestamp);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Ovh-Application': OVH_APP_KEY,
      'X-Ovh-Consumer': OVH_CONSUMER_KEY,
      'X-Ovh-Timestamp': String(timestamp),
      'X-Ovh-Signature': signature,
    },
    body: bodyStr,
  });

  if (!res.ok) throw new Error(`OVH API ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'https://z-depannage.fr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).json({});
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { phone, panneType, locale } = req.body ?? {};
  if (!phone || typeof phone !== 'string' || phone.length < 6 || phone.length > 30) {
    res.status(400).json({ error: 'Invalid phone' });
    return;
  }

  const {
    OVH_SMS_SERVICE,
    DRAGOS_PHONE,
    VITE_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
  } = process.env;

  if (!OVH_SMS_SERVICE || !DRAGOS_PHONE || !VITE_SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    res.status(500).json({ error: 'Missing server env vars' });
    return;
  }

  // 1. Insert Supabase
  const userAgent = (req.headers['user-agent'] as string | undefined) ?? '';
  const insertRes = await fetch(`${VITE_SUPABASE_URL}/rest/v1/callback_requests`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      phone,
      panne_type: panneType ?? null,
      locale: locale ?? null,
      user_agent: userAgent.slice(0, 500),
    }),
  });

  if (!insertRes.ok) {
    res.status(500).json({ error: 'DB insert failed', detail: await insertRes.text() });
    return;
  }
  const inserted = (await insertRes.json()) as Array<{ id: string; created_at: string }>;
  const requestId = inserted[0]?.id;

  // 2. Compose SMS
  const panneLabel = panneType ? (PANNE_LABELS[panneType] ?? 'Panne non precisee') : 'Panne non precisee';
  const message = [
    'ZDEPANNAGE - Demande de rappel',
    '',
    `Client : ${phone}`,
    `Panne : ${panneLabel}`,
    '',
    'Rappeler rapidement.',
  ].join('\n');

  // 3. Envoi via OVH
  try {
    type SmsResponse = { ids: number[]; totalCreditsRemoved: number; invalidReceivers: string[] };
    const smsRes = await ovhPost<SmsResponse>(`/sms/${OVH_SMS_SERVICE}/jobs`, {
      message,
      receivers: [DRAGOS_PHONE],
      noStopClause: true,
      priority: 'high',
      validityPeriod: 2880,
      charset: 'UTF-8',
      coding: '7bit',
      class: 'phoneDisplay',
    });

    // 4. Update status -> sms_sent
    if (requestId) {
      await fetch(`${VITE_SUPABASE_URL}/rest/v1/callback_requests?id=eq.${requestId}`, {
        method: 'PATCH',
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'sms_sent',
          sms_id: smsRes.ids?.[0]?.toString() ?? null,
        }),
      }).catch(() => {});
    }

    res.status(200).json({ ok: true, requestId });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    if (requestId) {
      await fetch(`${VITE_SUPABASE_URL}/rest/v1/callback_requests?id=eq.${requestId}`, {
        method: 'PATCH',
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'sms_failed',
          sms_error: errorMsg.slice(0, 500),
        }),
      }).catch(() => {});
    }
    // Still return 200 to client : la demande est enregistree, Dragos verra
    // dans le dashboard Supabase. On veut pas que le client voit "erreur".
    res.status(200).json({ ok: true, requestId, smsFailed: true });
  }
}
