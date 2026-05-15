"use client";

import { useState } from "react";
import { FiAward } from "react-icons/fi";

import { cn } from "@/lib/cn";

export function AchievementIcon({
  src,
  size = 40,
  className,
  unlocked = true,
}: {
  src?: string | null;
  size?: number;
  className?: string;
  unlocked?: boolean;
}) {
  const [error, setError] = useState(!src);

  if (error || !src) {
    return (
      <div
        style={{ width: size, height: size }}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-md ring-1",
          unlocked
            ? "bg-[var(--l3-tint)] text-[var(--l3)] ring-[var(--l3-border)]"
            : "bg-[var(--bg-raised)] text-[var(--text-tertiary)] ring-[var(--border-subtle)]",
          className,
        )}
      >
        <FiAward size={Math.round(size * 0.5)} />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      onError={() => setError(true)}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={cn(
        "shrink-0 rounded-md object-cover ring-1",
        unlocked ? "ring-[var(--l3-border)]" : "ring-[var(--border-subtle)] grayscale opacity-70",
        className,
      )}
    />
  );
}
