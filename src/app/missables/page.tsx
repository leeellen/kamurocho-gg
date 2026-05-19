import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "놓치면 끝나는 구간 — 용과 같이 시리즈 놓침 주의",
  description: "챕터 잠금이나 분기 선택 때문에 영구적으로 놓치게 되는 항목을 게임별·챕터별로 정리했습니다.",
  alternates: { canonical: "/missables" },
  openGraph: {
    title: "용과 같이 시리즈 놓침 주의 인덱스",
    description: "챕터 잠금·분기 선택 때문에 다시는 못 보는 항목 모음.",
    url: "https://kamurocho.gg/missables",
  },
};
import { FiArrowRight, FiTarget } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { SectionTitle } from "@/components/ui/section-title";
import { getLocale } from "@/lib/i18n";
import { getMissablesIndex } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export default async function MissablesPage() {
  const locale = await getLocale();
  const entries = await getMissablesIndex(locale);
  const totalChecks = entries.reduce((sum, e) => sum + e.chapters.reduce((s, c) => s + c.items.length, 0), 0);

  return (
    <SiteShell locale={locale} section="missables">
      <div className="mx-auto max-w-[1080px] px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <SectionTitle
          eyebrow={locale === "ko" ? "놓침 주의" : "Missables"}
          title={locale === "ko" ? "놓치면 끝나는 구간만" : "What disappears if you miss it"}
          description={locale === "ko"
            ? `챕터 잠금이나 분기 선택 때문에 다시는 못 보는 항목을 모았습니다. 총 ${entries.length}개 작품 · ${totalChecks}개 주의 항목.`
            : `Chapter locks and route splits that erase progress. ${entries.length} titles · ${totalChecks} checks total.`}
        />

        <div className="mt-12 flex flex-col gap-8">
          {entries.map((entry) => (
            <article
              key={entry.game?.appId}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]"
            >
              <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <Link
                    href={`/game/${entry.game?.slug}`}
                    className="font-display cursor-pointer rounded-sm text-[18px] font-extrabold tracking-tight text-white no-underline transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] md:text-[22px]"
                  >
                    {entry.game?.name}
                  </Link>
                  <Chip tone="danger" size="xs">
                    <FiTarget size={10} aria-hidden="true" />
                    {locale === "ko" ? `주의 항목 ${entry.game?.missableCount}개` : `${entry.game?.missableCount} checks`}
                  </Chip>
                </div>
                <Link
                  href={`/game/${entry.game?.slug}`}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-[12px] font-semibold text-[var(--accent)] no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] focus-visible:rounded-sm"
                >
                  {locale === "ko" ? "전체 공략" : "Open guide"}
                  <FiArrowRight size={12} aria-hidden="true" />
                </Link>
              </header>

              <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                {entry.chapters.map((chapter, ci) => (
                  <div
                    key={`${entry.game?.appId}-${chapter.chapter}`}
                    className={`border-t border-[var(--border-subtle)] p-5 md:p-6 ${ci % 2 === 1 ? "md:border-l" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      <Chip tone="gold" size="xs" className="font-mono">CH {chapter.chapter}</Chip>
                      <h3 className="font-display m-0 text-[15px] font-bold text-white">{chapter.title}</h3>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      {chapter.items.map((item, index) => {
                        const tone =
                          item.kind === "missable" ? "danger" : item.kind === "recommended" ? "accent" : "info";
                        return (
                          <div
                            key={index}
                            className="rounded-xl border border-[var(--border-subtle)] bg-black/20 p-4"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <Chip tone={tone} size="xs">{item.kind}</Chip>
                              <span className="text-[13px] font-bold text-white">{item.title}</span>
                            </div>
                            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                              {item.when}
                            </div>
                            <p className="m-0 mt-2 text-[12px] leading-6 text-[var(--text-secondary)]">{item.body}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
