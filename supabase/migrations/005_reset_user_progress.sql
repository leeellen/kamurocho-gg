-- Reset user-progress schema to the steam_id-keyed shape that 004 intended.
-- Migration 003 was meant to drop the legacy users table (id UUID PK,
-- persona_name, etc.) but production left it in place, so 004 silently
-- skipped the create because of `create table if not exists`. This migration
-- explicitly drops the legacy tables and recreates them with the new shape.
--
-- Apply via the Supabase dashboard SQL editor (Database -> SQL Editor) on the
-- project pointed to by NEXT_PUBLIC_SUPABASE_URL.

drop table if exists public.user_achievements cascade;
drop table if exists public.user_games cascade;
drop table if exists public.users cascade;

create table public.users (
  steam_id text primary key,
  display_name text,
  avatar_url text,
  profile_url text,
  last_synced timestamptz,
  created_at timestamptz not null default now()
);

create table public.user_games (
  steam_id text not null references public.users(steam_id) on delete cascade,
  app_id integer not null references public.games(app_id) on delete cascade,
  playtime_mins integer not null default 0,
  last_played timestamptz,
  completion_pct numeric(5, 2) not null default 0,
  synced_at timestamptz not null default now(),
  primary key (steam_id, app_id)
);

create index user_games_steam_idx on public.user_games (steam_id);
create index user_games_app_idx on public.user_games (app_id);

create table public.user_achievements (
  steam_id text not null references public.users(steam_id) on delete cascade,
  achievement_id bigint not null references public.achievements(id) on delete cascade,
  unlocked boolean not null default false,
  unlock_time timestamptz,
  synced_at timestamptz not null default now(),
  primary key (steam_id, achievement_id)
);

create index user_achievements_steam_idx on public.user_achievements (steam_id);
create index user_achievements_ach_idx on public.user_achievements (achievement_id);
create index user_achievements_unlocked_idx on public.user_achievements (steam_id, unlocked);
