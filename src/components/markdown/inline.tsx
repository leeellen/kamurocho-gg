"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
const BARE_URL_RE = /\b(https?:\/\/[^\s<>()]+[^\s<>().,;])/g;

export function renderInline(text: string, baseKey: string | number): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let segIdx = 0;

  // Markdown links first
  const link = new RegExp(LINK_RE);
  while ((match = link.exec(text)) !== null) {
    if (match.index > lastIndex) {
      out.push(...renderBareAndBold(text.slice(lastIndex, match.index), `${baseKey}-t${segIdx++}`));
    }
    out.push(
      <a
        key={`${baseKey}-a${segIdx++}`}
        href={match[2]}
        target="_blank"
        rel="noreferrer noopener"
        className="break-all text-[var(--l2)] underline decoration-[var(--l2)]/40 underline-offset-2 transition-colors hover:text-[var(--l2)] hover:decoration-[var(--l2)]"
      >
        {match[1]}
      </a>,
    );
    lastIndex = link.lastIndex;
  }
  if (lastIndex < text.length) {
    out.push(...renderBareAndBold(text.slice(lastIndex), `${baseKey}-t${segIdx++}`));
  }
  return out;
}

function renderBareAndBold(text: string, baseKey: string | number): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let last = 0;
  const re = new RegExp(BARE_URL_RE);
  let m: RegExpExecArray | null;
  let segIdx = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      parts.push(...renderBold(text.slice(last, m.index), `${baseKey}-u${segIdx++}`));
    }
    parts.push(
      <a
        key={`${baseKey}-bareu${segIdx++}`}
        href={m[1]}
        target="_blank"
        rel="noreferrer noopener"
        className="break-all text-[var(--l2)] underline decoration-[var(--l2)]/40 underline-offset-2 hover:decoration-[var(--l2)]"
      >
        {m[1]}
      </a>,
    );
    last = re.lastIndex;
  }
  if (last < text.length) {
    parts.push(...renderBold(text.slice(last), `${baseKey}-u${segIdx++}`));
  }
  return parts;
}

function renderBold(text: string, baseKey: string | number): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((seg, i) => {
    if (seg.startsWith("**") && seg.endsWith("**")) {
      return (
        <strong key={`${baseKey}-b${i}`} className="font-semibold text-[var(--text-primary)]">
          {seg.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${baseKey}-s${i}`}>{seg}</span>;
  });
}

export function GuideBody({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className?: string;
}) {
  const blocks: React.ReactNode[] = [];
  let bulletGroup: string[] = [];
  const flushBullets = (key: string) => {
    if (bulletGroup.length === 0) return;
    blocks.push(
      <ul key={`ul-${key}`} className="m-0 list-none space-y-1 pl-0">
        {bulletGroup.map((b, i) => (
          <li
            key={`li-${key}-${i}`}
            className="flex gap-2 text-[16px] leading-relaxed text-[var(--text-secondary)]"
          >
            <span className="mt-[0.55em] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--text-tertiary)]" />
            <span className="min-w-0 flex-1 break-words">{renderInline(b, `b-${key}-${i}`)}</span>
          </li>
        ))}
      </ul>,
    );
    bulletGroup = [];
  };
  paragraphs.forEach((para, i) => {
    if (para.startsWith("- ")) {
      bulletGroup.push(para.slice(2));
    } else {
      flushBullets(String(i));
      blocks.push(
        <p
          key={`p-${i}`}
          className="m-0 text-[16px] leading-relaxed text-[var(--text-secondary)]"
        >
          {renderInline(para, `p-${i}`)}
        </p>,
      );
    }
  });
  flushBullets("end");
  return <div className={cn("flex flex-col gap-2", className)}>{blocks}</div>;
}

export function InlineText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={cn("m-0 text-[16px] leading-relaxed text-[var(--text-secondary)]", className)}>
      {renderInline(text, "inline")}
    </p>
  );
}
