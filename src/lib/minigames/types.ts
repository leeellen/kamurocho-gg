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
  /** Optional related achievement api_name (lowercased) to deep-link to. */
  achievementSlug?: string;
};

export type MinigamesData = {
  appId: number;
  intro: LocalizedText;
  minigames: Minigame[];
};
