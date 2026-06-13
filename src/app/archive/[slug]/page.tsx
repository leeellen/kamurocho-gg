import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiBookOpen, FiInfo, FiArrowRight } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { getLocale } from "@/lib/i18n";
import { getArchiveEntry } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const entry = getArchiveEntry(slug, locale);
  if (!entry) {
    return { title: locale === "ko" ? "찾을 수 없음" : "Not found" };
  }
  const isKo = locale === "ko";
  const title = isKo
    ? `${entry.title} — RGG 정보 보관소`
    : `${entry.title} — RGG Archive`;
  const description = entry.note;
  return {
    title,
    description,
    alternates: { canonical: `/archive/${entry.slug}` },
    openGraph: {
      title,
      description,
      url: `https://kamurocho-gg.vercel.app/archive/${entry.slug}`,
    },
  };
}

export default async function ArchiveEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const entry = getArchiveEntry(slug, locale);

  if (!entry) {
    notFound();
  }

  return (
    <SiteShell locale={locale} section="order">
      <div className="mx-auto max-w-[860px] px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <Link
          href="/order"
          className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[var(--text-tertiary)] no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
        >
          <FiArrowLeft size={13} aria-hidden="true" />
          {locale === "ko" ? "플레이 순서 / 정보 보관소" : "Play order / Archive"}
        </Link>

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <Chip tone="info" size="sm">
              <FiBookOpen size={12} aria-hidden="true" />
              {locale === "ko" ? "정보 보관소" : "Archive"}
            </Chip>
            <span className="font-mono text-[16px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
              {entry.year}
            </span>
          </div>
          <h1 className="font-display m-0 mt-4 text-[34px] font-extrabold leading-tight tracking-tight text-white md:text-[42px]">
            {entry.title}
          </h1>
          {entry.originalTitle && (
            <p className="m-0 mt-1 font-mono text-[16px] text-[var(--text-tertiary)]">
              {entry.originalTitle}
            </p>
          )}

          <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Fact label={locale === "ko" ? "플랫폼 / 발매" : "Platform / Release"} value={entry.releaseInfo} />
            <Fact label={locale === "ko" ? "주인공" : "Lead"} value={entry.lead} />
            <Fact label={locale === "ko" ? "시리즈 위치" : "Series placement"} value={entry.placement} />
          </dl>
        </header>

        <section
          className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--l2-border)] bg-[var(--l2-subtle)] p-5"
          aria-label={locale === "ko" ? "플레이 가능 여부" : "Availability"}
        >
          <FiInfo size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--l2)]" />
          <div>
            <div className="font-display text-[16px] font-bold text-white">
              {locale === "ko" ? "지금 플레이할 수 있나요?" : "Can you play it now?"}
            </div>
            <p className="m-0 mt-1 text-[16px] leading-6 text-[var(--text-secondary)]">
              {entry.availability}
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display m-0 text-[22px] font-extrabold tracking-tight text-white">
            {locale === "ko" ? "개요" : "Overview"}
          </h2>
          <div className="mt-3 space-y-4">
            {entry.overview.map((paragraph, index) => (
              <p key={index} className="m-0 text-[17px] leading-7 text-[var(--text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 md:p-7">
          <h2 className="font-display m-0 text-[22px] font-extrabold tracking-tight text-white">
            {locale === "ko" ? "시리즈에서의 의미" : "Why it matters"}
          </h2>
          <p className="m-0 mt-3 text-[17px] leading-7 text-[var(--text-secondary)]">
            {entry.whyItMatters}
          </p>
          {entry.modernRoute && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-4 py-3 text-[16px] font-semibold text-[var(--accent)]">
              <FiArrowRight size={14} aria-hidden="true" />
              {entry.modernRoute}
            </div>
          )}
        </section>

        <p className="mt-10 text-[15px] leading-6 text-[var(--text-muted)]">
          {locale === "ko"
            ? "이 작품은 Steam 업적 추적 대상이 아닙니다. 시리즈 전체 흐름과 세계관 이해를 돕기 위한 정보 보관소 항목입니다."
            : "This title isn't tracked for Steam achievements. It lives in the archive to help you understand the wider series and its world."}
        </p>
      </div>
    </SiteShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
      <dt className="font-mono text-[14px] uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
        {label}
      </dt>
      <dd className="m-0 mt-1.5 text-[16px] font-semibold leading-6 text-white">{value}</dd>
    </div>
  );
}
