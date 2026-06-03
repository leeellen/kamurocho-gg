"use client";

import { SearchClient } from "./search-client";

type Suggestion = { appId: number; name: string };

export function SearchPageClient({
  locale,
  quickGames,
}: {
  locale: string;
  quickGames: Suggestion[];
}) {
  const isKo = locale === "ko";

  const labels = {
    placeholder: isKo ? "예: 키류, 부동산, Missable, 시오리" : "e.g. Kiryu, Real Estate, missable, Shiori",
    hero: isKo ? "공략을 한 번에 찾기" : "Find a guide, fast",
    recent: isKo ? "최근 검색" : "Recent",
    quickJump: isKo ? "빠른 접근" : "Quick jump",
    empty: isKo ? "검색 결과가 없습니다" : "No matches found",
    emptyHint: isKo
      ? "철자나 한·영 표기를 바꿔 다시 시도해 보세요."
      : "Try different spelling or a romanized name.",
    gamesHeader: isKo ? "게임" : "Games",
    achievementsHeader: isKo ? "업적" : "Achievements",
    clearRecent: isKo ? "지우기" : "Clear",
    clearInput: isKo ? "검색어 지우기" : "Clear search",
    achievements: isKo ? "업적" : "Achievements",
  };

  return <SearchClient labels={labels} quickGames={quickGames} />;
}
