export type LocalizedText = {
  ko: string;
  en: string;
};

export type CuratedGame = {
  appId: number;
  slug: string;
  arc: "kiryu" | "ichiban" | "judgment" | "spinoff";
  year: number;
  title: LocalizedText;
  summary: LocalizedText;
  lead: LocalizedText;
  platforms: string[];
  timeEstimate: {
    story: string;
    completion: string;
    note: LocalizedText;
  };
  difficulty: number;
  missableCount: number;
  engine: string;
};

export type MissableItem = {
  kind: "missable" | "recommended" | "anytime";
  title: LocalizedText;
  when: LocalizedText;
  body: LocalizedText;
};

export type ChapterMissable = {
  chapter: number;
  title: LocalizedText;
  items: MissableItem[];
};

export type PlayOrderEntry = {
  slug: string;
  recommended: boolean;
  reason: LocalizedText;
};

export type ReferenceTitle = {
  slug: string;
  title: LocalizedText;
  /** Romaji / native title shown under the localized title. */
  originalTitle?: string;
  year: number;
  /** Platform + release detail, e.g. "PS2 · 2005 (JP) / 2006 (West)". */
  releaseInfo: LocalizedText;
  lead: LocalizedText;
  placement: LocalizedText;
  /** How to play it today / Steam-achievement status. */
  availability: LocalizedText;
  /** Short one-line blurb used on the /order archive card. */
  note: LocalizedText;
  /** Multi-paragraph detail for the dedicated archive page. */
  overview: LocalizedText[];
  /** Why this title matters to the wider series. */
  whyItMatters: LocalizedText;
  /** Optional pointer to the modern way to experience the story. */
  modernRoute?: LocalizedText;
};
