import Link from "next/link";

import { type Game } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { ProgressBar } from "./progress-bar";

const accentClass = {
  secondary: "border-secondary/60",
  primary: "border-primary/55",
  tertiary: "border-tertiary/65",
};

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className={cn(
        "group panel-outline flex min-h-[29rem] flex-col overflow-hidden rounded-[2rem] border bg-surface transition duration-300 hover:-translate-y-1 hover:bg-surface-strong",
        accentClass[game.accent],
      )}
    >
      <div className={cn("relative h-56 w-full overflow-hidden", game.coverClass)}>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/25 to-transparent" />
        <div className="absolute left-6 top-6 rounded-full bg-black/35 px-4 py-2 font-display text-xs uppercase tracking-[0.2em] text-white">
          {game.state}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="space-y-2">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-foreground">
            {game.name}
          </h2>
          <div className="flex items-center justify-between text-lg text-muted">
            <span>
              {game.completedAchievements}/{game.totalAchievements} Achievements
            </span>
            <span className="font-display text-2xl text-foreground">{game.completion}%</span>
          </div>
          <ProgressBar value={game.completion} accent={game.accent} className="mt-4" />
        </div>

        <div className="mt-auto grid grid-cols-2 gap-6 border-t border-white/6 pt-8">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.22em] text-muted">Playtime</p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              {game.playtime}
            </p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.22em] text-muted">
              Last Played
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              {game.lastPlayed}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
