import type { Metadata } from "next";
import Link from "next/link";
import { FiAward, FiBookOpen, FiExternalLink, FiPackage } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { getGuideSources } from "@/lib/data";
import type {
  AchievementCitation,
  CollectibleCitation,
  SubstoryCitation,
} from "@/lib/data";
import { getLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const title = locale === "ko" ? "공략 출처 — kamurocho.gg" : "Guide sources — kamurocho.gg";
  const description = locale === "ko"
    ? "kamurocho.gg가 인용한 외부 공략 출처와 인용된 항목을 작품별로 정리한 페이지입니다."
    : "Every external guide source kamurocho.gg references, with the achievements, substories, and collectibles that cite each one.";
  return {
    title,
    description,
    alternates: { canonical: "/sources" },
    robots: { index: true, follow: true },
  };
}

type Section = "achievements" | "substories" | "collectibles";

function sectionLabel(section: Section, locale: Locale) {
  if (section === "achievements") return locale === "ko" ? "업적 가이드" : "Achievement guides";
  if (section === "substories") return locale === "ko" ? "서브 스토리" : "Substories";
  return locale === "ko" ? "수집 요소" : "Collectibles";
}

function sectionIcon(section: Section) {
  if (section === "achievements") return <FiAward size={16} aria-hidden="true" />;
  if (section === "substories") return <FiBookOpen size={16} aria-hidden="true" />;
  return <FiPackage size={16} aria-hidden="true" />;
}

export default async function SourcesPage() {
  const locale = await getLocale();
  const sources = await getGuideSources(locale);

  const totals = sources.reduce(
    (acc, entry) => {
      acc.achievements += entry.achievementSources.length;
      acc.substories += entry.substorySources.length;
      acc.collectibles += entry.collectibleSources.length;
      return acc;
    },
    { achievements: 0, substories: 0, collectibles: 0 },
  );
  const totalSources = totals.achievements + totals.substories + totals.collectibles;

  return (
    <SiteShell locale={locale} section="sources">
      <section className="mx-auto max-w-[960px] px-5 pb-20 pt-16 md:px-8 md:pt-24">
        <Eyebrow locale={locale} tracking="0.2em">
          {locale === "ko" ? "공략 출처" : "Guide sources"}
        </Eyebrow>
        <SectionTitle
          eyebrow=""
          title={locale === "ko" ? "공략에 사용된 외부 출처" : "External guide sources we cite"}
          description={
            locale === "ko"
              ? "작품별 가이드에 참고한 외부 공략·커뮤니티 글의 원본 링크와 인용된 항목을 모았습니다. 각 업적·서브스토리·수집 카드에는 출처를 표시하지 않고 이 페이지에서 한눈에 확인할 수 있도록 정리했습니다."
              : "Original links for every external guide and community post our entries draw from, alongside the achievements, substories, and collectibles that cite each one. Achievement, substory, and collectible cards no longer surface inline source labels — see this page instead."
          }
        />

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[16px] text-[var(--text-tertiary)]">
          <span>
            {locale === "ko" ? `총 ${totalSources}건 인용` : `${totalSources} citations total`}
          </span>
          <span>
            {locale === "ko" ? `작품 ${sources.length}개` : `${sources.length} titles`}
          </span>
        </div>

        <aside className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 text-[15px] leading-7 text-[var(--text-secondary)]">
          <div className="font-mono text-[13px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
            {locale === "ko" ? "저작권 안내" : "Attribution & copyright"}
          </div>
          <p className="m-0 mt-3">
            {locale === "ko"
              ? "kamurocho.gg는 SEGA / RGG Studio와 무관한 비공식 팬 프로젝트입니다. 각 외부 공략의 텍스트·이미지 저작권은 원 저작자에게 있으며, 본 사이트는 출처를 표시한 인용·요약·링크 형태로 사용합니다. 원문 그대로의 재배포가 필요한 경우 해당 원본을 방문해 주세요. 표시된 출처에 문제가 있을 경우 알려 주시면 즉시 조치하겠습니다."
              : "kamurocho.gg is an unofficial fan project, unaffiliated with SEGA or RGG Studio. Copyright in each external guide remains with the original author; this site only quotes, summarizes, and links to those sources with attribution. For verbatim content please visit the original. We will respond promptly to take-down or correction requests."}
          </p>
        </aside>

        <div className="mt-12 flex flex-col gap-10">
          {sources.map((entry) => {
            const groups: Array<{
              section: Section;
              items: Array<AchievementCitation | SubstoryCitation | CollectibleCitation>;
            }> = [
              { section: "achievements", items: entry.achievementSources },
              { section: "substories", items: entry.substorySources },
              { section: "collectibles", items: entry.collectibleSources },
            ];

            return (
              <section key={entry.game.appId} className="border-t border-[var(--border-subtle)] pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display m-0 text-[26px] font-extrabold tracking-tight text-white md:text-[30px]">
                    <Link
                      href={`/game/${entry.game.slug}`}
                      className="cursor-pointer text-white no-underline transition-colors hover:text-[var(--accent)]"
                    >
                      {entry.game.name}
                    </Link>
                  </h2>
                </div>

                {groups
                  .filter((group) => group.items.length > 0)
                  .map((group) => (
                    <div key={group.section} className="mt-6">
                      <div className="flex items-center gap-2 text-[var(--accent)]">
                        {sectionIcon(group.section)}
                        <span className="font-mono text-[13px] uppercase tracking-[0.16em]">
                          {sectionLabel(group.section, locale)}
                        </span>
                        <span className="font-mono text-[13px] text-[var(--text-tertiary)]">
                          {locale === "ko" ? `${group.items.length}건` : `${group.items.length}`}
                        </span>
                      </div>

                      <ul className="mt-4 flex flex-col gap-3">
                        {group.items.map((src) => (
                          <li key={`${group.section}-${src.url}`}>
                            <SourceCard locale={locale} section={group.section} source={src} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </section>
            );
          })}
        </div>
      </section>
    </SiteShell>
  );
}

function SourceCard({
  locale,
  section,
  source,
}: {
  locale: Locale;
  section: Section;
  source: AchievementCitation | SubstoryCitation | CollectibleCitation;
}) {
  const cited: string[] =
    section === "achievements"
      ? (source as AchievementCitation).achievements
      : section === "collectibles"
        ? (source as CollectibleCitation).categories
        : [];
  const label =
    section === "achievements"
      ? null
      : (source as SubstoryCitation | CollectibleCitation).label;

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-[16px] no-underline transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
            {source.host}
          </div>
          {label ? (
            <div className="mt-1 truncate text-white">{label}</div>
          ) : (
            <div className="mt-1 truncate text-white">{source.url}</div>
          )}
          {label && <div className="truncate font-mono text-[13px] text-[var(--text-tertiary)]">{source.url}</div>}
        </div>
        <FiExternalLink
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[var(--text-secondary)] transition-colors group-hover:text-white"
        />
      </div>
      {cited.length > 0 && (
        <div className="border-t border-[var(--border-subtle)] pt-3">
          <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
            {section === "achievements"
              ? locale === "ko"
                ? `인용 업적 ${cited.length}건`
                : `Cited by ${cited.length} achievement${cited.length === 1 ? "" : "s"}`
              : locale === "ko"
                ? `사용 카테고리 ${cited.length}개`
                : `Used in ${cited.length} categor${cited.length === 1 ? "y" : "ies"}`}
          </div>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {cited.map((name) => (
              <li
                key={name}
                className="rounded-full border border-[var(--border-subtle)] bg-black/30 px-2.5 py-1 font-mono text-[12px] text-[var(--text-secondary)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </a>
  );
}
