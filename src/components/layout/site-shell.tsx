import Link from "next/link";
import { FiSearch } from "react-icons/fi";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SignInButton, UserMenu } from "@/components/ui/user-menu";
import { type Locale } from "@/lib/i18n";
import { getCurrentUser } from "@/lib/user-progress";

type Section = "home" | "games" | "order" | "missables" | "search";

const NAV = [
  { id: "games", href: "/games", ko: "게임", en: "Games" },
  { id: "order", href: "/order", ko: "플레이 순서", en: "Play order" },
  { id: "missables", href: "/missables", ko: "놓치기 쉬움", en: "Missables" },
] as const;

export async function SiteShell({
  children,
  locale,
  section,
}: {
  children: React.ReactNode;
  locale: Locale;
  section: Section;
}) {
  const user = await getCurrentUser();
  return (
    <div className="relative min-h-screen text-[var(--text-primary)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {locale === "ko" ? "본문 바로가기" : "Skip to content"}
      </a>

      <header className="sticky top-0 z-50 border-b border-[var(--chrome-line)] bg-[var(--chrome-top)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-5 py-3 md:px-8">
          <Link
            href="/"
            aria-label={locale === "ko" ? "kamurocho.gg 홈으로" : "kamurocho.gg home"}
            className="group flex items-center rounded-md transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-[15px] font-extrabold tracking-tight text-white">
                kamurocho<span className="text-[var(--accent)]">.gg</span>
              </span>
              <span className="font-mono text-[14px] uppercase tracking-[0.16em] text-[var(--chrome-muted)]">
                {locale === "ko" ? "RGG 시리즈 공략" : "RGG Steam Guides"}
              </span>
            </span>
          </Link>

          <nav
            aria-label={locale === "ko" ? "주요 메뉴" : "Primary"}
            className="ml-2 hidden items-center gap-1 md:flex"
          >
            {NAV.map((item) => {
              const active = section === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative cursor-pointer rounded-md px-3 py-2 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] ${
                    active
                      ? "text-white"
                      : "text-[var(--chrome-muted)] hover:text-white"
                  }`}
                >
                  {locale === "ko" ? item.ko : item.en}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-[13px] h-[2px] rounded-full bg-[var(--accent)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/search"
              aria-label={locale === "ko" ? "검색 열기" : "Open search"}
              aria-current={section === "search" ? "page" : undefined}
              className={`inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-3 text-[14px] font-medium text-[var(--text-secondary)] transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] sm:pr-2 ${
                section === "search" ? "border-white/30 bg-white/10 text-white" : ""
              }`}
            >
              <FiSearch size={14} aria-hidden="true" />
              <span className="hidden sm:inline">{locale === "ko" ? "검색" : "Search"}</span>
              <kbd className="hidden rounded border border-white/12 bg-black/40 px-1.5 py-0.5 font-mono text-[14px] text-[var(--text-tertiary)] sm:inline">⌘K</kbd>
            </Link>
            <LanguageSwitcher
              locale={locale}
              label={locale === "ko" ? "언어" : "Language"}
              englishLabel="EN"
              koreanLabel="KO"
            />
            {user ? (
              <UserMenu user={user} locale={locale} />
            ) : (
              <span className="hidden sm:inline-flex">
                <SignInButton locale={locale} showDisclaimer={false} size="sm" />
              </span>
            )}
          </div>
        </div>

        <nav
          aria-label={locale === "ko" ? "주요 메뉴" : "Primary"}
          className="border-t border-[var(--chrome-line)] md:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] items-center gap-1 overflow-x-auto px-3 py-2">
            {NAV.map((item) => {
              const active = section === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] ${
                    active
                      ? "bg-white text-[var(--text-inverse)]"
                      : "text-[var(--chrome-muted)] hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {locale === "ko" ? item.ko : item.en}
                </Link>
              );
            })}
            {/* Persistent path to the Steam sign-in / library on phones, since
                the header's "Sign in through Steam" button is hidden < sm. */}
            <Link
              href="/me"
              className="ml-auto whitespace-nowrap rounded-full bg-[var(--accent-subtle)] px-3 py-1.5 text-[14px] font-semibold text-[var(--accent)] no-underline transition-colors hover:bg-[var(--accent-border)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
            >
              {user
                ? (locale === "ko" ? "내 라이브러리" : "Library")
                : (locale === "ko" ? "Steam 로그인" : "Sign in")}
            </Link>
          </div>
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer className="mt-24 border-t border-[var(--border)] bg-[var(--bg-surface)]/40">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center">
            <div>
              <div className="font-display text-[14px] font-extrabold tracking-tight">
                kamurocho<span className="text-[var(--accent)]">.gg</span>
              </div>
              <div className="text-[14px] text-[var(--text-tertiary)]">
                {locale === "ko"
                  ? "비공식 팬 가이드 · SEGA / RGG Studio와 무관"
                  : "An unofficial fan project · not affiliated with SEGA / RGG Studio"}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-[var(--text-tertiary)]">
              <Link href="/games" className="cursor-pointer transition-colors hover:text-white">
                {locale === "ko" ? "게임 목록" : "Games"}
              </Link>
              <Link href="/order" className="cursor-pointer transition-colors hover:text-white">
                {locale === "ko" ? "플레이 순서" : "Play order"}
              </Link>
              <Link href="/missables" className="cursor-pointer transition-colors hover:text-white">
                {locale === "ko" ? "놓치기 쉬움" : "Missables"}
              </Link>
              <Link href="/search" className="cursor-pointer transition-colors hover:text-white">
                {locale === "ko" ? "검색" : "Search"}
              </Link>
            </div>
            <span lang="en" className="text-[14px] text-[var(--text-muted)]">
              Steam and the Steam logo are trademarks of Valve Corporation. This site is not associated with Valve Corp.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
