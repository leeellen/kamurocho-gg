import { cn } from "@/lib/cn";

/**
 * Variable-sized stat. Numeric/short values use the large display weight;
 * longer text labels (e.g. "Kiryu / Majima") auto-shrink so the grid stays
 * visually balanced across tiles even when content lengths differ.
 */
export function StatTile({
  label,
  value,
  hint,
  tone = "neutral",
  valueSize,
  className,
}: {
  label: string;
  value: React.ReactNode;
  hint?: string;
  tone?: "neutral" | "accent" | "gold" | "success";
  valueSize?: "lg" | "md";
  className?: string;
}) {
  const toneClasses =
    tone === "accent"
      ? "text-[var(--accent)]"
      : tone === "gold"
        ? "text-[var(--gold)]"
        : tone === "success"
          ? "text-[var(--safe-text)]"
          : "text-[var(--text-primary)]";

  // Auto-detect short numeric vs longer text values when no explicit size hint
  // is provided. Anything 5 chars or shorter (e.g. "100%", "55h", "1988")
  // keeps the large display size; longer strings shrink so they don't wrap or
  // overflow the tile width.
  const resolved: "lg" | "md" = valueSize
    ?? (typeof value === "string" && value.length > 5 ? "md" : "lg");
  const sizeClass = resolved === "lg"
    ? "text-[28px] md:text-[34px]"
    : "text-[20px] md:text-[24px]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5",
        className,
      )}
    >
      <div className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
        {label}
      </div>
      <div className={cn("font-display mt-2.5 font-extrabold leading-tight", sizeClass, toneClasses)}>
        {value}
      </div>
      {hint && <div className="mt-2 text-[13px] leading-snug text-[var(--text-tertiary)]">{hint}</div>}
    </div>
  );
}
