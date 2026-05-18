import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { LibraryBrowser } from "@/components/library/library-browser";
import { getLocale, getMessages } from "@/lib/i18n";
import { getLibraryGames, getUserSummary } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

export default async function LibraryPage() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const [user, games] = await Promise.all([getUserSummary(), getLibraryGames()]);

  if (!user.steamId) redirect("/login");

  const gamesLabel = m.lib.games.replace("{n}", String(games.length));

  return (
    <AppShell section="library" locale={locale} user={user}>
      <div className="max-w-[1200px] px-6 pt-7 pb-24 md:px-9 md:pb-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h1 className="m-0 text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {m.lib.title}
            </h1>
            <div className="mt-1 font-mono text-xs text-[var(--text-tertiary)]">{gamesLabel}</div>
          </div>
        </div>

        <LibraryBrowser
          games={games}
          labels={{
            achievements: m.common.achievements,
            guides: locale === "ko" ? "가이드" : "Guides",
            nextAction: locale === "ko" ? "바로 할 일" : "Next up",
            ready: locale === "ko" ? "즉시 확인 가능" : "Ready in Unlokd",
            noGuides: locale === "ko" ? "가이드 준비 중" : "Guide pending",
            sortBy: m.common.sortBy,
            filterAll: m.lib.filterAll,
            filter100: m.lib.filter100,
            filterProgress: m.lib.filterProgress,
            filterUnstarted: m.lib.filterUnstarted,
            sortRecent: m.lib.sortRecent,
            sortProgress: m.lib.sortProgress,
            sortName: m.lib.sortName,
            sortPlaytime: m.lib.sortPlaytime,
            empty: m.empty.library,
            emptySub: m.empty.librarySub,
          }}
        />
      </div>
    </AppShell>
  );
}
