import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLocale } from "@/lib/i18n";
import { getGamePageData } from "@/lib/data";
import { getCurrentUser, getUserAchievementMap } from "@/lib/user-progress";

import { getCollectibles } from "@/lib/collectibles";
import { getSubstories } from "@/lib/substories";
import { getMinigames } from "@/lib/minigames";
import { getCuratedGameBySlug } from "@/lib/content";

import { AchievementsList } from "./_components/achievements-list";
import { CollectiblesSection } from "./_components/collectibles-section";
import { MinigamesSection } from "./_components/minigames-section";
import { SubstoriesSection } from "./_components/substories-section";
import { GameHero } from "./_components/game-hero";
import { MissablesSidebar, type ChapterBucket } from "./_components/missables-sidebar";

const SLUG_EXTRA_KEYWORDS: Record<string, string[]> = {
  "yakuza-0": [
    "용과 같이 제로", "용과 같이 0", "용과 같이 0 공략", "용과 같이 제로 공략",
    "용과 같이 0 업적", "용과 같이 0 트로피", "용과 같이 0 서브스토리",
    "용과 같이 0 수집 요소", "용과 같이 0 Missable", "야쿠자 제로",
    "Yakuza 0", "Yakuza Zero", "Yakuza 0 guide", "Yakuza 0 achievements",
    "Yakuza 0 Director's Cut", "키류 공략", "마지마 공략",
  ],
  "yakuza-kiwami": [
    "용과 같이 극", "용극", "용과 같이 극 공략", "용과 같이 극 업적",
    "용과 같이 1 극", "야쿠자 키와미", "Yakuza Kiwami", "Yakuza Kiwami guide",
    "Yakuza Kiwami achievements",
  ],
  "yakuza-kiwami-2": [
    "용과 같이 극2", "용극2", "용과 같이 극2 공략", "용과 같이 극2 업적",
    "야쿠자 키와미 2", "Yakuza Kiwami 2", "Yakuza Kiwami 2 guide",
    "Yakuza Kiwami 2 achievements",
  ],
  "yakuza-kiwami-3": [
    "용과 같이 극3", "용극3", "용과 같이 극3 공략", "용과 같이 극3 업적",
    "야쿠자 키와미 3", "Yakuza Kiwami 3", "Dark Ties", "Yakuza Kiwami 3 guide",
  ],
  "yakuza-3": [
    "용과 같이 3", "용과 같이 3 공략", "용과 같이 3 업적", "용과 같이 3 리마스터",
    "Yakuza 3", "Yakuza 3 Remastered", "Yakuza 3 guide", "Yakuza 3 achievements",
  ],
  "yakuza-4": [
    "용과 같이 4", "용과 같이 4 공략", "용과 같이 4 업적", "용과 같이 4 리마스터",
    "Yakuza 4", "Yakuza 4 Remastered", "Yakuza 4 guide", "Yakuza 4 achievements",
  ],
  "yakuza-5": [
    "용과 같이 5", "용과 같이 5 공략", "용과 같이 5 업적", "용과 같이 5 리마스터",
    "Yakuza 5", "Yakuza 5 Remastered", "Yakuza 5 guide", "Yakuza 5 achievements",
  ],
  "yakuza-6": [
    "용과 같이 6", "용과 같이 6 공략", "용과 같이 6 업적", "용과 같이 6 생명의 시",
    "Yakuza 6", "Yakuza 6 The Song of Life", "Yakuza 6 guide", "Yakuza 6 achievements",
  ],
  "like-a-dragon-gaiden": [
    "용과 같이 7 외전", "용과 같이 외전", "이름을 지운 자", "가이든",
    "용과 같이 가이든 공략", "용과 같이 가이든 업적",
    "Like a Dragon Gaiden", "Gaiden guide", "Gaiden achievements",
    "Like a Dragon Gaiden The Man Who Erased His Name",
  ],
  "like-a-dragon-ishin": [
    "용과 같이 유신", "용과 같이 이신", "유신 극", "이신 극",
    "용과 같이 유신 공략", "용과 같이 유신 업적",
    "Like a Dragon Ishin", "Ishin guide", "Ishin achievements",
    "Like a Dragon Ishin guide",
  ],
  "yakuza-like-a-dragon": [
    "용과 같이 7", "용7", "라이크 어 드래곤", "야쿠자 라이크 어 드래곤",
    "용과 같이 7 공략", "용과 같이 7 업적", "이치반 공략",
    "Yakuza Like a Dragon", "Yakuza 7", "Like a Dragon guide",
    "Yakuza Like a Dragon guide", "Yakuza Like a Dragon achievements",
  ],
  "like-a-dragon-infinite-wealth": [
    "용과 같이 8", "용8", "인피니트 웰스", "라이크 어 드래곤 인피니트 웰스",
    "용과 같이 8 공략", "용과 같이 8 업적",
    "Like a Dragon Infinite Wealth", "Infinite Wealth guide",
    "Infinite Wealth achievements", "Like a Dragon 8",
  ],
  "like-a-dragon-pirate-yakuza-in-hawaii": [
    "용과 같이 8 외전", "파이리트 야쿠자", "마지마 공략",
    "용과 같이 8 외전 공략", "용과 같이 8 외전 업적",
    "Pirate Yakuza in Hawaii", "Like a Dragon Pirate Yakuza",
    "Pirate Yakuza guide", "Pirate Yakuza achievements",
  ],
  "judgment": [
    "저지먼트", "저지먼트 공략", "저지먼트 업적", "야가미 공략",
    "Judgment", "Judgment guide", "Judgment achievements",
    "Judge Eyes",
  ],
  "lost-judgment": [
    "로스트 저지먼트", "로스트 저지먼트 공략", "로스트 저지먼트 업적",
    "Lost Judgment", "Lost Judgment guide", "Lost Judgment achievements",
  ],
};

