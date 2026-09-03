// Patch the hand-authored Korean strings in `scripts/ko-overrides/` onto the
// existing `games` / `achievements` rows, without re-running the full Steam
// sync. `sync-steam-app.mjs` applies the same overrides, so this is only for
// updating rows that were synced before an override existed.
//
//   node --env-file=.env.local scripts/apply-ko-overrides.mjs
//   DRY=1 node --env-file=.env.local scripts/apply-ko-overrides.mjs

import { createClient } from "@supabase/supabase-js";

import { KO_OVERRIDES } from "./ko-overrides/index.mjs";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const DRY = process.env.DRY === "1";
const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

function parseSidecar(raw) {
  if (!raw || typeof raw !== "string" || !raw.startsWith("{")) return {};
  try {
    return JSON.parse(raw) ?? {};
  } catch {
    return {};
  }
}

for (const [appId, override] of KO_OVERRIDES) {
  console.log(`\n== app ${appId}`);

  const { data: game, error: gameError } = await sb
    .from("games")
    .select("app_id,img_logo_url")
    .eq("app_id", appId)
    .maybeSingle();
  if (gameError) throw new Error(gameError.message);
  if (!game) {
    console.warn(`  games row missing — run sync-steam-app.mjs for ${appId} first`);
    continue;
  }

  const sidecar = parseSidecar(game.img_logo_url);
  if (override.nameKo) sidecar.nameKo = override.nameKo;
  if (override.shortDescriptionKo) sidecar.shortDescriptionKo = override.shortDescriptionKo;
  if (!DRY) {
    const { error } = await sb
      .from("games")
      .update({ img_logo_url: JSON.stringify(sidecar) })
      .eq("app_id", appId);
    if (error) throw new Error(error.message);
  }
  console.log(`  game nameKo -> ${sidecar.nameKo}`);

  const { data: achievements, error: achError } = await sb
    .from("achievements")
    .select("id,api_name,category")
    .eq("app_id", appId);
  if (achError) throw new Error(achError.message);

  let updated = 0;
  let unmatched = 0;
  for (const row of achievements ?? []) {
    const patch = override.achievements?.[row.api_name];
    if (!patch) {
      unmatched += 1;
      continue;
    }
    const cat = parseSidecar(row.category);
    if (typeof cat.v !== "number") cat.v = 1;
    cat.nameKo = patch.nameKo;
    cat.descKo = patch.descKo;
    if (!DRY) {
      const { error } = await sb
        .from("achievements")
        .update({ category: JSON.stringify(cat) })
        .eq("id", row.id);
      if (error) throw new Error(`${row.api_name}: ${error.message}`);
    }
    updated += 1;
  }

  const missing = Object.keys(override.achievements ?? {}).filter(
    (name) => !(achievements ?? []).some((row) => row.api_name === name),
  );
  console.log(`  achievements updated=${updated} untouched=${unmatched} in-override-but-not-in-db=${missing.length}`);
  if (missing.length) console.warn("  missing:", missing.join(", "));
}

console.log(DRY ? "\nDRY=1 — nothing written" : "\ndone");
