import type { Locale } from "@/lib/i18n";

// Map every difficulty tag the upstream sources emit (Steam Community guide
// metadata, the curated CSV imports, and the AI inferences) to a single label
// per locale. Anything unknown falls back to a polished generic so the chip
// never shows raw snake_case like `very_hard` or `extremely_rare`.
const KO_LABEL: Record<string, string> = {
  legendary: "전설급",
  ultra_rare: "전설급",
  extremely_rare: "전설급",
  very_rare: "매우 희귀",
  rare: "희귀",
  uncommon: "다소 희귀",
  medium: "보통",
  normal: "보통",
  easy: "쉬움",
  common: "쉬움",
  hard: "어려움",
  very_hard: "매우 어려움",
  extreme: "극악",
};

const EN_LABEL: Record<string, string> = {
  legendary: "Legendary",
  ultra_rare: "Ultra Rare",
  extremely_rare: "Extremely Rare",
  very_rare: "Very Rare",
  rare: "Rare",
  uncommon: "Uncommon",
  medium: "Medium",
  normal: "Normal",
  easy: "Easy",
  common: "Common",
  hard: "Hard",
  very_hard: "Very Hard",
  extreme: "Extreme",
};

export function difficultyLabel(locale: Locale, difficulty: string) {
  const normalized = difficulty.trim().toLowerCase().replace(/[\s-]+/g, "_");
  const table = locale === "ko" ? KO_LABEL : EN_LABEL;
  if (normalized in table) return table[normalized];
  // Last resort: tidy raw input (very_hard -> Very Hard / 매우 어려움-ish).
  return difficulty
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
