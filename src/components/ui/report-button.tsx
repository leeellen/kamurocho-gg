"use client";

import { useEffect, useState, useTransition } from "react";
import { FiAlertTriangle } from "react-icons/fi";

import type { Locale } from "@/lib/i18n";

type Status = "idle" | "submitting" | "submitted" | "queued" | "error";

type Props = {
  locale: Locale;
  appId: number;
  kind?: "achievement" | "collectible" | "substory" | "guide" | "general";
  targetRef?: string;
  label?: string;
};

export function ReportButton({
  locale,
  appId,
  kind = "general",
  targetRef,
  label,
}: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const labels = {
    ko: {
      button: label ?? "잘못된 정보 리포트",
      title: "잘못된 정보 리포트",
      hint: "어떤 부분이 사실과 다른지 알려 주세요. 출처/스크린샷이 있다면 함께 적어 주세요.",
      submit: "보내기",
      cancel: "취소",
      thanks: "리포트 감사합니다. 검토 후 반영하겠습니다.",
      queued: "리포트가 임시 큐에 저장되었습니다 (DB 준비 중).",
      error: "전송 실패. 잠시 후 다시 시도해 주세요.",
      placeholder: "예) 페인트 서치 #14 위치가 다릅니다 — 실제는 …",
    },
    en: {
      button: label ?? "Report incorrect info",
      title: "Report Incorrect Info",
      hint: "Tell us what's wrong. Include source URL or screenshot details if you have them.",
      submit: "Send",
      cancel: "Cancel",
      thanks: "Thanks — we'll review and fix.",
      queued: "Queued for review (DB provisioning).",
      error: "Send failed. Try again shortly.",
      placeholder: "e.g. Paint Search #14 location is wrong — should be …",
    },
  }[locale];

  async function submit() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          app_id: appId,
          kind,
          target_ref: targetRef,
          locale,
          description: text,
        }),
      });
      if (res.ok) {
        setStatus("submitted");
        setText("");
      } else if (res.status === 503) {
        setStatus("queued");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setStatus("idle");
        }}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-transparent px-3 py-1 text-[16px] font-semibold text-[var(--text-tertiary)] no-underline transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        <FiAlertTriangle size={11} aria-hidden="true" />
        {labels.button}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={labels.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-[480px] rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-pop)]">
            <h3 className="font-display m-0 text-[18px] font-extrabold text-white">
              {labels.title}
            </h3>
            <p className="mt-1.5 text-[16px] leading-6 text-[var(--text-secondary)]">
              {labels.hint}
            </p>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
              maxLength={2000}
              placeholder={labels.placeholder}
              aria-label={labels.title}
              disabled={status === "submitting" || isPending}
              className="mt-3 block w-full rounded-lg border border-[var(--border-subtle)] bg-black/30 px-3 py-2 text-[16px] leading-6 text-white placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent-border)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
            {status === "submitted" && (
              <p className="mt-2 text-[16px] text-[var(--success)]">{labels.thanks}</p>
            )}
            {status === "queued" && (
              <p className="mt-2 text-[16px] text-[var(--gold)]">{labels.queued}</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-[16px] text-[var(--accent)]">{labels.error}</p>
            )}
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 cursor-pointer items-center rounded-full border border-[var(--border-subtle)] bg-transparent px-4 text-[16px] font-semibold text-[var(--text-secondary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-elevated)]"
              >
                {labels.cancel}
              </button>
              <button
                type="button"
                disabled={!text.trim() || status === "submitting" || isPending || status === "submitted"}
                onClick={() => startTransition(submit)}
                className="inline-flex h-10 cursor-pointer items-center rounded-full bg-[var(--accent)] px-5 text-[16px] font-bold text-white shadow-[var(--accent-glow)] hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-elevated)] disabled:cursor-default disabled:opacity-50"
              >
                {labels.submit}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
