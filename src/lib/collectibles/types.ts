import type { LocalizedText } from "@/lib/kamurocho-content";

export type CollectibleStep = {
  // Optional ordinal — falls back to array index.
  index?: number;
  // Action description per step.
  body: LocalizedText;
  // Optional inline screenshot.
  image?: string;
};

export type CollectibleItem = {
  number: number;
  // Optional headline title (for substory-like collectibles). When present,
  // shown as the card heading and `location` becomes a secondary line.
  title?: LocalizedText;
  location: LocalizedText;
  // Single-paragraph summary (used when no `steps` array is provided).
  body?: LocalizedText;
  // Multi-step instructions with optional per-step images.
  steps?: CollectibleStep[];
  // Top-level item screenshot (e.g. map / overview).
  image?: string;
  // Optional accompanying video (YouTube URL).
  video?: string;
  reward?: LocalizedText;
  // Optional precondition (e.g. "사이드 케이스 7 해금 필요").
  prereq?: LocalizedText;
};

export type CollectibleGroup = {
  title: LocalizedText;
  items: CollectibleItem[];
  // Optional region map image.
  mapImage?: string;
  // Optional region overview video.
  video?: string;
};

export type CollectibleCategory = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  groups?: CollectibleGroup[];
  items?: CollectibleItem[];
  source?: { label: string; url: string };
  tips?: LocalizedText[];
  // Optional thumbnail for the category card header.
  hero?: string;
};

export type CollectiblesData = {
  appId: number;
  categories: CollectibleCategory[];
};
