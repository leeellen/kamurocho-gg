import { AppShell } from "@/components/layout/app-shell";
import { matchingTitles, searchAchievements, trendingAchievements } from "@/lib/mock-data";

export default function SearchPage() {
  return (
    <AppShell section="search">
      <div className="space-y-10">
        <section className="panel-outline relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
          <div className="absolute inset-0 mesh-bg" />
          <div className="relative z-10 mx-auto max-w-4xl py-12 text-center">
            <h1 className="font-display text-6xl font-bold tracking-[-0.08em] md:text-8xl">
              FIND YOUR <span className="text-gradient-primary">LEGACY</span>
            </h1>
            <div className="glass-card panel-outline mx-auto mt-10 flex max-w-3xl flex-col gap-4 rounded-[2rem] p-4 md:flex-row md:items-center">
              <div className="flex-1 rounded-[1.35rem] bg-white/4 px-5 py-4 text-left text-xl text-muted">
                Game, Achievement, or Player...
              </div>
              <button className="rounded-[1.35rem] bg-gradient-to-r from-primary to-primary-dim px-8 py-4 font-display text-sm uppercase tracking-[0.24em] text-black">
                UNLOK
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.05em]">Trending Now</h2>
              <p className="mt-2 text-lg text-muted">Most hunted achievements this week</p>
            </div>
            <button className="font-display text-sm uppercase tracking-[0.24em] text-primary">
              View All →
            </button>
          </div>
          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
            <article className="panel-outline rounded-[2rem] p-8">
              <div className={`h-[28rem] rounded-[1.5rem] ${trendingAchievements[0].className}`} />
              <div className="mt-6 space-y-4">
                <span className="rounded-full bg-secondary/14 px-4 py-2 font-display text-xs uppercase tracking-[0.22em] text-secondary">
                  {trendingAchievements[0].badge}
                </span>
                <h3 className="font-display text-5xl font-semibold tracking-[-0.05em]">
                  {trendingAchievements[0].title}
                </h3>
                <p className="max-w-xl text-lg leading-8 text-muted">{trendingAchievements[0].subtitle}</p>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
              {trendingAchievements.slice(1).map((item) => (
                <article key={item.title} className="panel-outline rounded-[2rem] p-6">
                  <div className={`h-48 rounded-[1.5rem] ${item.className}`} />
                  <div className="mt-5">
                    <p className="font-display text-3xl font-semibold tracking-[-0.05em]">{item.title}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted">{item.subtitle}</p>
                    <p className="mt-4 text-sm text-primary">{item.footer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 xl:grid-cols-[1.5fr_0.8fr]">
          <div>
            <h2 className="mb-6 font-display text-3xl font-semibold tracking-[-0.05em]">Matching Titles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {matchingTitles.map((title) => (
                <article key={title.name} className="panel-outline rounded-[1.75rem] p-4">
                  <div className={`h-72 rounded-[1.25rem] ${title.className}`} />
                  <p className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em]">{title.name}</p>
                  <p className="mt-2 text-sm text-muted">{title.subtitle}</p>
                  <p className="mt-3 text-sm text-primary">{title.total}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-display text-3xl font-semibold tracking-[-0.05em]">Achievements</h2>
            <div className="space-y-4">
              {searchAchievements.map((achievement) => (
                <article key={achievement.name} className="panel-outline rounded-[1.5rem] p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-xl">
                      ⚡
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                          {achievement.name}
                        </h3>
                        <span className="font-display text-sm uppercase tracking-[0.18em] text-primary">
                          {achievement.rarity}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-muted">{achievement.detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
