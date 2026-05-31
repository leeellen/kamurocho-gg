"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import { cardImageUrl, hqImageUrl, type TelephoneCardMap } from "@/lib/telephone-cards";
import type { Locale } from "@/lib/i18n";

type Props = {
  maps: TelephoneCardMap[];
  locale: Locale;
};

type CollectedState = Record<string, boolean>;

export function TelephoneCardsChecklist({ maps, locale }: Props) {
  const [activeCity, setActiveCity] = useState<string>(maps[0]?.slug ?? "");
  const map = maps.find((m) => m.slug === activeCity) ?? maps[0];
  if (!map) return null;
  return (
    <div>
      {maps.length > 1 && (
        <div className="mb-4 inline-flex rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-1">
          {maps.map((m) => (
            <button
              key={m.slug}
              type="button"
              onClick={() => setActiveCity(m.slug)}
              className={`rounded-lg px-3.5 py-1.5 text-[13px] font-bold transition ${
                m.slug === activeCity
                  ? "bg-[var(--bg-elevated)] text-white shadow-sm"
                  : "text-[var(--text-tertiary)] hover:text-white"
              }`}
            >
              {(locale === "ko" ? m.title : m.titleEn).split("·")[1]?.trim() ?? m.slug}
            </button>
          ))}
        </div>
      )}
      <ChecklistView key={map.slug} map={map} locale={locale} />
    </div>
  );
}

