"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiBookOpen } from "react-icons/fi";

import { Button } from "@/components/ui/button";

type State = "idle" | "running" | "done" | "error";

export function CollectGuidesButton({
  label,
  doneLabel,
}: {
  label: string;
  doneLabel: string;
}) {
  const router = useRouter();
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState<string | null>(null);

  const run = async () => {
    if (state === "running") return;
    setState("running");
    setMsg(null);
    try {
      const res = await fetch("/api/guides/collect", { method: "POST" });
      const data = (await res.json()) as {
        scanned?: number;
        inserted?: number;
        skipped?: number;
        failed?: number;
        error?: string;
      };
      if (!res.ok || data.error) {
        setState("error");
        setMsg(data.error ?? "Failed");
        setTimeout(() => setState("idle"), 4000);
        return;
      }
      setState("done");
      setMsg(`${doneLabel} +${data.inserted ?? 0} / ${data.scanned ?? 0}`);
      setTimeout(() => {
        setState("idle");
        setMsg(null);
        router.refresh();
      }, 3000);
    } catch {
      setState("error");
      setMsg("Network error");
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={run}
      disabled={state === "running"}
    >
      <FiBookOpen size={14} />
      <span>
        {state === "running" ? "…" : msg ?? label}
      </span>
    </Button>
  );
}
