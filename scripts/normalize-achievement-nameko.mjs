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

async function translateText(text, target = "ko") {
  const raw = (text ?? "").trim();
  if (!raw) return raw;
  const cacheKey = `${target}:${raw}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);
  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" +
    target +
    "&dt=t&q=" +
    encodeURIComponent(raw);
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; KamurochoNameNormalize/1.0)" },
  });
  if (!res.ok) throw new Error(`Translate failed ${res.status}`);
  const payload = await res.json();
  const translated = (payload?.[0] ?? []).map((part) => part[0] ?? "").join("").trim();
  translationCache.set(cacheKey, translated);
  return translated;
}

function isBadKoName(koName, enName) {
  const ko = (koName ?? "").trim();
  const en = (enName ?? "").trim();
  if (!ko) return true;
  if (/[A-Za-z]{4,}/.test(ko)) return true;
  if (
    en &&
    /^(프롤로그|에필로그|최종장|제\s*\d+\s*장|챕터\s*\d+).*(클리어|완료)$/.test(ko) &&
    /[A-Za-z]/.test(en)
  ) {
    return true;
  }
  return false;
}

async function main() {
  const dryRun = !process.argv.includes("--write");
  const appIdsArg = argValue("--app-ids");
  const appIds = appIdsArg
    ? appIdsArg.split(",").map((value) => Number(value.trim())).filter(Boolean)
    : null;

  let query = supabase.from("achievements").select("id,app_id,api_name,display_name,category");
  if (appIds?.length) query = query.in("app_id", appIds);
  const { data, error } = await query;
  if (error) throw new Error(error.message);

  let updated = 0;
  let scanned = 0;

  for (const achievement of data ?? []) {
    scanned += 1;
    const sidecar = parseSidecar(achievement.category);
    if (!isBadKoName(sidecar?.nameKo, achievement.display_name)) continue;
    const nextKo = await translateText(achievement.display_name || achievement.api_name, "ko");
    const nextSidecar = {
      ...(sidecar ?? {}),
      v: typeof sidecar?.v === "number" ? sidecar.v : 1,
      nameKo: nextKo,
    };
    if ((sidecar?.nameKo ?? "").trim() === nextKo.trim()) continue;
    if (!dryRun) {
      const { error: updateError } = await supabase
        .from("achievements")
        .update({
          category: JSON.stringify(nextSidecar),
        })
        .eq("id", achievement.id);
      if (updateError) throw new Error(updateError.message);
    }
    updated += 1;
  }

  console.log(JSON.stringify({ dryRun, scanned, updated }, null, 2));
}

await main();
