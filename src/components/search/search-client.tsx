"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiClock, FiSearch, FiX } from "react-icons/fi";

import { AchievementIcon } from "@/components/ui/achievement-icon";
import { Card } from "@/components/ui/card";
import { GameCover } from "@/components/ui/game-cover";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/cn";

type GameHit = {
  appId: number;
  name: string;
  headerUrl: string | null;
  capsuleUrl: string | null;
  imgIconUrl: string | null;
  completion: number;
};

type AchHit = {
  id: number;
  appId: number;
  apiName: string;
  name: string;
  iconUrl: string | null;
  iconGrayUrl: string | null;
  rarity: number;
  gameName: string;
  gameAppId: number;
};

type Suggestion = { appId: number; name: string };

type Labels = {
  placeholder: string;
  hero: string;
  recent: string;
  quickJump: string;
  empty: string;
  emptyHint: string;
  gamesHeader: string;
  achievementsHeader: string;
  clearRecent: string;
  achievements: string;
};

const RECENT_KEY = "unlokd:recent-searches";

export function SearchClient({
  labels,
  quickGames,
}: {
  labels: Labels;
  quickGames: Suggestion[];
}) {
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const [games, setGames] = useState<GameHit[]>([]);
  const [achievements, setAchievements] = useState<AchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ⌘/Ctrl-K focus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Load recent searches
  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw) as string[]);
    } catch {
      // ignore
    }
  }, []);

  // Debounce input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q.trim()), 220);
    return () => clearTimeout(t);
  }, [q]);

  // Fetch results
  useEffect(() => {
    if (!debouncedQ) {
      setGames([]);
      setAchievements([]);
      setLoading(false);
      return;
    }
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(debouncedQ)}`, { signal: ctrl.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { games: GameHit[]; achievements: AchHit[] }) => {
        setGames(data.games ?? []);
        setAchievements(data.achievements ?? []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setGames([]);
          setAchievements([]);
        }
      })
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [debouncedQ]);

  const persistRecent = (term: string) => {
    const next = [term, ...recent.filter((r) => r !== term)].slice(0, 8);
    setRecent(next);
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const clearRecent = () => {
    setRecent([]);
    try {
      localStorage.removeItem(RECENT_KEY);
    } catch {
      // ignore
    }
  };

  const hasQuery = debouncedQ.length > 0;
  const showEmpty = hasQuery && !loading && games.length === 0 && achievements.length === 0;
  const showInitial = !hasQuery;

  const onResultClick = () => {
    if (debouncedQ) persistRecent(debouncedQ);
  };

  const filteredQuickGames = useMemo(
    () => quickGames.filter((g) => g.name).slice(0, 8),
    [quickGames],
  );

  return (
    <>
      {/* Header + Search bar */}
      <div className="mb-6">
        <h1 className="m-0 mb-4 text-[32px] font-extrabold tracking-tight text-[var(--text-primary)] md:text-[36px]">
          {labels.hero}
        </h1>
        <div className="flex h-14 items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-4 focus-within:border-[var(--accent-border)]">
          <FiSearch className="text-[var(--accent)]" size={18} />
          <input
            ref={inputRef}
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={labels.placeholder}
            className="flex-1 border-none bg-transparent text-[15px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              className="rounded-md p-1 text-[var(--text-tertiary)] hover:bg-[var(--bg-raised)] hover:text-[var(--text-primary)]"
              aria-label="clear"
            >
              <FiX size={16} />
            </button>
          )}
          <kbd className="hidden rounded-md border border-[var(--border-subtle)] bg-[var(--bg-raised)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-tertiary)] md:inline-block">
            ⌘K
          </kbd>
        </div>
        {loading && (
          <div className="mt-2 font-mono text-[11px] text-[var(--text-tertiary)]">…</div>
        )}
      </div>

      {/* Initial state — recents + quick jumps */}
      {showInitial && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr]">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="m-0 text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                {labels.recent}
              </h2>
              {recent.length > 0 && (
                <button
                  onClick={clearRecent}
                  className="text-[11px] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                >
                  {labels.clearRecent}
                </button>
              )}
            </div>
            {recent.length === 0 ? (
              <div className="rounded-xl border border-dashed border-[var(--border-subtle)] px-4 py-6 text-center text-sm text-[var(--text-tertiary)]">
                —
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {recent.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setQ(term);
                      inputRef.current?.focus();
                    }}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                  >
                    <FiClock size={13} className="text-[var(--text-tertiary)]" />
                    {term}
                  </button>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="mb-3 text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
              {labels.quickJump}
            </h2>
            <div className="grid grid-cols-1 gap-1">
              {filteredQuickGames.map((g, i) => (
                <Link
                  key={g.appId}
                  href={`/game/${g.appId}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm no-underline transition-colors hover:bg-[var(--bg-elevated)]"
                >
                  <span className="w-6 shrink-0 font-mono text-[11px] tabular-nums text-[var(--text-tertiary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="truncate text-[var(--text-primary)]">{g.name}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Empty results */}
      {showEmpty && (
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-6 py-14 text-center">
          <div className="mb-1.5 text-base font-semibold text-[var(--text-primary)]">
            {labels.empty}
          </div>
          <div className="text-sm text-[var(--text-tertiary)]">{labels.emptyHint}</div>
        </div>
      )}

      {/* Results */}
      {hasQuery && !showEmpty && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.4fr_1fr]">
          {/* Games */}
          {games.length > 0 && (
            <section>
              <h2 className="mb-3 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                {labels.gamesHeader}
                <span className="font-mono text-[11px] tabular-nums text-[var(--text-tertiary)]">
                  {games.length}
                </span>
              </h2>
              <div className="flex flex-col gap-2.5">
                {games.map((g) => (
                  <Link
                    key={g.appId}
                    href={`/game/${g.appId}`}
                    onClick={onResultClick}
                    className="group block no-underline"
                  >
                    <Card className="flex overflow-hidden p-0 transition-colors group-hover:border-[var(--accent-border)]">
                      <div className="h-[68px] w-[145px] shrink-0 overflow-hidden">
                        <GameCover
                          appId={g.appId}
                          ratio="header"
                          imgIconUrl={g.imgIconUrl}
                          headerUrl={g.headerUrl}
                          capsuleUrl={g.capsuleUrl}
                          style={{ height: "100%", aspectRatio: "auto" }}
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-center gap-1.5 px-4 py-2.5">
                        <div className="truncate text-[14px] font-semibold text-[var(--text-primary)]">
                          {g.name}
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Progress value={g.completion} className="h-[3px] flex-1" />
                          <span className="font-mono text-[12px] font-bold tabular-nums text-[var(--accent)]">
                            {g.completion}%
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <section>
              <h2 className="mb-3 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                {labels.achievementsHeader}
                <span className="font-mono text-[11px] tabular-nums text-[var(--text-tertiary)]">
                  {achievements.length}
                </span>
              </h2>
              <div className="flex flex-col gap-2">
                {achievements.map((a) => (
                  <Link
                    key={a.id}
                    href={`/game/${a.gameAppId}`}
                    onClick={onResultClick}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2.5 no-underline transition-colors",
                      "hover:border-[var(--accent-border)]",
                    )}
                  >
                    <AchievementIcon src={a.iconUrl} size={36} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[13px] font-semibold text-[var(--text-primary)]">
                        {a.name}
                      </div>
                      <div className="truncate text-[11px] text-[var(--text-tertiary)]">
                        {a.gameName}
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] font-bold tabular-nums text-[var(--accent)]">
                      {a.rarity.toFixed(1)}%
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}
