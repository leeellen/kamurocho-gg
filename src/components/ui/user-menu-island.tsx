"use client";

import { useEffect, useState } from "react";

import { SignInButton, UserMenu } from "@/components/ui/user-menu";
import type { Locale } from "@/lib/i18n";
import type { CurrentUser } from "@/lib/user-progress";

type State = { loaded: boolean; user: CurrentUser | null };

// Client island: SiteShell can stay static. Hits /api/auth/me to learn whether
// to render the avatar menu or the Steam sign-in button.
export function UserMenuIsland({ locale, mobile = false }: { locale: Locale; mobile?: boolean }) {
  const [state, setState] = useState<State>({ loaded: false, user: null });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { user: null }))
      .then((data: { user: CurrentUser | null }) => {
        if (!cancelled) setState({ loaded: true, user: data.user });
      })
      .catch(() => {
        if (!cancelled) setState({ loaded: true, user: null });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!state.loaded) {
    // Skeleton matching final size to avoid layout shift.
    return (
      <span
        aria-hidden="true"
        className={mobile ? "ml-auto h-7 w-20 animate-pulse rounded-full bg-white/5" : "h-9 w-24 animate-pulse rounded-full bg-white/5"}
      />
    );
  }

  if (mobile) {
    return (
      <a
        href="/me"
        className="ml-auto whitespace-nowrap rounded-full bg-[var(--accent-subtle)] px-3 py-1.5 text-[14px] font-semibold text-[var(--accent)] no-underline transition-colors hover:bg-[var(--accent-border)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
      >
        {state.user
          ? locale === "ko" ? "내 라이브러리" : "Library"
          : locale === "ko" ? "Steam 로그인" : "Sign in"}
      </a>
    );
  }

  return state.user ? (
    <UserMenu user={state.user} locale={locale} />
  ) : (
    <span className="hidden sm:inline-flex">
      <SignInButton locale={locale} showDisclaimer={false} size="sm" />
    </span>
  );
}
