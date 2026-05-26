import { cache } from "react";

import { CURATED_GAMES, getCuratedGameBySlug } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

import { fetchGameRows, fetchSeriesRows } from "../fetch";
import type { AchievementRow, GamePageData, GuideRow } from "../types";

import { buildGamePageData } from "./helpers";

export const getGamePageData = cache(
  async (slugOrId: string, locale: Locale): Promise<GamePageData | null> => {
    const curated = getCuratedGameBySlug(slugOrId);
    if (!curated) return null;
    const { game, achievements: gameAchievements, guides } = await fetchGameRows(curated.appId);
    return buildGamePageData({ curated, game, gameAchievements, guides, locale });
  },
);

// Single-fetch series-wide build. Used by /missables and /search to avoid
// the N+1 pattern of calling fetchGameRows per game (14 -> 1 DB roundtrip).
export const getAllGamePagesData = cache(async (locale: Locale): Promise<GamePageData[]> => {
  const { games, achievements, guides } = await fetchSeriesRows();
  const gameMap = new Map(games.map((g) => [g.app_id, g]));
  const achievementsByApp = new Map<number, AchievementRow[]>();
  for (const row of achievements) {
    const list = achievementsByApp.get(row.app_id) ?? [];
    list.push(row);
    achievementsByApp.set(row.app_id, list);
  }
  const achievementIdToApp = new Map<number, number>();
  for (const row of achievements) achievementIdToApp.set(row.id, row.app_id);
  const guidesByApp = new Map<number, GuideRow[]>();
  for (const guide of guides) {
    const appId = achievementIdToApp.get(guide.achievement_id);
    if (appId == null) continue;
    const list = guidesByApp.get(appId) ?? [];
    list.push(guide);
    guidesByApp.set(appId, list);
  }
  const pages: GamePageData[] = [];
  for (const curated of CURATED_GAMES) {
    const page = buildGamePageData({
      curated,
      game: gameMap.get(curated.appId) ?? null,
      gameAchievements: achievementsByApp.get(curated.appId) ?? [],
      guides: guidesByApp.get(curated.appId) ?? [],
      locale,
    });
    if (page) pages.push(page);
  }
  return pages;
});

export const getAchievementPageData = cache(
  async (slugOrId: string, achievementSlug: string, locale: Locale) => {
    const page = await getGamePageData(slugOrId, locale);
    if (!page) return null;
    const achievement = page.achievements.find((item) => item.slug === achievementSlug);
    if (!achievement) return null;
    return { game: page.game, achievement, missables: page.missables };
  },
);
