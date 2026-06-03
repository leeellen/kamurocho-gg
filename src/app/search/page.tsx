import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { SearchPageClient } from "@/components/search/search-page-client";
import { getLocale } from "@/lib/i18n";
import { getSeriesGames } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isKo = locale === "ko";
  return {
    title: isKo ? "공략 검색" : "Search guides",
    description: isKo
      ? "용과 같이·이치반·저지먼트 시리즈 게임, 업적, 공략 키워드 검색."
      : "Search across games, achievements, and guide keywords for the entire RGG Studio catalog.",
    alternates: { canonical: "/search" },
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage() {
  const locale = await getLocale();
  const allGames = await getSeriesGames(locale);

  const quickGames = allGames.slice(0, 8).map((g) => ({
    appId: g.appId,
    name: g.name,
  }));

  return (
    <SiteShell locale={locale} section="search">
      <div className="mx-auto max-w-[1000px] px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <SearchPageClient locale={locale} quickGames={quickGames} />
      </div>
    </SiteShell>
  );
}
