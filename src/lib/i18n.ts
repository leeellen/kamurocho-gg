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
