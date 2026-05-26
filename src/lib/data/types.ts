export type GameRow = {
  app_id: number;
  name: string;
  img_icon_url?: string | null;
  img_logo_url?: string | null;
  total_achievements?: number | null;
};

export type AchievementRow = {
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
};

export type GuideRow = {
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
  engine: string;
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
  guideSourceLabel: string | null;
  confidence: string | null;
  missable: boolean;
  chapter: number | null;
};

import type { ChapterMissable } from "@/lib/content";

export type GamePageData = {
  game: SeriesGameCard;
  achievements: GameAchievementCard[];
  missables: ChapterMissable[] | undefined;
};
