// Inject a rendered category fragment into a game's collectibles TS file.
// Usage: node inject.mjs <ts-file> <slug> <fragment-file>
// Replaces existing category with same slug, or appends before categories array close.
import { readFileSync, writeFileSync } from "node:fs";

const tsPath = process.argv[2];
const slug = process.argv[3];
const fragPath = process.argv[4];
if (!tsPath || !slug || !fragPath) {
  console.error("Usage: node inject.mjs <ts-file> <slug> <fragment-file>");
  process.exit(1);
}

const ts = readFileSync(tsPath, "utf8");
const fragRaw = readFileSync(fragPath, "utf8").trimEnd();
const frag = fragRaw.replace(/\n$/, "");

const escSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// Match block at either 2-space or 4-space indent (legacy stub vs new fragments).
const slugRe2 = new RegExp(`\\n  \\{\\s*\\n    slug: "${escSlug}"[\\s\\S]+?\\n  \\},`);
const slugRe4 = new RegExp(`\\n    \\{\\s*\\n      slug: "${escSlug}"[\\s\\S]+?\\n    \\},`);

if (slugRe2.test(ts)) {
  const out = ts.replace(slugRe2, `\n${frag}`);
  writeFileSync(tsPath, out);
  console.log(`replaced existing slug "${slug}" in ${tsPath}`);
} else if (slugRe4.test(ts)) {
  // Convert 4-indent fragment to match — keep frag as-is (2-indent block) by replacing
  // the legacy block in place; final formatter just gets mixed indent which TS accepts.
  const out = ts.replace(slugRe4, `\n${frag}`);
  writeFileSync(tsPath, out);
  console.log(`replaced legacy stub slug "${slug}" in ${tsPath}`);
} else {
  // Append before "  ],\n};\n"
  const endRe = /\n  \],\n\};\s*\n?$/;
  if (!endRe.test(ts)) {
    console.error("could not find categories array close");
    process.exit(1);
  }
  const out = ts.replace(endRe, `\n${frag}\n  ],\n};\n`);
  writeFileSync(tsPath, out);
  console.log(`appended slug "${slug}" to ${tsPath}`);
}
