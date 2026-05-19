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

function argValue(flag) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : null;
}

function parseSidecar(raw) {
  if (!raw || !raw.startsWith("{")) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function normalize(value) {
  return (value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, "")
    .trim();
}

async function translateText(text, target = "ko") {
  const cacheKey = `${target}:${text}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" +
    target +
    "&dt=t&q=" +
    encodeURIComponent(text);
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; KamurochoGuideNormalize/1.0)" },
  });
  if (!res.ok) throw new Error(`Translate failed ${res.status}`);
  const payload = await res.json();
  const translated = (payload?.[0] ?? []).map((part) => part[0] ?? "").join("").trim();
  translationCache.set(cacheKey, translated);
  return translated;
}

function isGenericKoreanAchievementName(nameKo, displayName, gameName) {
  const value = (nameKo ?? "").trim();
  if (!value) return true;
  if (/[A-Za-z]{4,}/.test(value)) return true;
  if (gameName && normalize(value) === normalize(gameName)) return true;
  if (
    displayName &&
    /^(프롤로그|에필로그|최종장|제\s*\d+\s*장|챕터\s*\d+).*(클리어|완료)$/.test(value) &&
    /[A-Za-z]/.test(displayName)
  ) {
    return true;
  }
  return false;
}

async function preferredKoreanAchievementName({ displayName, nameKo, apiName, gameName }) {
  if (!isGenericKoreanAchievementName(nameKo, displayName, gameName)) {
    return nameKo.trim();
  }
  if (displayName?.trim()) {
    return await translateText(displayName.trim(), "ko");
  }
  return apiName;
}

function replaceFirstNonEmptyLine(content, replacement) {
  const lines = content.split("\n");
  const firstIndex = lines.findIndex((line) => line.trim().length > 0);
  if (firstIndex === -1) return content;
  lines[firstIndex] = replacement;
  return lines.join("\n");
}

async function main() {
  const appIdsArg = argValue("--app-ids");
  const onlyLowConfidence = process.argv.includes("--only-low-confidence");
  const appIds = appIdsArg
    ? appIdsArg.split(",").map((value) => Number(value.trim())).filter(Boolean)
    : null;

  let achievementQuery = supabase
    .from("achievements")
    .select("id,app_id,api_name,display_name,category");
  if (appIds?.length) achievementQuery = achievementQuery.in("app_id", appIds);
  const { data: achievements, error: achievementError } = await achievementQuery;
  if (achievementError) throw new Error(achievementError.message);

  const appIdSet = [...new Set((achievements ?? []).map((row) => row.app_id))];
  const { data: games, error: gameError } = await supabase.from("games").select("app_id,name").in("app_id", appIdSet);
  if (gameError) throw new Error(gameError.message);

  const gameNameByAppId = new Map((games ?? []).map((game) => [game.app_id, game.name]));
  const achievementById = new Map(
    (achievements ?? []).map((achievement) => {
      const sidecar = parseSidecar(achievement.category);
      return [
        achievement.id,
        {
          ...achievement,
          nameKo: sidecar?.nameKo ?? "",
          gameName: gameNameByAppId.get(achievement.app_id) ?? "",
        },
      ];
    }),
  );

  const achievementIds = [...achievementById.keys()];
  let updated = 0;

  for (let index = 0; index < achievementIds.length; index += 200) {
    const slice = achievementIds.slice(index, index + 200);
    let guideQuery = supabase
      .from("guides")
      .select("id,achievement_id,locale,content,confidence")
      .in("achievement_id", slice)
      .eq("locale", "koreana")
      .eq("is_active", true);
    if (onlyLowConfidence) guideQuery = guideQuery.lt("confidence", 0.7);
    const { data: guides, error: guideError } = await guideQuery;
    if (guideError) throw new Error(guideError.message);

    for (const guide of guides ?? []) {
      const achievement = achievementById.get(guide.achievement_id);
      if (!achievement) continue;

      const preferredTitle = await preferredKoreanAchievementName(achievement);
      const firstLine = guide.content.split("\n").find((line) => line.trim().length > 0)?.trim() ?? "";
      if (!preferredTitle || firstLine === preferredTitle) continue;

      const nextContent = replaceFirstNonEmptyLine(guide.content, preferredTitle);
      const { error: updateError } = await supabase
        .from("guides")
        .update({
          content: nextContent,
          updated_at: new Date().toISOString(),
        })
        .eq("id", guide.id);
      if (updateError) throw new Error(updateError.message);
      updated += 1;
      console.log(`updated ${achievement.app_id}:${achievement.display_name} -> ${preferredTitle}`);
    }
  }

  console.log(`done updated=${updated}`);
}

await main();
