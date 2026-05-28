"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

// Drops on the /me page after the Steam OpenID round-trip. When the URL
// carries `?welcome=1`, we kick off the library + achievement sync exactly
// once — the callback route stays under Vercel's invocation budget by
// punting this work to the client. Once the sync resolves we strip the
// flag and refresh the route so server data reflects the new state.
export function AutoSyncOnWelcome() {
  const router = useRouter();
  const params = useSearchParams();
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    if (params.get("welcome") !== "1") return;
    fired.current = true;
    let cancelled = false;
    (async () => {
      try {
        await fetch("/api/sync", { method: "POST" });
      } catch {
        // Failures surface via the "Sync now" button. Swallow here so the
        // welcome flow never blocks navigation.
      }
      if (cancelled) return;
      const url = new URL(window.location.href);
      url.searchParams.delete("welcome");
      router.replace(url.pathname + (url.search ? `${url.search}` : ""));
      router.refresh();
    })();
    return () => {
      cancelled = true;
    };
  }, [params, router]);

  return null;
}
