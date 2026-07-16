#!/usr/bin/env node
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, "../../src/lib/substories");

// Hiragana/katakana (except middle dot ・) and kanji — not Korean-only punctuation
const JA = /[\u3040-\u30fa\u30fc-\u30ff\u4e00-\u9fff]/;
const GARBAGE = /공유하기|TAG\s*:|저작자표시|카테고리의 다른 글|data-description/;

let totalIssues = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith(".ts") && f !== "types.ts" && f !== "index.ts")) {
  const s = readFileSync(join(DIR, file), "utf8");
  let n = 0;
  for (const m of s.matchAll(/ko: "((?:\\.|[^"\\])*)"/g)) {
    const val = m[1].replace(/\\n/g, "\n").replace(/\\"/g, '"');
    if (JA.test(val) || GARBAGE.test(val)) n++;
  }
  if (n > 0) console.log(`${file}: ${n} ko fields with JP/garbage`);
  totalIssues += n;
}
console.log(totalIssues === 0 ? "OK — no JP/garbage in ko fields" : `TOTAL: ${totalIssues} issues`);
