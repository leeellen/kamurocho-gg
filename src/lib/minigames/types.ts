import type { LocalizedText } from "@/lib/content";

export type MinigameVideo = {
  title: LocalizedText;
  url: string;
};

export type Minigame = {
  slug: string;
  name: LocalizedText;
  /** Short category label, e.g. 도박 / 아케이드 / 술집·바 / 음악·리듬. */
  category: LocalizedText;
  /** Completionist pain, 1 (trivial) – 5 (notorious). */
  difficulty: number;
  /** Where to play it. */
  location: LocalizedText;
  /** What it is and why it matters for completion. */
  summary: LocalizedText;
  /** Concrete how-to-play bullets. */
  howTo: LocalizedText[];
  /** Optional video walkthroughs (YouTube). */
  videos?: MinigameVideo[];
  /** Where the rules, thresholds and completion-list rows below came from. */
  source?: { label: string; url: string } | { label: string; url: string }[];
  /** Optional related achievement api_name (lowercased) to deep-link to. */
  achievementSlug?: string;
  /**
   * Optional fixed pitch-by-pitch breakdown per course (batting-center style
   * minigames). `pos` is the 3x3 landing zone using the numpad convention
   * (7 8 9 / 4 5 6 / 1 2 3, viewed from the batter) — omit `pos` on a pitch
   * whose zone is player-aimed rather than scripted, or when the course as a
   * whole isn't a grid (see `course.note`).
   */
  courses?: {
    title: LocalizedText;
    /** e.g. "위치는 자유 조준 — 구질·구속만 고정" or a random-position caveat. */
    note?: LocalizedText;
    pitches?: { pos?: number; type: string; speed?: string }[];
  }[];
  /**
   * Optional fixed-answer puzzle sets (tsume-shogi problems, scripted trial
   * games, quiz answers) with the source's own diagrams. `moves` stays in the
   * source's notation verbatim (kifu like ▲2三桂不成) — never hand-translated.
   */
  puzzleSets?: {
    title: LocalizedText;
    /** Set-level caveat, e.g. "CPU may deviate from the line — retry with 待った". */
    note?: LocalizedText;
    puzzles: {
      title: LocalizedText;
      /** Main diagram (problem or first answer step). */
      image?: string;
      /** Further answer-step diagrams. */
      images?: string[];
      moves?: string[];
      note?: LocalizedText;
      /** YouTube link (may carry `t=`) when the answer is only published as video. */
      video?: string;
    }[];
  }[];
};

export type MinigamesData = {
  appId: number;
  intro: LocalizedText;
  minigames: Minigame[];
};
