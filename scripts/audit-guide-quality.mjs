#!/usr/bin/env node
// Audit KO guide rows for quality smells: missing source, low confidence,
// AI-translation tells, suspiciously short content, etc. Outputs a JSON
// report to stdout so it can be piped into jq or saved for follow-up
// re-crawling. Read-only.
//
// Usage:
//   node scripts/audit-guide-quality.mjs [--limit=200]

import { config as loadEnv } from "node:process";
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

void loadEnv;

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

const client = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// Hard-coded RGG-covered app_ids — keep in sync with src/lib/kamurocho-content.ts.
const RGG_APP_IDS = [
  2988580, 3717330, 3717340, 1088710, 1105500, 1105510, 1388590, 2375550,
  1235140, 2058180, 2058190,
];

const NOISE_PATTERNS = [
  /놓치기\s*쉬운\s*업적입니다\.?/,
  /\/{2,}\s*missable\s+achievement\s+alert\s*\/{2,}/i,
  /이러한\s*업적은\s*스토리를\s*진행하면서\s*잠금\s*해제됩니다\.?/,
  /스토리를\s*깨면\s*legend\s*난이도가\s*잠금\s*해제됩니다\.?/i,
];

const TRANSLATION_SMELLS = [
  /도전\s*과제/, // should be 업적
  /~?사야\s*할\s*것이다/,
  /~?해야\s*할\s*것이다/,
  /완료했습니다\.?$/m,
  /획득했습니다\.?$/m,
];

async function fetchAchievementIds() {
  const { data, error } = await client
    .from("achievements")
    .select("id, app_id, api_name, display_name")
    .in("app_id", RGG_APP_IDS);
  if (error) throw error;
  return data ?? [];
}

async function fetchGuidesFor(ids) {
  const guides = [];
  for (let i = 0; i < ids.length; i += 200) {
    const slice = ids.slice(i, i + 200);
    const { data, error } = await client
      .from("guides")
      .select("achievement_id, locale, content, source_url, confidence")
      .in("achievement_id", slice);
    if (error) throw error;
    if (data) guides.push(...data);
  }
  return guides;
}

function analyze(achievements, guides) {
  const byAchievement = new Map();
  for (const guide of guides) {
    const list = byAchievement.get(guide.achievement_id) ?? [];
    list.push(guide);
    byAchievement.set(guide.achievement_id, list);
  }

  const issues = {
    missing_guide: [],
    missing_ko: [],
    missing_source: [],
    low_confidence: [],
    noisy_lines: [],
    translation_smells: [],
    short_content: [],
  };

  for (const ach of achievements) {
    const rows = byAchievement.get(ach.id) ?? [];
    if (rows.length === 0) {
      issues.missing_guide.push({ id: ach.id, name: ach.display_name, app: ach.app_id });
      continue;
    }
    const ko = rows.find((r) => r.locale === "koreana");
    const en = rows.find((r) => r.locale === "english");

    if (!ko) {
      issues.missing_ko.push({ id: ach.id, name: ach.display_name, app: ach.app_id });
    }

    for (const row of rows) {
      const confidence = Number(row.confidence ?? 1);
      if (!row.source_url) {
        issues.missing_source.push({
          id: ach.id,
          name: ach.display_name,
          locale: row.locale,
        });
      }
      if (Number.isFinite(confidence) && confidence < 0.6) {
        issues.low_confidence.push({
          id: ach.id,
          name: ach.display_name,
          locale: row.locale,
          confidence,
        });
      }
      const content = row.content ?? "";
      if (content.trim().length < 80) {
        issues.short_content.push({
          id: ach.id,
          name: ach.display_name,
          locale: row.locale,
          length: content.length,
        });
      }
      const noises = NOISE_PATTERNS.filter((p) => p.test(content)).map((p) => p.source);
      if (noises.length > 0) {
        issues.noisy_lines.push({
          id: ach.id,
          name: ach.display_name,
          locale: row.locale,
          patterns: noises,
        });
      }
      if (row.locale === "koreana") {
        const smells = TRANSLATION_SMELLS.filter((p) => p.test(content)).map((p) => p.source);
        if (smells.length > 0) {
          issues.translation_smells.push({
            id: ach.id,
            name: ach.display_name,
            patterns: smells,
          });
        }
      }
    }
  }

  return issues;
}

const limitArg = process.argv.find((a) => a.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : 25;

const achievements = await fetchAchievementIds();
const guides = await fetchGuidesFor(achievements.map((a) => a.id));
const issues = analyze(achievements, guides);

const summary = {
  totals: {
    achievements: achievements.length,
    guides: guides.length,
    ko_guides: guides.filter((g) => g.locale === "koreana").length,
    en_guides: guides.filter((g) => g.locale === "english").length,
  },
  counts: Object.fromEntries(
    Object.entries(issues).map(([key, value]) => [key, value.length]),
  ),
  samples: Object.fromEntries(
    Object.entries(issues).map(([key, value]) => [key, value.slice(0, limit)]),
  ),
};

process.stdout.write(JSON.stringify(summary, null, 2));