function ChecklistView({ map, locale }: { map: TelephoneCardMap; locale: Locale }) {
  const [state, setState] = useState<CollectedState>({});
  const [hydrated, setHydrated] = useState(false);
  const [openNo, setOpenNo] = useState<number | null>(null);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(map.storageKey);
      setState(raw ? JSON.parse(raw) : {});
    } catch {
      setState({});
    }
    setHydrated(true);
  }, [map.storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(map.storageKey, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated, map.storageKey]);

  const count = useMemo(
    () => map.cards.filter((c) => state[c.number]).length,
    [state, map.cards],
  );
  const pct = (count / map.totalCount) * 100;

  const toggleCard = useCallback((no: number) => {
    setState((prev) => ({ ...prev, [no]: !prev[no] }));
  }, []);

  const resetAll = useCallback(() => {
    const msg =
      locale === "ko"
        ? "모든 체크를 초기화할까요?"
        : "Reset every collected mark?";
    if (!confirm(msg)) return;
    setState({});
  }, [locale]);

  const closeModal = () => setOpenNo(null);

  useEffect(() => {
    if (openNo === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openNo]);

  const openCard =
    openNo !== null ? map.cards.find((c) => c.number === openNo) : null;

  const scrollToCard = (no: number) => {
    const el = cardRefs.current[no];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-[var(--accent)]");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-[var(--accent)]");
      }, 1200);
    }
  };

  return (
    <div>
      <p className="m-0 mb-3 text-[13px] text-[var(--l2)]">
        {locale === "ko" ? map.hintKo : map.hintEn}
      </p>

      <div className="mb-5 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-2">
        <div className="relative leading-[0]">
          <Image
            src={map.mapImage}
            alt={locale === "ko" ? map.title : map.titleEn}
            width={1200}
            height={900}
            className="block w-full rounded-lg"
            unoptimized
          />
          {Object.entries(map.hotspots).map(([no, [x, y]]) => {
            const n = Number(no);
            const done = Boolean(state[n]);
            return (
              <button
                key={no}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenNo(n);
                }}
                aria-label={
                  locale === "ko" ? `No.${no} 보기` : `View card No.${no}`
                }
                className="absolute h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-transparent transition hover:bg-[rgba(239,68,68,0.35)] hover:shadow-[0_0_0_3px_rgba(239,68,68,0.5)]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {done && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-0 flex h-4 w-4 -translate-y-[45%] translate-x-[45%] items-center justify-center rounded-full border-[1.5px] border-white bg-[var(--success)] text-[11px] font-bold text-white shadow-sm"
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-2">
          <div className="text-[11px] text-[var(--text-tertiary)]">
            {locale === "ko" ? "수집 완료" : "Collected"}
          </div>
          <div className="font-mono text-[18px] font-bold text-white">
            {count} / {map.totalCount}
          </div>
        </div>
        <div className="min-w-[160px] flex-1">
          <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-soft)]">
            <div
              className="h-full bg-[var(--l2)] transition-[width] duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-2 text-[11px] text-[var(--text-tertiary)]">
            {locale === "ko" ? map.rewardKo : map.rewardEn}
          </div>
        </div>
        <button
          type="button"
          onClick={resetAll}
          className="rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 text-[12px] text-[var(--text-secondary)] transition hover:bg-[var(--bg-raised)] hover:text-white"
        >
          {locale === "ko" ? "초기화" : "Reset"}
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5">
        {map.cards.map((card) => {
          const done = Boolean(state[card.number]);
          const color = map.chapterColors[card.chapter] || "#76767e";
          return (
            <div
              key={card.number}
              ref={(el) => {
                cardRefs.current[card.number] = el;
              }}
              role="button"
              tabIndex={0}
              onClick={() => toggleCard(card.number)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleCard(card.number);
                }
              }}
              className={`relative cursor-pointer rounded-xl border bg-[var(--bg-soft)] p-2 transition ${
                done
                  ? "border-[var(--success)]/40 opacity-60"
                  : "border-[var(--border)] hover:border-[var(--border-strong)]"
              }`}
            >
              <div
                className={`absolute right-2 top-2 z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1.5px] bg-black/40 text-[12px] backdrop-blur ${
                  done
                    ? "border-[var(--success)] bg-[var(--success-subtle)] text-[var(--success)]"
                    : "border-[var(--border-strong)] text-[var(--text-tertiary)]"
                }`}
              >
                {done ? "✓" : ""}
              </div>
              <Image
                src={cardImageUrl(map, card.number)}
                alt={`card ${card.number}`}
                width={200}
                height={120}
                className="block w-full rounded-lg"
                unoptimized
              />
              <div className="mt-2 flex items-center justify-between gap-2 text-[11px]">
                <span className="font-mono text-[var(--text-tertiary)]">
                  No.{String(card.number).padStart(2, "0")}
                </span>
                <span className="font-mono font-bold" style={{ color }}>
                  {card.chapter}
                </span>
                <span className="font-mono text-[var(--text-secondary)]">
                  {card.code}
                </span>
              </div>
              {card.note && (
                <div className="mt-2 rounded-md bg-[var(--warning-subtle)] px-2 py-1 text-[10px] leading-tight text-[var(--warning)]">
                  ⚠ {card.note}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {openCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="w-full max-w-[640px] rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-pop)]">
            <Image
              src={hqImageUrl(map, openCard.number)}
              alt={`card ${openCard.number}`}
              width={1024}
              height={640}
              className="block w-full rounded-xl"
              unoptimized
            />
            <div className="mt-4">
              <div className="font-display text-[18px] font-extrabold text-white">
                No.{String(openCard.number).padStart(2, "0")} ({openCard.code})
              </div>
              <div className="mt-1 text-[13px] text-[var(--text-tertiary)]">
                {openCard.chapter} · {locale === "ko" ? "세트" : "Set"}{" "}
                {openCard.code}
              </div>
              {openCard.note && (
                <div className="mt-2 rounded-md bg-[var(--warning-subtle)] px-2 py-1.5 text-[12px] text-[var(--warning)]">
                  ⚠ {openCard.note}
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  scrollToCard(openCard.number);
                  closeModal();
                }}
                className="rounded-lg border border-[var(--border-strong)] bg-[var(--bg-raised)] px-3.5 py-2 text-[13px] text-[var(--text-secondary)] transition hover:text-white"
              >
                {locale === "ko" ? "목록에서 보기" : "Show in list"}
              </button>
              <button
                type="button"
                onClick={() => toggleCard(openCard.number)}
                className="rounded-lg border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-3.5 py-2 text-[13px] font-bold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                {state[openCard.number]
                  ? locale === "ko"
                    ? "수집 취소"
                    : "Mark uncollected"
                  : locale === "ko"
                    ? "수집 완료로 표시"
                    : "Mark collected"}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg border border-[var(--border-strong)] bg-[var(--bg-raised)] px-3.5 py-2 text-[13px] text-[var(--text-secondary)] transition hover:text-white"
              >
                {locale === "ko" ? "닫기" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
