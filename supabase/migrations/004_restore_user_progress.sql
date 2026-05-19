-- Restore user-progress tables removed in 003.
-- Identity is the Steam ID itself (no separate users.id UUID). Keeps the
-- auth surface tiny: a signed cookie holding steam_id is sufficient.

create table if not exists public.users (
  steam_id text primary key,
  display_name text,
  avatar_url text,
  profile_url text,
  last_synced timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.user_games (
  steam_id text not null references public.users(steam_id) on delete cascade,
  app_id integer not null references public.games(app_id) on delete cascade,
  playtime_mins integer not null default 0,
  last_played timestamptz,
  completion_pct numeric(5, 2) not null default 0,
  synced_at timestamptz not null default now(),
  primary key (steam_id, app_id)
);

create index if not exists user_games_steam_idx on public.user_games (steam_id);
create index if not exists user_games_app_idx on public.user_games (app_id);

create table if not exists public.user_achievements (
  steam_id text not null references public.users(steam_id) on delete cascade,
  achievement_id bigint not null references public.achievements(id) on delete cascade,
  unlocked boolean not null default false,
  unlock_time timestamptz,
  synced_at timestamptz not null default now(),
  primary key (steam_id, achievement_id)
);

create index if not exists user_achievements_steam_idx on public.user_achievements (steam_id);
create index if not exists user_achievements_ach_idx on public.user_achievements (achievement_id);
create index if not exists user_achievements_unlocked_idx on public.user_achievements (steam_id, unlocked);
