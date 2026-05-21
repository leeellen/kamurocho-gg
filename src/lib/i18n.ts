import { cookies } from "next/headers";

export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("kamurocho-locale")?.value;
  return locale === "ko" ? "ko" : "en";
}

export const messages = {
  en: {
    nav: {
      home: "Home",
      search: "Search",
      library: "Library",
      me: "Profile",
      settings: "Settings",
    },
    misc: {
      proHint: "Unlock advanced filters and source-cited guides.",
      proCta: "Upgrade",
    },
    common: {
      language: "Language",
    },
  },
  ko: {
    nav: {
      home: "홈",
      search: "검색",
      library: "라이브러리",
      me: "프로필",
      settings: "설정",
    },
    misc: {
      proHint: "고급 필터와 출처 인용 공략을 잠금 해제하세요.",
      proCta: "업그레이드",
    },
    common: {
      language: "언어",
    },
  },
} as const;

export type Messages = (typeof messages)["en"];

export function getMessages(locale: Locale) {
  return messages[locale];
}

const KOREAN_CHAR = /[가-힣]/;

/**
 * Pick a localized string from a `{ ko, en }` pair, gracefully falling back
 * when one side is missing or accidentally holds the other language's text.
 *
 * Many curated entries (substory choices, body lines, etc.) were authored
 * Korean-first, with the `en` field copy-pasting the Korean text rather than
 * a real translation. Rendering that raw on the EN site is worse than
 * showing the Korean original with the correct `lang` attribute, so when we
 * detect Hangul inside an `en` field we surface the Korean instead.
 */
export function pickLocalized(
  pair: { ko?: string | null; en?: string | null } | null | undefined,
  locale: Locale,
): string {
  if (!pair) return "";
  const ko = (pair.ko ?? "").trim();
  const en = (pair.en ?? "").trim();
  if (locale === "ko") return ko || en;
  // EN locale: prefer en, but if it's empty or contains Korean (untranslated
  // placeholder), fall back to the Korean source.
  if (!en || KOREAN_CHAR.test(en)) return ko || en;
  return en;
}

/** True when the localized value falls back to the opposite language. */
export function isFallbackText(
  pair: { ko?: string | null; en?: string | null } | null | undefined,
  locale: Locale,
): boolean {
  if (!pair) return false;
  const ko = (pair.ko ?? "").trim();
  const en = (pair.en ?? "").trim();
  if (locale === "ko") return !ko && Boolean(en);
  return Boolean(en && KOREAN_CHAR.test(en) && ko) || (!en && Boolean(ko));
}
