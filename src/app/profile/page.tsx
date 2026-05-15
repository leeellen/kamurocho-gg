import { AppShell } from "@/components/layout/app-shell";
import { ProgressBar } from "@/components/ui/progress-bar";
import { hallOfFame } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <AppShell section="profile">
      <div className="space-y-10">
        <section className="grid gap-8 xl:grid-cols-[14rem_1fr] xl:items-start">
          <div className="panel-outline grid aspect-square place-items-center rounded-[2rem] bg-gradient-to-br from-surface-strong via-black to-surface">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-4xl text-black">
              C
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="font-display text-6xl font-bold tracking-[-0.08em] md:text-8xl">
                CURATOR_01
              </h1>
              <span className="rounded-full bg-secondary/12 px-4 py-2 font-display text-xs uppercase tracking-[0.2em] text-secondary">
                Top 0.1% Global
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-sm uppercase tracking-[0.2em] text-muted">
              <span className="rounded-full bg-white/5 px-4 py-2">Achievement Hunter</span>
              <span className="rounded-full bg-white/5 px-4 py-2">Steam Legacy: 12 yrs</span>
            </div>
            <p className="max-w-4xl text-2xl leading-10 text-muted">
              Preserving digital milestones since 2012. Specializing in soul-like completions
              and obscure indie gems. Every platinum is a story told.
            </p>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_1fr_1.6fr]">
          <article className="panel-outline rounded-[1.75rem] p-7">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-muted">Total Playtime</p>
            <p className="mt-4 font-display text-6xl font-semibold tracking-[-0.06em]">14,282</p>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-secondary">+12% this month</p>
          </article>
          <article className="panel-outline rounded-[1.75rem] p-7">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-muted">Avg Completion</p>
            <p className="mt-4 font-display text-6xl font-semibold tracking-[-0.06em]">94.2%</p>
            <ProgressBar value={94.2} accent="secondary" className="mt-5" />
          </article>
          <article className="panel-outline rounded-[1.75rem] p-7">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-muted">Rarest Unlocked</p>
            <div className="mt-5 flex items-center gap-5">
              <div className="grid h-20 w-20 place-items-center rounded-[1.25rem] bg-tertiary/14 text-3xl text-tertiary">
                ★
              </div>
              <div>
                <p className="font-display text-4xl font-semibold tracking-[-0.05em]">THE ONE FREE MAN</p>
                <p className="mt-2 text-lg text-muted">Half-Life 2 • 0.04% unlocked</p>
                <div className="mt-4 flex gap-3 text-xs uppercase tracking-[0.2em]">
                  <span className="rounded-full bg-tertiary/12 px-3 py-1 text-tertiary">World Class</span>
                  <span className="rounded-full bg-white/6 px-3 py-1 text-muted">Earned 2023</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="panel-outline rounded-[2rem] p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em]">Completion Trends</h2>
            <div className="flex rounded-full bg-white/5 p-1 text-sm">
              <button className="rounded-full px-4 py-2 text-muted">Yearly</button>
              <button className="rounded-full bg-primary px-4 py-2 font-display uppercase tracking-[0.18em] text-black">
                Monthly
              </button>
            </div>
          </div>

          <div className="mt-10 h-[24rem] rounded-[1.75rem] bg-white/[0.02] p-8">
            <p className="font-display text-xs uppercase tracking-[0.22em] text-muted">Current Velocity</p>
            <p className="mt-4 font-display text-6xl font-semibold tracking-[-0.06em]">+4.2 pts/day</p>
            <div className="mt-10 h-[14rem] rounded-[1.5rem] bg-gradient-to-t from-primary/20 via-primary/6 to-transparent" />
            <div className="mt-4 grid grid-cols-12 text-center font-display text-xs uppercase tracking-[0.22em] text-muted">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.05em]">Hall of Fame</h2>
          {hallOfFame.map((entry) => (
            <article
              key={entry.rank}
              className="panel-outline grid gap-5 rounded-[1.75rem] p-6 md:grid-cols-[3rem_1fr_auto] md:items-center"
            >
              <p className="font-display text-4xl font-semibold tracking-[-0.08em] text-white/18">{entry.rank}</p>
              <div>
                <p className="font-display text-3xl font-semibold tracking-[-0.04em]">{entry.title}</p>
                <p className="mt-2 text-lg text-muted">{entry.game}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="font-display text-4xl font-semibold tracking-[-0.04em]">{entry.rarity}</p>
                <p className="mt-2 font-display text-xs uppercase tracking-[0.2em] text-secondary">
                  {entry.label}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </AppShell>
  );
}
