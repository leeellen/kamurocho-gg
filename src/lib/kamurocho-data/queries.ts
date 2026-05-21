import { cache } from "react";

import {
  localizeAchievementDescription,
  localizeAchievementName,
  localizeGuideText,
  parseAchievementSidecar,
} from "@/lib/achievement-text";
import { getCuratedGuide, pickCuratedList, pickCuratedString } from "@/lib/guides/curated";
import { structureGuide } from "@/lib/guides/structured";
import { type Locale } from "@/lib/i18n";
import { CURATED_GAMES, MISSABLES, PLAY_ORDER, getCuratedGameBySlug } from "@/lib/kamurocho-content";

import { fetchGameRows, fetchSeriesRows } from "./fetch";
import {
  buildDisplayMissables,
  countMissableChecks,
  extractChapterFromGuide,
  inferMissable,
} from "./missables";
import {
  coercePercent,
  normalizeComparableText,
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

type CuratedGame = (typeof CURATED_GAMES)[number];

function buildSeriesGameCard({
  curated,
  game,
  rows,
  guidesByAchievement,
  locale,
}: {
  curated: CuratedGame;
  game: import("./types").GameRow | null | undefined;
  rows: import("./types").AchievementRow[];
  guidesByAchievement: Map<number, GuideRow[]>;
  locale: Locale;
}): SeriesGameCard {
  const gameSidecar = parseJsonish(game?.img_logo_url ?? null) as
    | { nameKo?: string | null; headerUrl?: string | null; capsuleUrl?: string | null }
    | null;
  // Curated missable titles contain the trophy name plus a description, so
  // instead of trying to extract just the name with bracket/quote regex
  // (which fails on apostrophes like "They Won't Mind"), we keep the full
  // curated title text and check whether each DB achievement name appears
  // inside it. Use the shared comparable-text normalizer so brackets and
  // em-dashes don't break substring matches — must stay in lock-step with
  // buildDisplayMissables() in ./missables.ts so both surfaces agree.
  const curatedTitleHay: string[] = [];
  for (const chapter of MISSABLES[curated.appId] ?? []) {
    for (const item of chapter.items) {
      if (item.kind !== "missable") continue;
      curatedTitleHay.push(normalizeComparableText(item.title.ko));
      curatedTitleHay.push(normalizeComparableText(item.title.en));
    }
  }
  const isNameCovered = (name: string) => {
    const needle = normalizeComparableText(name);
    if (needle.length < 3) return false;
    return curatedTitleHay.some((hay) => hay.includes(needle));
  };
  const derivedAchievements = rows.map((achievement) => {
    const selectedGuide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
    const sidecar = parseAchievementSidecar(achievement.category ?? null);
    const localizedName = localizeAchievementName({
      locale,
      englishName: achievement.display_name,
      apiName: achievement.api_name,
      sidecar,
    });
    return {
      missable: inferMissable(achievement, selectedGuide?.content ?? ""),
      name: localizedName,
    };
  });
  const curatedChecks = (MISSABLES[curated.appId] ?? []).reduce(
    (sum, chapter) => sum + chapter.items.filter((item) => item.kind === "missable").length,
    0,
  );
  const derivedChecks = derivedAchievements.filter(
    (achievement) => achievement.missable && !isNameCovered(achievement.name),
  ).length;
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
    engine: curated.engine,
  };
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
    const rows = achievements.filter((achievement) => achievement.app_id === curated.appId);
    return buildSeriesGameCard({
      curated,
      game: gameMap.get(curated.appId) ?? null,
      rows,
      guidesByAchievement,
      locale,
    });
  });
});

