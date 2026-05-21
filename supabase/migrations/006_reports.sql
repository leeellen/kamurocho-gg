create table if not exists public.reports (
  id bigserial primary key,
  app_id integer references public.games(app_id),
  kind text not null check (kind in ('achievement', 'collectible', 'substory', 'guide', 'general')),
  target_ref text,
  locale text default 'ko',
  description text not null,
  user_agent text,
  reporter_session text,
  status text default 'open' check (status in ('open', 'reviewed', 'resolved', 'dismissed')),
  created_at timestamptz default now()
);

create index if not exists idx_reports_app_id on public.reports(app_id);
create index if not exists idx_reports_status on public.reports(status);
create index if not exists idx_reports_created_at on public.reports(created_at desc);
