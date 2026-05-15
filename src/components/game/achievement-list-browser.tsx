"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FiCheck } from "react-icons/fi";

import { AchievementIcon } from "@/components/ui/achievement-icon";
import { cn } from "@/lib/cn";
import type { Achievement } from "@/lib/mock-data";

type FilterKey = "all" | "unlocked" | "locked";

const RARITY_COLOR: Record<string, string> = {
  common: "var(--rarity-common)",
  uncommon: "var(--rarity-uncommon)",
  rare: "var(--rarity-rare)",
  "very rare": "var(--rarity-very-rare)",
  ultra: "var(--rarity-ultra)",
};

function rarityColor(rarity: string) {
  return RARITY_COLOR[rarity?.toLowerCase()] ?? "var(--text-secondary)";
}

export function AchievementListBrowser({
  achievements,
  gameSlug,
  labels,
}: {
  achievements: Achievement[];
  gameSlug: string;
  labels: {
    filterAll: string;
    filterUnlocked: string;
    filterLocked: string;
    unlockedSection: string;
    lockedSection: string;
  };
}) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const { unlocked, locked, counts } = useMemo(() => {
    const u = achievements.filter((a) => a.unlocked);
    const l = achievements.filter((a) => !a.unlocked);
    return { unlocked: u, locked: l, counts: { all: achievements.length, unlocked: u.length, locked: l.length } };
  }, [achievements]);

  const showUnlocked = filter !== "locked" && unlocked.length > 0;
  const showLocked = filter !== "unlocked" && locked.length > 0;

  const tabs: { key: FilterKey; label: string; count: number }[] = [
    { key: "all",      label: labels.filterAll,      count: counts.all },
    { key: "unlocked", label: labels.filterUnlocked, count: counts.unlocked },
    { key: "locked",   label: labels.filterLocked,   count: counts.locked },
  ];

  return (
    <>
      <div className="flex gap-1.5 border-b border-[var(--border-subtle)] px-6 pb-5 md:px-9">
        {tabs.map((t) => {
          const on = filter === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                on
                  ? "border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent)]"
                  : "border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]",
              )}
            >
              {t.label}
              <span className="font-mono text-[10px] opacity-70">{t.count}</span>
            </button>
          );
        })}
      </div>

      <div className="px-6 py-5 md:px-9">
        {showUnlocked && (
          <section className="mb-8">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[var(--l3)]">
              {labels.unlockedSection} · {unlocked.length}
            </div>
            <div className="flex flex-col gap-2">
              {unlocked.map((a) => (
                <Link
                  key={a.slug}
                  href={`/game/${gameSlug}/achievement/${a.slug}`}
                  className="flex items-center gap-3 rounded-r-[10px] border border-[var(--l3-border)] border-l-2 border-l-[var(--l3)] bg-[var(--bg-elevated)] px-3.5 py-3 no-underline transition-colors hover:bg-[var(--bg-raised)]"
                >
                  <AchievementIcon src={a.iconUrl} size={44} unlocked />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-[var(--text-primary)]">{a.name}</div>
                    {a.description && (
                      <div className="truncate text-xs text-[var(--text-tertiary)]">{a.description}</div>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <span className="font-mono text-[11px] font-bold" style={{ color: rarityColor(a.difficulty) }}>
                      {a.rarity}%
                    </span>
                    <FiCheck size={12} className="text-[var(--l3)]" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {showLocked && (
          <section>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
              {labels.lockedSection} · {locked.length}
            </div>
            <div className="flex flex-col gap-2">
              {locked.map((a) => (
                <Link
                  key={a.slug}
                  href={`/game/${gameSlug}/achievement/${a.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3.5 py-3 no-underline transition-colors hover:bg-[var(--bg-raised)]"
                >
                  <AchievementIcon src={a.iconGrayUrl || a.iconUrl} size={44} unlocked={false} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-[var(--text-secondary)]">{a.name}</div>
                    {a.description && (
                      <div className="truncate text-xs text-[var(--text-tertiary)]">{a.description}</div>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-[11px] font-bold" style={{ color: rarityColor(a.difficulty) }}>
                    {a.rarity}%
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
