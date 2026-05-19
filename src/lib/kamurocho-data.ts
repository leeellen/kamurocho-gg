import { cache } from "react";

import { structureGuide } from "@/lib/guides/structured";
import { type Locale } from "@/lib/i18n";
import {
  CURATED_GAMES,
  MISSABLES,
  PLAY_ORDER,
  RGG_APP_IDS,
  type ChapterMissable,
  getCuratedGameBySlug,
} from "@/lib/kamurocho-content";
import { createAdminClient } from "@/lib/supabase/admin";

type GameRow = {
  app_id: number;
  name: string;
  img_icon_url?: string | null;
  img_logo_url?: string | null;
  total_achievements?: number | null;
};

type AchievementRow = {
  id: number;
  app_id: number;
  api_name: string;
  display_name?: string | null;
  description?: string | null;
  global_percent?: number | string | null;
  difficulty?: string | null;
  icon_url?: string | null;
  icon_gray_url?: string | null;
  category?: string | null;
  missable?: boolean | null;
};

type GuideRow = {
  achievement_id: number;
  locale?: string | null;
  content: string;
  source_url?: string | null;
  confidence?: string | number | null;
};

export type SeriesGameCard = {
  appId: number;
  slug: string;
  name: string;
  altName: string | null;
  arc: string;
  year: number;
  summary: string;
  lead: string;
  platforms: string[];
  estimatedHours: string;
  difficulty: number;
  missableCount: number;
  achievements: number;
  guideCoverage: number;
  rareCount: number;
  imgIconUrl: string | null;
  headerUrl: string | null;
  capsuleUrl: string | null;
};

export type GuideReferenceCard = {
  label: string;
  url: string;
};

export type GameAchievementCard = {
  id: number;
  slug: string;
  name: string;
  description: string;
  rarity: number;
  difficulty: string;
  iconUrl: string | null;
  iconGrayUrl: string | null;
  guideSummary: string | null;
  guideSteps: string[];
  guideTips: string[];
  guideStats: string | null;
  guideSource: string | null;
  guidePointer: string | null;
  guideReferences: GuideReferenceCard[];
  confidence: string | null;
  missable: boolean;
  chapter: number | null;
};

export type GamePageData = {
  game: SeriesGameCard;
  achievements: GameAchievementCard[];
  missables: ChapterMissable[] | undefined;
};

function admin() {
  return createAdminClient();
}

