import Link from "next/link";
import { Bell, Library, Medal, Search, Settings, Sparkles, UserRound } from "lucide-react";

import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const navigation = [
  { key: "library", label: "Library", href: "/", icon: Library },
  { key: "search", label: "Discover", href: "/search", icon: Search },
  { key: "profile", label: "Elite", href: "/profile", icon: Medal },
  { key: "settings", label: "Control", href: "/settings", icon: Settings },
];

export function AppShell({
  children,
  section,
}: {
  children: React.ReactNode;
  section: string;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="ambient-orb left-[-10rem] top-[18rem] h-80 w-80 bg-secondary/30" />
      <div className="ambient-orb right-[-8rem] top-[2rem] h-96 w-96 bg-primary/25" />

      <div className="grid min-h-screen lg:grid-cols-[18rem_1fr]">
        <aside className="hidden border-r border-white/6 bg-black/18 px-7 py-8 lg:flex lg:flex-col">
          <Logo />
          <div className="mt-14">
            <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-primary">
              Pro Gamer
            </p>
            <p className="mt-2 font-display text-sm uppercase tracking-[0.3em] text-muted">
              Level 84 Curator
            </p>
          </div>

          <nav className="mt-12 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = section === item.key;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-4 rounded-r-full px-6 py-4 font-display text-sm uppercase tracking-[0.24em] text-muted transition",
                    active
                      ? "bg-white/7 text-primary before:absolute before:left-0 before:h-12 before:w-[3px] before:rounded-full before:bg-primary"
                      : "hover:bg-white/4 hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto">
            <button className="w-full rounded-2xl bg-gradient-to-r from-primary to-primary-dim px-6 py-4 font-display text-sm uppercase tracking-[0.24em] text-black shadow-[0_0_36px_rgba(182,160,255,0.25)] transition hover:brightness-110">
              Upgrade To Pro
            </button>
          </div>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/5 bg-black/30 px-5 py-4 backdrop-blur-xl md:px-8">
            <div className="lg:hidden">
              <Logo />
            </div>
            <div className="hidden w-full max-w-sm items-center gap-3 rounded-full bg-white/6 px-4 py-3 text-muted md:flex">
              <Search className="h-4 w-4" />
              <span>Search Steam Legacy...</span>
            </div>
            <div className="flex items-center gap-4 text-muted">
              <Bell className="h-5 w-5" />
              <Sparkles className="h-5 w-5" />
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-black">
                <UserRound className="h-5 w-5" />
              </div>
            </div>
          </header>

          <main className="flex-1 px-5 py-8 md:px-8 md:py-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
