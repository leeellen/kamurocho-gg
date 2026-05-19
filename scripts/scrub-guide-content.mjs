#!/usr/bin/env node
// Idempotent scrubber for stored guide content. Removes well-known noisy
// boilerplate lines and rewrites the most common AI-translation stiffness
// in place so subsequent fetches don't need the runtime sanitizer to do as
// much work. Read-modify-write: rows that already match the cleaned form
// are skipped without an update.
//
// Usage:
//   node scripts/scrub-guide-content.mjs               # report only (no writes)
//   node scripts/scrub-guide-content.mjs --apply       # apply changes

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

function loadDotEnv() {
  const file = path.resolve(process.cwd(), ".env.local");
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!match) continue;
    if (!process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

loadDotEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const RGG_APP_IDS = [
  2988580, 3717330, 3717340, 1088710, 1105500, 1105510, 1388590, 2375550,
  1235140, 2058180, 2058190,
];

const APPLY = process.argv.includes("--apply");

const client = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// Bullet lines that the backfill emitted as filler. Each pattern matches
// an entire bullet line so we drop the whole `- …` row, not just the
// inline text.
const NOISE_BULLETS = [
  /^[-*]\s*\/{2,}\s*missable\s+achievement\s+alert\s*\/{2,}\s*$/i,
  /^[-*]\s*missable\s+achievement\s+alert\s*$/i,
  /^[-*]\s*놓치기\s*쉬운\s*업적입니다\.?\s*$/,
  /^[-*]\s*이러한\s*업적은\s*스토리를\s*진행하면서\s*잠금\s*해제됩니다\.?\s*$/,
  /^[-*]\s*스토리를\s*깨면\s*legend\s*난이도가\s*잠금\s*해제됩니다\.?\s*$/i,
  /^[-*]\s*these\s+achievements?\s+(?:will\s+)?unlock\s+as\s+you\s+progress(?:\s+the\s+story)?\.?\s*$/i,
];

function scrubBulletNoise(content) {
  return content
    .split("\n")
    .filter((line) => !NOISE_BULLETS.some((p) => p.test(line)))
    .join("\n");
}

// Inline rewrites for AI-translation stiffness. Targets are conservative;
// they only fire at end-of-sentence positions to avoid mangling unrelated
// prose.
const KO_REPLACEMENTS = [
  [/도전\s*과제/g, "업적"],
  [/스토리를\s*깨면/g, "스토리를 끝내면"],
  [/잠금이?\s*해제됩니다\.?$/gmu, "잠금 해제"],
  [/완료했습니다\.?$/gmu, "완료"],
  [/획득했습니다\.?$/gmu, "획득"],
  [/달성했습니다\.?$/gmu, "달성"],
  [/(\S+?)을\s*해야\s*할\s*것이다\.?$/gmu, "$1을 해야 합니다."],
  [/(\S+?)를\s*해야\s*할\s*것이다\.?$/gmu, "$1를 해야 합니다."],
  [/사야\s*할\s*것이다\.?$/gmu, "사야 합니다."],
];

function scrubKoreanPhrasing(content) {
  let out = content;
  for (const [pattern, replacement] of KO_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out.replace(/[ \t]{2,}/g, " ");
}

// Collapse runs of >2 blank lines that scrubbing can leave behind.
function collapseBlankRuns(content) {
  return content.replace(/\n{3,}/g, "\n\n");
}

async function fetchGuides() {
  // Pull achievement ids first (filtered to RGG titles) then guide rows.
  const { data: achs, error } = await client
    .from("achievements")
    .select("id")
    .in("app_id", RGG_APP_IDS);
  if (error) throw error;
  const ids = (achs ?? []).map((row) => row.id);
  const rows = [];
  for (let i = 0; i < ids.length; i += 200) {
    const slice = ids.slice(i, i + 200);
    const { data, error: gerr } = await client
      .from("guides")
      .select("id, achievement_id, locale, content")
      .in("achievement_id", slice);
    if (gerr) throw gerr;
    if (data) rows.push(...data);
  }
  return rows;
}

const guides = await fetchGuides();
let inspected = 0;
let touched = 0;
let applied = 0;
const samples = [];

for (const guide of guides) {
  inspected++;
  const original = guide.content ?? "";
  let next = scrubBulletNoise(original);
  if (guide.locale === "koreana") {
    next = scrubKoreanPhrasing(next);
  }
  next = collapseBlankRuns(next);
  if (next === original) continue;
  touched++;
  if (samples.length < 5) {
    samples.push({
      id: guide.id,
      achievement_id: guide.achievement_id,
      locale: guide.locale,
      removed_chars: original.length - next.length,
    });
  }
  if (APPLY) {
    const { error } = await client
      .from("guides")
      .update({ content: next })
      .eq("id", guide.id);
    if (error) {
      console.error("update failed", guide.id, error.message);
      continue;
    }
    applied++;
  }
}

const report = {
  mode: APPLY ? "apply" : "dry-run",
  inspected,
  changed: touched,
  applied,
  samples,
};
process.stdout.write(JSON.stringify(report, null, 2));
process.stdout.write("\n");