const VALID_TABS = ["achievements", "missables", "substories", "collectibles", "minigames"] as const;
type GameTab = (typeof VALID_TABS)[number];
function pickTab(raw: string | string[] | undefined, available: Set<GameTab>): GameTab {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (value && (VALID_TABS as readonly string[]).includes(value) && available.has(value as GameTab)) {
    return value as GameTab;
  }
  return "achievements";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();
  const data = await getGamePageData(id, locale);
  if (!data) return {};
  const curated = getCuratedGameBySlug(data.game.slug);
  const localizedName = locale === "ko" && curated?.title.ko
    ? curated.title.ko
    : data.game.name;
  const title = locale === "ko"
    ? `${localizedName} 스팀 업적 공략`
    : `${data.game.name} Steam achievement guide`;
  const description = data.game.summary;
  const url = `https://kamurocho-gg.vercel.app/game/${data.game.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: data.game.headerUrl ? [{ url: data.game.headerUrl }] : undefined,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.game.headerUrl ? [data.game.headerUrl] : undefined,
    },
    keywords: [
      data.game.name,
      localizedName,
      `${localizedName} 공략`,
      `${localizedName} 업적`,
      `${localizedName} 업적 공략`,
      `${data.game.name} 공략`,
      `${data.game.name} 업적`,
      `${data.game.name} 업적 공략`,
      `${data.game.name} 스팀`,
      `${data.game.name} Steam`,
      `${data.game.name} 트로피`,
      `${data.game.name} 100%`,
      `${data.game.name} 도전과제`,
      `${data.game.name} Missable`,
      `${data.game.name} 놓치기 쉬운 업적`,
      `${data.game.name} 미서블`,
      "Steam achievement",
      "Steam 업적",
      "RGG Studio",
      "용과 같이",
      "Like a Dragon",
      "Yakuza",
      ...(SLUG_EXTRA_KEYWORDS[data.game.slug] ?? []),
    ],
  };
}

function gameStructuredData(game: { name: string; slug: string; appId: number; releaseDate: string | null; releaseYear: number | null; summary: string; headerUrl: string | null }, locale: "ko" | "en") {
  const siteUrl = "https://kamurocho-gg.vercel.app";
  const url = `${siteUrl}/game/${game.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: game.name,
      url,
      description: game.summary,
      gamePlatform: ["PC", "Steam"],
      applicationCategory: "Game",
      operatingSystem: "Windows",
      inLanguage: locale === "ko" ? ["ko-KR", "en-US"] : ["en-US", "ko-KR"],
      ...(game.releaseDate ? { datePublished: game.releaseDate } : {}),
      ...(game.headerUrl ? { image: game.headerUrl } : {}),
      publisher: { "@type": "Organization", name: "SEGA" },
      developer: { "@type": "Organization", name: "RGG Studio" },
      sameAs: `https://store.steampowered.com/app/${game.appId}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "ko" ? "홈" : "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: locale === "ko" ? "게임 목록" : "Games",
          item: `${siteUrl}/games`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${game.name}${locale === "ko" ? " 업적 공략" : " achievement guide"}`,
          item: url,
        },
      ],
    },
  ];
}

