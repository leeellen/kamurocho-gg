import type { Locale } from "@/lib/i18n";

export function difficultyLabel(locale: Locale, difficulty: string) {
  const normalized = difficulty.trim().toLowerCase();

  if (locale === "ko") {
    if (normalized === "legendary") return "전설급";
    if (normalized === "rare") return "희귀";
    if (normalized === "uncommon") return "다소 희귀";
    if (normalized === "very_hard" || normalized === "very hard") return "매우 어려움";
    if (normalized === "hard") return "어려움";
    if (normalized === "medium") return "보통";
    if (normalized === "easy" || normalized === "common") return "쉬움";
    return difficulty;
  }

  if (normalized === "uncommon") return "Uncommon";
  if (normalized === "legendary") return "Legendary";
  if (normalized === "rare") return "Rare";
  if (normalized === "common") return "Common";
  if (normalized === "very_hard" || normalized === "very hard") return "Very Hard";
  if (normalized === "hard") return "Hard";
  if (normalized === "medium") return "Medium";
  if (normalized === "easy") return "Easy";
  return difficulty;
}
