import { cache } from "react";

import {
  localizeAchievementDescription,
  localizeAchievementName,
  localizeGuideText,
  parseAchievementSidecar,
} from "@/lib/achievement-text";
import { structureGuide } from "@/lib/guides/structured";
import { type Locale } from "@/lib/i18n";
import { CURATED_GAMES, MISSABLES, PLAY_ORDER, getCuratedGameBySlug } from "@/lib/kamurocho-content";

import { fetchSeriesRows } from "./fetch";
import {
  buildDisplayMissables,
  countMissableChecks,
  extractChapterFromGuide,
  inferMissable,
} from "./missables";
import {
  coercePercent,
  normalizeConfidence,
  parseJsonish,
  pickLocaleGuide,
  sanitizeGuideLines,
  sanitizeGuideSummary,
} from "./sanitize";
import type { GameAchievementCard, GamePageData, GuideRow, SeriesGameCard } from "./types";

function pickKoreanGameName({
  curatedName,
  sidecarName,
  englishName,
}: {
  curatedName: string;
  sidecarName?: string | null;
  englishName?: string | null;
}) {
  if (curatedName.trim()) return curatedName;
  if (sidecarName?.trim() && sidecarName !== englishName) return sidecarName;
  return englishName ?? curatedName;
}

export const getSeriesGames = cache(async (locale: Locale): Promise<SeriesGameCard[]> => {
  const { games, achievements, guides } = await fetchSeriesRows();
  const gameMap = new Map(games.map((game) => [game.app_id, game]));
  const guidesByAchievement = new Map<number, GuideRow[]>();

  for (const guide of guides) {
    const current = guidesByAchievement.get(guide.achievement_id) ?? [];
    current.push(guide);
    guidesByAchievement.set(guide.achievement_id, current);
  }

  return CURATED_GAMES.map((curated) => {
    const game = gameMap.get(curated.appId);
    const gameSidecar = parseJsonish(game?.img_logo_url ?? null) as
      | { nameKo?: string | null; headerUrl?: string | null; capsuleUrl?: string | null }
      | null;
    const rows = achievements.filter((achievement) => achievement.app_id === curated.appId);
    const derivedAchievements = rows.map((achievement) => {
      const selectedGuide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
      return {
        missable: inferMissable(achievement, selectedGuide?.content ?? ""),
        chapter: extractChapterFromGuide(selectedGuide?.content ?? null),
      };
    });
    const curatedChecks = (MISSABLES[curated.appId] ?? []).reduce(
      (sum, chapter) => sum + chapter.items.filter((item) => item.kind === "missable").length,
      0,
    );
    const derivedChecks = derivedAchievements.filter((achievement) => achievement.missable).length;
    const rareCount = rows.filter(
      (achievement) =>
        coercePercent(achievement.global_percent) > 0 &&
        coercePercent(achievement.global_percent) <= 10,
    ).length;
    const guideCoverage = rows.filter((achievement) => {
      const guide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
      return Boolean(guide?.source_url);
    }).length;

    return {
      appId: curated.appId,
      slug: curated.slug,
      name:
        locale === "ko"
          ? pickKoreanGameName({
              curatedName: curated.title.ko,
              sidecarName: gameSidecar?.nameKo,
              englishName: game?.name ?? curated.title.en,
            })
          : game?.name || curated.title.en,
      altName:
        locale === "ko"
          ? game?.name && game?.name !== curated.title.en
            ? game.name
            : curated.title.en
          : null,
      arc: curated.arc,
      year: curated.year,
      summary: locale === "ko" ? curated.summary.ko : curated.summary.en,
      lead: locale === "ko" ? curated.lead.ko : curated.lead.en,
      platforms: curated.platforms,
      estimatedHours: curated.estimatedHours,
      difficulty: curated.difficulty,
      missableCount: curatedChecks + derivedChecks,
      achievements: rows.length || game?.total_achievements || 0,
      guideCoverage,
      rareCount,
      imgIconUrl: game?.img_icon_url ?? null,
      headerUrl: gameSidecar?.headerUrl ?? null,
      capsuleUrl: gameSidecar?.capsuleUrl ?? null,
    };
  });
});

