"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { Card } from "@/components/ui/card";
import { GameCover } from "@/components/ui/game-cover";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/cn";
import type { LibraryGameView } from "@/lib/unlokd-data";

type FilterKey = "all" | "progress" | "completed" | "unstarted";
type SortKey = "recent" | "progress" | "name" | "playtime";

export function LibraryBrowser({
  games,
  labels,
}: {
  games: LibraryGameView[];
  labels: {
    achievements: string;
    guides: string;
    nextAction: string;
    ready: string;
    noGuides: string;
    sortBy: string;
    filterAll: string;
    filter100: string;
    filterProgress: string;
    filterUnstarted: string;
    sortRecent: string;
    sortProgress: string;
    sortName: string;
    sortPlaytime: string;
    empty: string;
    emptySub: string;
  };
}) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [sort, setSort] = useState<SortKey>("recent");

  const counts = useMemo(() => ({
    all: games.length,
    progress: games.filter((g) => g.completion > 0 && g.completion < 100).length,
    completed: games.filter((g) => g.completion === 100).length,
    unstarted: games.filter((g) => g.completion === 0).length,
  }), [games]);

  const filtered = useMemo(() => {
    let list = games;
    if (filter === "progress")  list = list.filter((g) => g.completion > 0 && g.completion < 100);
    if (filter === "completed") list = list.filter((g) => g.completion === 100);
    if (filter === "unstarted") list = list.filter((g) => g.completion === 0);
    const sorted = [...list];
    if (sort === "progress") sorted.sort((a, b) => b.completion - a.completion);
    if (sort === "name")     sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "playtime") {
      const hours = (p: string) => Number(p.match(/(\d+)h/)?.[1] ?? 0);
      sorted.sort((a, b) => hours(b.playtime) - hours(a.playtime));
    }
    return sorted;
  }, [games, filter, sort]);

  const chips: { key: FilterKey; label: string; count: number }[] = [
    { key: "all",       label: labels.filterAll,       count: counts.all },
    { key: "progress",  label: labels.filterProgress,  count: counts.progress },
    { key: "completed", label: labels.filter100,       count: counts.completed },
    { key: "unstarted", label: labels.filterUnstarted, count: counts.unstarted },
  ];

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {chips.map((c) => {
          const on = filter === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors cursor-pointer",
                on
                  ? "border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent)]"
                  : "border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:bg-[var(--bg-raised)]",
              )}
            >
              {c.label}
              <span className="font-mono text-[11px] opacity-70">{c.count}</span>
            </button>
          );
        })}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-[var(--text-tertiary)]">{labels.sortBy}</span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="cursor-pointer appearance-none rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3.5 py-2 pr-8 text-sm font-medium text-[var(--text-primary)] focus:outline-none"
            >
              <option value="recent">{labels.sortRecent}</option>
              <option value="progress">{labels.sortProgress}</option>
              <option value="name">{labels.sortName}</option>
              <option value="playtime">{labels.sortPlaytime}</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" size={14} />
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((game) => (
            <Link
              key={game.appId}
              href={`/game/${game.appId}`}
              className="group block no-underline"
            >
              <Card className="overflow-hidden p-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[var(--accent-border)] group-hover:shadow-lg">
                <div className="relative">
                  <GameCover
                    appId={game.appId}
                    ratio="header"
                    imgIconUrl={game.imgIconUrl}
                    headerUrl={game.headerUrl}
                    capsuleUrl={game.capsuleUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between gap-2">
                    <span className="truncate text-[15px] font-bold text-white drop-shadow-md">{game.name}</span>
                    <span className={cn(
                      "shrink-0 rounded-md px-2 py-0.5 font-mono text-[12px] font-bold tabular-nums",
                      game.completion === 100
                        ? "bg-[var(--success)] text-[var(--text-inverse)]"
                        : "bg-black/70 text-[var(--accent)]",
                    )}>
                      {game.completion}%
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-3.5 pt-3">
                  <Progress value={game.completion} className="mb-2.5 h-[3px]" />
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="font-mono text-[var(--text-secondary)]">
                      {game.completedAchievements}/{game.totalAchievements}{" "}
                      <span className="text-[var(--text-tertiary)]">{labels.achievements}</span>
                    </span>
                    <span className="font-mono text-[var(--text-tertiary)]">{game.playtime}</span>
                  </div>
                  <div className="mt-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)]/80 px-3 py-2.5">
                    <div className="mb-1.5 flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
                      <span>{labels.nextAction}</span>
                      <span className="font-mono normal-case text-[var(--accent)]">
                        {game.guidedAchievements}/{game.totalAchievements} {labels.guides}
                      </span>
                    </div>
                    {game.nextGuide ? (
                      <>
                        <div className="truncate text-[13px] font-semibold text-[var(--text-primary)]">
                          {game.nextGuide.achievementName}
                        </div>
                        <div className="mt-1 line-clamp-2 text-[12px] leading-5 text-[var(--text-secondary)]">
                          {game.nextGuide.summary}
                        </div>
                      </>
                    ) : (
                      <div className="text-[12px] leading-5 text-[var(--text-tertiary)]">
                        {game.guidedAchievements > 0 ? labels.ready : labels.noGuides}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="px-6 py-20 text-center text-[var(--text-secondary)]">
          <div className="mb-2 text-lg font-bold">{labels.empty}</div>
          <div className="text-sm text-[var(--text-tertiary)]">{labels.emptySub}</div>
        </div>
      )}
    </>
  );
}
