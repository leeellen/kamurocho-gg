import type { LocalizedText } from "@/lib/content";

export type SubstoryChoice = {
  // The dialog/choice prompt the game shows.
  prompt: LocalizedText;
  // The correct option text (verbatim, not symbols).
  correct: LocalizedText;
  // Optional note about why this choice matters.
  note?: LocalizedText;
};

export type SubstoryStep = {
  body: LocalizedText;
  image?: string;
};

export type SubstoryItem = {
  number: number;
  title: LocalizedText;
  // Chapter label (e.g. "챕터 2", "Chapter 2"). Free-form.
  chapter?: LocalizedText;
  // Who plays this substory — for dual/multi-protagonist titles.
  protagonist?: LocalizedText;
  // Trigger location on the map.
  location: LocalizedText;
  // How to start the substory.
  trigger: LocalizedText;
  // Single-paragraph overview when steps array is not provided.
  body?: LocalizedText;
  // Step-by-step walkthrough.
  steps?: SubstoryStep[];
  // In-conversation dialog choices that must be picked correctly.
  choices?: SubstoryChoice[];
  reward?: LocalizedText;
  prereq?: LocalizedText;
  video?: string;
  image?: string;
};

export type SubstoryGroup = {
  // Chapter / region grouping label.
  title: LocalizedText;
  items: SubstoryItem[];
};

export type SubstoriesData = {
  appId: number;
  // Optional top-level overview (counts, completion tips).
  summary?: LocalizedText;
  groups: SubstoryGroup[];
  source?: { label: string; url: string };
};
