import { escTs, lit } from "./utils.mjs";

function renderChoice(c) {
  const lines = [
    `            { prompt: ${lit(c.prompt.ko, c.prompt.en)}, correct: ${lit(c.correct.ko, c.correct.en)}`,
  ];
  if (c.note) lines.push(`, note: ${lit(c.note.ko, c.note.en)}`);
  lines.push(` },`);
  return lines.join("");
}

function renderStep(s, i) {
  const parts = [`body: ${lit(s.body.ko, s.body.en)}`];
  if (s.image) parts.push(`image: ${escTs(s.image)}`);
  return `          { ${parts.join(", ")} },`;
}

function renderItem(item) {
  const lines = [
    `        {`,
    `          number: ${item.number},`,
    `          title: ${lit(item.title.ko, item.title.en)},`,
  ];
  if (item.chapter) lines.push(`          chapter: ${lit(item.chapter.ko, item.chapter.en)},`);
  if (item.protagonist) lines.push(`          protagonist: ${lit(item.protagonist.ko, item.protagonist.en)},`);
  lines.push(`          location: ${lit(item.location.ko, item.location.en)},`);
  lines.push(`          trigger: ${lit(item.trigger.ko, item.trigger.en)},`);
  if (item.body) lines.push(`          body: ${lit(item.body.ko, item.body.en)},`);
  if (item.steps?.length) {
    lines.push(`          steps: [`);
    for (const s of item.steps) lines.push(renderStep(s));
    lines.push(`          ],`);
  }
  if (item.choices?.length) {
    lines.push(`          choices: [`);
    for (const c of item.choices) lines.push(renderChoice(c));
    lines.push(`          ],`);
  }
  if (item.reward) lines.push(`          reward: ${lit(item.reward.ko, item.reward.en)},`);
  if (item.prereq) lines.push(`          prereq: ${lit(item.prereq.ko, item.prereq.en)},`);
  lines.push(`        },`);
  return lines.join("\n");
}

export function renderSubstoriesFile({ appId, exportName, summary, source, items }) {
  const sorted = [...items].sort((a, b) => a.number - b.number || (a._order ?? 0) - (b._order ?? 0));
  const itemBlocks = sorted.map(renderItem).join("\n");
  return `import type { SubstoriesData } from "./types";

export const ${exportName}: SubstoriesData = {
  appId: ${appId},
  summary: ${lit(summary.ko, summary.en)},
  source: { label: ${escTs(source.label)}, url: ${escTs(source.url)} },
  groups: [
    {
      title: { ko: "전체 (게임 순서)", en: "All substories (in-game order)" },
      items: [
${itemBlocks}
      ],
    },
  ],
};
`;
}