function parseJsonish(raw: string | null | undefined) {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function coercePercent(value: number | string | null | undefined) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function pickLocaleGuide(guides: GuideRow[], locale: Locale) {
  const wanted = locale === "ko" ? ["koreana", "korean", "english"] : ["english", "koreana", "korean"];
  for (const loc of wanted) {
    const found = guides.find((guide) => guide.locale === loc && guide.content?.trim());
    if (found) return found;
  }
  return guides.find((guide) => guide.content?.trim()) ?? null;
}

function normalizeConfidence(value: string | number | null | undefined) {
  if (typeof value === "number") return value.toFixed(2);
  if (typeof value === "string" && value.trim()) return value.trim();
  return null;
}

function normalizeComparableText(value: string | null | undefined) {
  return (value ?? "").toLowerCase().replace(/[\s:!?.,'"()[\]-]+/g, "").trim();
}

function sanitizeGuideSummary(summary: string | null, achievementName: string, description: string) {
  if (!summary) return null;
  const normalized = normalizeComparableText(summary);
  if (!normalized) return null;
  if (normalized === normalizeComparableText(achievementName)) return null;
  if (normalized === normalizeComparableText(description)) return null;
  return summary;
}

// Drop lines that are pure section markers, missable banners, generic
// "complete the story" filler, or table-of-contents pointers into the source
// guide. Missable status is already on the chip; section-pointer lines
// (`다음 공략 흐름을 기준으로 진행하세요: …`) belong in a separate
// breadcrumb, not in the steps list.
const NOISE_PATTERNS = [
  /^\/{2,}\s*missable\s+achievement\s+alert\s*\/{2,}$/i,
  /^missable\s+achievement\s+alert$/i,
  /^놓치기\s*쉬운\s*업적입?니?다?\.?$/,
  /^미스어블\s*업적입?니?다?\.?$/,
  /^주의[:!.]?\s*놓치기\s*쉬움\.?$/,
  // Backfill emitted generic boilerplate when no concrete steps existed.
  /^이러한\s*업적은\s*스토리를\s*진행하면서\s*잠금\s*해제됩니다\.?$/,
  /^these\s*achievements?\s*(?:will\s*)?unlock\s*(?:as\s*you\s*)?progress\s*(?:through\s*)?the\s*story\.?$/i,
  /^스토리를\s*깨면\s*legend\s*난이도가\s*잠금\s*해제됩니다\.?$/i,
  // Pure chapter milestone lines like "챕터 4를 완료했습니다." that the
  // backfill pulled in as steps from the section's prerequisite list.
  /^챕터\s*\d{1,2}\s*을?를?\s*완료했습니다\.?$/,
  /^complete[ds]?\s+chapter\s+\d{1,2}\.?$/i,
];

// Lines that follow the format `다음 공략 흐름을 기준으로 진행하세요: X → Y`
// and the English equivalent. They describe where in the original Steam
// Community guide the achievement lives, not how to execute it, so we surface
// them through a separate field.
const POINTER_PATTERNS = [
  /^다음\s*공략\s*흐름을\s*기준으로\s*진행하세요\s*[:：]/,
  /^use\s+the\s+route\s+from\b/i,
];

function isNoiseLine(text: string): boolean {
  const trimmed = text.trim().replace(/[*_]+/g, "");
  if (!trimmed) return true;
  return NOISE_PATTERNS.some((pattern) => pattern.test(trimmed));
}

function isPointerLine(text: string): boolean {
  const trimmed = text.trim().replace(/[*_]+/g, "");
  if (!trimmed) return false;
  return POINTER_PATTERNS.some((pattern) => pattern.test(trimmed));
}

/**
 * Extract the routing pointer from a guide's steps and return both the
 * cleaned, pointer-free steps and the localized pointer string (if any).
 * The pointer line carries the section name from the original Steam Community
 * guide; rendering it as a small breadcrumb separates structural metadata
 * from actionable instructions.
 */
function extractPointer(lines: string[]): { steps: string[]; pointer: string | null } {
  let pointer: string | null = null;
  const steps: string[] = [];
  for (const line of lines) {
    if (!pointer && isPointerLine(line)) {
      pointer = line
        .replace(/^다음\s*공략\s*흐름을\s*기준으로\s*진행하세요\s*[:：]\s*/, "")
        .replace(/^use\s+the\s+route\s+from\s+/i, "")
        .replace(/[*_]+/g, "")
        .trim() || null;
      continue;
    }
    steps.push(line);
  }
  return { steps, pointer };
}

function sanitizeGuideLines(lines: string[], achievementName: string, description: string) {
  const seen = new Set<string>();
  const blocked = new Set([
    normalizeComparableText(achievementName),
    normalizeComparableText(description),
    normalizeComparableText("지금 해야 할 일"),
    normalizeComparableText("단계별 안내"),
    normalizeComparableText("주의할 점"),
    normalizeComparableText("팁"),
    normalizeComparableText("do this next"),
    normalizeComparableText("next steps"),
    normalizeComparableText("steps"),
    normalizeComparableText("watch for"),
    normalizeComparableText("tips"),
  ]);

  return lines.filter((line) => {
    if (isNoiseLine(line)) return false;
    const normalized = normalizeComparableText(line);
    if (!normalized || blocked.has(normalized) || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

/**
 * Light, rule-based clean-up for AI-translated Korean guide lines. Avoids
 * heavy rewriting (no LLM), targets the noisy patterns that show up
 * consistently across thousands of rows: stiff declarative endings, the
 * literal phrase "도전 과제" (the JP-style two-word form most KO players
 * read as "도전과제" or simply "업적"), and the colloquial "스토리를 깨면".
 */
function normalizeKoreanLine(line: string): string {
  return line
    .replace(/도전\s*과제/g, "업적")
    .replace(/스토리를\s*깨면/g, "스토리를 끝내면")
    .replace(/잠금\s*해제됩니다\.?$/u, "잠금 해제")
    .replace(/잠금이\s*해제됩니다\.?$/u, "잠금 해제")
    .replace(/완료했습니다\.?$/u, "완료")
    .replace(/획득했습니다\.?$/u, "획득")
    .replace(/달성했습니다\.?$/u, "달성")
    .replace(/주었습니다\.?$/u, "지급")
    // "X을/를 X해야 할 것이다" -> "X을/를 X해야 합니다"
    .replace(/(\S+?)을\s*해야\s*할\s*것이다\.?$/u, "$1을 해야 합니다.")
    .replace(/(\S+?)를\s*해야\s*할\s*것이다\.?$/u, "$1를 해야 합니다.")
    .replace(/사야\s*할\s*것이다\.?$/u, "사야 합니다.")
    // Collapse double spaces introduced above.
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Detect achievements whose actual gameplay condition is "play the story",
 * so we can short-circuit a noisy steps list (the backfill often pulled in
 * the linked story milestones as bogus steps) with a single accurate
 * one-liner. Inspects display name + description in both languages.
 */
function isStoryProgressAchievement(opts: {
  displayName: string;
  description: string;
  englishName: string | null | undefined;
  englishDesc: string | null | undefined;
}): boolean {
  const text = [opts.displayName, opts.description, opts.englishName ?? "", opts.englishDesc ?? ""]
    .join(" ")
    .toLowerCase();
  if (isMetaCompletionAchievement(opts)) return false;
  return (
    /complete\s+(?:the\s+)?(?:main\s+story|chapter\s*\d+|the\s+game)/.test(text) ||
    /finished?\s+the\s+main\s+story/.test(text) ||
    /story\s+(?:clear|complete)/.test(text) ||
    /스토리\s*(?:클리어|완료|진행)/.test(text) ||
    /제?\s*\d+\s*장\s*(?:클리어|완료)/.test(text) ||
    /챕터\s*\d+\s*(?:클리어|완료)/.test(text)
  );
}

/**
 * Detect meta/100% completion achievements ("Obtain all other achievements",
 * "달성률 100%"). Their condition is the entire completion list, not the
 * story, so we want a different canned summary.
 */
function isMetaCompletionAchievement(opts: {
  displayName: string;
  description: string;
  englishName: string | null | undefined;
  englishDesc: string | null | undefined;
}): boolean {
  const text = [opts.displayName, opts.description, opts.englishName ?? "", opts.englishDesc ?? ""]
    .join(" ")
    .toLowerCase();
  return (
    /obtain\s+all\s+(?:other\s+)?achievements?/.test(text) ||
    /unlock\s+all\s+(?:other\s+)?achievements?/.test(text) ||
    /100%\s*(?:completion|completed|on\s+your\s+completion\s+list)/.test(text) ||
    /달성[\s률]?\s*100\s*%/.test(text) ||
    /모든\s*(?:도전\s*과제|업적)을?\s*(?:달성|획득)/.test(text)
  );
}

const CHAPTER_PATTERN_EN = /chapter\s*(\d{1,2})/i;
const CHAPTER_PATTERN_KO = /(?:챕터|장)\s*(\d{1,2})/;

/** Parse the chapter number a guide references, if any. */
export function extractChapterFromGuide(content: string | null | undefined): number | null {
  if (!content) return null;
  const match = content.match(CHAPTER_PATTERN_EN) ?? content.match(CHAPTER_PATTERN_KO);
  if (!match) return null;
  const n = Number(match[1]);
  if (!Number.isFinite(n) || n <= 0 || n > 30) return null;
  return n;
}

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

function shouldPreferEnglishAchievementName(koreanName: string | null | undefined, englishName: string | null | undefined) {
  const ko = koreanName?.trim() ?? "";
  const en = englishName?.trim() ?? "";
  if (!ko || !en || !/[A-Za-z]/.test(en)) return false;
  return /^(프롤로그|에필로그|최종장|제\s*\d+\s*장|챕터\s*\d+).*(클리어|완료)$/.test(ko);
}

function inferMissable(achievement: AchievementRow, guideText: string) {
  // Curated `missable` boolean wins when present — it's the authoritative
  // signal set by the editorial backfill scripts and should never be
  // overruled by accidental keyword matches.
  if (typeof achievement.missable === "boolean") return achievement.missable;
  const sidecar = parseJsonish(achievement.category ?? null) as { nameKo?: string | null; descKo?: string | null } | null;
  const text = `${achievement.display_name ?? ""} ${achievement.description ?? ""} ${sidecar?.nameKo ?? ""} ${sidecar?.descKo ?? ""} ${guideText}`.toLowerCase();
  // Require a stronger signal than a single keyword: e.g. an explicit
  // "missable" tag, a chapter-end lock, or a permanent-loss phrase. Avoids
  // flagging long-form guides that merely mention the word in passing.
  if (/\bmissable\b/.test(text)) return true;
  if (/(chapter\s*end|before\s+chapter|chapter[- ]locked)/.test(text)) return true;
  if (/(영구\s*잠금|영구\s*구매\s*불가|영구\s*분실|영구적\s*으로)/.test(text)) return true;
  if (/(놓치기\s*쉬움|놓치면\s*못)/.test(text)) return true;
  if (/(lock\s+out|locks?\s+out)/.test(text)) return true;
  return false;
}

async function fetchSeriesRows() {
  const client = admin();
  const { data: games, error: gameError } = await client
    .from("games")
    .select("app_id,name,img_icon_url,img_logo_url,total_achievements")
    .in("app_id", RGG_APP_IDS);
  if (gameError) throw gameError;

  const { data: achievements, error: achievementError } = await client
    .from("achievements")
    .select("id,app_id,api_name,display_name,description,global_percent,difficulty,icon_url,icon_gray_url,category,missable")
    .in("app_id", RGG_APP_IDS)
    .order("app_id", { ascending: true });
  if (achievementError) throw achievementError;

  const achievementIds = (achievements ?? []).map((row) => row.id);
  const guides: GuideRow[] = [];

  for (let index = 0; index < achievementIds.length; index += 200) {
    const slice = achievementIds.slice(index, index + 200);
    if (slice.length === 0) continue;
    const { data, error } = await client
      .from("guides")
      .select("achievement_id,locale,content,source_url,confidence")
      .in("achievement_id", slice)
      .eq("is_active", true);
    if (error) throw error;
    guides.push(...(data ?? []));
  }

  return {
    games: (games ?? []) as GameRow[],
    achievements: (achievements ?? []) as AchievementRow[],
    guides,
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
    const game = gameMap.get(curated.appId);
    const gameSidecar = parseJsonish(game?.img_logo_url ?? null) as { nameKo?: string | null; headerUrl?: string | null; capsuleUrl?: string | null } | null;
    const rows = achievements.filter((achievement) => achievement.app_id === curated.appId);
    const rareCount = rows.filter((achievement) => coercePercent(achievement.global_percent) > 0 && coercePercent(achievement.global_percent) <= 10).length;
    const guideCoverage = rows.filter((achievement) => {
      const guide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
      return Boolean(guide?.source_url);
    }).length;

    return {
      appId: curated.appId,
      slug: curated.slug,
      name: locale === "ko"
        ? pickKoreanGameName({
            curatedName: curated.title.ko,
            sidecarName: gameSidecar?.nameKo,
            englishName: game?.name ?? curated.title.en,
          })
        : (game?.name || curated.title.en),
      altName:
        locale === "ko"
          ? (game?.name && game?.name !== curated.title.en ? game.name : curated.title.en)
          : null,
      arc: curated.arc,
      year: curated.year,
      summary: locale === "ko" ? curated.summary.ko : curated.summary.en,
      lead: locale === "ko" ? curated.lead.ko : curated.lead.en,
      platforms: curated.platforms,
      estimatedHours: curated.estimatedHours,
      difficulty: curated.difficulty,
      missableCount: curated.missableCount,
      achievements: rows.length || game?.total_achievements || 0,
      guideCoverage,
      rareCount,
      imgIconUrl: game?.img_icon_url ?? null,
      headerUrl: gameSidecar?.headerUrl ?? null,
      capsuleUrl: gameSidecar?.capsuleUrl ?? null,
    };
  });
});

export const getGamePageData = cache(async (slugOrId: string, locale: Locale): Promise<GamePageData | null> => {
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

  const cards: GameAchievementCard[] = achievements
    .filter((achievement) => achievement.app_id === curated.appId)
    .map((achievement) => {
      const achievementSidecar = parseJsonish(achievement.category ?? null) as { nameKo?: string | null; descKo?: string | null } | null;
      const selectedGuide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
      const structured = structureGuide(selectedGuide?.content.split("\n") ?? [], selectedGuide?.source_url ?? null);
      const koreanName = achievementSidecar?.nameKo || achievement.display_name || achievement.api_name;
      const displayName =
        locale === "ko"
          ? shouldPreferEnglishAchievementName(koreanName, achievement.display_name)
            ? achievement.display_name || koreanName
            : koreanName
          : achievement.display_name || achievementSidecar?.nameKo || achievement.api_name;
      const description =
        locale === "ko"
          ? achievementSidecar?.descKo || achievement.description || ""
          : achievement.description || achievementSidecar?.descKo || "";
      const rarity = coercePercent(achievement.global_percent);
      const { steps: pointerlessSteps, pointer } = extractPointer(structured.steps);
      let rawSteps = sanitizeGuideLines(pointerlessSteps, displayName, description).slice(0, 5);
      let rawTips = sanitizeGuideLines(structured.tips, displayName, description).slice(0, 4);

      // Special-case story-progression and 100%-completion achievements:
      // the original guide rows list adjacent achievements as their "steps",
      // which surfaces as nonsense. Replace with a single accurate line.
      const detectorInput = {
        displayName,
        description,
        englishName: achievement.display_name,
        englishDesc: achievement.description,
      };
      const isMeta = isMetaCompletionAchievement(detectorInput);
      const isStory = !isMeta && isStoryProgressAchievement(detectorInput);
      let synthesizedSummary: string | null = null;
      if (isMeta) {
        synthesizedSummary = locale === "ko"
          ? "다른 모든 업적을 먼저 달성한 뒤 마지막에 잠금 해제됩니다."
          : "Unlocks last, after every other achievement has been earned.";
        rawSteps = [];
        rawTips = [];
      } else if (isStory) {
        synthesizedSummary = locale === "ko"
          ? "스토리를 진행하면 자동으로 잠금 해제됩니다."
          : "Unlocks automatically as you progress through the story.";
        rawSteps = [];
        rawTips = [];
      }

      const guideSteps = locale === "ko" ? rawSteps.map(normalizeKoreanLine) : rawSteps;
      const guideTips = locale === "ko" ? rawTips.map(normalizeKoreanLine) : rawTips;
      const normalizedPointer = locale === "ko" && pointer ? normalizeKoreanLine(pointer) : pointer;

      return {
        id: achievement.id,
        slug: achievement.api_name.toLowerCase(),
        name: displayName,
        description,
        rarity,
        difficulty: achievement.difficulty || (rarity <= 5 ? "legendary" : rarity <= 10 ? "rare" : rarity <= 30 ? "uncommon" : "common"),
        iconUrl: achievement.icon_url ?? null,
        iconGrayUrl: achievement.icon_gray_url ?? null,
        guideSummary: synthesizedSummary ?? sanitizeGuideSummary(structured.summary, displayName, description),
        guideSteps,
        guideTips,
        guideStats: structured.statsLine,
        guideSource: selectedGuide?.source_url ?? null,
        guidePointer: normalizedPointer,
        guideReferences: structured.references.filter(
          (ref) => ref.url !== selectedGuide?.source_url,
        ).slice(0, 3),
        confidence: normalizeConfidence(selectedGuide?.confidence),
        missable: inferMissable(achievement, selectedGuide?.content ?? ""),
        chapter: extractChapterFromGuide(selectedGuide?.content ?? null),
      };
    })
    .sort((left, right) => left.rarity - right.rarity);

  const gameCard = (await getSeriesGames(locale)).find((item) => item.appId === curated.appId);
  if (!gameCard) return null;

  return {
    game: gameCard,
    achievements: cards,
    missables: MISSABLES[curated.appId],
  };
});

export const getAchievementPageData = cache(async (slugOrId: string, achievementSlug: string, locale: Locale) => {
  const page = await getGamePageData(slugOrId, locale);
  if (!page) return null;
  const achievement = page.achievements.find((item) => item.slug === achievementSlug);
  if (!achievement) return null;
  return { game: page.game, achievement, missables: page.missables };
});

export const getPlayOrderData = cache(async (locale: Locale) => {
  const games = await getSeriesGames(locale);
  const gameMap = new Map(games.map((game) => [game.slug, game]));
  return {
    newcomer: PLAY_ORDER.new.map((entry) => ({
      ...entry,
      reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
      game: gameMap.get(entry.slug),
    })).filter((entry) => entry.game),
    chronological: PLAY_ORDER.chronological.map((entry) => ({
      ...entry,
      reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
      game: gameMap.get(entry.slug),
    })).filter((entry) => entry.game),
  };
});

export type MissableIndexItem = {
  kind: "missable" | "recommended" | "anytime" | "achievement";
  title: string;
  when: string;
  body: string;
  slug?: string;
};

export type MissableIndexEntry = {
  game: SeriesGameCard;
  chapters: Array<{
    chapter: number;
    title: string | null;
    items: MissableIndexItem[];
  }>;
  unlocated: MissableIndexItem[];
};

export const getMissablesIndex = cache(async (locale: Locale): Promise<MissableIndexEntry[]> => {
  const games = await getSeriesGames(locale);
  const result: MissableIndexEntry[] = [];

  for (const game of games) {
    // Pull the full game page to reuse all the chapter / pointer / sanitized
    // step inference. Missing pages contribute zero rows.
    const page = await getGamePageData(game.slug, locale).catch(() => null);
    if (!page) continue;

    type Bucket = {
      chapter: number;
      title: string | null;
      items: MissableIndexItem[];
    };
    const map = new Map<number, Bucket>();

    for (const curatedChapter of MISSABLES[game.appId] ?? []) {
      map.set(curatedChapter.chapter, {
        chapter: curatedChapter.chapter,
        title: locale === "ko" ? curatedChapter.title.ko : curatedChapter.title.en,
        items: curatedChapter.items.map((item) => ({
          kind: item.kind,
          title: locale === "ko" ? item.title.ko : item.title.en,
          when: locale === "ko" ? item.when.ko : item.when.en,
          body: locale === "ko" ? item.body.ko : item.body.en,
        })),
      });
    }

    const unlocated: MissableIndexItem[] = [];
    for (const ach of page.achievements) {
      if (!ach.missable) continue;
      const item: MissableIndexItem = {
        kind: "achievement",
        title: ach.name,
        when: ach.guidePointer ?? (locale === "ko" ? "획득 가능 시점에 즉시" : "When the opportunity opens"),
        body: ach.guideSummary || ach.guideSteps[0] || ach.description || "",
        slug: ach.slug,
      };
      if (ach.chapter) {
        const bucket = map.get(ach.chapter);
        if (bucket) {
          bucket.items.push(item);
        } else {
          map.set(ach.chapter, { chapter: ach.chapter, title: null, items: [item] });
        }
      } else {
        unlocated.push(item);
      }
    }

    if (map.size === 0 && unlocated.length === 0) continue;

    result.push({
      game,
      chapters: Array.from(map.values()).sort((a, b) => a.chapter - b.chapter),
      unlocated,
    });
  }

  return result;
});

export const searchKamurocho = cache(async (query: string, locale: Locale) => {
  const trimmed = query.trim().toLowerCase();
  const games = await getSeriesGames(locale);
  if (!trimmed) {
    return { games, achievements: [] as Array<{ game: SeriesGameCard; achievement: GameAchievementCard }> };
  }

  // Tokenize the query so multi-word searches ("rare kiryu") still match
  // achievements that contain both words in any order. Single-token queries
  // behave exactly like before.
  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const matchesAll = (haystack: string) => {
    const lower = haystack.toLowerCase();
    return tokens.every((t) => lower.includes(t));
  };

  const matchedGames = games.filter((game) =>
    matchesAll([game.name, game.altName, game.summary, game.lead].join(" ")),
  );

  const achievements: Array<{ game: SeriesGameCard; achievement: GameAchievementCard }> = [];
  for (const game of games) {
    const page = await getGamePageData(game.slug, locale);
    for (const achievement of page?.achievements ?? []) {
      if (
        matchesAll(
          [
            achievement.name,
            achievement.description,
            achievement.guideSummary ?? "",
            achievement.guideSteps.join(" "),
            achievement.guidePointer ?? "",
          ].join(" "),
        )
      ) {
        achievements.push({ game, achievement });
      }
    }
  }

  // Stable ordering: missable first, then rarest first so the most useful
  // matches surface at the top of the results.
  achievements.sort((a, b) => {
    if (a.achievement.missable !== b.achievement.missable) return a.achievement.missable ? -1 : 1;
    return a.achievement.rarity - b.achievement.rarity;
  });

  return {
    games: matchedGames,
    achievements: achievements.slice(0, 24),
  };
});
