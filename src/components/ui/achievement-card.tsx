import Link from "next/link";

import { type Achievement, type Game } from "@/lib/mock-data";
import { DifficultyBadge } from "./difficulty-badge";

export function AchievementCard({
  game,
  achievement,
}: {
  game: Game;
  achievement: Achievement;
}) {
  return (
    <article className="achievement-stripe panel-outline relative rounded-[1.75rem] bg-surface-strong p-7">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 gap-5">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[1.25rem] bg-white/5 text-4xl">
            {achievement.unlocked ? "✓" : "🔒"}
          </div>
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-4xl font-semibold tracking-[-0.04em] text-foreground">
                {achievement.name}
              </h3>
              <DifficultyBadge difficulty={achievement.difficulty} rarity={achievement.rarity} />
            </div>
            <p className="max-w-2xl text-lg leading-8 text-muted">{achievement.description}</p>
            <div className="flex flex-wrap gap-5 text-sm text-muted">
              <span>{achievement.estimatedTime}</span>
              <span>{achievement.unlockedAt ?? "Locked"}</span>
            </div>
          </div>
        </div>

        <Link
          href={`/game/${game.slug}/achievement/${achievement.slug}`}
          className="rounded-full px-5 py-3 font-display text-sm uppercase tracking-[0.18em] text-primary transition hover:bg-primary/10"
        >
          View Guide →
        </Link>
      </div>
    </article>
  );
}
