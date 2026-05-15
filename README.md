# Unlokd

Steam achievement tracker and guide platform bootstrapped from the `stitch_game_detail` reference package.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Supabase Auth + Postgres scaffolding
- Steam OpenID route skeleton

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Included routes

- `/login`
- `/`
- `/search`
- `/profile`
- `/settings`
- `/game/elden-ring`
- `/game/elden-ring/achievement/shardbearer-malenia`

## Supabase

Initial schema is in `supabase/migrations/001_initial_schema.sql`.

The app includes browser/server/admin Supabase helpers under `src/lib/supabase/`.

## Steam auth

`/api/auth/steam` and `/api/auth/steam/callback` are scaffolded for the custom OpenID flow described in the planning docs. You still need to provide:

- `STEAM_API_KEY`
- `NEXTAUTH_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
