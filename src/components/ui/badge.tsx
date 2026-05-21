import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[14px] font-semibold leading-none border whitespace-nowrap",
  {
    variants: {
      variant: {
        neutral: "bg-[var(--bg-raised)] text-[var(--text-secondary)] border-[var(--border-subtle)]",
        accent:  "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent-border)]",
        l1:      "bg-[var(--l1-subtle)] text-[var(--l1)] border-[var(--l1-border)]",
        l2:      "bg-[var(--l2-subtle)] text-[var(--l2)] border-[var(--l2-border)]",
        l3:      "bg-[var(--l3-subtle)] text-[var(--l3)] border-[var(--l3-border)]",
        success: "bg-[var(--success-subtle)] text-[var(--success)] border-transparent",
        danger:  "bg-[var(--danger-subtle)] text-[var(--danger)] border-transparent",
        warning: "bg-[var(--warning-subtle)] text-[var(--warning)] border-transparent",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
