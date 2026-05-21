"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FiAlertTriangle, FiArrowLeft, FiRefreshCw } from "react-icons/fi";

// App-router error boundary. Keeps the dark chrome consistent so a Supabase
// outage or thrown render error doesn't drop the user onto a raw stack.
// Note: 'error.tsx' itself is a client boundary, so it can't await getLocale.
// We infer locale from <html lang> set by RootLayout.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error in dev logs while keeping the user-facing copy clean.
    if (typeof console !== "undefined") {
      console.error("[kamurocho.gg] route error:", error);
    }
  }, [error]);

  const isKo =
    typeof document !== "undefined" && document.documentElement.lang === "ko";

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <div className="mx-auto flex max-w-[600px] flex-col items-center px-5 pb-24 pt-24 text-center md:pt-32">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--danger-bg)] text-[var(--danger-text)] ring-1 ring-inset ring-[var(--accent-border)]">
          <FiAlertTriangle size={24} aria-hidden="true" />
        </span>
        <h1 className="font-display m-0 mt-5 text-[32px] font-extrabold tracking-tight text-white md:text-[40px]">
          {isKo ? "일시적인 오류가 발생했어요" : "Something went wrong"}
        </h1>
        <p className="m-0 mt-3 max-w-[52ch] text-[14px] leading-7 text-[var(--text-secondary)]">
          {isKo
            ? "공략 데이터를 불러오는 중에 문제가 생겼습니다. 잠시 후 다시 시도해 주세요. 문제가 계속되면 새로고침이나 홈 이동을 시도해 보세요."
            : "We hit a snag while loading the guide data. Try again in a moment, or head back home."}
        </p>
        {error.digest && (
          <p className="m-0 mt-2 font-mono text-[12px] text-[var(--text-tertiary)]">
            {isKo ? "오류 ID" : "Error ID"}: {error.digest}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-[14px] font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiRefreshCw size={14} aria-hidden="true" />
            {isKo ? "다시 시도" : "Try again"}
          </button>
          <Link
            href="/"
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-5 text-[14px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiArrowLeft size={14} aria-hidden="true" />
            {isKo ? "홈으로" : "Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
