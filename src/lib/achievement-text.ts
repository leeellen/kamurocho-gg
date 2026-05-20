import { type Locale } from "@/lib/i18n";

export type AchievementSidecar = {
  nameKo?: string | null;
  descKo?: string | null;
};

type GuideReplacement = {
  en: string;
  ko: string;
};

const SERIES_GLOSSARY: GuideReplacement[] = [
  { en: "Kamurocho", ko: "카무로초" },
  { en: "Sotenbori", ko: "소텐보리" },
  { en: "Yokohama", ko: "요코하마" },
  { en: "Nishiki", ko: "니시키" },
  { en: "Kiryu", ko: "키류" },
  { en: "Majima", ko: "마지마" },
  { en: "Saejima", ko: "사에지마" },
  { en: "Akiyama", ko: "아키야마" },
  { en: "Haruka", ko: "하루카" },
  { en: "Daigo", ko: "다이고" },
  { en: "Date", ko: "다테" },
  { en: "Tomizawa", ko: "토미자와" },
  { en: "Tojo Clan", ko: "도조 클랜" },
  { en: "Omi Alliance", ko: "오미 연합" },
  { en: "Pocket Circuit", ko: "포켓 서킷" },
  { en: "Majima Everywhere", ko: "마지마 에브리웨어" },
  { en: "Mr. Shakedown", ko: "미스터 셰이크다운" },
  { en: "Premium Adventure", ko: "프리미엄 어드벤처" },
  { en: "New Game Plus", ko: "뉴 게임 플러스" },
  { en: "New Game+", ko: "뉴 게임 플러스" },
  { en: "Substories", ko: "서브스토리" },
  { en: "Substory", ko: "서브스토리" },
  { en: "Drink Links", ko: "음료 링크" },
  { en: "Drink Link", ko: "음료 링크" },
  { en: "Aloha Links", ko: "알로하 링크스" },
  { en: "Miss Match", ko: "미스 매치" },
  { en: "Crazy Delivery", ko: "크레이지 딜리버리" },
  { en: "Crazy Money", ko: "크레이지 머니" },
  { en: "Let's Get Alo-Happy", ko: "알로해피에 가자" },
  { en: "Sujimon", ko: "수지몬" },
  { en: "Sujidex", ko: "수지덱스" },
  { en: "Romance Workshop", ko: "로맨스 공방" },
  { en: "Soul Orbs", ko: "혼 구슬" },
  { en: "Soul Orb", ko: "혼 구슬" },
  { en: "Orbs", ko: "구슬" },
  { en: "Soul", ko: "혼" },
  { en: "Tech", ko: "기술" },
  { en: "Body", ko: "육체" },
  { en: "Heat Action", ko: "히트 액션" },
  { en: "Heat Gauge", ko: "히트 게이지" },
  { en: "Dragon Style", ko: "드래곤 스타일" },
  { en: "Rush Style", ko: "러시 스타일" },
  { en: "Beast Style", ko: "비스트 스타일" },
  { en: "Brawler Style", ko: "브롤러 스타일" },
  { en: "Ultimate Matches", ko: "얼티밋 매치" },
  { en: "Ultimate Match", ko: "얼티밋 매치" },
  { en: "Victory Road", ko: "빅토리 로드" },
  { en: "Revelations", ko: "계시" },
  { en: "Darts", ko: "다트" },
  { en: "Pool", ko: "당구" },
  { en: "Mob", ko: "폭도들" },
  { en: "Finale", ko: "최종장" },
  { en: "Legend difficulty", ko: "전설 난이도" },
  { en: "Yakuza 0", ko: "용과 같이 0" },
  { en: "GET!", ko: "획득!" },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function dedupeReplacements(replacements: GuideReplacement[]) {
  const seen = new Set<string>();
  return replacements.filter((entry) => {
    const en = entry.en.trim();
    const ko = entry.ko.trim();
    if (!en || !ko) return false;
    const key = `${en.toLowerCase()}=>${ko}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function parseAchievementSidecar(raw: string | null | undefined): AchievementSidecar | null {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    const parsed = JSON.parse(raw) as AchievementSidecar;
    return typeof parsed === "object" && parsed !== null ? parsed : null;
  } catch {
    return null;
  }
}

export function localizeAchievementName({
  locale,
  englishName,
  apiName,
  sidecar,
}: {
  locale: Locale;
  englishName?: string | null;
  apiName?: string | null;
  sidecar?: AchievementSidecar | null;
}) {
  const koName = sidecar?.nameKo?.trim() || null;
  const enName = englishName?.trim() || apiName?.trim() || "Achievement";
  return locale === "ko" ? (koName || enName) : (enName || koName || "Achievement");
}

export function localizeAchievementDescription({
  locale,
  englishDescription,
  sidecar,
}: {
  locale: Locale;
  englishDescription?: string | null;
  sidecar?: AchievementSidecar | null;
}) {
  const koDesc = sidecar?.descKo?.trim() || null;
  const enDesc = englishDescription?.trim() || null;
  return locale === "ko" ? (koDesc || enDesc || "") : (enDesc || koDesc || "");
}

export function localizeGuideText({
  locale,
  text,
  replacements = [],
}: {
  locale: Locale;
  text: string | null | undefined;
  replacements?: GuideReplacement[];
}) {
  if (locale !== "ko" || !text) return text ?? "";

  let next = text;
  const merged = dedupeReplacements([...replacements, ...SERIES_GLOSSARY]).sort(
    (a, b) => b.en.length - a.en.length,
  );

  for (const entry of merged) {
    next = next.replace(new RegExp(escapeRegExp(entry.en), "gi"), entry.ko);
  }

  return next;
}
