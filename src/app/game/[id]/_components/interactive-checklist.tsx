"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type { Locale } from "@/lib/i18n";
import type { LocalizedText } from "@/lib/content";

// Client-safe localized picker — mirrors lib/i18n's pickLocalized without
// importing that module (it pulls next/headers, server-only).
const KOREAN_CHAR = /[ㄱ-힝]/;
function pick(pair: LocalizedText | null | undefined, locale: Locale): string {
  if (!pair) return "";
  const ko = (pair.ko ?? "").trim();
  const en = (pair.en ?? "").trim();
  if (locale === "ko") return ko || en;
  if (!en || KOREAN_CHAR.test(en)) return ko || en;
  return en;
}

function videoEmbed(url: string): string | null {
  const m = url.match(/(?:v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

// A single trackable collectible inside a region. Images are pre-resolved URLs
// (the adapter that builds a region is responsible for turning card-image bases
// or external guide URLs into final strings).
export type ChecklistItem = {
  number: number;
  // Grid thumbnail + optional larger image shown in the detail modal.
  image?: string;
  hqImage?: string;
  // Headline (substory-like) and/or map location line.
  title?: LocalizedText;
  location?: LocalizedText;
  // Compact badges — e.g. telephone card chapter + A/B/C set code.
  chapter?: string;
  code?: string;
  note?: LocalizedText;
  reward?: LocalizedText;
  // Walkthrough steps (paint-search style) — rendered in the detail modal.
  steps?: LocalizedText[];
};

// One map/region tab. `hotspots` (number → [x%, y%]) renders the clickable
// overview map; omit it and the region falls back to the grid checklist only.
export type ChecklistRegion = {
  key: string;
  title: LocalizedText;
  // Short tab label; falls back to `title`.
  tabLabel?: string;
  storageKey: string;
  totalCount: number;
  mapImage?: string;
  // Optional region walkthrough video (YouTube URL).
  video?: string;
  hotspots?: Record<string, [number, number]>;
  chapterColors?: Record<string, string>;
  hint?: LocalizedText;
  reward?: LocalizedText;
  items: ChecklistItem[];
};

type Props = {
  regions: ChecklistRegion[];
  locale: Locale;
};

type CollectedState = Record<string, boolean>;

export function InteractiveChecklist({ regions, locale }: Props) {
  const [activeKey, setActiveKey] = useState<string>(regions[0]?.key ?? "");
  const region = regions.find((r) => r.key === activeKey) ?? regions[0];
  if (!region) return null;
  return (
    <div>
      {regions.length > 1 && (
        <div className="mb-4 inline-flex rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-1">
          {regions.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setActiveKey(r.key)}
              className={`rounded-lg px-3.5 py-1.5 text-[13px] font-bold transition ${
                r.key === activeKey
                  ? "bg-[var(--accent-subtle)] text-white shadow-sm ring-1 ring-inset ring-[var(--accent-border)]"
                  : "text-[var(--text-tertiary)] hover:text-white"
              }`}
            >
              {r.tabLabel ?? pick(r.title, locale)}
            </button>
          ))}
        </div>
      )}
      <RegionView key={region.key} region={region} locale={locale} />
    </div>
  );
}

