import { readFileSync, writeFileSync } from "node:fs";

const findings = JSON.parse(readFileSync("/tmp/audit/findings.json", "utf8"));

const byStatus = new Map();
for (const f of findings) {
  if (!byStatus.has(f.status)) byStatus.set(f.status, []);
  byStatus.get(f.status).push(f);
}

const byGame = new Map();
for (const f of findings) {
  if (!byGame.has(f.game)) byGame.set(f.game, { match: 0, total: 0, issues: [] });
  const entry = byGame.get(f.game);
  entry.total += 1;
  if (f.status === "match") entry.match += 1;
  else entry.issues.push(f);
}

const lines = [];
lines.push("# 스팀 커뮤니티 가이드 ↔ DB 가이드 1:1 매칭 감사 보고");
lines.push("");
lines.push(`전체 한국어 가이드: **${findings.length}**`);
lines.push("");
lines.push("## 상태 요약");
lines.push("");
lines.push("| 상태 | 건수 | 설명 |");
lines.push("|---|---:|---|");
const desc = {
  match: "DB 내용이 소스의 핵심 수치/명사를 보존함",
  "all-numbers-missing":
    "소스에 등장하는 수치(회수·횟수·매치 수 등)가 DB 가이드에 누락. 대부분 '모두'·'끝까지' 같은 표현으로 일반화된 경우",
  "no-source-section":
    "소스 가이드가 해당 업적을 별도 섹션으로 다루지 않음(섹션 단위 prose만 있음). DB는 업적 메타데이터 기반으로 자체 생성",
  "no-source-html":
    "소스가 Steam 외 사이트(PowerPyx/GameFAQs/nightlygamingbinge) — HTML 캐시 미보유",
};
for (const [s, arr] of byStatus) {
  lines.push(`| ${s} | ${arr.length} | ${desc[s] ?? "—"} |`);
}
lines.push("");

lines.push("## 게임별 매칭률");
lines.push("");
lines.push("| 게임 | match | 전체 | 매칭률 |");
lines.push("|---|---:|---:|---:|");
const sorted = [...byGame.entries()].sort(
  (a, b) => b[1].match / b[1].total - a[1].match / a[1].total,
);
for (const [game, entry] of sorted) {
  const pct = ((entry.match / entry.total) * 100).toFixed(1);
  lines.push(`| ${game} | ${entry.match} | ${entry.total} | ${pct}% |`);
}
lines.push("");

lines.push("## 주요 이슈 (all-numbers-missing) 상위 표본");
lines.push("");
const numIssues = byStatus.get("all-numbers-missing") ?? [];
numIssues.sort((a, b) => a.game.localeCompare(b.game));
for (const f of numIssues.slice(0, 30)) {
  lines.push(`### ${f.game} — ${f.display_name}`);
  lines.push("");
  lines.push(`소스: ${f.source_url}`);
  lines.push("");
  lines.push(`소스 누락 수치: \`${f.notes}\``);
  lines.push("");
  lines.push("```");
  lines.push("[source]");
  lines.push(f.source_text?.replace(/\n+/g, " ").trim() ?? "");
  lines.push("");
  lines.push("[db]");
  lines.push(f.db_content?.replace(/\n+/g, " ").trim() ?? "");
  lines.push("```");
  lines.push("");
}

lines.push("## no-source-section 표본");
lines.push("");
const noSection = byStatus.get("no-source-section") ?? [];
for (const f of noSection.slice(0, 15)) {
  lines.push(`- **${f.game}** / ${f.display_name} (api: ${f.api_name})`);
}
lines.push("");

lines.push("## no-source-html (외부 소스)");
lines.push("");
for (const f of byStatus.get("no-source-html") ?? []) {
  lines.push(`- ${f.game} / ${f.display_name} → ${f.source_url}`);
}
lines.push("");

writeFileSync("/tmp/audit/REPORT.md", lines.join("\n"));
console.log("wrote /tmp/audit/REPORT.md");
console.log(`match rate: ${((findings.filter(f=>f.status==='match').length/findings.length)*100).toFixed(1)}%`);
