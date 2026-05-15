import { AppShell } from "@/components/layout/app-shell";
import { GameCard } from "@/components/ui/game-card";
import { libraryGames } from "@/lib/mock-data";

export default function Home() {
  return (
    <AppShell section="library">
      <div className="space-y-8">
        <header className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-4">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-primary">
              Curated Library
            </p>
            <div className="flex flex-wrap items-end gap-4">
              <h1 className="font-display text-5xl font-bold tracking-[-0.05em] text-foreground md:text-7xl">
                My Library
              </h1>
              <div className="flex gap-3 text-sm text-muted">
                <span className="rounded-full bg-white/5 px-4 py-2">142 games</span>
                <span className="rounded-full bg-white/5 px-4 py-2">47% avg completion</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-2xl bg-white/7 px-6 py-3 font-display text-sm uppercase tracking-[0.2em] transition hover:bg-white/10">
              Sync
            </button>
            <div className="flex rounded-2xl bg-white/4 p-1 text-muted">
              {["All", "In Progress", "Complete", "0%"].map((filter, index) => (
                <button
                  key={filter}
                  className={`rounded-xl px-4 py-2 text-sm transition ${
                    index === 0 ? "bg-white/8 text-foreground" : "hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="rounded-2xl bg-white/7 px-5 py-3 text-sm text-foreground transition hover:bg-white/10">
              Recently Played
            </button>
          </div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {libraryGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
          <div className="panel-outline flex min-h-[29rem] flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/10 bg-white/[0.02] px-8 text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/6 font-display text-6xl text-primary">
              +
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.04em]">
              Add New Library
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Connect Epic Games, Xbox, or PlayStation once the multi-platform expansion
              lands.
            </p>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
