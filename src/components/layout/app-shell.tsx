import Image from "next/image";
import Link from "next/link";
import { FiHome, FiSearch, FiGrid, FiUser, FiSettings, FiLock } from "react-icons/fi";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { type Locale, getMessages } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import { type UserSummary } from "@/lib/unlokd-data";

type Section = "home" | "search" | "library" | "me" | "settings";

const NAV_ITEMS: { id: Section; href: string; Icon: React.ComponentType<{ className?: string; size?: number }> }[] = [
  { id: "home",     href: "/",         Icon: FiHome },
  { id: "search",   href: "/search",   Icon: FiSearch },
  { id: "library",  href: "/library",  Icon: FiGrid },
  { id: "me",       href: "/profile",  Icon: FiUser },
  { id: "settings", href: "/settings", Icon: FiSettings },
];

export function AppShell({
  children,
  section,
  locale,
  user,
}: {
  children: React.ReactNode;
  section: Section;
  locale: Locale;
  user: UserSummary;
}) {
  const m = getMessages(locale);

  return (
    <div className="shell bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Desktop sidebar */}
      <aside className="shell-sidebar">
        <div className="px-2 pt-1.5 pb-4 flex items-center gap-2">
          <Image src="/logo-unlokd.svg" alt="Unlokd" width={132} height={32} priority style={{ height: "auto" }} />
        </div>

        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ id, href, Icon }) => {
            const active = id === section;
            return (
              <Link
                key={id}
                href={href}
                className={cn(
                  "relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors",
                  active
                    ? "bg-[var(--bg-elevated)] font-semibold text-[var(--text-primary)]"
                    : "font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]",
                )}
              >
                {active && (
                  <span className="absolute -left-3.5 top-2 bottom-2 w-0.5 rounded-sm bg-[var(--accent)]" />
                )}
                <Icon
                  size={16}
                  className={active ? "text-[var(--accent)]" : ""}
                />
                <span>{m.nav[id]}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* PRO slot */}
        <div className="mb-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2.5">
          <div className="mb-1 flex items-center gap-1.5">
            <FiLock className="text-[var(--accent)]" size={11} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">PRO</span>
          </div>
          <div className="text-[11px] leading-snug text-[var(--text-secondary)]">{m.misc.proHint}</div>
          <div className="mt-1 text-[10px] text-[var(--text-tertiary)]">{m.misc.proCta}</div>
        </div>

        {/* User pill */}
        <div className="flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-2">
          {user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="Avatar"
              src={user.avatarUrl}
              className="h-[26px] w-[26px] rounded-full object-cover"
            />
          ) : (
            <div className="h-[26px] w-[26px] rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#9D7AFF]" />
          )}
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-semibold text-[var(--text-primary)]">{user.name}</div>
            <div className="font-mono text-[10px] text-[var(--text-tertiary)]">{user.status}</div>
          </div>
          <LanguageSwitcher locale={locale} label={m.common.language} englishLabel="EN" koreanLabel="KO" />
        </div>
      </aside>

      <main className="shell-main">{children}</main>

      {/* Mobile bottom tab bar */}
      <nav className="shell-tabbar">
        {NAV_ITEMS.map(({ id, href, Icon }) => {
          const active = id === section;
          return (
            <Link
              key={id}
              href={href}
              className={cn(
                "flex min-w-[44px] flex-col items-center gap-1 px-4 py-2 no-underline",
                active ? "text-[var(--accent)]" : "text-[var(--text-tertiary)]",
              )}
            >
              <Icon size={18} />
              <span className={cn("text-[10px]", active && "font-semibold")}>{m.nav[id]}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
