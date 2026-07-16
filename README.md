<div align="center">

# kamurocho.gg

**Steam achievement tracker & completion guide for the Ryu Ga Gotoku / Yakuza (RGG) series.**

Sign in through Steam, sync your library, and track achievement progress across every RGG game on Steam — with bilingual (KO/EN) guides for missable achievements, collectibles, substories, and the recommended play order.

[**Live → kamurocho-gg.vercel.app**](https://kamurocho-gg.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-38bdf8?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ecf8e?logo=supabase&logoColor=white)

<sub>Unofficial fan project. Not affiliated with SEGA, RGG Studio, or Valve.</sub>

</div>

---

## Features

- **Steam sign-in** — custom OpenID flow (no next-auth), signed cookie session.
- **Library sync** — pulls your owned RGG games and unlocked achievements from the Steam Web API.
- **Bilingual guides** — Korean/English coverage for achievements, missables, and collectibles.
- **Completion data** — telephone cards, minigames, and substory walkthroughs with interactive checklists (progress saved to `localStorage`).
- **Recommended play order** across the series.
- **Full-text search** with a `⌘K` shortcut.
- **User reports** — readers can flag guide errors; new reports are emailed to the maintainer.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) · React 19 |
| Styling | Tailwind CSS 4 |
| Data | Supabase (Postgres + Row Level Security), accessed server-side via the service role |
| Auth | Steam OpenID → cookie session signed with `STEAM_SESSION_SECRET` |
| Hosting | Vercel |

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in the values
pnpm dev                     # → http://localhost:3001
```

Apply the SQL migrations in `supabase/migrations/` to your Supabase project **in order** before signing in.

### Environment

See [`.env.example`](.env.example). Required:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service-role key (server only) |
| `STEAM_API_KEY` | [Steam Web API key](https://steamcommunity.com/dev/apikey) |
| `STEAM_SESSION_SECRET` | Random 32+ char secret for the session cookie |
| `NEXTAUTH_URL` | Base URL for the Steam OpenID `return_to` |
| `NEXTAUTH_SECRET` | Session secret |

Gmail (`GMAIL_*`, `REPORT_NOTIFY_TO`) and analytics (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GSC_VERIFICATION`) vars are optional.

## Project structure

```
src/
  app/                 App Router routes + API handlers
    api/               auth (Steam OpenID), sync, search, reports, keep-warm
    game/[id]/         per-game overview, achievement detail, checklists
  components/          UI + layout (header, user menu, sync button, …)
  lib/                 supabase, steam, i18n, guides, collectibles, substories
supabase/migrations/   schema: games, achievements, progress, reports, RLS
scripts/               content pipeline: Steam sync, guide scraping/backfill,
                       KO localization, snapshot generation (pnpm snapshot)
```

### Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/games` · `/game/[id]` | Game list · per-game achievements |
| `/game/[id]/achievement/[achievement]` | Achievement detail + guide |
| `/order` · `/missables` · `/sources` | Play order · missables · guide credits |
| `/search` | Full-text search (`⌘K`) |
| `/me` · `/library` | Signed-in user's synced library + progress |

## Scripts

```bash
pnpm dev        # dev server on :3001
pnpm build      # production build
pnpm lint       # eslint
pnpm snapshot   # regenerate the DB snapshot
```

## License

Fan project for personal / educational use. Steam and the Steam logo are trademarks of Valve Corporation. This site is not associated with Valve Corp., SEGA, or RGG Studio.
