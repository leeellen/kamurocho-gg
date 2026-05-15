import Link from "next/link";
import { Lock, MonitorUp, Sparkles, Zap } from "lucide-react";

const featureItems = [
  {
    title: "Track achievements",
    detail: "Real-time sync with your Steam library.",
    icon: MonitorUp,
    accent: "text-secondary bg-secondary/10",
  },
  {
    title: "AI-verified guides",
    detail: "Crowdsourced data met with machine intelligence.",
    icon: Sparkles,
    accent: "text-primary bg-primary/10",
  },
  {
    title: "Smart difficulty tips",
    detail: "Know the grind before you begin the journey.",
    icon: Zap,
    accent: "text-tertiary bg-tertiary/10",
  },
];

export default function LoginPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 py-10 md:px-10 md:py-16">
      <div className="ambient-orb right-[-12rem] top-[4rem] h-[32rem] w-[32rem] bg-primary/25" />
      <div className="ambient-orb bottom-[-10rem] left-[-8rem] h-[28rem] w-[28rem] bg-secondary/15" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-between gap-12">
        <section className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <p className="font-display text-sm uppercase tracking-[0.28em] text-primary">UNLOKD</p>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-display text-6xl font-bold leading-none tracking-[-0.08em] text-foreground md:text-8xl">
                Your achievements.
                <span className="block text-gradient-primary">Your guides.</span>
                <span className="block">All in one place.</span>
              </h1>
              <p className="max-w-xl text-xl leading-9 text-muted">
                The premium editorial gallery for your Steam legacy. Track, curate, and master
                your collection with AI-verified precision.
              </p>
            </div>

            <div className="grid gap-4">
              {featureItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="panel-outline flex items-center gap-4 rounded-[1.75rem] bg-surface px-5 py-5"
                  >
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl ${item.accent}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-base text-muted">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card panel-outline relative rounded-[2.5rem] px-8 py-10 md:px-12 md:py-14">
              <div className="mx-auto mb-8 grid h-24 w-24 place-items-center rounded-full border border-primary/20 bg-white/6 text-primary">
                <Lock className="h-10 w-10" />
              </div>
              <div className="space-y-3 text-center">
                <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-foreground">
                  Welcome to the Gallery
                </h2>
                <p className="mx-auto max-w-md text-lg leading-8 text-muted">
                  Securely connect your account to begin your curation.
                </p>
              </div>

              <Link
                href="/api/auth/steam"
                className="bg-gradient-cta mt-10 flex items-center justify-center rounded-[1.35rem] px-8 py-5 font-display text-2xl font-semibold tracking-[-0.03em] text-black shadow-[0_0_36px_rgba(126,81,255,0.28)] transition hover:scale-[1.01] active:scale-[0.98]"
              >
                Sign in with Steam
              </Link>

              <div className="mt-10 border-t border-white/7 pt-8 text-center">
                <p className="font-display text-xs uppercase tracking-[0.3em] text-muted">
                  Security First
                </p>
                <p className="mx-auto mt-5 max-w-sm text-sm italic leading-7 text-muted/80">
                  We never see your password. Login is handled directly by Steam&apos;s official
                  OpenID service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 pt-6 text-center font-display text-xs uppercase tracking-[0.28em] text-muted">
          © 2026 Unlokd. Not affiliated with Valve Corp.
        </footer>
      </div>
    </main>
  );
}
