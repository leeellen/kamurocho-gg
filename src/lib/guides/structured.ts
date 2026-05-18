export type GuideReference = {
  label: string;
  url: string;
};

export type StructuredGuide = {
  summary: string | null;
  statsLine: string | null;
  steps: string[];
  tips: string[];
  references: GuideReference[];
};

const MARKDOWN_LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
const BARE_URL_RE = /\b(https?:\/\/[^\s<>()]+[^\s<>().,;])/g;

function cleanInlineMarkdown(value: string) {
  return value.replace(/\*\*/g, "").trim();
}

function isReferenceLine(value: string) {
  return /^source:/i.test(value) || /^references?:/i.test(value);
}

function isTipsHeader(value: string) {
  return /^\*\*(tips|watch for|팁|주의할 점)\*\*:?$/i.test(value);
}

function isStepsHeader(value: string) {
  return /^\*\*(do this next|steps|next steps|지금 해야 할 일|단계별 안내)\*\*:?$/i.test(value);
}

function isBoilerplateLine(value: string) {
  return /search ".+ guide"/i.test(value) || /검색해 보세요/.test(value);
}

function extractReferences(line: string) {
  const refs: GuideReference[] = [];

  for (const match of line.matchAll(MARKDOWN_LINK_RE)) {
    refs.push({ label: match[1].trim(), url: match[2].trim() });
  }

  if (refs.length === 0) {
    for (const match of line.matchAll(BARE_URL_RE)) {
      refs.push({ label: match[1].trim(), url: match[1].trim() });
    }
  }

  return refs;
}

export function structureGuide(paragraphs: string[], fallbackSource?: string | null): StructuredGuide {
  const lines = paragraphs.map((line) => line.trim()).filter(Boolean);
  const references: GuideReference[] = [];
  const referenceUrls = new Set<string>();
  const steps: string[] = [];
  const tips: string[] = [];
  let summary: string | null = null;
  let statsLine: string | null = null;
  let section: "steps" | "tips" | null = null;

  for (const rawLine of lines) {
    const line = cleanInlineMarkdown(rawLine);
    if (!line || isBoilerplateLine(line)) continue;

    if (/^(difficulty|난이도)\s*:/i.test(line)) {
      statsLine = line;
      continue;
    }

    if (isStepsHeader(rawLine)) {
      section = "steps";
      continue;
    }

    if (isTipsHeader(rawLine)) {
      section = "tips";
      continue;
    }

    if (
      isReferenceLine(line) ||
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/.test(line) ||
      /\b(https?:\/\/[^\s<>()]+[^\s<>().,;])/.test(line)
    ) {
      for (const ref of extractReferences(line)) {
        if (referenceUrls.has(ref.url)) continue;
        referenceUrls.add(ref.url);
        references.push(ref);
      }
      continue;
    }

    const bullet = line.startsWith("- ") ? line.slice(2).trim() : null;
    if (bullet) {
      if (section === "tips") {
        tips.push(bullet);
      } else {
        steps.push(bullet);
      }
      continue;
    }

    if (!summary) {
      summary = line;
      continue;
    }

    if (section === "tips") {
      tips.push(line);
      continue;
    }

    steps.push(line);
  }

  if (fallbackSource && /^https?:\/\//.test(fallbackSource) && !referenceUrls.has(fallbackSource)) {
    references.push({ label: fallbackSource, url: fallbackSource });
  }

  return {
    summary,
    statsLine,
    steps,
    tips,
    references,
  };
}

export function getGuidePreview(guide: StructuredGuide, fallback: string) {
  return guide.steps[0] || guide.tips[0] || guide.summary || fallback;
}
