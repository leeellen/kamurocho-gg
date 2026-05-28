"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
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
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    startTransition(async () => {
      try {
        await fetch("/api/locale", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ locale: nextLocale }),
        });
        router.refresh();
      } catch {
        // Fall back to the legacy redirect path if the POST fails so the
        // user still gets a working locale switch.
        const currentPath = window.location.pathname + window.location.search;
        window.location.assign(
          `/api/locale?locale=${nextLocale}&redirect=${encodeURIComponent(currentPath)}`,
        );
      }
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
          className={`inline-flex h-9 min-w-[44px] cursor-pointer items-center justify-center rounded-full px-3 text-[16px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 disabled:cursor-default ${
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
          className={`inline-flex h-9 min-w-[44px] cursor-pointer items-center justify-center rounded-full px-3 text-[16px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-1 disabled:cursor-default ${
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
