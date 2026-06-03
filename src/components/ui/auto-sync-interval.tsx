"use client";

import { useEffect } from "react";

const INTERVAL_MS = 60 * 60 * 1000; // 1 hour

export function AutoSyncInterval() {
  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/sync", { method: "POST" });
        if (res.status === 401) return; // not signed in, skip
      } catch {
        // network error — ignore, next tick will retry
      }
    };

    const id = setInterval(run, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return null;
}
