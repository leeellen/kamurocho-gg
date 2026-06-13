import { FiClock } from "react-icons/fi";

import type { Locale } from "@/lib/i18n";

type TimeEstimateProps = {
  locale: Locale;
  story: string;
  completion: string;
  note?: string;
  compact?: boolean;
  stacked?: boolean;
};

export function TimeEstimate({
  locale,
  story,
  completion,
  note,
  compact = false,
  stacked = false,
}: TimeEstimateProps) {
  const storyLabel = locale === "ko" ? "Story" : "Story";
  const completionLabel = locale === "ko" ? "100%" : "100%";

  if (stacked) {
    return (
      <span
        className="grid min-w-0 gap-0.5 font-mono text-[14px] leading-5 text-[var(--text-tertiary)]"
        title={note}
      >
        <span className="inline-flex min-w-0 items-center gap-1.5">
          <FiClock size={11} aria-hidden="true" className="shrink-0" />
          <span className="truncate">{storyLabel} {story}</span>
        </span>
        <span className="pl-[17px]">{completionLabel} {completion}</span>
      </span>
    );
  }

  if (compact) {
    return (
      <span
        className="inline-flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5 font-mono leading-5"
        title={note}
      >
        <FiClock size={11} aria-hidden="true" className="shrink-0" />
        <span className="whitespace-nowrap">{storyLabel} {story}</span>
        <span aria-hidden="true" className="text-white/20">/</span>
        <span className="whitespace-nowrap">{completionLabel} {completion}</span>
      </span>
    );
  }

  return (
    <span
      className="inline-flex flex-wrap items-center gap-x-2 gap-y-1"
      title={note}
    >
      <span className="inline-flex items-center gap-1 font-mono">
        <FiClock size={11} aria-hidden="true" />
        {storyLabel} {story}
      </span>
      <span aria-hidden="true" className="text-white/20">/</span>
      <span className="font-mono">
        {completionLabel} {completion}
      </span>
    </span>
  );
}
