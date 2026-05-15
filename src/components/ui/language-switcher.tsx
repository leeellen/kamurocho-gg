"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/cn";
import { type Locale } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  label: _label,
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

  const changeLocale = async (nextLocale: Locale) => {
    const query = searchParams.toString();
    const redirectTo = `${pathname}${query ? `?${query}` : ""}`;
    window.location.href = `/api/locale?locale=${nextLocale}&redirect=${encodeURIComponent(redirectTo)}`;
  };

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-0.5">
      {([["en", englishLabel], ["ko", koreanLabel]] as [Locale, string][]).map(([loc, label]) => {
        const active = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => changeLocale(loc)}
            className={cn(
              "h-[26px] min-w-[34px] cursor-pointer rounded-full px-2.5 font-mono text-[10px] font-bold tracking-wider transition-colors",
              active
                ? "bg-[var(--bg-raised)] text-[var(--accent)]"
                : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
