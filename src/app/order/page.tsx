import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "플레이 순서 — 용과 같이 시리즈 추천 순서",
  description: "처음 시작하는 분을 위한 추천 순서와 스토리 시점 순서. RGG 시리즈를 어떤 작품부터 시작할지 안내합니다.",
  alternates: { canonical: "/order" },
  openGraph: {
    title: "플레이 순서 — 용과 같이 시리즈 추천 순서",
    description: "처음 시작하는 분을 위한 추천 순서와 스토리 시점 순서.",
    url: "https://kamurocho-gg.vercel.app/order",
  },
};
import { FiArrowRight, FiClock, FiTarget } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { SectionTitle } from "@/components/ui/section-title";
import { getLocale } from "@/lib/i18n";
import { getPlayOrderData } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export default async function OrderPage() {
  const locale = await getLocale();
  const order = await getPlayOrderData(locale);

  return (
    <SiteShell locale={locale} section="order">
      <div className="mx-auto max-w-[1080px] px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <SectionTitle
          eyebrow={locale === "ko" ? "플레이 순서" : "Play order"}
          title={locale === "ko" ? "어떻게 시작할지부터 정합니다" : "Pick the route that fits your run"}
          description={locale === "ko"
            ? "처음 시작하는 분을 위한 추천 순서와, 스토리 시간 순서를 따로 정리했습니다. 각 추천에는 왜 그렇게 진행하면 좋은지 한 줄로 적어두었습니다."
            : "A practical newcomer order and a strict chronology, side by side. Each pick comes with a one-line reason so you know why it's there."}
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Track
            locale={locale}
            badge={locale === "ko" ? "추천" : "Recommended"}
            title={locale === "ko" ? "처음 시작하는 분께" : "New to the series"}
            description={locale === "ko" ? "감정과 공략 동선을 동시에 잡는 흐름입니다." : "Balances story payoff with completion flow."}
            entries={order.newcomer}
            tone="accent"
          />
          <Track
            locale={locale}
            badge={locale === "ko" ? "시간 순서" : "Chronological"}
            title={locale === "ko" ? "스토리 시점 순서" : "By in-universe timeline"}
            description={locale === "ko" ? "발매 순서가 아닌, 작품 속 시점 기준입니다." : "Sorted by in-story era, not release date."}
            entries={order.chronological}
            tone="neutral"
          />
        </div>
      </div>
    </SiteShell>
  );
}

function Track({
  locale,
  badge,
  title,
  description,
  entries,
  tone,
}: {
  locale: "ko" | "en";
  badge: string;
  title: string;
  description: string;
  entries: Awaited<ReturnType<typeof getPlayOrderData>>["newcomer"];
  tone: "accent" | "neutral";
}) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 md:p-7">
      <div className="flex items-center justify-between gap-3">
        <Chip tone={tone === "accent" ? "accent" : "neutral"} size="sm">{badge}</Chip>
        <span className="font-mono text-[14px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
          {entries.length} {locale === "ko" ? "작품" : "titles"}
        </span>
      </div>
      <h2 className="font-display m-0 mt-4 text-[22px] font-extrabold tracking-tight text-white md:text-[26px]">
        {title}
      </h2>
      <p className="m-0 mt-2 text-[14px] leading-6 text-[var(--text-secondary)]">{description}</p>

      <ol className="relative mt-6 space-y-3">
        <span aria-hidden="true" className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-[var(--accent)]/40 via-[var(--border-strong)] to-transparent" />
        {entries.map((entry, index) => (
          <li key={`${entry.slug}-${index}`} className="relative pl-12">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-3.5 flex h-8 w-8 items-center justify-center rounded-full font-mono text-[14px] font-bold ${
                entry.recommended
                  ? "bg-[var(--accent)] text-white shadow-[var(--accent-glow)]"
                  : "border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text-tertiary)]"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <Link
              href={`/game/${entry.slug}`}
              className="group block cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 no-underline transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-[var(--bg-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[14px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                  {entry.game?.year}
                </span>
                <span className="font-display text-[15px] font-bold text-white transition-colors group-hover:text-[var(--accent)]">
                  {entry.game?.name}
                </span>
                {entry.recommended && (
                  <Chip tone="accent" size="xs">
                    {locale === "ko" ? "입문 추천" : "Recommended"}
                  </Chip>
                )}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-[var(--text-tertiary)]">
                <span className="inline-flex items-center gap-1 font-mono">
                  <FiClock size={11} aria-hidden="true" />
                  {entry.game?.estimatedHours}
                </span>
                {(entry.game?.missableCount ?? 0) > 0 && (
                  <span className="inline-flex items-center gap-1">
                    <FiTarget size={11} aria-hidden="true" />
                    {locale === "ko" ? `놓침 ${entry.game?.missableCount}` : `${entry.game?.missableCount} missable`}
                  </span>
                )}
              </div>
              <p className="m-0 mt-2.5 text-[14px] leading-7 text-[var(--text-secondary)]">{entry.reason}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-[14px] font-semibold text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                {locale === "ko" ? "공략 열기" : "Open guide"}
                <FiArrowRight size={12} aria-hidden="true" />
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
