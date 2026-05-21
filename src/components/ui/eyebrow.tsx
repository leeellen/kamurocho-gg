import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  children: React.ReactNode;
  // Latin-mode letter-spacing. Defaults to 0.16em.
  tracking?: "0.16em" | "0.2em";
  // Color tone. "accent" (default) or "muted".
  tone?: "accent" | "muted";
  className?: string;
};

const TONE = {
  accent: "text-[var(--accent)]",
  muted: "text-[var(--text-tertiary)]",
} as const;

export function Eyebrow({ locale, children, tracking = "0.16em", tone = "accent", className }: Props) {
  const latinTracking = tracking === "0.2em" ? "tracking-[0.2em]" : "tracking-[0.16em]";
  const localeTracking = locale === "ko" ? "tracking-wider" : latinTracking;
  return (
    <span
      className={`font-mono text-[14px] uppercase ${TONE[tone]} ${localeTracking}${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  );
}
