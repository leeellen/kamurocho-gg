import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { getLocale } from "@/lib/i18n";
import { getGamePageData } from "@/lib/kamurocho-data";
import { getCurrentUser, getUserAchievementMap } from "@/lib/user-progress";

import { AchievementsList } from "./_components/achievements-list";
import { GameHero } from "./_components/game-hero";
import { MissablesSidebar, type ChapterBucket } from "./_components/missables-sidebar";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();
  const data = await getGamePageData(id, locale);
  if (!data) return {};
  const title = locale === "ko"
    ? `${data.game.name} 스팀 업적 공략`
    : `${data.game.name} Steam achievement guide`;
  const description = data.game.summary;
  const url = `https://kamurocho.gg/game/${data.game.slug}`;
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.game.headerUrl ? [data.game.headerUrl] : undefined,
    },
    keywords: [
      data.game.name,
      `${data.game.name} 공략`,
      `${data.game.name} 업적`,
      `${data.game.name} 놓치기 쉬운 업적`,
      `${data.game.name} 미서블`,
      data.game.lead,
      "Steam achievement",
      "RGG Studio",
    ],
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
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
  const unlocatedMissable = data.achievements.filter((a) => a.missable && !a.chapter);
  const chapterBuckets = Array.from(chapterMap.values()).sort((a, b) => a.chapter - b.chapter);
  const hasSidebar = chapterBuckets.length > 0 || unlocatedMissable.length > 0;

  return (
    <SiteShell locale={locale} section="games">
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
        <div className={hasSidebar ? "grid grid-cols-1 gap-8 xl:grid-cols-[320px_minmax(0,1fr)]" : "block"}>
          {hasSidebar && (
            <MissablesSidebar
              locale={locale}
              gameSlug={data.game.slug}
              chapterBuckets={chapterBuckets}
              unlocatedMissable={unlocatedMissable}
            />
          )}

          <AchievementsList
            locale={locale}
            gameSlug={data.game.slug}
            achievements={data.achievements}
            userAchMap={userAchMap}
            hasUser={Boolean(user)}
          />
        </div>
      </div>
    </SiteShell>
  );
}
