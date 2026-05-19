"use client";

import { useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { type Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  label,
  englishLabel,
  koreanLabel,
}: {
  locale: Locale;
  label: string;
  englishLabel: string;
  koreanLabel: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    const query = searchParams.toString();
    const redirectTo = `${pathname}${query ? `?${query}` : ""}`;
    startTransition(() => {
      window.location.assign(`/api/locale?locale=${nextLocale}&redirect=${encodeURIComponent(redirectTo)}`);
    });
  };

  return (
    <div className="inline-flex items-center gap-2">
      <span className="sr-only">{label}</span>
      <div
        aria-label={label}
        className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-white/5 p-0.5"
        role="group"
      >
        <button
          type="button"
          onClick={() => changeLocale("en")}
          aria-pressed={locale === "en"}
          aria-label="Switch to English"
          disabled={isPending || locale === "en"}
          lang="en"
          className={`min-w-[36px] cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 disabled:cursor-default ${
            locale === "en"
              ? "bg-white text-[var(--text-inverse)]"
              : "text-[var(--text-tertiary)] hover:text-white"
          }`}
        >
          {englishLabel}
        </button>
        <button
          type="button"
          onClick={() => changeLocale("ko")}
          aria-pressed={locale === "ko"}
          aria-label="한국어로 전환"
          disabled={isPending || locale === "ko"}
          lang="ko"
          className={`min-w-[36px] cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 disabled:cursor-default ${
            locale === "ko"
              ? "bg-white text-[var(--text-inverse)]"
              : "text-[var(--text-tertiary)] hover:text-white"
          }`}
        >
          {koreanLabel}
        </button>
      </div>
    </div>
  );
}
