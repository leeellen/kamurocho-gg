import Link from "next/link";
import { notFound } from "next/navigation";

import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { DifficultyBadge } from "@/components/ui/difficulty-badge";
import { findAchievement, findGameBySlug, libraryGames } from "@/lib/mock-data";

export function generateStaticParams() {
  return libraryGames.flatMap((game) =>
    game.achievements.map((achievement) => ({
      slug: game.slug,
      achievement: achievement.slug,
    })),
  );
}

export default async function AchievementGuidePage({
  params,
}: {
  params: Promise<{ slug: string; achievement: string }>;
}) {
  const { slug, achievement: achievementSlug } = await params;
  const game = findGameBySlug(slug);
  const achievement = findAchievement(slug, achievementSlug);

  if (!game || !achievement) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-8 md:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-6">
          <Link
            href={`/game/${game.slug}`}
            className="font-display text-sm uppercase tracking-[0.24em] text-muted"
          >
            ← {game.name}
          </Link>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <ConfidenceBadge confidence={achievement.guide.confidence} />
              <DifficultyBadge difficulty={achievement.difficulty} rarity={achievement.rarity} />
            </div>
            <h1 className="font-display text-5xl font-bold tracking-[-0.06em] md:text-7xl">
              {achievement.name}
            </h1>
            <p className="max-w-4xl text-2xl leading-10 text-muted">{achievement.description}</p>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="panel-outline rounded-[2rem] p-8">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">Stats</h2>
            <div className="mt-6 space-y-5 text-lg">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted">Difficulty</span>
                <span>{achievement.difficulty}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted">Global unlock</span>
                <span>{achievement.rarity}%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted">Est. time</span>
                <span>{achievement.estimatedTime}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted">Status</span>
                <span>
                  {achievement.unlocked ? `Unlocked ${achievement.unlockedAt}` : "Still locked"}
                </span>
              </div>
            </div>
          </aside>

          <section className="panel-outline rounded-[2rem] p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">Guide</h2>
              <ConfidenceBadge confidence={achievement.guide.confidence} />
            </div>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
              {achievement.guide.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-white/4 p-5 text-sm text-muted">
              Source: {achievement.guide.source} • {achievement.guide.license}
            </div>
          </section>
        </div>

        <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <article className="panel-outline rounded-[2rem] p-8">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">
              Community Tips
            </h2>
            <div className="mt-6 space-y-5">
              {achievement.tips.map((tip) => (
                <div key={tip.author + tip.body} className="rounded-[1.5rem] bg-white/4 p-5">
                  <p className="text-lg leading-8 text-foreground">{tip.body}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted">
                    {tip.author} • 👍 {tip.votes}
                  </p>
                </div>
              ))}
            </div>
          </article>
          <article className="panel-outline rounded-[2rem] p-8">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">
              Related Videos
            </h2>
            <div className="mt-6 space-y-5">
              {achievement.videos.map((video) => (
                <div key={video.title} className="rounded-[1.5rem] bg-white/4 p-5">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em]">
                    {video.title}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">
                    {video.source} • {video.duration}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
