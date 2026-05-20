import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase env vars.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const translationCache = new Map();

const NOISE_PATTERNS = [
  /^\/{2,}\s*missable\s+achievement\s+alert\s*\/{2,}$/i,
  /^missable\s+achievement\s+alert$/i,
  /^놓치기\s*쉬운\s*업적입?니?다?\.?$/i,
  /^use\s+the\s+route\s+from\s+/i,
  /^다음\s+공략\s+흐름을\s+기준으로\s+진행하세요[:：]?\s*/i,
];

const GLOSSARY = [
  ["Kamurocho", "카무로초"],
  ["Sotenbori", "소텐보리"],
  ["Ijincho", "이진초"],
  ["Nishiki", "니시키"],
  ["Nishikiyama", "니시키야마"],
  ["Kiryu", "키류"],
  ["Majima", "마지마"],
  ["Ichiban", "이치반"],
  ["Yagami", "야가미"],
  ["Akiyama", "아키야마"],
  ["Saejima", "사에지마"],
  ["Haruka", "하루카"],
  ["Daigo", "다이고"],
  ["Oda", "오다"],
  ["Tachibana", "타치바나"],
  ["Reina", "레이나"],
  ["Serena", "세레나"],
  ["Don Quijote", "돈키호테"],
  ["Le Marche", "르 마르쉐"],
  ["Odyssey", "오디세이"],
  ["Cafe Alps", "카페 알프스"],
  ["Tojo Clan", "도조 클랜"],
  ["Tojo HQ", "도조 본부"],
  ["Omi Alliance", "오미 연합"],
  ["Pocket Circuit", "포켓 서킷"],
  ["Mr. Shakedown", "미스터 셰이크다운"],
  ["Premium Adventure", "프리미엄 어드벤처"],
  ["New Game Plus", "뉴 게임 플러스"],
  ["Substories", "서브스토리"],
  ["Substory", "서브스토리"],
  ["Inviting Hat", "초대 모자"],
  ["LaD", "용과 같이"],
  ["SEGA Master System", "세가 마스터 시스템"],
  ["Ebisu Pawn", "에비스 전당포"],
  ["Stijl Bar", "스타일 바"],
  ["Bar New Momoko", "바 뉴 모모코"],
  ["Dan Brody", "댄 브로디"],
  ["JUSTICE", "저스티스"],
  ["Extreme Heat", "익스트림 히트"],
  ["Ultimate Challenge", "얼티밋 챌린지"],
  ["Slice of Life", "일상 이벤트"],
  ["Another Life", "또 하나의 삶"],
  ["Diligence Records", "근면 기록"],
  ["Drink Links", "드링크 링크"],
  ["Drink Link", "드링크 링크"],
  ["Zhao", "자오"],
  ["Saeko", "사에코"],
  ["Adachi", "아다치"],
  ["Chitose", "치토세"],
  ["Joongi", "준기"],
  ["Ichi", "이치반"],
  ["Big Swell", "빅 스웰"],
  ["Masters Circuit", "마스터 서킷"],
  ["mini-more Perfume", "미니모어 향수"],
  ["Heat", "히트"],
  ["MEB", "MEB"],
  ["Evere Room", "에브리 룸"],
  ["Virtue", "덕"],
  ["Swordsman", "검사"],
  ["Gunman", "총잡이"],
  ["Bear Hug", "베어 허그"],
  ["Rush Style", "러시 스타일"],
  ["Beast Style", "비스트 스타일"],
  ["Dragon Style", "드래곤 스타일"],
  ["Heat Action", "히트 액션"],
  ["Better Quickstep", "강화 퀵스텝"],
  ["Soul", "혼"],
  ["Tech", "기술"],
  ["Body", "육체"],
  ["Dragon", "용"],
  ["One-Shot Challenge", "원샷 챌린지"],
  ["1-Shot Challenge", "원샷 챌린지"],
  ["Cee-Lo", "씨로"],
  ["Cho-Han", "초한"],
  ["Oicho-Kabu", "오이초카부"],
  ["Koi-Koi", "코이코이"],
  ["Poker", "포커"],
  ["VIP", "VIP"],
  ["Drink Link", "드링크 링크"],
  ["Castle Cabaret", "캐슬 카바레"],
  ["Club Heavenly", "클럽 헤븐리"],
  ["Castle", "캐슬"],
  ["Amon", "아몬"],
  ["Finale", "최종장"],
  ["Legend difficulty", "전설 난이도"],
  ["Ultimate Counter", "얼티밋 카운터"],
  ["Firefly", "반딧불"],
  ["Hornet", "호넷"],
  ["Spider", "거미"],
  ["Stroll n' Patrol", "외근 미션"],
  ["Akame", "아카메"],
  ["Yakuza 0", "용과 같이 0"],
  ["Yakuza", "용과 같이"],
  ["Like a Dragon", "용과 같이"],
];

