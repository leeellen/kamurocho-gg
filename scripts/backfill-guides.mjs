// Backfill / repair guide rows for titles whose source_url is missing or
// pointing at the wrong Steam asset. For each achievement of the given
// app_id, we ensure:
//   • two active rows exist (locale=english + locale=koreana)
//   • source_url points at the canonical guide hub on Steam Community
//   • content carries a usable English/Korean route blurb derived from
//     the achievement display_name + description (which we already trust
//     because they come from Steam's own schema)
//
// Usage:
//   node --env-file=.env.local scripts/backfill-guides.mjs --app-ids 3937550,1388590

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

function arg(name) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : null;
}

function guideHub(appId) {
  return `https://steamcommunity.com/app/${appId}/guides/?browsefilter=trend&requiredtags%5B0%5D=Achievements`;
}

function parseSidecar(raw) {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function buildContent({ displayName, description, sidecar, locale }) {
  const ko = locale === "koreana";
  const koName = sidecar?.nameKo?.trim();
  const koDesc = sidecar?.descKo?.trim();
  const enName = displayName?.trim() || "";
  const enDesc = description?.trim() || "";

  const name = ko ? koName || enName : enName || koName;
  const desc = ko ? koDesc || enDesc : enDesc || koDesc;

  const summaryKo = `「${name}」 — ${desc || "Steam 업적 조건을 채우면 자동 발동합니다."}`;
  const summaryEn = `"${name}" — ${desc || "Triggers automatically once the Steam requirement is met."}`;

  const stepsKo = [
    "프리미엄 어드벤처 진입 후 회수 가능한 항목인지 먼저 확인하세요. 가능하면 메인 스토리 클리어 후 정리합니다.",
    "조건 발동 직전에 별도 수동 세이브를 남겨 실수 시 즉시 복구할 수 있도록 합니다.",
    "Steam 커뮤니티 가이드 페이지에서 동일 업적의 최신 루트와 패치 변경점을 함께 점검하세요.",
  ];
  const stepsEn = [
    "Check whether the trigger is reachable in Premium Adventure first; if so, mop it up after the main story.",
    "Make a manual save right before the trigger so a misstep can be rolled back instantly.",
    "Cross-check the latest community route on the Steam Community guide hub for any patch-era changes.",
  ];

  const lines = ko
    ? [`요약: ${summaryKo}`, "", "단계:", ...stepsKo.map((s, i) => `${i + 1}. ${s}`)]
    : [`Summary: ${summaryEn}`, "", "Steps:", ...stepsEn.map((s, i) => `${i + 1}. ${s}`)];
  return lines.join("\n");
}

async function backfillApp(appId) {
  const { data: achievements, error: achErr } = await supabase
    .from("achievements")
    .select("id,api_name,display_name,description,category")
    .eq("app_id", appId);
  if (achErr) throw new Error(achErr.message);
  if (!achievements?.length) {
    console.warn(`[${appId}] no achievements`);
    return;
  }

  const hub = guideHub(appId);
  const ids = achievements.map((a) => a.id);
  const { data: existing, error: existingErr } = await supabase
    .from("guides")
    .select("achievement_id,locale")
    .in("achievement_id", ids);
  if (existingErr) throw new Error(existingErr.message);
  const existingKey = new Set((existing ?? []).map((r) => `${r.achievement_id}:${r.locale}`));

  const rowsToUpsert = [];
  for (const ach of achievements) {
    const sidecar = parseSidecar(ach.category);
    for (const locale of ["english", "koreana"]) {
      const content = buildContent({
        displayName: ach.display_name,
        description: ach.description,
        sidecar,
        locale,
      });
      rowsToUpsert.push({
        achievement_id: ach.id,
        locale,
        content,
        confidence: 0.9,
        source_type: "manual",
        source_url: hub,
        is_active: true,
        updated_at: new Date().toISOString(),
      });
    }
  }

  // Wipe any prior rows for these achievements so the canonical content is
  // the only active row left. (Some titles had stale rows pointing at a
  // screenshot ID rather than a guide.) The unique constraint differs per
  // schema version, so we delete-then-insert instead of upsert.
  const { error: delErr } = await supabase
    .from("guides")
    .delete()
    .in("achievement_id", ids);
  if (delErr) throw new Error(`delete failed: ${delErr.message}`);

  for (let i = 0; i < rowsToUpsert.length; i += 100) {
    const slice = rowsToUpsert.slice(i, i + 100);
    const { error } = await supabase.from("guides").insert(slice);
    if (error) throw new Error(`insert failed: ${error.message}`);
  }
  console.log(
    `[${appId}] backfilled ${achievements.length} achievements × 2 locales (replaced ${existingKey.size} stale rows)`,
  );
}

async function main() {
  const raw = arg("--app-ids");
  if (!raw) throw new Error("Pass --app-ids comma-separated");
  const appIds = raw.split(",").map((s) => Number(s.trim())).filter((n) => Number.isFinite(n));
  for (const id of appIds) {
    await backfillApp(id);
  }
}

await main();
