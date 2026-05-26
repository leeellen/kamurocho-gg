-- Enable Row Level Security on user-scoped tables so a forged session or
-- leaked anon key cannot read another user's data. Service-role key bypasses
-- RLS (server-side admin client keeps working).
--
-- Public catalog tables (games, achievements, guides, chapter_missables,
-- play_order_entries) stay readable without RLS — they're series metadata
-- meant to be public.
--
-- Each block is guarded by to_regclass(...) so this migration is safe to run
-- before optional tables (e.g. reports from 006) have been created.

-- Helper: extract steam_id from the JWT custom claims set by the signed
-- session cookie. If you wire Supabase auth directly later, swap this for
-- auth.uid()-based policies.
create or replace function public.current_steam_id() returns text
language sql stable as $$
  select nullif(current_setting('request.jwt.claims', true)::jsonb ->> 'steam_id', '')
$$;

-- users: a session may read its own row only.
do $$
begin
  if to_regclass('public.users') is not null then
    execute 'alter table public.users enable row level security';
    execute 'drop policy if exists "users_self_read" on public.users';
    execute 'create policy "users_self_read" on public.users
      for select using (steam_id = public.current_steam_id())';
  end if;
end $$;

-- user_games: read/write own rows only.
do $$
begin
  if to_regclass('public.user_games') is not null then
    execute 'alter table public.user_games enable row level security';
    execute 'drop policy if exists "user_games_self_rw" on public.user_games';
    execute 'create policy "user_games_self_rw" on public.user_games
      for all using (steam_id = public.current_steam_id())
      with check (steam_id = public.current_steam_id())';
  end if;
end $$;

-- user_achievements: read/write own rows only.
do $$
begin
  if to_regclass('public.user_achievements') is not null then
    execute 'alter table public.user_achievements enable row level security';
    execute 'drop policy if exists "user_achievements_self_rw" on public.user_achievements';
    execute 'create policy "user_achievements_self_rw" on public.user_achievements
      for all using (steam_id = public.current_steam_id())
      with check (steam_id = public.current_steam_id())';
  end if;
end $$;

-- reports: anyone may insert (rate-limited at the API layer); nobody but
-- service-role may read. No select policy = no select access for anon/auth.
do $$
begin
  if to_regclass('public.reports') is not null then
    execute 'alter table public.reports enable row level security';
    execute 'drop policy if exists "reports_insert_any" on public.reports';
    execute 'create policy "reports_insert_any" on public.reports
      for insert with check (true)';
  end if;
end $$;
