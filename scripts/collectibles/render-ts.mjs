// Renders a CollectibleCategory[] TS fragment from a uniform JSON shape.
// Input JSON (Array<Category>) where each Category is:
// {
//   slug, title:{ko,en}, summary:{ko,en},
//   tips?: [{ko,en}],
//   source?: { label, url },
//   groups?: [{ title:{ko,en}, video?: youtubeURL, items: Item[] }],
//   items?: Item[]
// }
// Item: { number, title?:{ko,en}, location:{ko,en}, body?:{ko,en}, steps?:[{body:{ko,en}}], reward?:{ko,en}, prereq?:{ko,en}, image?, video? }
import { readFileSync, writeFileSync } from "node:fs";

function lit(o) {
  if (!o) return "null";
  return `{ ko: ${JSON.stringify(o.ko)}, en: ${JSON.stringify(o.en)} }`;
}

function renderStep(step) {
  const parts = [];
  if (step.index !== undefined) parts.push(`index: ${step.index}`);
  parts.push(`body: ${lit(step.body)}`);
  if (step.image) parts.push(`image: ${JSON.stringify(step.image)}`);
  return `        { ${parts.join(", ")} },`;
}

function renderItem(item) {
  const lines = [`      {`, `        number: ${item.number},`];
  if (item.title) lines.push(`        title: ${lit(item.title)},`);
  if (item.location) lines.push(`        location: ${lit(item.location)},`);
  if (item.body) lines.push(`        body: ${lit(item.body)},`);
  if (item.reward) lines.push(`        reward: ${lit(item.reward)},`);
  if (item.prereq) lines.push(`        prereq: ${lit(item.prereq)},`);
  if (item.steps?.length) {
    lines.push(`        steps: [`);
    for (const s of item.steps) lines.push(renderStep(s));
    lines.push(`        ],`);
  }
  if (item.image) lines.push(`        image: ${JSON.stringify(item.image)},`);
  if (item.video) lines.push(`        video: ${JSON.stringify(item.video)},`);
  lines.push(`      },`);
  return lines.join("\n");
}

function renderGroup(group) {
  const items = group.items.map(renderItem).join("\n");
  const lines = [`    {`, `      title: ${lit(group.title)},`];
  if (group.mapImage) lines.push(`      mapImage: ${JSON.stringify(group.mapImage)},`);
  if (group.video) lines.push(`      video: ${JSON.stringify(group.video)},`);
  lines.push(`      items: [`, items, `      ],`, `    },`);
  return lines.join("\n");
}

function renderTips(arr) {
  return arr.map((t) => `        ${lit(t)},`).join("\n");
}

export function renderCategory(cat) {
  const lines = [`  {`, `    slug: ${JSON.stringify(cat.slug)},`, `    title: ${lit(cat.title)},`];
  lines.push(`    summary: ${lit(cat.summary)},`);
  if (cat.tips?.length) {
    lines.push(`    tips: [`);
    lines.push(renderTips(cat.tips));
    lines.push(`    ],`);
  }
  if (cat.source) {
    lines.push(`    source: { label: ${JSON.stringify(cat.source.label)}, url: ${JSON.stringify(cat.source.url)} },`);
  }
  if (cat.groups?.length) {
    lines.push(`    groups: [`);
    for (const g of cat.groups) lines.push(renderGroup(g));
    lines.push(`    ],`);
  }
  if (cat.items?.length) {
    lines.push(`    items: [`);
    for (const it of cat.items) lines.push(renderItem(it));
    lines.push(`    ],`);
  }
  lines.push(`  },`);
  return lines.join("\n");
}

if (process.argv[2]) {
  const data = JSON.parse(readFileSync(process.argv[2], "utf8"));
  const out = (Array.isArray(data) ? data : [data]).map(renderCategory).join("\n");
  if (process.argv[3]) writeFileSync(process.argv[3], out);
  else process.stdout.write(out);
}
