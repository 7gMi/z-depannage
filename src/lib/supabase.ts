import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  throw new Error(
    'Missing Supabase env vars — set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local',
  );
}

export const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

export type B2bLeadInsert = {
  name: string;
  email: string;
  phone: string;
  sector: string;
  volume: string;
  locale?: string;
};
