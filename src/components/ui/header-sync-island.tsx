"use client";

import { useEffect, useState } from "react";

import { SyncButton } from "@/components/ui/sync-button";
import type { Locale } from "@/lib/i18n";
import type { CurrentUser } from "@/lib/user-progress";

// Client island: only renders the header sync button once we confirm the user
// is signed in (POST /api/sync 401s otherwise). Mirrors UserMenuIsland's
// /api/auth/me probe so SiteShell can stay static.
export function HeaderSyncIsland({ locale }: { locale: Locale }) {
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    fetch("/api/auth/me", { cache: "no-store", signal: controller.signal })
      .then((r) => (r.ok ? r.json() : { user: null }))
      .then((data: { user: CurrentUser | null }) => {
        if (!cancelled) setUser(data.user);
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  if (!user) return null;

  return (
    <span className="hidden sm:inline-flex">
      <SyncButton
        size="sm"
        idleLabel={locale === "ko" ? "동기화" : "Sync"}
        syncingLabel={locale === "ko" ? "동기화 중..." : "Syncing..."}
        doneLabel={locale === "ko" ? "완료" : "Done"}
        errorLabel={locale === "ko" ? "실패" : "Failed"}
      />
    </span>
  );
}
