import { cn } from "@/lib/utils";

type ProgressBarProps = {
  value: number;
  accent?: "primary" | "secondary" | "tertiary";
  className?: string;
};

const accentClass = {
  primary: "from-primary to-primary-dim shadow-[0_0_14px_rgba(182,160,255,0.3)]",
  secondary: "from-secondary to-secondary-dim shadow-[0_0_14px_rgba(105,246,184,0.26)]",
  tertiary: "from-tertiary to-[#ffcf80] shadow-[0_0_14px_rgba(255,177,72,0.26)]",
};

export function ProgressBar({ value, accent = "secondary", className }: ProgressBarProps) {
  return (
    <div className={cn("h-2 overflow-hidden rounded-full bg-white/8", className)}>
      <div
        className={cn("h-full rounded-full bg-gradient-to-r transition-all", accentClass[accent])}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
