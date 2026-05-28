import { cache } from "react";

import { getCollectibles } from "@/lib/collectibles";
import { CURATED_GAMES } from "@/lib/content";
import { type Locale, pickLocalized } from "@/lib/i18n";
import { getSubstories } from "@/lib/substories";

import { fetchSeriesRows } from "../fetch";

import { buildSeriesGameCard } from "./helpers";
import type { GuideRow, SeriesGameCard } from "../types";

export type AchievementCitation = {
  url: string;
  host: string;
  label: string | null;
  achievements: string[];
};

export type SubstoryCitation = {
  url: string;
  host: string;
  label: string;
};

export type CollectibleCitation = {
  url: string;
  host: string;
  label: string;
  categories: string[];
};

export type GameSources = {
  game: SeriesGameCard;
  achievementSources: AchievementCitation[];
  substorySources: SubstoryCitation[];
  collectibleSources: CollectibleCitation[];
};

function safeHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export const getGuideSources = cache(async (locale: Locale): Promise<GameSources[]> => {
  const { games, achievements, guides } = await fetchSeriesRows();
  const gameMap = new Map(games.map((g) => [g.app_id, g]));
  const achievementById = new Map(achievements.map((a) => [a.id, a]));

  const guidesByAchievement = new Map<number, GuideRow[]>();
  for (const guide of guides) {
    const current = guidesByAchievement.get(guide.achievement_id) ?? [];
    current.push(guide);
    guidesByAchievement.set(guide.achievement_id, current);
  }

  // Per-app aggregation of every guide source URL with the achievement
  // display names that cite it.
  const perAppAchievement = new Map<number, Map<string, Set<string>>>();
  for (const guide of guides) {
    const url = guide.source_url?.trim();
    if (!url) continue;
    const achievement = achievementById.get(guide.achievement_id);
    if (!achievement) continue;
    const bucket = perAppAchievement.get(achievement.app_id) ?? new Map<string, Set<string>>();
    const names = bucket.get(url) ?? new Set<string>();
    const name = achievement.display_name?.trim() || achievement.api_name;
    if (name) names.add(name);
    bucket.set(url, names);
    perAppAchievement.set(achievement.app_id, bucket);
  }

  return CURATED_GAMES.map((curated) => {
    const rows = achievements.filter((a) => a.app_id === curated.appId);
    const game = buildSeriesGameCard({
      curated,
      game: gameMap.get(curated.appId) ?? null,
      rows,
      guidesByAchievement,
      locale,
    });

    const achievementSources: AchievementCitation[] = Array.from(
      perAppAchievement.get(curated.appId)?.entries() ?? [],
    )
      .map(([url, names]) => ({
        url,
        host: safeHost(url),
        label: null,
        achievements: Array.from(names).sort(),
      }))
      .sort((a, b) => b.achievements.length - a.achievements.length);

    const substoriesData = getSubstories(curated.appId);
    const substorySources: SubstoryCitation[] = substoriesData?.source
      ? [
          {
            url: substoriesData.source.url,
            host: safeHost(substoriesData.source.url),
            label: substoriesData.source.label,
          },
        ]
      : [];

    const collectiblesData = getCollectibles(curated.appId);
    const collectibleAgg = new Map<string, { label: string; categories: Set<string> }>();
    for (const category of collectiblesData?.categories ?? []) {
      if (!category.source) continue;
      const key = category.source.url;
      const entry = collectibleAgg.get(key) ?? { label: category.source.label, categories: new Set<string>() };
      entry.categories.add(pickLocalized(category.title, locale));
      collectibleAgg.set(key, entry);
    }
    const collectibleSources: CollectibleCitation[] = Array.from(collectibleAgg.entries())
      .map(([url, { label, categories }]) => ({
        url,
        host: safeHost(url),
        label,
        categories: Array.from(categories).sort(),
      }))
      .sort((a, b) => b.categories.length - a.categories.length);

    return { game, achievementSources, substorySources, collectibleSources };
  }).filter(
    (entry) =>
      entry.achievementSources.length > 0 ||
      entry.substorySources.length > 0 ||
      entry.collectibleSources.length > 0,
  );
});
