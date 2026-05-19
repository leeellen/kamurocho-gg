-- Pivot the product toward a curated RGG guide hub.
-- This migration preserves guide content for kept titles while removing
-- Steam account / personal-library structures that are no longer required.

-- Remove user-centric tables first.
drop table if exists public.votes;
drop table if exists public.user_tips;
drop table if exists public.user_achievements;
drop table if exists public.user_games;
drop table if exists public.users;

-- Trim guide metadata down to what the new product actually uses.
alter table if exists public.guides
  drop column if exists downvotes,
  drop column if exists upvotes,
  drop column if exists license,
  drop column if exists source_type;

alter table if exists public.guides
  add column if not exists locale text default 'english';

-- Add curated game metadata required by the new information architecture.
alter table if exists public.games
  add column if not exists slug text,
  add column if not exists arc text,
  add column if not exists story_year integer,
  add column if not exists lead_character text,
  add column if not exists estimated_hours text,
  add column if not exists difficulty_score smallint,
  add column if not exists missable_count integer default 0,
  add column if not exists summary_en text,
  add column if not exists summary_ko text,
  add column if not exists platforms jsonb default '[]'::jsonb;

create unique index if not exists games_slug_idx on public.games (slug);

-- Add curated achievement metadata for surfaced lists and filters.
alter table if exists public.achievements
  add column if not exists missable boolean default false,
  add column if not exists trust_level text,
  add column if not exists note_en text,
  add column if not exists note_ko text;

-- New supporting tables for chapter missables and curated play order.
create table if not exists public.chapter_missables (
  id bigserial primary key,
  app_id integer not null references public.games(app_id) on delete cascade,
  chapter_no integer not null,
  chapter_title_en text not null,
  chapter_title_ko text not null,
  note_kind text not null,
  title_en text not null,
  title_ko text not null,
  window_en text not null,
  window_ko text not null,
  body_en text not null,
  body_ko text not null,
  sort_order integer not null default 0,
  created_at timestamptz default now()
);

create index if not exists chapter_missables_app_idx on public.chapter_missables (app_id, chapter_no, sort_order);

create table if not exists public.play_order_entries (
  id bigserial primary key,
  route_key text not null,
  sort_order integer not null,
  app_id integer not null references public.games(app_id) on delete cascade,
  recommended boolean not null default false,
  reason_en text not null,
  reason_ko text not null,
  created_at timestamptz default now(),
  unique (route_key, sort_order)
);

create index if not exists play_order_entries_route_idx on public.play_order_entries (route_key, sort_order);

-- Canonical RGG routes.
insert into public.play_order_entries (route_key, sort_order, app_id, recommended, reason_en, reason_ko)
values
  ('new', 1, 2988580, true, 'The prequel and the cleanest point to learn the cast and tone.', '프리퀄이자 인물 관계를 익히기 가장 좋은 시작점입니다.'),
  ('new', 2, 3717330, true, 'Directly pays off Yakuza 0 and modernizes the original first game.', '0편의 감정을 바로 이어받는 1편 리메이크입니다.'),
  ('new', 3, 3717340, true, 'A strong modern sequel before the older remasters start to feel rougher.', '구식 리마스터 구간 전 가장 좋은 템포를 유지하는 후속작입니다.'),
  ('new', 4, 1088710, false, 'A dated combat feel, but the later story arc depends on it.', '전투 감각은 낡았지만 이후 서사 이해에 중요합니다.'),
  ('new', 5, 1105500, false, 'Introduces the multi-protagonist structure in earnest.', '멀티 주인공 구조가 본격적으로 전개됩니다.'),
  ('new', 6, 1105510, true, 'The emotional peak of the Kiryu arc, even if it is a long completion run.', '분량은 길지만 키류 아크의 정서적 정점입니다.'),
  ('new', 7, 1388590, true, 'Closes Kiryu''s mainline arc.', '키류 사가를 정리하는 마무리입니다.'),
  ('new', 8, 1235140, true, 'The clean start of Ichiban''s era and the RPG systems.', '이치반 시대와 RPG 시스템이 본격적으로 시작됩니다.'),
  ('new', 9, 2058180, true, 'Best entry point for the detective-side spin-off line.', '탐정 축 스핀오프의 가장 좋은 입문점입니다.'),
  ('new', 10, 2058190, true, 'A richer sequel once the first Judgment is familiar.', '전작 이해 후 들어가면 더 정교하게 읽히는 후속작입니다.')
on conflict do nothing;

insert into public.chapter_missables (
  app_id, chapter_no, chapter_title_en, chapter_title_ko, note_kind,
  title_en, title_ko, window_en, window_ko, body_en, body_ko, sort_order
)
values
  (2988580, 2, 'The Real Estate Broker', '복수의 칼', 'missable', 'Media Mega rotating stock', '미디어 메가 한정 잡지', 'Before chapter end', '챕터 종료 전', 'Four magazines are sold only during Chapter 2. They disappear permanently once the chapter advances.', '챕터 2 한정으로 판매되는 잡지 4종입니다. 챕터가 넘어가면 영구 구매 불가입니다.', 1),
  (2988580, 3, 'A Gilded Cage', '돈의 가치', 'recommended', 'Start Real Estate Royale early', '부동산 로열 조기 시작', 'As soon as districts open', '구역이 열리자마자', 'Delaying district setup makes the later completion cleanup much longer.', '구역 해금을 미루면 나중 completion cleanup가 훨씬 길어집니다.', 1),
  (2988580, 4, 'A Foggy Promise', '쇼와시대의 그림자', 'missable', 'Telephone Club route #2', '미스 텔레폰 클럽 코스 #2', 'Before chapter end', '챕터 종료 전', 'Eriko''s route locks the moment Chapter 5 begins.', '에리코 루트는 챕터 5 진입과 동시에 닫힙니다.', 1),
  (3717330, 4, 'Return to Kamurocho', '카무로초 복귀 구간', 'recommended', 'Front-load MesuKing and substories', '메스킹과 서브스토리 선정리', 'Right after MesuKing opens', '메스킹 해금 직후', 'If you leave hobby cleanup too late, it collides with Dragon style routing later.', '하비 루프를 너무 늦게 미루면 Dragon style 강화 루트와 충돌합니다.', 1),
  (2058190, 8, 'School Stories expansion', '청춘 드라마 확장 구간', 'recommended', 'Work on School Stories mid-run', '청춘 드라마 중반 병행', 'Around Chapter 8', '챕터 8 전후', 'If postponed to post-game, School Stories, TownGo, and skill cleanup stack at once.', '엔딩 이후로 미루면 청춘 드라마와 TownGo, 스킬 정리가 한꺼번에 몰립니다.', 1)
on conflict do nothing;
