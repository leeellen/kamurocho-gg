import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-semibold leading-none transition-colors",
  {
    variants: {
      tone: {
        neutral: "bg-white/5 text-[var(--text-secondary)] ring-1 ring-inset ring-white/8",
        accent: "bg-[var(--accent-subtle)] text-[var(--accent)] ring-1 ring-inset ring-[var(--accent-border)]",
        danger: "bg-[var(--danger-bg)] text-[var(--danger-text)] ring-1 ring-inset ring-[var(--accent-border)]",
        gold: "bg-[var(--gold-tint)] text-[var(--gold)] ring-1 ring-inset ring-[var(--gold-tint)]",
        success: "bg-[var(--success-subtle)] text-[var(--safe-text)] ring-1 ring-inset ring-[var(--l3-border)]",
        info: "bg-[var(--l2-subtle)] text-[var(--l2)] ring-1 ring-inset ring-[var(--l2-border)]",
        solid: "bg-white text-[var(--text-inverse)]",
      },
      size: {
        xs: "px-2 py-0.5 text-[14px]",
        sm: "px-2.5 py-1 text-[14px]",
        md: "px-3 py-1.5 text-[14px]",
      },
    },
    defaultVariants: { tone: "neutral", size: "sm" },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

export function Chip({ className, tone, size, ...props }: ChipProps) {
  return <span className={cn(chipVariants({ tone, size }), className)} {...props} />;
}
