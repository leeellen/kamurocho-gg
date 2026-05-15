"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type SyncState = "idle" | "syncing" | "done" | "error";

export function SyncButton({
  label,
  syncedLabel,
  lastSynced,
}: {
  label: string;
  syncedLabel: string;
  lastSynced: string;
}) {
  const router = useRouter();
  const [state, setState] = useState<SyncState>("idle");
  const [progress, setProgress] = useState<string | null>(null);

  const sync = async () => {
    if (state === "syncing") return;
    setState("syncing");
    setProgress(null);

    try {
      const res = await fetch("/api/sync", { method: "POST" });
      const data = await res.json() as {
        synced?: number;
        total?: number;
        totalInLibrary?: number;
        error?: string;
      };

      if (!res.ok || data.error) {
        setState("error");
        setProgress(data.error ?? "Sync failed");
        setTimeout(() => setState("idle"), 4000);
        return;
      }

      setState("done");
      setProgress(`${data.synced ?? 0}/${data.total ?? 0} synced`);
      setTimeout(() => {
        setState("idle");
        setProgress(null);
        router.refresh();
      }, 1500);
    } catch {
      setState("error");
      setProgress("Network error");
      setTimeout(() => setState("idle"), 4000);
    }
  };

  const spinning = state === "syncing";

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={sync}
      disabled={spinning}
      className={cn(
        state === "done" && "border-[var(--l3-border)] bg-[var(--l3-subtle)] text-[var(--l3)]",
        state === "error" && "border-[var(--danger)]/30 bg-[var(--danger-subtle)] text-[var(--danger)]",
      )}
    >
      <FiRefreshCw size={14} className={spinning ? "animate-spin" : ""} />
      <span>
        {state === "syncing"
          ? "Syncing…"
          : state === "done"
          ? (progress ?? "Done")
          : state === "error"
          ? (progress ?? "Error")
          : label}
      </span>
      {state === "idle" && (
        <span className="font-mono text-[11px] text-[var(--text-tertiary)]">
          {syncedLabel} {lastSynced}
        </span>
      )}
    </Button>
  );
}
