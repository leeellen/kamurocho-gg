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

// Korean-to-Korean transliteration fixes for DB-imported strings that used
// older or inconsistent spellings of proper nouns. Apply after Korean text
// is selected (sidecar or guide content) so the site renders one canonical
// spelling everywhere, matching the brand domain and 국립국어원 표기.
// Apply *after* Korean text is selected (sidecar / guide content) so we send
// one canonical spelling everywhere — matches the brand domain, 국립국어원
// 외래어 표기법, and Sega Korea's official localizations. Order matters:
// longer phrases must come first so they don't get partially consumed by
// shorter rules.
const KO_CANONICAL_REPLACEMENTS: Array<[RegExp, string]> = [
  // 카무로초 표기 통일
  [/카무로쵸/g, "카무로초"],
  // DB의 일부 한국어 가이드가 神室町(かむろちょう)을 "카무로고" / "카무로 고"로
  // 옮긴 경우가 있어 정발 표기인 "카무로초"로 정규화합니다.
  [/카무로\s*고(?![가-힣])/g, "카무로초"],
  [/소텐 보리/g, "소텐보리"],
  // 정발판 한국어판에서 사용되는 표기로 통일
  [/Café Alps/g, "카페 알프스"],
  [/Café/g, "카페"],
  [/Premium Adventure/g, "프리미엄 어드벤처"],
  [/Mr\. Shakedown/g, "미스터 셰이크다운"],
  [/Mr\. Libido/g, "미스터 리비도"],
  [/Akame Network/g, "아카메 네트워크"],
  [/Princess League/g, "프린세스 리그"],
  [/The Road to Fame/g, "더 로드 투 페임"],
  [/Dondoko Island/g, "돈도코 섬"],
  [/Devil Flags/g, "데빌 플래그"],
  [/Pirates Coliseum/g, "파이리츠 콜로세움"],
  [/Another Life/g, "어나더 라이프"],
  [/Active Search/g, "액티브 서치"],
  [/Point of No Return/g, "포인트 오브 노 리턴"],
  [/Pocket Circuit/g, "포켓 서킷"],
  [/Majima Everywhere/g, "마지마 에브리웨어"],
  [/Heat Action/g, "히트 액션"],
  [/Heat Gauge/g, "히트 게이지"],
  // Gaiden 캐바레 클럽 정발 표기
  [/Club Castle/g, "클럽 캐슬"],
  [/Club Heavenly/g, "클럽 헤븐리"],
  // 정발판 시스템 메뉴 표기
  [/PREMIUM NEW GAME/g, "프리미엄 뉴 게임"],
  [/Part-?time Hero/g, "파트타임 영웅"],
  // Lost Judgment 정발판 — 시스템명 TownGo / Buzz Researcher는 한국어 표기
  [/TownGo/g, "타운고"],
  [/Buzz Researcher/g, "버즈 리서처"],
  [/RIZAP/g, "라이잡"],
  [/Pocket Circuit Stadium/g, "포켓 서킷 스타디움"],
  [/Club SEGA/g, "클럽 세가"],
  [/Stardust/g, "스타더스트"],
  [/Bantam/g, "밴텀"],
  [/POPPO/g, "포포"],
  [/Poppo/g, "포포"],
  // "Mr. {한글}" 같이 호칭만 영문이 남아 있는 케이스를 한국어로 통일
  [/\bMr\.\s+(?=[가-힣])/g, "미스터 "],
];

function normalizeKoreanText(input: string) {
  let next = input;
  for (const [pattern, replacement] of KO_CANONICAL_REPLACEMENTS) {
    next = next.replace(pattern, replacement);
  }
  return next;
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

// Achievement names + descriptions must reflect Steam's own payload verbatim.
// For titles without a Korean Steam schema (e.g., Yakuza 6), the KO sidecar is
// absent and we deliberately fall back to Steam's English string instead of
// running it through a glossary that would invent a partial translation.
// Only first-party guide copy is translated; see `localizeGuideText`.
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
  if (locale === "ko") return koName || enName;
  return enName || koName || "Achievement";
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
  if (locale === "ko") return koDesc || enDesc || "";
  return enDesc || koDesc || "";
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

  return normalizeKoreanText(next);
}
