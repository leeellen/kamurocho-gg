import { cache } from "react";

import { localizeAchievementName, parseAchievementSidecar } from "@/lib/achievement-text";
import { getCuratedGuide } from "@/lib/guides/curated";
import { getMinigames } from "@/lib/minigames";
import { getCollectibles } from "@/lib/collectibles";
import { CURATED_GAMES, EXTERNAL_GUIDES } from "@/lib/content";
import { type Locale, pickLocalized } from "@/lib/i18n";
import { getSubstories } from "@/lib/substories";

import { fetchSeriesRows } from "../fetch";

import { buildSeriesGameCard } from "./helpers";
import type { SeriesGameCard } from "../types";

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
  minigameSources: CollectibleCitation[];
};

function safeHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export const getGuideSources = cache(async (locale: Locale): Promise<GameSources[]> => {
  const { games, achievements } = await fetchSeriesRows();
  const gameMap = new Map(games.map((g) => [g.app_id, g]));

  // Per-app aggregation of every guide source URL with the achievement
  // display names that cite it.
  const perAppAchievement = new Map<number, Map<string, Set<string>>>();
  for (const achievement of achievements) {
    const curatedGame = CURATED_GAMES.find((game) => game.appId === achievement.app_id);
    const guide = getCuratedGuide(achievement.app_id, achievement.api_name);
    const urls = [guide?.sourceUrl ?? (curatedGame ? EXTERNAL_GUIDES[curatedGame.slug]?.[0]?.url : null)];
    const name = localizeAchievementName({
      locale,
      englishName: achievement.display_name,
      apiName: achievement.api_name,
      sidecar: parseAchievementSidecar(achievement.category),
    });
    for (const url of urls) {
      if (!url || safeHost(url) === "kamurocho.gg") continue;
      const bucket = perAppAchievement.get(achievement.app_id) ?? new Map<string, Set<string>>();
      const names = bucket.get(url) ?? new Set<string>();
      names.add(name);
      bucket.set(url, names);
      perAppAchievement.set(achievement.app_id, bucket);
    }
  }

  return CURATED_GAMES.map((curated) => {
    const rows = achievements.filter((a) => a.app_id === curated.appId);
    const game = buildSeriesGameCard({
      curated,
      game: gameMap.get(curated.appId) ?? null,
      rows,
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
    const substoryRefs = substoriesData?.source
      ? Array.isArray(substoriesData.source)
        ? [...substoriesData.source]
        : [substoriesData.source]
      : [];
    for (const group of substoriesData?.groups ?? []) {
      for (const item of group.items) {
        if (item.source) substoryRefs.push(item.source);
      }
    }
    const substorySources: SubstoryCitation[] = [...new Map(substoryRefs.map((src) => [src.url, src])).values()].map((src) => ({
      url: src.url,
      host: safeHost(src.url),
      label: src.label,
    }));

    const collectiblesData = getCollectibles(curated.appId);
    const collectibleAgg = new Map<string, { label: string; categories: Set<string> }>();
    for (const category of collectiblesData?.categories ?? []) {
      if (!category.source) continue;
      const srcs = Array.isArray(category.source) ? category.source : [category.source];
      for (const src of srcs) {
        const entry = collectibleAgg.get(src.url) ?? { label: src.label, categories: new Set<string>() };
        entry.categories.add(pickLocalized(category.title, locale));
        collectibleAgg.set(src.url, entry);
      }
    }
    const collectibleSources: CollectibleCitation[] = Array.from(collectibleAgg.entries())
      .map(([url, { label, categories }]) => ({
        url,
        host: safeHost(url),
        label,
        categories: Array.from(categories).sort(),
      }))
      .sort((a, b) => b.categories.length - a.categories.length);

    const minigameAgg = new Map<string, { label: string; categories: Set<string> }>();
    for (const minigame of getMinigames(curated.appId)?.minigames ?? []) {
      const refs = minigame.source ? (Array.isArray(minigame.source) ? minigame.source : [minigame.source]) : [];
      for (const src of refs) {
        const entry = minigameAgg.get(src.url) ?? { label: src.label, categories: new Set<string>() };
        entry.categories.add(pickLocalized(minigame.name, locale));
        minigameAgg.set(src.url, entry);
      }
    }
    const minigameSources: CollectibleCitation[] = Array.from(minigameAgg.entries())
      .map(([url, { label, categories }]) => ({ url, host: safeHost(url), label, categories: Array.from(categories).sort() }))
      .sort((a, b) => b.categories.length - a.categories.length);

    return { game, achievementSources, substorySources, collectibleSources, minigameSources };
  }).filter(
    (entry) =>
      entry.achievementSources.length > 0 ||
      entry.substorySources.length > 0 ||
      entry.collectibleSources.length > 0 ||
      entry.minigameSources.length > 0,
  );
});
