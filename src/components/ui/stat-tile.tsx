import { cn } from "@/lib/cn";

export function StatTile({
  label,
  value,
  hint,
  tone = "neutral",
  className,
  valueClassName,
}: {
  label: string;
  value: React.ReactNode;
  hint?: string;
  tone?: "neutral" | "accent" | "gold" | "success";
  className?: string;
  valueClassName?: string;
}) {
  const toneClasses =
    tone === "accent"
      ? "text-[var(--accent)]"
      : tone === "gold"
        ? "text-[var(--gold)]"
        : tone === "success"
          ? "text-[var(--safe-text)]"
          : "text-[var(--text-primary)]";

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
      <div className={cn("mt-2.5 font-display text-[30px] font-extrabold leading-none md:text-[36px]", toneClasses, valueClassName)}>
        {value}
      </div>
      {hint && <div className="mt-2 text-[13px] leading-snug text-[var(--text-tertiary)]">{hint}</div>}
    </div>
  );
}