function parseSidecar(raw) {
  if (!raw || !raw.startsWith("{")) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function argValue(flag) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : null;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isNoiseLine(value) {
  const text = (value ?? "").trim().replace(/[*_]+/g, "");
  if (!text) return false;
  return NOISE_PATTERNS.some((pattern) => pattern.test(text));
}

function hasEnglishPayload(value) {
  const text = (value ?? "").trim();
  if (!text) return false;
  return /[A-Za-z]{3,}/.test(text);
}

function splitBulletPrefix(line) {
  const match = line.match(/^(\s*(?:[-*]\s+|\d+[.)]\s+))/);
  if (!match) return { prefix: "", body: line };
  return { prefix: match[1], body: line.slice(match[1].length) };
}

async function translateText(text, target = "ko") {
  const raw = (text ?? "").trim();
  if (!raw) return raw;
  const cacheKey = `${target}:${raw}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" +
    target +
    "&dt=t&q=" +
    encodeURIComponent(raw);
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; KamurochoGuideFix/1.0)" },
  });
  if (!res.ok) throw new Error(`Translate failed ${res.status}`);
  const payload = await res.json();
  const translated = (payload?.[0] ?? []).map((part) => part[0] ?? "").join("").trim();
  translationCache.set(cacheKey, translated);
  return translated;
}

function applyReplacements(value, replacements) {
  let next = value;
  for (const [from, to] of replacements) {
    next = next.replace(new RegExp(escapeRegExp(from), "gi"), to);
  }
  return next;
}

function normalizeGuideLineForKo(line, replacements) {
  let next = line;

  next = next
    .replace("**Do this next:**", "**지금 해야 할 일:**")
    .replace("**Watch for:**", "**주의할 점:**")
    .replace("**Tips:**", "**팁:**")
    .replace("**Steps:**", "**단계별 안내:**")
    .replace("///MISSABLE ACHIEVEMENT ALERT///", "놓치기 쉬운 업적입니다.");

  return applyReplacements(next, replacements);
}

function stripRepeatedTitlePrefix(value, titles) {
  const text = value.trim();
  const candidates = (Array.isArray(titles) ? titles : [titles])
    .map((title) => (title ?? "").trim())
    .filter(Boolean);
  if (!text || candidates.length === 0) return text;
  for (const cleanTitle of candidates) {
    if (text === cleanTitle) return "";
    if (text.startsWith(cleanTitle)) {
      return text.slice(cleanTitle.length).replace(/^[:\-\s,.!]+/, "").trim();
    }
  }
  return text;
}

async function translateGuideLineToKo(line, replacements, fromEnglish = false, title = "", englishTitle = "") {
  if (!line.trim()) return "";
  if (isNoiseLine(line)) return "";

  let next = normalizeGuideLineForKo(line, fromEnglish ? [] : replacements);
  if (
    next.includes("**지금 해야 할 일:**") ||
    next.includes("**주의할 점:**") ||
    next.includes("**팁:**") ||
    next.includes("**단계별 안내:**")
  ) {
    return next;
  }

  const { prefix, body } = splitBulletPrefix(next);
  const bodyWithoutTitle = stripRepeatedTitlePrefix(body, [englishTitle, title]);
  if (!bodyWithoutTitle) return "";
  const translated = hasEnglishPayload(bodyWithoutTitle) ? await translateText(bodyWithoutTitle, "ko") : bodyWithoutTitle;
  const translatedEnglishTitle = englishTitle ? await translateText(englishTitle, "ko") : "";
  const stripped = stripRepeatedTitlePrefix(
    applyReplacements(translated, replacements),
    [title, translatedEnglishTitle, englishTitle],
  );
  if (!stripped || stripped === title.trim()) return "";
  return `${prefix}${stripped}`.trimEnd();
}

async function main() {
  const dryRun = !process.argv.includes("--write");
  const verbose = process.argv.includes("--verbose");
  const appIdsArg = argValue("--app-ids");
  const appIds = appIdsArg
    ? appIdsArg.split(",").map((value) => Number(value.trim())).filter(Boolean)
    : null;

  let achievementQuery = supabase
    .from("achievements")
    .select("id,app_id,api_name,display_name,description,category");
  if (appIds?.length) achievementQuery = achievementQuery.in("app_id", appIds);
  const { data: achievements, error: achievementError } = await achievementQuery;
  if (achievementError) throw new Error(achievementError.message);

  const achievementById = new Map();
  const appReplacements = new Map();
  for (const achievement of achievements ?? []) {
    const sidecar = parseSidecar(achievement.category);
    const koName = sidecar?.nameKo?.trim() || achievement.display_name || achievement.api_name;
    const entry = {
      ...achievement,
      koName,
      koDesc: sidecar?.descKo?.trim() || achievement.description || "",
    };
    achievementById.set(achievement.id, entry);
    const current = appReplacements.get(achievement.app_id) ?? [];
    if (achievement.display_name?.trim() && koName?.trim() && achievement.display_name.trim() !== koName.trim()) {
      current.push([achievement.display_name.trim(), koName.trim()]);
    }
    appReplacements.set(achievement.app_id, current);
  }

  let guideQuery = supabase
    .from("guides")
    .select("id,achievement_id,locale,content,confidence,is_active");
  if (appIds?.length) {
    const achievementIds = (achievements ?? []).map((row) => row.id);
    guideQuery = guideQuery.in("achievement_id", achievementIds);
  }
  const { data: guides, error: guideError } = await guideQuery;
  if (guideError) throw new Error(guideError.message);

  const guidesByAchievement = new Map();
  for (const guide of guides ?? []) {
    const current = guidesByAchievement.get(guide.achievement_id) ?? [];
    current.push(guide);
    guidesByAchievement.set(guide.achievement_id, current);
  }

  let updated = 0;
  let scanned = 0;
  let koMixedBefore = 0;
  let koMixedAfter = 0;
  let noisyBefore = 0;
  let noisyAfter = 0;

  for (const achievement of achievementById.values()) {
    const rows = guidesByAchievement.get(achievement.id) ?? [];
    const enGuide = rows.find((row) => row.locale === "english" && row.content?.trim());
    const koGuide = rows.find((row) => row.locale === "koreana" && row.content?.trim());
    if (!koGuide) continue;
    scanned += 1;

    const replacements = [...(appReplacements.get(achievement.app_id) ?? []), ...GLOSSARY];
    const currentTitle = koGuide.content.split("\n").find((line) => line.trim())?.trim() ?? "";
    const needsFix =
      Boolean(enGuide?.content?.trim()) ||
      hasEnglishPayload(koGuide.content) ||
      NOISE_PATTERNS.some((pattern) => pattern.test(koGuide.content)) ||
      currentTitle !== achievement.koName;
    if (!needsFix) continue;

    const fromEnglish = Boolean(enGuide?.content?.trim());
    const sourceContent = fromEnglish ? enGuide.content : koGuide.content;
    const sourceLines = sourceContent.split("\n");
    const localized = [];

    for (let index = 0; index < sourceLines.length; index += 1) {
      const line = sourceLines[index];
      if (index === 0) {
        localized.push(achievement.koName);
        continue;
      }
      const next = await translateGuideLineToKo(
        line,
        replacements,
        fromEnglish,
        achievement.koName,
        achievement.display_name || achievement.api_name,
      );
      if (next === "") {
        if (line.trim() === "") localized.push("");
        continue;
      }
      localized.push(next);
    }

    const nextContent = localized.join("\n").replace(/\n{3,}/g, "\n\n").trim();
    const beforeMixed = hasEnglishPayload(koGuide.content);
    const afterMixed = hasEnglishPayload(nextContent);
    const beforeNoisy = isNoiseLine(koGuide.content) || NOISE_PATTERNS.some((pattern) => pattern.test(koGuide.content));
    const afterNoisy = NOISE_PATTERNS.some((pattern) => pattern.test(nextContent));
    if (beforeMixed) koMixedBefore += 1;
    if (afterMixed) koMixedAfter += 1;
    if (beforeNoisy) noisyBefore += 1;
    if (afterNoisy) noisyAfter += 1;

    if (nextContent !== koGuide.content) {
      if (!dryRun) {
        const { error: updateError } = await supabase
          .from("guides")
          .update({
            content: nextContent,
            updated_at: new Date().toISOString(),
          })
          .eq("id", koGuide.id);
        if (updateError) throw new Error(updateError.message);
      }
      updated += 1;
      if (verbose) {
        console.log(`${dryRun ? "[dry]" : "[write]"} ${achievement.app_id}:${achievement.display_name}`);
      }
    }
  }

  console.log(JSON.stringify({
    dryRun,
    scanned,
    updated,
    koMixedBefore,
    koMixedAfter,
    noisyBefore,
    noisyAfter,
  }, null, 2));
}

await main();
