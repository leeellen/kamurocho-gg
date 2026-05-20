import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const findings = JSON.parse(readFileSync("/tmp/audit/findings.json", "utf8"));

const OUT_DIR = "/tmp/audit/fix";
mkdirSync(OUT_DIR, { recursive: true });

const candidates = findings.filter(
  (f) => f.status === "all-numbers-missing" && f.source_text,
);

const batch = candidates.map((f) => ({
  guide_id: f.guide_id,
  game: f.game,
  display_name: f.display_name,
  source_url: f.source_url,
  source_text: f.source_text,
  db_content: f.db_content,
  notes: f.notes,
}));

writeFileSync(resolve(OUT_DIR, "fix-batch.json"), JSON.stringify(batch, null, 2));
console.log(`exported ${batch.length} guides to fix`);
