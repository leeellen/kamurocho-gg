"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiLogOut, FiUser } from "react-icons/fi";

import { cn } from "@/lib/cn";
import type { CurrentUser } from "@/lib/user-progress";

export function UserMenu({ user, locale }: { user: CurrentUser; locale: "ko" | "en" }) {
  const name = user.displayName ?? `Steam ${user.steamId.slice(-6)}`;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointer(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={locale === "ko" ? "내 계정 메뉴 열기" : "Open account menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-1.5 pr-3 text-[14px] font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
      >
        {user.avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.avatarUrl}
            alt=""
            className="h-6 w-6 rounded-full border border-white/10 object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] text-[14px] font-black text-white"
          >
            {name.slice(0, 1).toUpperCase()}
          </span>
        )}
        <span className="max-w-[120px] truncate">{name}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[var(--shadow-pop)]"
        >
          <div className="border-b border-[var(--border-subtle)] p-3">
            <div className="flex items-center gap-2.5">
              {user.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.avatarUrl}
                  alt=""
                  className="h-10 w-10 rounded-full border border-white/10 object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-[14px] font-black text-white"
                >
                  {name.slice(0, 1).toUpperCase()}
                </span>
              )}
              <div className="min-w-0">
                <div className="truncate text-[14px] font-bold text-white">{name}</div>
                <div className="font-mono text-[14px] text-[var(--text-tertiary)]">{user.steamId}</div>
              </div>
            </div>
            {user.lastSynced && (
              <div className="mt-2 font-mono text-[14px] text-[var(--text-tertiary)]">
                {locale === "ko" ? "마지막 동기화" : "Last synced"}: {new Date(user.lastSynced).toLocaleString(locale === "ko" ? "ko-KR" : "en-US")}
              </div>
            )}
          </div>
          <ul className="py-1.5">
            <li>
              <Link
                href="/me"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex cursor-pointer items-center gap-2 px-3 py-2 text-[14px] font-medium text-white no-underline transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:bg-white/5"
              >
                <FiUser size={13} aria-hidden="true" />
                {locale === "ko" ? "내 라이브러리" : "My library"}
              </Link>
            </li>
            {user.profileUrl && (
              <li>
                <a
                  href={user.profileUrl}
                  role="menuitem"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setOpen(false)}
                  className="flex cursor-pointer items-center gap-2 px-3 py-2 text-[14px] font-medium text-[var(--text-secondary)] no-underline transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:bg-white/5"
                >
                  <FiExternalLink size={13} aria-hidden="true" />
                  {locale === "ko" ? "스팀 프로필" : "Steam profile"}
                </a>
              </li>
            )}
            <li className="mt-1.5 border-t border-[var(--border-subtle)] pt-1.5">
              <form action="/api/auth/signout" method="post">
                <button
                  type="submit"
                  role="menuitem"
                  className="flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-[14px] font-medium text-[var(--text-secondary)] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:bg-white/5"
                >
                  <FiLogOut size={13} aria-hidden="true" />
                  {locale === "ko" ? "로그아웃" : "Sign out"}
                </button>
              </form>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Custom "Sign in through Steam" button.
 *
 * Steam Web API Terms of Use § 4 (Subscriber Marks) allow either Valve's
 * pre-rendered button artwork or a custom button that keeps the verbatim
 * wording "Sign in through Steam" and an unaltered Steam logo, paired with the
 * unaffiliated-site disclaimer ("This site is not associated with Valve
 * Corp."). The Steam glyph below is the canonical Steam wordmark path; the
 * wording and disclaimer text are kept verbatim in English so the trademark
 * usage stays compliant while the chrome matches the rest of the dark theme.
 */
export function SignInButton({
  locale,
  showDisclaimer = true,
  size = "md",
}: {
  locale: "ko" | "en";
  showDisclaimer?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm"
      ? "h-9 px-3.5 text-[14px]"
      : size === "lg"
        ? "h-12 px-6 text-[14px]"
        : "h-10 px-4 text-[14px]";
  const iconSize = size === "lg" ? 20 : 16;

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <a
        href="/api/auth/steam"
        aria-label={locale === "ko" ? "스팀 계정으로 로그인 (Sign in through Steam)" : "Sign in through Steam"}
        className={cn(
          "group/steam relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full font-semibold text-white no-underline shadow-[0_4px_12px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/10 transition-all hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(0,0,0,0.5)] hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]",
          sizeClass,
        )}
        style={{
          background: "linear-gradient(180deg, #2a4865 0%, #1b2838 60%, #14202d 100%)",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover/steam:opacity-100"
          style={{
            background: "linear-gradient(180deg, #3a5e85 0%, #1f3148 60%, #14202d 100%)",
          }}
        />
        <SteamLogo size={iconSize} />
        <span className="relative">
          Sign in through <span className="font-extrabold tracking-tight">Steam</span>
        </span>
      </a>
      {showDisclaimer && (
        <span lang="en" className="text-[14px] leading-tight text-[var(--text-tertiary)]">
          This site is not associated with Valve Corp.
        </span>
      )}
    </span>
  );
}

/**
 * Canonical Steam wordmark glyph (Simple Icons #171a21). Used unaltered per
 * Valve's Subscriber Marks requirements.
 */
function SteamLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="relative shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
    >
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.42 3.42 0 0 1 1.912-.59l.188.006 2.861-4.142v-.058c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303a3.014 3.014 0 0 1-3.015 3.015c-1.665 0-3.015-1.35-3.015-3.015 0-1.662 1.35-3.015 3.015-3.015 1.663 0 3.015 1.353 3.015 3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.241 1.014 2.241 2.266 0 1.247-1.012 2.241-2.265 2.241-1.249 0-2.241-.994-2.241-2.241z" />
    </svg>
  );
}
