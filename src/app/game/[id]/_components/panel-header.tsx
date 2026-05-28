import type { ReactNode } from "react";

type PanelHeaderProps = {
  icon: ReactNode;
  title: string;
  meta?: ReactNode;
  description?: ReactNode;
};

// Shared header for every game-detail tab panel so achievements, missables,
// substories, and collectibles all read with the same visual rhythm: icon
// chip + title on the left, optional count/meta on the right, optional
// description block below.
export function PanelHeader({ icon, title, meta, description }: PanelHeaderProps) {
  return (
    <header className="mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display m-0 flex items-center gap-3 text-[26px] font-extrabold tracking-tight text-white md:text-[30px]">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] ring-1 ring-inset ring-[var(--accent-border)]"
          >
            {icon}
          </span>
          {title}
        </h2>
        {meta ? (
          <span className="font-mono text-[15px] text-[var(--text-tertiary)]">{meta}</span>
        ) : null}
      </div>
      {description ? (
        <p className="m-0 mt-4 max-w-[72ch] text-[16px] leading-7 text-[var(--text-secondary)]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