export const getGamePageData = cache(
  async (slugOrId: string, locale: Locale): Promise<GamePageData | null> => {
    const curated = getCuratedGameBySlug(slugOrId);
    if (!curated) return null;

    const { games, achievements, guides } = await fetchSeriesRows();
    const game = games.find((row) => row.app_id === curated.appId);
    if (!game) return null;

    const guidesByAchievement = new Map<number, GuideRow[]>();
    for (const guide of guides) {
      const current = guidesByAchievement.get(guide.achievement_id) ?? [];
      current.push(guide);
      guidesByAchievement.set(guide.achievement_id, current);
    }

    const gameAchievements = achievements.filter((achievement) => achievement.app_id === curated.appId);
    const guideTextReplacements = gameAchievements
      .map((achievement) => {
        const sidecar = parseAchievementSidecar(achievement.category ?? null);
        const en = achievement.display_name?.trim();
        const ko = sidecar?.nameKo?.trim();
        return en && ko && en !== ko ? { en, ko } : null;
      })
      .filter((entry): entry is { en: string; ko: string } => Boolean(entry));

    const mappedCards: GameAchievementCard[] = gameAchievements
      .map((achievement) => {
        const achievementSidecar = parseAchievementSidecar(achievement.category ?? null);
        const selectedGuide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
        const structured = structureGuide(
          selectedGuide?.content.split("\n") ?? [],
          selectedGuide?.source_url ?? null,
        );
        const displayName = localizeAchievementName({
          locale,
          englishName: achievement.display_name,
          apiName: achievement.api_name,
          sidecar: achievementSidecar,
        });
        const description = localizeAchievementDescription({
          locale,
          englishDescription: achievement.description,
          sidecar: achievementSidecar,
        });
        const rarity = coercePercent(achievement.global_percent);
        const guideSummary = sanitizeGuideSummary(
          localizeGuideText({
            locale,
            text: structured.summary,
            replacements: guideTextReplacements,
          }),
          displayName,
          description,
          locale,
        );
        const guideSteps = sanitizeGuideLines(
          structured.steps.map((line) =>
            localizeGuideText({ locale, text: line, replacements: guideTextReplacements }),
          ),
          displayName,
          description,
          locale,
        ).slice(0, 5);
        const guideTips = sanitizeGuideLines(
          structured.tips.map((line) =>
            localizeGuideText({ locale, text: line, replacements: guideTextReplacements }),
          ),
          displayName,
          description,
          locale,
        ).slice(0, 4);
        const guideStats = localizeGuideText({
          locale,
          text: structured.statsLine,
          replacements: guideTextReplacements,
        });

        return {
          id: achievement.id,
          slug: achievement.api_name.toLowerCase(),
          name: displayName,
          description,
          rarity,
          difficulty:
            achievement.difficulty ||
            (rarity <= 5 ? "legendary" : rarity <= 10 ? "rare" : rarity <= 30 ? "uncommon" : "common"),
          iconUrl: achievement.icon_url ?? null,
          iconGrayUrl: achievement.icon_gray_url ?? null,
          guideSummary,
          guideSteps,
          guideTips,
          guideStats: sanitizeGuideSummary(guideStats, displayName, description, locale),
          guideSource: selectedGuide?.source_url ?? null,
          confidence: normalizeConfidence(selectedGuide?.confidence),
          missable: inferMissable(achievement, selectedGuide?.content ?? ""),
          chapter: extractChapterFromGuide(selectedGuide?.content ?? null),
        };
      })
      .sort((left, right) => left.rarity - right.rarity);

    const gameCard = (await getSeriesGames(locale)).find((item) => item.appId === curated.appId);
    if (!gameCard) return null;

    const displayMissables = buildDisplayMissables({
      achievements: mappedCards,
      curatedMissables: MISSABLES[curated.appId],
      locale,
    });
    const curatedMissables = (MISSABLES[curated.appId] ?? [])
      .map((chapter) => ({
        ...chapter,
        items: chapter.items.filter((item) => item.kind === "missable"),
      }))
      .filter((chapter) => chapter.items.length > 0);

    return {
      game: {
        ...gameCard,
        missableCount: countMissableChecks(displayMissables),
      },
      achievements: mappedCards,
      missables: curatedMissables,
    };
  },
);

export const getAchievementPageData = cache(
  async (slugOrId: string, achievementSlug: string, locale: Locale) => {
    const page = await getGamePageData(slugOrId, locale);
    if (!page) return null;
    const achievement = page.achievements.find((item) => item.slug === achievementSlug);
    if (!achievement) return null;
    return { game: page.game, achievement, missables: page.missables };
  },
);

export const getPlayOrderData = cache(async (locale: Locale) => {
  const games = await getSeriesGames(locale);
  const gameMap = new Map(games.map((game) => [game.slug, game]));
  return {
    newcomer: PLAY_ORDER.new
      .map((entry) => ({
        ...entry,
        reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
        game: gameMap.get(entry.slug),
      }))
      .filter((entry) => entry.game),
    chronological: PLAY_ORDER.chronological
      .map((entry) => ({
        ...entry,
        reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
        game: gameMap.get(entry.slug),
      }))
      .filter((entry) => entry.game),
  };
});

export const getMissablesIndex = cache(async (locale: Locale) => {
  const games = await getSeriesGames(locale);
  const entries = await Promise.all(
    games.map(async (game) => {
      const page = await getGamePageData(game.slug, locale);
      if (!page) return null;
      const chapters = buildDisplayMissables({
        achievements: page.achievements,
        curatedMissables: page.missables,
        locale,
      });
      return chapters.length > 0
        ? {
            game: {
              ...game,
              missableCount: countMissableChecks(chapters),
            },
            chapters,
          }
        : null;
    }),
  );

  return entries.filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
});

export const searchKamurocho = cache(async (query: string, locale: Locale) => {
  const trimmed = query.trim().toLowerCase();
  const games = await getSeriesGames(locale);
  if (!trimmed) {
    return {
      games,
      achievements: [] as Array<{ game: SeriesGameCard; achievement: GameAchievementCard }>,
    };
  }

  const matchedGames = games.filter((game) =>
    [game.name, game.altName, game.summary, game.lead].join(" ").toLowerCase().includes(trimmed),
  );

  const achievements: Array<{ game: SeriesGameCard; achievement: GameAchievementCard }> = [];
  for (const game of games) {
    const page = await getGamePageData(game.slug, locale);
    for (const achievement of page?.achievements ?? []) {
      if (
        [achievement.name, achievement.description, achievement.guideSummary ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(trimmed)
      ) {
        achievements.push({ game, achievement });
      }
    }
  }

  return {
    games: matchedGames,
    achievements: achievements.slice(0, 24),
  };
});