export default async function GamePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { id } = await params;
  const search = await searchParams;
  const locale = await getLocale();
  const data = await getGamePageData(id, locale);
  if (!data) notFound();

  const [user, userAchMap] = await Promise.all([
    getCurrentUser(),
    getUserAchievementMap(data.game.appId),
  ]);

  const userUnlocked = data.achievements.filter((a) => userAchMap.get(a.id)?.unlocked).length;
  const userPct = data.achievements.length
    ? Math.round((userUnlocked / data.achievements.length) * 100)
    : 0;
  const coveragePct = data.game.achievements
    ? Math.round((data.game.guideCoverage / data.game.achievements) * 100)
    : 0;

  // Dedupe DB achievements against curated MISSABLES so the same trophy
  // doesn't appear twice (once in the curated bucket, once in 장 미지정).
  // The curated title may quote the trophy name in 「」, follow `원어:`, OR
  // just embed the achievement name in the wider sentence (the Y6 entries
  // do this with English trophy names like "Dandling Dragon"). We therefore
  // keep both exact-name and substring-haystack lookups.
  const norm = (s: string) =>
    s.toLowerCase().replace(/[\s:!?.,'"()[\]\-—–「」『』《》〈〉…’]+/g, "");
  const coveredExact = new Set<string>();
  const coveredHaystacks: string[] = [];
  for (const chapter of data.missables ?? []) {
    for (const item of chapter.items) {
      for (const raw of [item.title.ko, item.title.en]) {
        for (const m of raw.matchAll(/[「『]([^」』]+)[」』]/g)) coveredExact.add(norm(m[1]));
        for (const m of raw.matchAll(/원어\s*[:：]\s*([^)）]+)[)）]/g)) coveredExact.add(norm(m[1]));
        const hay = norm(raw);
        if (hay.length > 0) coveredHaystacks.push(hay);
      }
    }
  }
  function isCovered(name: string): boolean {
    const needle = norm(name);
    if (needle.length < 3) return false;
    if (coveredExact.has(needle)) return true;
    return coveredHaystacks.some((hay) => hay.includes(needle));
  }

  // Build a unified chapter-aware "missable" sidebar that merges curated
  // chapter notes (sub-stories, magazines, route choices) with every missable
  // achievement that references a chapter in its guide content.
  const chapterMap = new Map<number, ChapterBucket>();
  for (const chapter of data.missables ?? []) {
    chapterMap.set(chapter.chapter, {
      chapter: chapter.chapter,
      curatedTitle: chapter.title,
      curatedItems: chapter.items,
      achievements: [],
    });
  }
  for (const achievement of data.achievements) {
    if (!achievement.missable || !achievement.chapter) continue;
    if (isCovered(achievement.name)) continue;
    const bucket = chapterMap.get(achievement.chapter);
    if (bucket) {
      bucket.achievements.push(achievement);
    } else {
      chapterMap.set(achievement.chapter, {
        chapter: achievement.chapter,
        curatedTitle: null,
        curatedItems: [],
        achievements: [achievement],
      });
    }
  }
  // Stray missable achievements with no chapter info still surface in the sidebar
  // under a dedicated "anytime" bucket so the list never silently drops items.
  const unlocatedMissable = data.achievements.filter(
    (a) => a.missable && !a.chapter && !isCovered(a.name),
  );
  const chapterBuckets = Array.from(chapterMap.values()).sort((a, b) => a.chapter - b.chapter);
  const hasMissables = chapterBuckets.length > 0 || unlocatedMissable.length > 0;

  const substories = getSubstories(data.game.appId);
  const collectibles = getCollectibles(data.game.appId);
  const minigames = getMinigames(data.game.appId);
  const hasSubstories = Boolean(substories);
  const hasCollectibles = Boolean(collectibles && collectibles.categories.length > 0);
  const hasMinigames = Boolean(minigames && minigames.minigames.length > 0);

  const availableTabs = new Set<GameTab>(["achievements"]);
  if (hasMissables) availableTabs.add("missables");
  if (hasSubstories) availableTabs.add("substories");
  if (hasCollectibles) availableTabs.add("collectibles");
  if (hasMinigames) availableTabs.add("minigames");
  const activeTab = pickTab(search.tab, availableTabs);

  const tabLabels: Record<GameTab, { ko: string; en: string }> = {
    achievements: { ko: "업적", en: "Achievements" },
    missables: { ko: "Missable", en: "Missables" },
    substories: { ko: "서브스토리", en: "Substories" },
    collectibles: { ko: "수집 요소", en: "Collectibles" },
    minigames: { ko: "미니게임", en: "Minigames" },
  };
  const tabList: GameTab[] = ["achievements"];
  if (hasMissables) tabList.push("missables");
  if (hasSubstories) tabList.push("substories");
  if (hasCollectibles) tabList.push("collectibles");
  if (hasMinigames) tabList.push("minigames");

  const jsonLd = gameStructuredData(
    {
      name: data.game.name,
      slug: data.game.slug,
      appId: data.game.appId,
      releaseDate: data.game.releaseDate,
      releaseYear: data.game.releaseYear,
      summary: data.game.summary,
      headerUrl: data.game.headerUrl,
    },
    locale,
  );

  return (
    <SiteShell locale={locale} section="games">
      {jsonLd.map((entry, index) => (
        <script
          key={`ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
      <GameHero
        game={data.game}
        locale={locale}
        totalAchievements={data.achievements.length}
        hasUser={Boolean(user)}
        hasUserAchievements={userAchMap.size > 0}
        userUnlocked={userUnlocked}
        userPct={userPct}
        coveragePct={coveragePct}
      />

      <div className="mx-auto max-w-[1280px] px-5 pb-20 md:px-8">
        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="sticky top-16 z-30 -mx-5 mt-2 flex h-auto w-[calc(100%+2.5rem)] flex-wrap gap-2 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/85 px-5 py-3 backdrop-blur md:-mx-8 md:w-[calc(100%+4rem)] md:px-8">
            {tabList.map((tab) => (
              <TabsTrigger key={tab} value={tab} className="text-[17px] md:text-[18px]">
                {locale === "ko" ? tabLabels[tab].ko : tabLabels[tab].en}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="achievements" forceMount className="mt-8 data-[state=inactive]:hidden">
            <AchievementsList
              locale={locale}
              gameSlug={data.game.slug}
              achievements={data.achievements}
              userAchMap={userAchMap}
              hasUser={Boolean(user)}
            />
          </TabsContent>

          {hasMissables && (
            <TabsContent value="missables" forceMount className="mt-8 data-[state=inactive]:hidden">
              <MissablesSidebar
                locale={locale}
                gameSlug={data.game.slug}
                chapterBuckets={chapterBuckets}
                unlocatedMissable={unlocatedMissable}
              />
            </TabsContent>
          )}

          {hasSubstories && substories && (
            <TabsContent value="substories" forceMount className="mt-8 data-[state=inactive]:hidden">
              <SubstoriesSection
                locale={locale}
                appId={data.game.appId}
                data={substories}
              />
            </TabsContent>
          )}

          {hasCollectibles && collectibles && (
            <TabsContent value="collectibles" forceMount className="mt-8 data-[state=inactive]:hidden">
              <CollectiblesSection
                locale={locale}
                appId={data.game.appId}
                categories={collectibles.categories}
              />
            </TabsContent>
          )}

          {hasMinigames && minigames && (
            <TabsContent value="minigames" forceMount className="mt-8 data-[state=inactive]:hidden">
              <MinigamesSection
                locale={locale}
                gameSlug={data.game.slug}
                data={minigames}
              />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </SiteShell>
  );
}
