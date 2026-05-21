"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiCheck, FiRefreshCw } from "react-icons/fi";

import { cn } from "@/lib/cn";

type SyncState = "idle" | "syncing" | "done" | "error";

export function SyncButton({
  idleLabel,
  syncingLabel,
  doneLabel,
  errorLabel,
}: {
  idleLabel: string;
  syncingLabel: string;
  doneLabel: string;
  errorLabel: string;
}) {
  const router = useRouter();
  const [state, setState] = useState<SyncState>("idle");
  const [detail, setDetail] = useState<string | null>(null);

  const sync = async () => {
    if (state === "syncing") return;
    setState("syncing");
    setDetail(null);
    try {
      const res = await fetch("/api/sync", { method: "POST" });
      const data = (await res.json()) as {
        synced?: number;
        total?: number;
        totalInLibrary?: number;
        ownedInHub?: number;
        error?: string;
        message?: string;
      };
      if (!res.ok || data.error) {
        setState("error");
        setDetail(data.message || data.error || errorLabel);
        setTimeout(() => setState("idle"), 4000);
        return;
      }
      setState("done");
      setDetail(`${data.synced ?? 0}/${data.total ?? 0}`);
      setTimeout(() => {
        setState("idle");
        setDetail(null);
        router.refresh();
      }, 2000);
    } catch {
      setState("error");
      setDetail(errorLabel);
      setTimeout(() => setState("idle"), 4000);
    }
  };

  const spinning = state === "syncing";
  const label =
    state === "syncing" ? syncingLabel
      : state === "done" ? `${doneLabel} ${detail ?? ""}`.trim()
      : state === "error" ? `${errorLabel}${detail ? ` · ${detail}` : ""}`
      : idleLabel;

  return (
    <button
      type="button"
      onClick={sync}
      disabled={spinning}
      aria-busy={spinning}
      aria-label={label}
      className={cn(
        "inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-[14px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] disabled:cursor-wait",
        state === "idle" && "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
        state === "syncing" && "bg-[var(--bg-elevated)] text-[var(--text-secondary)] ring-1 ring-inset ring-[var(--border-strong)]",
        state === "done" && "bg-[var(--success-subtle)] text-[var(--safe-text)] ring-1 ring-inset ring-[var(--l3-border)]",
        state === "error" && "bg-[var(--danger-bg)] text-[var(--danger-text)] ring-1 ring-inset ring-[var(--accent-border)]",
      )}
    >
      {state === "done" ? (
        <FiCheck size={14} aria-hidden="true" />
      ) : (
        <FiRefreshCw size={14} aria-hidden="true" className={spinning ? "animate-spin" : ""} />
      )}
      <span>{label}</span>
    </button>
  );
}
