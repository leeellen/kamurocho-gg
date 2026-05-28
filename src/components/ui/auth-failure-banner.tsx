"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const REASON_LABELS: Record<string, { ko: string; en: string }> = {
  verify: {
    ko: "Steam OpenID 검증 실패 — 서버의 NEXTAUTH_URL 환경변수가 실제 도메인과 일치하는지 확인하세요.",
    en: "Steam OpenID verification failed — make sure the server's NEXTAUTH_URL matches the deployed domain.",
  },
  claim: {
    ko: "Steam 응답에서 계정 ID를 읽지 못했습니다.",
    en: "Could not extract a Steam account ID from the OpenID response.",
  },
  session: {
    ko: "세션 서명 키가 없습니다 — Vercel 환경변수에 STEAM_SESSION_SECRET 또는 NEXTAUTH_SECRET을 설정해야 합니다.",
    en: "Session signing secret missing — set STEAM_SESSION_SECRET or NEXTAUTH_SECRET in the deployment environment.",
  },
};

// Surface the reason a Steam sign-in attempt failed so the user (and we) can
// fix it instead of silently landing back on the home page with no signal.
export function AuthFailureBanner({ locale }: { locale: "ko" | "en" }) {
  const router = useRouter();
  const params = useSearchParams();
  const reason = params.get("auth") === "failed" ? params.get("reason") ?? "unknown" : null;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!reason) return;
    setOpen(true);
  }, [reason]);

  if (!reason || !open) return null;

  const label = REASON_LABELS[reason] ?? {
    ko: `로그인에 실패했습니다 (사유 코드: ${reason}).`,
    en: `Sign-in failed (reason code: ${reason}).`,
  };

  function dismiss() {
    setOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete("auth");
    url.searchParams.delete("reason");
    router.replace(url.pathname + (url.search ? url.search : ""));
  }

  return (
    <div
      role="alert"
      className="mx-auto mt-4 flex max-w-[1280px] items-start gap-3 rounded-2xl border border-[var(--accent-border)] bg-[var(--danger-bg)] px-5 py-4 text-[15px] text-[var(--danger-text)] md:mx-8"
    >
      <span aria-hidden="true" className="font-mono text-[14px] uppercase tracking-[0.16em]">
        AUTH
      </span>
      <span className="flex-1 leading-6 text-white">{locale === "ko" ? label.ko : label.en}</span>
      <button
        type="button"
        onClick={dismiss}
        className="cursor-pointer rounded-md border border-white/15 px-2 py-1 font-mono text-[13px] text-white/80 hover:border-white/30 hover:text-white"
      >
        {locale === "ko" ? "닫기" : "Dismiss"}
      </button>
    </div>
  );
}