export const getGamePageData = cache(
  async (slugOrId: string, locale: Locale): Promise<GamePageData | null> => {
    const curated = getCuratedGameBySlug(slugOrId);
    if (!curated) return null;

    const { game, achievements: gameAchievements, guides } = await fetchGameRows(curated.appId);
    if (!game) return null;

    const guidesByAchievement = new Map<number, GuideRow[]>();
    for (const guide of guides) {
      const current = guidesByAchievement.get(guide.achievement_id) ?? [];
      current.push(guide);
      guidesByAchievement.set(guide.achievement_id, current);
    }
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
        const dbSummary = sanitizeGuideSummary(
          localizeGuideText({
            locale,
            text: structured.summary,
            replacements: guideTextReplacements,
          }),
          displayName,
          description,
          locale,
        );
        const dbSteps = sanitizeGuideLines(
          structured.steps.map((line) =>
            localizeGuideText({ locale, text: line, replacements: guideTextReplacements }),
          ),
          displayName,
          description,
          locale,
        ).slice(0, 5);
        const dbTips = sanitizeGuideLines(
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

        // Curated overrides take precedence over the auto-generated DB
        // summary/steps/tips. Curated entries can supply ALL of the data,
        // some of it, or none — anything missing falls back to the DB
        // version so partial editing is safe.
        const curatedGuide = getCuratedGuide(curated.appId, achievement.api_name);
        const guideSummary = pickCuratedString(curatedGuide?.summary, locale) ?? dbSummary;
        const guideSteps = pickCuratedList(curatedGuide?.steps, locale) ?? dbSteps;
        const guideTips = pickCuratedList(curatedGuide?.tips, locale) ?? dbTips;
        const guideSource = curatedGuide?.sourceUrl ?? selectedGuide?.source_url ?? null;
        const guideSourceLabel = pickCuratedString(curatedGuide?.sourceLabel, locale) ?? null;

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
          guideSource,
          guideSourceLabel,
          confidence: normalizeConfidence(selectedGuide?.confidence),
          missable: inferMissable(achievement, selectedGuide?.content ?? ""),
          chapter: extractChapterFromGuide(selectedGuide?.content ?? null),
        };
      })
      .sort((left, right) => left.rarity - right.rarity);

    const gameCard = buildSeriesGameCard({
      curated,
      game,
      rows: gameAchievements,
      guidesByAchievement,
      locale,
    });

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
  // Fetch both locales' rows so a Korean user searching "kiryu" can still
  // hit the English form, and vice versa — the search placeholder advertises
  // 한국어·영어·로마자 표기 모두 인식 / Korean+English+romaji support.
  const [games, gamesAlt] = await Promise.all([
    getSeriesGames(locale),
    getSeriesGames(locale === "ko" ? "en" : "ko"),
  ]);
  if (!trimmed) {
    return {
      games,
      achievements: [] as Array<{ game: SeriesGameCard; achievement: GameAchievementCard }>,
    };
  }

  const altByAppId = new Map(gamesAlt.map((g) => [g.appId, g]));
  const matchedGames = games.filter((game) => {
    const alt = altByAppId.get(game.appId);
    const hay = [
      game.name,
      game.altName,
      game.summary,
      game.lead,
      alt?.name,
      alt?.altName,
      alt?.summary,
      alt?.lead,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return hay.includes(trimmed);
  });

  const achievements: Array<{ game: SeriesGameCard; achievement: GameAchievementCard }> = [];
  for (const game of games) {
    const [page, altPage] = await Promise.all([
      getGamePageData(game.slug, locale),
      getGamePageData(game.slug, locale === "ko" ? "en" : "ko"),
    ]);
    const altById = new Map((altPage?.achievements ?? []).map((a) => [a.id, a]));
    for (const achievement of page?.achievements ?? []) {
      const alt = altById.get(achievement.id);
      const hay = [
        achievement.name,
        achievement.description,
        achievement.guideSummary ?? "",
        alt?.name,
        alt?.description,
        alt?.guideSummary ?? "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (hay.includes(trimmed)) {
        achievements.push({ game, achievement });
      }
    }
  }

  return {
    games: matchedGames,
    achievements: achievements.slice(0, 24),
  };
});
