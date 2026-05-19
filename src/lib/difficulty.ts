import type { Locale } from "@/lib/i18n";

export function difficultyLabel(locale: Locale, difficulty: string) {
  const normalized = difficulty.trim().toLowerCase();

  if (locale === "ko") {
    if (normalized === "legendary") return "전설급";
    if (normalized === "rare") return "희귀";
    if (normalized === "uncommon") return "다소 희귀";
    if (normalized === "medium") return "보통";
    if (normalized === "easy" || normalized === "common") return "쉬움";
    if (normalized === "hard") return "어려움";
    return difficulty;
  }

  if (normalized === "uncommon") return "Uncommon";
  if (normalized === "legendary") return "Legendary";
  if (normalized === "rare") return "Rare";
  if (normalized === "common") return "Common";
  if (normalized === "medium") return "Medium";
  if (normalized === "easy") return "Easy";
  if (normalized === "hard") return "Hard";
  return difficulty;
}
