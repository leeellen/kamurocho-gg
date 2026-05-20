import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase env vars.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const THEME_KEYWORDS = [
  "Telephone Club",
  "telephone card",
  "Catfight",
  "Dream Machine",
  "Gandhara",
  "Pocket Circuit",
  "Real Estate Royale",
  "Cabaret Club Czar",
  "Mr. Moneybags",
  "cigarette",
  "Erotic Video",
  "Jennifer",
  "Haruki",
  "Ayaka",
  "Riku",
  "Goromi",
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function argValue(flag) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : null;
}

function sampleLines(content) {
  return String(content || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function classifyRow(row, namesInApp) {
  const reasons = [];
  const content = String(row.content || "");
  const name = String(row.name || "");
  const description = String(row.description || "");

  const otherAchievementNames = namesInApp.filter((name) => {
    if (!name || name === row.name) return false;
    return new RegExp(`\\b${escapeRegExp(name)}\\b`, "i").test(content);
  });
  if (otherAchievementNames.length >= 2) {
    reasons.push({
      kind: "other_achievement_names",
      detail: otherAchievementNames.slice(0, 8),
    });
  }

  const themeHits = THEME_KEYWORDS.filter((keyword) => new RegExp(escapeRegExp(keyword), "i").test(content));
  const unmatchedThemeHits = themeHits.filter((keyword) => {
    const keywordRe = new RegExp(escapeRegExp(keyword), "i");
    return !keywordRe.test(name) && !keywordRe.test(description);
  });
  if (unmatchedThemeHits.length > 0) {
    reasons.push({
      kind: "theme_keyword_without_name",
      detail: unmatchedThemeHits,
    });
  }

  if (/reward(?:s|ed)? you with\s+[A-Z]/i.test(content) && !new RegExp(escapeRegExp(row.name), "i").test(content)) {
    reasons.push({ kind: "rewards_other_achievement" });
  }

  if (row.locale === "english" && /[가-힣]|[\u0400-\u04FF]/.test(content)) {
    reasons.push({ kind: "wrong_language_in_english" });
  }

  if (row.locale === "koreana" && /\bhttps?:\/\/|\bwww\./i.test(content)) {
    reasons.push({ kind: "raw_link_in_korean" });
  }

  return reasons;
}

async function main() {
  const appIdFilter = argValue("--app-id");
  const localeFilter = argValue("--locale");

  let query = supabase
    .from("guides")
    .select("achievement_id,locale,content,source_url,confidence,achievements!inner(app_id,api_name,display_name,description)")
    .eq("is_active", true)
    .order("achievement_id");

  if (appIdFilter) query = query.eq("achievements.app_id", Number(appIdFilter));
  if (localeFilter) query = query.eq("locale", localeFilter);

  const { data, error } = await query;
  if (error) throw error;

  const rows = (data || []).map((row) => ({
    achievementId: row.achievement_id,
    locale: row.locale,
    content: row.content || "",
    sourceUrl: row.source_url || "",
    confidence: row.confidence,
    appId: row.achievements.app_id,
    apiName: row.achievements.api_name || "",
    name: row.achievements.display_name || "",
    description: row.achievements.description || "",
  }));

  const rowsByApp = new Map();
  for (const row of rows) {
    const list = rowsByApp.get(row.appId) || [];
    list.push(row);
    rowsByApp.set(row.appId, list);
  }

  const findings = [];
  for (const [appId, appRows] of rowsByApp.entries()) {
    const namesInApp = appRows.map((row) => row.name).filter(Boolean);
    for (const row of appRows) {
      const reasons = classifyRow(row, namesInApp);
      if (reasons.length === 0) continue;
      findings.push({
        appId,
        achievementId: row.achievementId,
        apiName: row.apiName,
        locale: row.locale,
        name: row.name,
        description: row.description,
        sourceUrl: row.sourceUrl,
        confidence: row.confidence,
        reasons,
        sample: sampleLines(row.content),
      });
    }
  }

  const byApp = [...rowsByApp.keys()].sort((a, b) => a - b).map((appId) => ({
    appId,
    findings: findings.filter((item) => item.appId === appId).length,
  }));

  console.log(
    JSON.stringify(
      {
        scannedGuides: rows.length,
        findings: findings.length,
        byApp,
        sample: findings.slice(0, 200),
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
