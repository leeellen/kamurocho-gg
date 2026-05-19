import { cn } from "@/lib/cn";

export function RarityBar({
  rarity,
  className,
}: {
  rarity: number;
  className?: string;
}) {
  const pct = Math.min(100, Math.max(0, rarity));
  const tone =
    pct < 5 ? "bg-[var(--accent)]" : pct < 20 ? "bg-[var(--gold)]" : pct < 50 ? "bg-[var(--l2)]" : "bg-[var(--l3)]";
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/8" aria-hidden="true">
        <div className={cn("h-full rounded-full transition-all", tone)} style={{ width: `${pct}%` }} />
      </div>
      <span className="font-mono text-[11px] tabular-nums text-[var(--text-tertiary)]">{rarity.toFixed(1)}%</span>
    </div>
  );
}
