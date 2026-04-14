-- ============================================================
-- ZDEPANNAGE — Supabase schema
-- Run in: Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- ---------- B2B leads (formulaire page Professionnels) ----------
create table if not exists public.b2b_leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null check (char_length(name) between 1 and 120),
  email        text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone        text not null check (char_length(phone) between 6 and 30),
  sector       text not null check (sector in ('insurance','dealer','fleet','health','other')),
  volume       text not null check (volume in ('low','mid','high')),
  locale       text,
  status       text not null default 'new' check (status in ('new','contacted','qualified','won','lost')),
  user_agent   text,
  ip_hash      text
);

comment on table public.b2b_leads is 'Leads du formulaire B2B page Professionnels (z-depannage.fr/professionnels)';

create index if not exists b2b_leads_created_at_idx on public.b2b_leads (created_at desc);
create index if not exists b2b_leads_status_idx on public.b2b_leads (status);

-- ---------- RLS : insert anonyme autorisé, select interdit ----------
alter table public.b2b_leads enable row level security;

-- Public peut INSÉRER (formulaire du site). Pas d'UPDATE/DELETE/SELECT public.
drop policy if exists "anon_insert_b2b_leads" on public.b2b_leads;
create policy "anon_insert_b2b_leads"
  on public.b2b_leads
  for insert
  to anon
  with check (true);

-- Rate-limiting léger : max 10 inserts / heure par ip_hash (facultatif, à activer si besoin)
-- Nécessite un trigger PL/pgSQL — laissé pour V2.
