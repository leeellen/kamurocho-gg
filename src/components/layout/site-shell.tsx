import Link from "next/link";

import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { type Locale } from "@/lib/i18n";

type Section = "home" | "games" | "order" | "missables" | "search";

const NAV = [
  { id: "games", href: "/games", ko: "게임", en: "Games" },
  { id: "order", href: "/order", ko: "플레이 순서", en: "Play Order" },
  { id: "missables", href: "/missables", ko: "미서블", en: "Missables" },
  { id: "search", href: "/search", ko: "검색", en: "Search" },
] as const;

export function SiteShell({
  children,
  locale,
  section,
}: {
  children: React.ReactNode;
  locale: Locale;
  section: Section;
}) {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--chrome-top)]/95 text-[var(--chrome-text)] backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center gap-5 px-5 py-3 md:px-8">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <span className="text-[20px] font-black text-[var(--danger)]">K</span>
            <span className="text-[14px] font-extrabold tracking-[-0.02em]">kamurocho.gg</span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {NAV.map((item) => {
              const active = section === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`border-b-2 px-0 py-1 text-[13px] font-semibold no-underline transition-colors ${
                    active
                      ? "border-[var(--accent)] text-white"
                      : "border-transparent text-[var(--chrome-muted)] hover:text-white"
                  }`}
                >
                  {locale === "ko" ? item.ko : item.en}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/search"
              className="hidden rounded-sm border border-[var(--chrome-line)] bg-[var(--bg-soft)]/10 px-3 py-1.5 text-[12px] text-[var(--chrome-muted)] no-underline md:inline-flex"
            >
              {locale === "ko" ? "업적, 게임, 공략 검색" : "Search games, achievements, guides"}
            </Link>
            <LanguageSwitcher locale={locale} label="language" englishLabel="EN" koreanLabel="KO" />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