function RegionView({ region, locale }: { region: ChecklistRegion; locale: Locale }) {
  const [state, setState] = useState<CollectedState>({});
  const [hydrated, setHydrated] = useState(false);
  const [openNo, setOpenNo] = useState<number | null>(null);
  const [zoomMap, setZoomMap] = useState(false);
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(region.storageKey);
      // Hydration-safe read: localStorage is client-only, so load persisted
      // state after mount rather than in a useState initializer (SSR mismatch).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(raw ? JSON.parse(raw) : {});
    } catch {
      setState({});
    }
    setHydrated(true);
  }, [region.storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(region.storageKey, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated, region.storageKey]);

  const count = useMemo(
    () => region.items.filter((c) => state[c.number]).length,
    [state, region.items],
  );
  const pct = region.totalCount > 0 ? (count / region.totalCount) * 100 : 0;

  const toggle = useCallback((no: number) => {
    setState((prev) => ({ ...prev, [no]: !prev[no] }));
  }, []);

  const resetAll = useCallback(() => {
    const msg =
      locale === "ko" ? "모든 체크를 초기화할까요?" : "Reset every collected mark?";
    if (!confirm(msg)) return;
    setState({});
  }, [locale]);

  const closeModal = () => setOpenNo(null);

  useEffect(() => {
    if (openNo === null && !zoomMap) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        setZoomMap(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openNo, zoomMap]);

  const openItem =
    openNo !== null ? region.items.find((c) => c.number === openNo) ?? null : null;

  const scrollToItem = (no: number) => {
    const el = cardRefs.current[no];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-[var(--accent)]");
      setTimeout(() => {
        el.classList.remove("ring-2", "ring-[var(--accent)]");
      }, 1200);
    }
  };

  const hintText = region.hint
    ? pick(region.hint, locale)
    : region.hotspots
      ? locale === "ko"
        ? "지도의 붉은 점을 클릭하면 상세가 열립니다. 수집한 점에는 초록 체크가 표시됩니다."
        : "Click a red dot on the map for details. Collected dots show a green check."
      : locale === "ko"
        ? "카드를 클릭하면 수집 완료로 표시됩니다. 진행 상황은 브라우저에 저장됩니다."
        : "Click a card to mark it collected. Progress is saved in your browser.";

  return (
    <div>
      <p className="m-0 mb-3 text-[13px] text-[var(--l2)]">{hintText}</p>

      {region.video && videoEmbed(region.video) && (
        <div className="relative mb-5 aspect-video w-full max-w-[640px] overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-black/40">
          <iframe
            src={videoEmbed(region.video)!}
            title={pick(region.title, locale)}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      )}

      {region.mapImage && !region.hotspots && (
        <div className="mb-5 mx-auto max-w-[540px]">
          <button
            type="button"
            onClick={() => setZoomMap(true)}
            className="group/map block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] p-2.5 transition hover:border-[var(--accent-border)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={region.mapImage}
              alt={pick(region.title, locale)}
              loading="lazy"
              className="block w-full rounded-xl"
            />
          </button>
          <p className="mt-1.5 text-center text-[11px] text-[var(--text-tertiary)]">
            {locale === "ko"
              ? "지도를 클릭하면 크게 볼 수 있습니다. 지도의 번호가 아래 카드 번호와 일치합니다."
              : "Click the map to enlarge. Map numbers match the card numbers below."}
          </p>
        </div>
      )}

      {region.mapImage && region.hotspots && (
        <div className="mb-5 mx-auto max-w-[760px] overflow-hidden rounded-2xl border border-[var(--accent-border)] bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-soft)] p-2.5 shadow-[var(--shadow-glow)]">
          <div className="relative leading-[0]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={region.mapImage}
              alt={pick(region.title, locale)}
              loading="lazy"
              className="block w-full rounded-xl"
            />
            {Object.entries(region.hotspots).map(([no, [x, y]]) => {
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
                  aria-label={locale === "ko" ? `No.${no} 보기` : `View No.${no}`}
                  className="absolute h-[26px] w-[26px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-transparent transition hover:bg-[rgba(251,191,36,0.35)] hover:shadow-[0_0_0_3px_rgba(251,191,36,0.85)]"
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
      )}

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3.5 py-2">
          <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
            {locale === "ko" ? "수집 완료" : "Collected"}
          </div>
          <div className="font-mono text-[18px] font-bold leading-tight">
            <span className="text-[var(--accent)]">{count}</span>
            <span className="text-[var(--text-tertiary)]"> / {region.totalCount}</span>
          </div>
        </div>
        <div className="min-w-[160px] flex-1">
          <div className="h-2.5 overflow-hidden rounded-full bg-[var(--bg-soft)] ring-1 ring-inset ring-[var(--border)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent-hover)] to-[var(--accent)] shadow-[var(--accent-glow)] transition-[width] duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
          {region.reward && (
            <div className="mt-2 text-[11px] text-[var(--text-tertiary)]">
              {pick(region.reward, locale)}
            </div>
          )}
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
        {region.items.map((item) => {
          const done = Boolean(state[item.number]);
          const color = item.chapter
            ? region.chapterColors?.[item.chapter] || "#76767e"
            : undefined;
          const label = item.title ?? item.location;
          return (
            <div
              key={item.number}
              ref={(el) => {
                cardRefs.current[item.number] = el;
              }}
              role="button"
              tabIndex={0}
              onClick={() => toggle(item.number)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(item.number);
                }
              }}
              className={`relative cursor-pointer rounded-xl border bg-[var(--bg-soft)] p-2 transition duration-200 hover:-translate-y-0.5 ${
                done
                  ? "border-[rgba(52,211,153,0.4)] opacity-60"
                  : "border-[var(--border)] hover:border-[var(--accent-border)] hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.7)]"
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
              {item.image && (
                // Guide thumbnails come from arbitrary external hosts; use a
                // plain <img> to skip next/image remotePatterns config.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={`#${item.number}`}
                  loading="lazy"
                  className="block w-full rounded-lg"
                />
              )}
              <div className="mt-2 flex items-center justify-between gap-2 text-[11px]">
                <span className="font-mono text-[var(--text-tertiary)]">
                  No.{String(item.number).padStart(2, "0")}
                </span>
                {item.chapter && (
                  <span className="font-mono font-bold" style={{ color }}>
                    {item.chapter}
                  </span>
                )}
                {item.code && (
                  <span className="font-mono text-[var(--text-secondary)]">{item.code}</span>
                )}
              </div>
              {label && !item.code && (
                <div className="mt-1 text-[11px] leading-tight text-[var(--text-secondary)]">
                  {pick(label, locale)}
                </div>
              )}
              {item.note && (
                <div className="mt-2 rounded-md bg-[var(--warning-subtle)] px-2 py-1 text-[10px] leading-tight text-[var(--warning)]">
                  ⚠ {pick(item.note, locale)}
                </div>
              )}
              {((item.steps && item.steps.length > 0) || item.reward) && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenNo(item.number);
                  }}
                  className="mt-2 w-full rounded-md border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-2 py-1 text-[11px] font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent-border)] hover:text-white"
                >
                  {locale === "ko" ? "자세히 보기" : "Details"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {openItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="max-h-[90vh] w-full max-w-[640px] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow-pop)]">
            {(openItem.hqImage || openItem.image) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={openItem.hqImage || openItem.image!}
                alt={`#${openItem.number}`}
                loading="lazy"
                className="block w-full rounded-xl"
              />
            )}
            <div className="mt-4">
              <div className="font-display text-[18px] font-extrabold text-white">
                No.{String(openItem.number).padStart(2, "0")}
                {openItem.code ? ` (${openItem.code})` : ""}
              </div>
              {(openItem.chapter || openItem.title) && (
                <div className="mt-1 text-[13px] text-[var(--text-tertiary)]">
                  {[openItem.chapter, openItem.title ? pick(openItem.title, locale) : null]
                    .filter(Boolean)
                    .join(" · ")}
                </div>
              )}
              {openItem.location && (
                <div className="mt-1 text-[13px] leading-5 text-[var(--text-secondary)]">
                  📍 {pick(openItem.location, locale)}
                </div>
              )}
              {openItem.note && (
                <div className="mt-2 rounded-md bg-[var(--warning-subtle)] px-2 py-1.5 text-[12px] text-[var(--warning)]">
                  ⚠ {pick(openItem.note, locale)}
                </div>
              )}
              {openItem.steps && openItem.steps.length > 0 && (
                <ol className="mt-3 flex flex-col gap-1.5">
                  {openItem.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[13px] leading-6 text-[var(--text-secondary)]"
                    >
                      <span className="shrink-0 font-mono font-bold text-[var(--accent)]">
                        {i + 1}.
                      </span>
                      <span className="flex-1">{pick(step, locale)}</span>
                    </li>
                  ))}
                </ol>
              )}
              {openItem.reward && (
                <div className="mt-3 text-[13px] text-white">
                  <span className="font-bold text-[var(--gold)]">
                    {locale === "ko" ? "보상: " : "Reward: "}
                  </span>
                  {pick(openItem.reward, locale)}
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  scrollToItem(openItem.number);
                  closeModal();
                }}
                className="rounded-lg border border-[var(--border-strong)] bg-[var(--bg-raised)] px-3.5 py-2 text-[13px] text-[var(--text-secondary)] transition hover:text-white"
              >
                {locale === "ko" ? "목록에서 보기" : "Show in list"}
              </button>
              <button
                type="button"
                onClick={() => {
                  toggle(openItem.number);
                  closeModal();
                }}
                className="rounded-lg border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-3.5 py-2 text-[13px] font-bold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
              >
                {state[openItem.number]
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

      {zoomMap && region.mapImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomMap(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={region.mapImage}
            alt={pick(region.title, locale)}
            className="max-h-[92vh] max-w-[92vw] rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}
