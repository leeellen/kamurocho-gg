import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { SearchClient } from "@/components/search/search-client";
import { getLocale, getMessages } from "@/lib/i18n";
import { getLibraryGames, getUserSummary } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

export default async function SearchPage() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const [user, library] = await Promise.all([getUserSummary(), getLibraryGames(20)]);

  if (!user.steamId) redirect("/login");

  const quickGames = library.map((g) => ({ appId: g.appId, name: g.name }));

  return (
    <AppShell section="search" locale={locale} user={user}>
      <div className="mx-auto max-w-[1100px] px-6 pt-7 pb-24 md:px-9 md:pb-10">
        <SearchClient
          quickGames={quickGames}
          labels={{
            placeholder: m.search.placeholder,
            hero: m.search.hero,
            recent: m.search.recent,
            quickJump: locale === "ko" ? "라이브러리 빠른 이동" : "Jump to your library",
            empty: locale === "ko" ? "결과 없음" : "No results",
            emptyHint:
              locale === "ko"
                ? "다른 검색어를 시도하거나 라이브러리에서 직접 찾아보세요."
                : "Try a different term or browse your library directly.",
            gamesHeader: locale === "ko" ? "내 라이브러리 게임" : "Games in your library",
            achievementsHeader: locale === "ko" ? "관련 업적" : "Matching achievements",
            clearRecent: locale === "ko" ? "최근 검색 지우기" : "Clear history",
            achievements: m.common.achievements,
          }}
        />
      </div>
    </AppShell>
  );
}
