import { type Difficulty } from "@/lib/mock-data";
import { cn, formatPercent } from "@/lib/utils";

const difficultyStyles: Record<Difficulty, string> = {
  common: "bg-white/7 text-zinc-200",
  uncommon: "bg-secondary/12 text-secondary",
  rare: "bg-primary/12 text-primary",
  legendary: "bg-tertiary/12 text-tertiary",
};

export function DifficultyBadge({
  difficulty,
  rarity,
  className,
}: {
  difficulty: Difficulty;
  rarity: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-display text-[11px] uppercase tracking-[0.18em]",
        difficultyStyles[difficulty],
        className,
      )}
    >
      {difficulty} • {formatPercent(rarity)}
    </span>
  );
}
