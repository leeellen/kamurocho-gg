import Link from "next/link";
import { notFound } from "next/navigation";

import { AchievementCard } from "@/components/ui/achievement-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { findGameBySlug, libraryGames } from "@/lib/mock-data";

export function generateStaticParams() {
  return libraryGames.map((game) => ({ slug: game.slug }));
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = findGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const unlocked = game.achievements.filter((achievement) => achievement.unlocked);
  const locked = game.achievements.filter((achievement) => !achievement.unlocked);

  return (
    <main className="min-h-screen pb-16">
      <section
        className={`relative overflow-hidden border-b border-white/5 px-6 py-8 md:px-10 ${game.heroClass}`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-8">
              <Link
                href="/"
                className="font-display text-sm uppercase tracking-[0.24em] text-muted"
              >
                ← Back to Library
              </Link>
              <nav className="hidden gap-8 font-display text-sm uppercase tracking-[0.22em] text-muted md:flex">
                <Link href="/">Library</Link>
                <Link href="/search">Activity</Link>
                <Link href="/profile">Community</Link>
              </nav>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-black">
              C
            </div>
          </div>

          <div className="mt-28 grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
            <div className="space-y-6">
              <h1 className="font-display text-6xl font-bold tracking-[-0.08em] md:text-8xl">
                {game.name.toUpperCase()}
              </h1>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-secondary">
                    {game.completedAchievements}/{game.totalAchievements}
                  </p>
                  <p className="mt-1 font-display text-sm uppercase tracking-[0.24em] text-muted">
                    Achievements
                  </p>
                </div>
                <div>
                  <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-primary">
                    {game.completion}%
                  </p>
                  <p className="mt-1 font-display text-sm uppercase tracking-[0.24em] text-muted">
                    Completion
                  </p>
                </div>
              </div>
              <ProgressBar value={game.completion} accent="secondary" className="max-w-4xl" />
            </div>
            <button className="h-fit rounded-[1.35rem] bg-gradient-to-r from-primary to-primary-dim px-8 py-5 font-display text-sm uppercase tracking-[0.24em] text-black shadow-[0_0_30px_rgba(182,160,255,0.22)]">
              Continue Journey
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex rounded-[1.25rem] bg-white/5 p-1">
            {["All", "Locked 🔒", "Unlocked ✅"].map((filter, index) => (
              <button
                key={filter}
                className={`rounded-xl px-5 py-3 text-sm transition ${
                  index === 0
                    ? "bg-white/8 text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <button className="rounded-[1.25rem] bg-white/6 px-5 py-3 text-sm text-foreground">
            Recommended Order
          </button>
        </div>

        <section className="mt-14">
          <div className="mb-8 flex items-baseline gap-4">
            <h2 className="font-display text-5xl font-semibold tracking-[-0.06em]">
              Unlocked Achievements
            </h2>
            <p className="text-xl text-muted">{unlocked.length} total</p>
          </div>
          <div className="grid gap-6">
            {unlocked.map((achievement) => (
              <AchievementCard key={achievement.slug} game={game} achievement={achievement} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 flex items-baseline gap-4">
            <h2 className="font-display text-5xl font-semibold tracking-[-0.06em]">
              Locked Achievements
            </h2>
            <p className="text-xl text-muted">{locked.length} total</p>
          </div>
          <div className="grid gap-6">
            {locked.map((achievement) => (
              <AchievementCard key={achievement.slug} game={game} achievement={achievement} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
