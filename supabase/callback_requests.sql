-- ============================================================
-- ZDEPANNAGE — Table callback_requests (formulaire "Demander un rappel")
-- Run in: Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

create table if not exists public.callback_requests (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  phone        text not null check (char_length(phone) between 6 and 30),
  panne_type   text,
  locale       text,
  status       text not null default 'new' check (status in ('new', 'sms_sent', 'sms_failed', 'contacted', 'closed')),
  sms_id       text,
  sms_error    text,
  user_agent   text,
  ip_hash      text
);

comment on table public.callback_requests is 'Demandes de rappel client (CallbackForm). Trigger SMS OVH automatique a Dragos.';

create index if not exists callback_requests_created_at_idx on public.callback_requests (created_at desc);
create index if not exists callback_requests_status_idx on public.callback_requests (status);

-- RLS : insert anonyme autorise (formulaire public). Pas d'UPDATE/DELETE/SELECT public.
alter table public.callback_requests enable row level security;

drop policy if exists "anon_insert_callback_requests" on public.callback_requests;
create policy "anon_insert_callback_requests"
  on public.callback_requests
  for insert
  to anon
  with check (true);
