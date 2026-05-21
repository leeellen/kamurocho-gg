import { parseAchievementSidecar } from "@/lib/achievement-text";
import type { Locale } from "@/lib/i18n";
import type { ChapterMissable } from "@/lib/kamurocho-content";

import { normalizeComparableText } from "./sanitize";
import type { AchievementRow, GameAchievementCard } from "./types";

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

export function inferMissable(achievement: AchievementRow, guideText: string) {
  const sidecar = parseAchievementSidecar(achievement.category ?? null);
  const text =
    `${achievement.display_name ?? ""}\n${achievement.description ?? ""}\n${sidecar?.nameKo ?? ""}\n${sidecar?.descKo ?? ""}\n${guideText ?? ""}`.toLowerCase();
  if (
    /none of (them|these) are miss-?able|not miss-?able|no missables|nothing missable|does not have any missable achievements|none of the achievements are miss-?able|unmissable|미스어블 아님|놓치기 쉬운 업적 아님/.test(
      text,
    )
  )
    return false;
  // Completion / meta-trophies (100%, all achievements, all sub-stories, etc.)
  // are never themselves "missable". Filter them out before the heuristic match
  // so generic "영구" / "사라집니다" words inside their descriptions don't
  // cascade into a false positive.
  if (
    /\b(obtain all (other )?achievements|all trophies|all achievements|complete the game|100% completion|platinum trophy|completed all .* (missions|substories|side cases|stories|courses|sub-stories|side missions|jobs|hostesses|trophies)|complete all .* (missions|substories|side cases|stories|courses|sub-stories|side missions|jobs|hostesses)|finish all .* (missions|substories|side cases)|on legend difficulty|on ex-?hard difficulty|on hard mode|on hardest difficulty|highest difficulty|max(?:imum)? rank|max(?:imum)? level|maxed out|reach(?:ed)? .* (?:max|maximum|highest))\b/i.test(
      text,
    ) ||
    /(모든 업적|업적 전부|전 도전 과제|모든 (?:트로피|도전 과제|챌린지)|컴플리션 리스트 전부|100%\s*달성|컴플리트|클리어 리스트 (?:전부|모두)|전\s*미션\s*클리어|모든 (?:미션|서브스토리|사이드 케이스|시티 미션|코스|직업|잡|호스티스)\s*(?:클리어|완료|달성|랭크|마스터)|난이도\s*LEGEND|난이도\s*EX-?HARD|최고\s*난이도|난이도\s*HARD|최대\s*랭크|최대\s*레벨|MAX\s*랭크|풀\s*MAX|레벨\s*MAX|직업 최대|모두 (?:MAX|마스터))/iu.test(
      text,
    )
  )
    return false;
  return [
    /missable achievement alert/i,
    /놓치기 쉬운 업적/u,
    /놓치기 쉬움/u,
    /미스 가능 업적/u,
    /\bonly during chapter\b/i,
    /\bbefore chapter end\b/i,
    /\bchapter-limited\b/i,
    /\blocks? out\b/i,
    /\bcannot return\b/i,
    /\bone chance\b/i,
    /\bgone for that playthrough\b/i,
    /챕터 종료 전/u,
    /영구(?:적으로)?/u,
    /사라집니다/u,
    /다시 얻을 수 없습니다/u,
    /그 회차에서는 다시 .*없/u,
    /같은 회차에서[는 ]*.*없/u,
    /오답이면 놓치/u,
    /오답이면 회수 불가/u,
    /한 회차에 한 번만/u,
    /한 번만 나오는/u,
    /놓치면 .*회수 (?:불가|할 수 없)/u,
    /수동 세이브를 만들어 두면 재시도/u,
    /미리 세이브를?\s*분리해/u,
  ].some((pattern) => pattern.test(text));
}

export type DisplayMissableItem = {
  kind: "missable" | "recommended" | "anytime";
  title: string;
  when: string;
  body: string;
};

export type DisplayMissableChapter = {
  chapter: number;
  title: string;
  items: DisplayMissableItem[];
};

export function buildDisplayMissables({
  achievements,
  curatedMissables,
  locale,
}: {
  achievements: GameAchievementCard[];
  curatedMissables: ChapterMissable[] | undefined;
  locale: Locale;
}): DisplayMissableChapter[] {
  const chapterMap = new Map<number, DisplayMissableChapter>();
  // Names already covered by curated MISSABLES titles. Extract any 「...」
  // bracketed name so DB achievements with the same KR localized name get
  // deduped instead of rendered as a second card.
  const covered = new Set<string>();
  const addCovered = (raw: string) => {
    for (const m of raw.matchAll(/[「『]([^」』]+)[」』]/g)) covered.add(normalizeComparableText(m[1]));
  };

  for (const chapter of curatedMissables ?? []) {
    const curatedItems = chapter.items
      .filter((item) => item.kind === "missable")
      .map((item) => {
        addCovered(item.title.ko);
        addCovered(item.title.en);
        return {
          kind: item.kind,
          title: locale === "ko" ? item.title.ko : item.title.en,
          when: locale === "ko" ? item.when.ko : item.when.en,
          body: locale === "ko" ? item.body.ko : item.body.en,
        };
      });
    if (curatedItems.length === 0) continue;
    chapterMap.set(chapter.chapter, {
      chapter: chapter.chapter,
      title: locale === "ko" ? chapter.title.ko : chapter.title.en,
      items: curatedItems,
    });
  }

  for (const achievement of achievements) {
    if (!achievement.missable) continue;
    if (covered.has(normalizeComparableText(achievement.name))) continue;
    const bucketKey = achievement.chapter ?? 0;
    const bucket = chapterMap.get(bucketKey) ?? {
      chapter: bucketKey,
      title:
        bucketKey > 0
          ? locale === "ko"
            ? `챕터 ${bucketKey}`
            : `Chapter ${bucketKey}`
          : locale === "ko"
            ? "주의 메모"
            : "Guide notes",
      items: [],
    };

    if (!chapterMap.has(bucketKey)) {
      chapterMap.set(bucketKey, bucket);
    }

    const body =
      achievement.guideSummary ||
      achievement.description ||
      (bucketKey > 0
        ? locale === "ko"
          ? "해당 챕터에서만 가능한 업적입니다."
          : "Achievement tied to this chapter."
        : locale === "ko"
          ? "가이드에 놓치기 쉬움으로 표시된 업적입니다."
          : "Achievement flagged by the guide as missable or lockout-prone.");
    const when =
      bucketKey > 0
        ? locale === "ko"
          ? "해당 챕터 진행 중"
          : "During this chapter"
        : locale === "ko"
          ? "가이드 확인 필요"
          : "Check guide";
    const duplicate = bucket.items.some(
      (item) => normalizeComparableText(item.title) === normalizeComparableText(achievement.name),
    );
    if (!duplicate) {
      bucket.items.push({
        kind: "missable",
        title: achievement.name,
        when,
        body,
      });
    }
  }

  return Array.from(chapterMap.values()).sort((a, b) => {
    if (a.chapter === 0) return 1;
    if (b.chapter === 0) return -1;
    return a.chapter - b.chapter;
  });
}

export function countMissableChecks(chapters: DisplayMissableChapter[]) {
  return chapters.reduce(
    (sum, chapter) => sum + chapter.items.filter((item) => item.kind === "missable").length,
    0,
  );
}
