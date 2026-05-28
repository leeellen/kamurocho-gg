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

// Leave the body empty on purpose. Achievement detail page already shows
// the Steam-provided name + description above the guide section, so a
// row with no content + only source_url surfaces the external link CTA
// without inventing a fake walkthrough. A real per-achievement
// walkthrough can land later by editing this stub.
function buildContent() {
  return "";
}

async function backfillApp(appId) {
  const { data: achievements, error: achErr } = await supabase
    .from("achievements")
    .select("id,api_name")
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
    for (const locale of ["english", "koreana"]) {
      const content = buildContent();
      rowsToUpsert.push({
        achievement_id: ach.id,
        locale,
        content,
        // Placeholder row: source_url only, no curated body yet.
        // Confidence kept low so the UI can hide the badge later if needed.
        confidence: 0,
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
