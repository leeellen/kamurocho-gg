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
  estimatedHours: string;
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
  title: LocalizedText;
  year: number;
  placement: LocalizedText;
  note: LocalizedText;
};
