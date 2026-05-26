import type { Locale } from "@/lib/i18n";

import type { GuideRow } from "./types";

export function parseJsonish(raw: string | null | undefined) {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function coercePercent(value: number | string | null | undefined) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

export function pickLocaleGuide(guides: GuideRow[], locale: Locale) {
  const wanted = locale === "ko" ? ["koreana", "korean", "english"] : ["english", "koreana", "korean"];
  for (const loc of wanted) {
    const found = guides.find((guide) => guide.locale === loc && guide.content?.trim());
    if (found) return found;
  }
  return guides.find((guide) => guide.content?.trim()) ?? null;
}

export function normalizeConfidence(value: string | number | null | undefined) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value.toFixed(2) : null;
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return null;
    return trimmed;
  }
  return null;
}

export function normalizeComparableText(value: string | null | undefined) {
  return (value ?? "")
    .toLowerCase()
    .replace(/[\s:!?.,'"()[\]\-—–「」『』《》〈〉…]+/g, "")
    .trim();
}

function isLowQualityKoreanGuideText(value: string) {
  const text = value.trim();
  if (!text) return true;
  const hasKorean = /[가-힣]/.test(text);
  if (/\bhttps?:\/\/|\bwww\./i.test(text)) return true;
  if (/\[[^\]]+\]\([^)]+\)/.test(text)) return true;
  if (/\[[^\]]*(?:www\.|powerpyx|gamefaqs|gamespot|steamcommunity|sharedfiles|filedetails)[^\]]*\]/i.test(text)) return true;
  if (/[Ѐ-ӿ]/.test(text)) return true;
  if (/\b(powerpyx|gamefaqs|gamespot|steamcommunity|sharedfiles|filedetails|cyricz|trueachievements|xboxachievements|psnprofiles|steamlists)\b/i.test(text)) return true;
  if (/\b(para|que|com|dos|das|uma|todos|pode|fazer|oficina|conquistas|jogo|atributos|amigos|empresa|ferramentas|massa|atingir|vasculhar|itens|encontros|destrui[cç][aã]o|crie|maximize|nível)\b/i.test(text)) return true;

  const asciiTokens = text.match(/[A-Za-z][A-Za-z0-9'!.-]{1,}/g) ?? [];
  const filtered = asciiTokens.filter((token) => !["VIP", "QTE", "MEB", "SEGA", "RGG", "DVD", "DLC"].includes(token.toUpperCase()));

  if (!hasKorean) {
    return filtered.length > 0 || /[^\d\s.,:%\-+*/()[\]#*]/.test(text);
  }

  return filtered.length >= 1;
}

function isLowQualityEnglishGuideText(value: string) {
  const text = value.trim();
  if (!text) return true;
  if (/\bhttps?:\/\/|\bwww\./i.test(text)) return true;
  if (/\[[^\]]+\]\([^)]+\)/.test(text)) return true;
  if (/\[[^\]]*(?:www\.|powerpyx|gamefaqs|gamespot|steamcommunity|sharedfiles|filedetails)[^\]]*\]/i.test(text)) return true;
  if (/[가-힣]/.test(text)) return true;
  if (/[Ѐ-ӿ]/.test(text)) return true;
  return false;
}

export function sanitizeGuideSummary(
  summary: string | null,
  achievementName: string,
  description: string,
  locale?: Locale,
) {
  if (!summary) return null;
  if (locale === "ko" && isLowQualityKoreanGuideText(summary)) return null;
  if (locale === "en" && isLowQualityEnglishGuideText(summary)) return null;
  const normalized = normalizeComparableText(summary);
  if (!normalized) return null;
  if (normalized === normalizeComparableText(achievementName)) return null;
  if (normalized === normalizeComparableText(description)) return null;
  return summary;
}

// Drop lines that are pure section markers, missable banners, or duplicate
// titles. Missable status is already communicated by the chip + header copy,
// so the literal "MISSABLE ACHIEVEMENT ALERT" / "놓치기 쉬운 업적입니다."
// lines that the backfill scripts emit add noise to the guide steps.
const NOISE_PATTERNS = [
  /^\/{2,}\s*missable\s+achievement\s+alert\s*\/{2,}$/i,
  /^missable\s+achievement\s+alert$/i,
  /^놓치기\s*쉬운\s*업적입?니?다?\.?$/,
  /^미스어블\s*업적입?니?다?\.?$/,
  /^주의[:!.]?\s*놓치기\s*쉬움\.?$/,
  /^use\s+the\s+route\s+from\s+/i,
  /^다음\s+공략\s+흐름을\s+기준으로\s+진행하세요[:：]?\s*/i,
];

function isNoiseLine(text: string): boolean {
  const trimmed = text.trim().replace(/[*_]+/g, "");
  if (!trimmed) return true;
  return NOISE_PATTERNS.some((pattern) => pattern.test(trimmed));
}

export function sanitizeGuideLines(
  lines: string[],
  achievementName: string,
  description: string,
  locale?: Locale,
) {
  const seen = new Set<string>();
  const blocked = new Set([
    normalizeComparableText(achievementName),
    normalizeComparableText(description),
    normalizeComparableText("지금 해야 할 일"),
    normalizeComparableText("단계별 안내"),
    normalizeComparableText("주의할 점"),
    normalizeComparableText("팁"),
    normalizeComparableText("do this next"),
    normalizeComparableText("next steps"),
    normalizeComparableText("steps"),
    normalizeComparableText("watch for"),
    normalizeComparableText("tips"),
  ]);

  return lines.filter((line) => {
    if (isNoiseLine(line)) return false;
    if (locale === "ko" && isLowQualityKoreanGuideText(line)) return false;
    if (locale === "en" && isLowQualityEnglishGuideText(line)) return false;
    const normalized = normalizeComparableText(line);
    if (!normalized || blocked.has(normalized) || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}
