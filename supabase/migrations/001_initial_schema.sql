create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  steam_id text unique not null,
  persona_name text,
  avatar_url text,
  profile_url text,
  is_pro boolean default false,
  pro_expires timestamptz,
  last_synced timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.games (
  app_id integer primary key,
  name text not null,
  img_icon_url text,
  img_logo_url text,
  total_achievements integer default 0,
  last_schema_sync timestamptz,
  created_at timestamptz default now()
);

create table if not exists public.achievements (
  id serial primary key,
  app_id integer not null references public.games(app_id),
  api_name text not null,
  display_name text,
  description text,
  icon_url text,
  icon_gray_url text,
  global_percent decimal(5, 2),
  difficulty text,
  category text,
  sort_order integer,
  last_updated timestamptz default now(),
  unique (app_id, api_name)
);

create table if not exists public.user_games (
  user_id uuid not null references public.users(id) on delete cascade,
  app_id integer not null references public.games(app_id),
  playtime_mins integer default 0,
  completion_pct decimal(5, 2) default 0,
  last_played timestamptz,
  synced_at timestamptz default now(),
  primary key (user_id, app_id)
);

create table if not exists public.user_achievements (
  user_id uuid not null references public.users(id) on delete cascade,
  achievement_id integer not null references public.achievements(id),
  unlocked boolean default false,
  unlock_time timestamptz,
  synced_at timestamptz default now(),
  primary key (user_id, achievement_id)
);

create table if not exists public.guides (
  id serial primary key,
  achievement_id integer not null references public.achievements(id),
  content text not null,
  confidence text default 'unverified',
  source_type text default 'ai',
  source_url text,
  license text,
  upvotes integer default 0,
  downvotes integer default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.user_tips (
  id serial primary key,
  achievement_id integer not null references public.achievements(id),
  user_id uuid not null references public.users(id),
  content text not null,
  upvotes integer default 0,
  downvotes integer default 0,
  is_flagged boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.votes (
  user_id uuid not null references public.users(id) on delete cascade,
  target_type text not null,
  target_id integer not null,
  vote smallint not null,
  created_at timestamptz default now(),
  primary key (user_id, target_type, target_id)
);

create or replace function public.calculate_difficulty()
returns trigger
language plpgsql
as $$
begin
  new.difficulty := case
    when new.global_percent >= 50 then 'common'
    when new.global_percent >= 20 then 'uncommon'
    when new.global_percent >= 5 then 'rare'
    else 'legendary'
  end;
  return new;
end;
$$;

drop trigger if exists trg_difficulty on public.achievements;

create trigger trg_difficulty
before insert or update of global_percent on public.achievements
for each row
execute function public.calculate_difficulty();
