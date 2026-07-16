# kamurocho.gg

Steam achievement tracker and completion guide for the **Ryu Ga Gotoku / Yakuza (RGG)** series.

Sign in through Steam, sync your library, and track achievement progress across every RGG game on Steam — with Korean/English guides for missable achievements, collectibles (telephone cards, minigames), substories, and recommended play order.

> Unofficial fan project. Not affiliated with SEGA, RGG Studio, or Valve.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS 4**
- **Supabase** (Postgres + Row Level Security) — accessed server-side via the service role
- **Steam OpenID** — custom sign-in flow (no next-auth), cookie session signed with `STEAM_SESSION_SECRET`
- Deployed on **Vercel**

## Local setup

```bash
pnpm install
cp .env.example .env.local   # fill in the values
pnpm dev                     # http://localhost:3001
```

Apply the SQL migrations in `supabase/migrations/` to your Supabase project (in order) before signing in.

### Environment

See `.env.example`. Required: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `STEAM_API_KEY`, `STEAM_SESSION_SECRET`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`. Gmail and analytics vars are optional.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/games` | RGG game list |
| `/game/[id]` | Per-game overview + achievement list |
| `/game/[id]/achievement/[achievement]` | Achievement detail + guide |
| `/order` | Recommended play order |
| `/missables` | Missable achievements across the series |
| `/sources` | Guide sources / credits |
| `/search` | Full-text search (⌘K) |
| `/me` · `/library` | Signed-in user's synced library + progress |
| `/login` | Steam sign-in |

Key API routes: `/api/auth/steam` + `/callback` (OpenID), `/api/sync` (pull Steam achievements), `/api/search`, `/api/reports`, `/api/keep-warm` (defends against Supabase free-tier auto-pause).

## Data & content

- `supabase/migrations/` — schema (games, achievements, localized names, user progress, reports, RLS).
- `scripts/` — one-off content pipeline: Steam app sync, guide scraping/backfill, Korean localization, collectible/substory/minigame data, and DB snapshot generation (`pnpm snapshot`).

## License

Fan project for personal/educational use. Steam and the Steam logo are trademarks of Valve Corporation.
