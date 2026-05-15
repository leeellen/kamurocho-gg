import { AppShell } from "@/components/layout/app-shell";

const toggles = [
  {
    title: "Achievement Alerts",
    detail: "Instant ping when you unlock a trophy",
  },
  {
    title: "Rare Hunt Weekly Digest",
    detail: "Sunday summary of unfinished rare milestones",
  },
  {
    title: "Friend Comparison Highlights",
    detail: "See when your alliance overtakes your pace",
  },
];

export default function SettingsPage() {
  return (
    <AppShell section="settings">
      <div className="space-y-10">
        <header className="space-y-3">
          <p className="font-display text-sm uppercase tracking-[0.28em] text-primary">Control Center</p>
          <h1 className="font-display text-5xl font-bold tracking-[-0.06em] md:text-7xl">
            Configure your identity, bridge your libraries, and fine-tune tracking.
          </h1>
        </header>

        <div className="grid gap-6 xl:grid-cols-12">
          <section className="glass-card panel-outline rounded-[2rem] p-8 xl:col-span-8">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="grid h-32 w-32 place-items-center rounded-[2rem] bg-gradient-to-br from-primary/35 to-secondary/25">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-white/10 text-3xl">C</div>
              </div>
              <div className="grid flex-1 gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="font-display text-xs uppercase tracking-[0.24em] text-muted">Curator Alias</span>
                  <input
                    className="w-full rounded-[1.25rem] bg-white/5 px-4 py-4 outline-none ring-1 ring-white/6 transition focus:ring-primary/40"
                    defaultValue="CURATOR_01"
                  />
                </label>
                <label className="space-y-2">
                  <span className="font-display text-xs uppercase tracking-[0.24em] text-muted">Registry Email</span>
                  <input
                    className="w-full rounded-[1.25rem] bg-white/5 px-4 py-4 outline-none ring-1 ring-white/6 transition focus:ring-primary/40"
                    defaultValue="alex.j@unlokd.io"
                  />
                </label>
                <label className="space-y-2 md:col-span-2">
                  <span className="font-display text-xs uppercase tracking-[0.24em] text-muted">Bio Manifesto</span>
                  <textarea
                    className="min-h-32 w-full rounded-[1.25rem] bg-white/5 px-4 py-4 outline-none ring-1 ring-white/6 transition focus:ring-primary/40"
                    defaultValue="Digital completionist specializing in CRPGs and retro-modern shooters. Currently hunting platinums in the Neon Sector."
                  />
                </label>
              </div>
            </div>
          </section>

          <section className="glass-card panel-outline relative overflow-hidden rounded-[2rem] p-8 xl:col-span-4">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
            <p className="font-display text-sm uppercase tracking-[0.28em] text-secondary">Steam Forge</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em]">ALEX_STREAM_99</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-secondary">Last synced: 2h 14m ago</p>
            <button className="mt-8 w-full rounded-[1.35rem] bg-white/7 px-5 py-4 font-display text-sm uppercase tracking-[0.24em] transition hover:bg-white/10">
              Sync Now
            </button>
          </section>

          <section className="glass-card panel-outline rounded-[2rem] p-8 xl:col-span-6">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">Frequency Settings</h2>
            <div className="mt-8 space-y-5">
              {toggles.map((toggle) => (
                <div key={toggle.title} className="flex items-center justify-between rounded-[1.5rem] bg-white/4 px-5 py-5">
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em]">{toggle.title}</p>
                    <p className="mt-2 text-sm text-muted">{toggle.detail}</p>
                  </div>
                  <div className="flex h-8 w-14 items-center rounded-full bg-primary p-1">
                    <span className="ml-auto h-6 w-6 rounded-full bg-black" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card panel-outline rounded-[2rem] p-8 xl:col-span-6">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em]">Data & Permissions</h2>
            <div className="mt-8 grid gap-5">
              {[
                "Steam public profile import",
                "Achievement progress cache",
                "AI guide personalization",
                "Marketing email suppression",
              ].map((label, index) => (
                <div key={label} className="flex items-center justify-between rounded-[1.5rem] bg-white/4 px-5 py-5">
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em]">{label}</p>
                    <p className="mt-2 text-sm text-muted">
                      {index < 2 ? "Enabled for the full curator experience." : "Optional preference."}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-4 py-2 font-display text-xs uppercase tracking-[0.2em] ${index < 2 ? "bg-secondary/12 text-secondary" : "bg-white/8 text-muted"}`}
                  >
                    {index < 2 ? "Required" : "Optional"}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
