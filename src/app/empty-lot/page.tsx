import type { Metadata } from "next";
import Link from "next/link";
import { FiAlertTriangle, FiArrowLeft, FiExternalLink } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { getLocale } from "@/lib/i18n";
import { getEmptyLotGuides } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isKo = locale === "ko";
  const title = isKo ? "한 평의 공터 — 외부 공략 총집합" : "The Empty Lot — every external guide";
  const description = isKo
    ? "카무로초에서 가장 많이 다투던 빈 땅. 작품별 외부 업적 공략(Steam·PowerPyx)을 한자리에 모았습니다."
    : "Kamurocho's most fought-over patch of dirt — every game's external achievement guide (Steam & PowerPyx), gathered in one place.";
  return {
    title,
    description,
    // Keep the Easter-egg page out of search indexes.
    robots: { index: false, follow: true },
  };
}

const HAZARD =
  "repeating-linear-gradient(45deg, rgba(239,68,68,0.16) 0 14px, transparent 14px 28px)";

export default async function EmptyLotPage() {
  const locale = await getLocale();
  const guides = await getEmptyLotGuides(locale);
  const isKo = locale === "ko";

  const linkLabel = (kind: "steam" | "powerpyx") =>
    kind === "steam"
      ? isKo
        ? "Steam 커뮤니티 공략"
        : "Steam Community guide"
      : isKo
        ? "PowerPyx 트로피 가이드"
        : "PowerPyx trophy guide";

  return (
    <SiteShell locale={locale} section="empty-lot">
      <div className="mx-auto max-w-[1080px] px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[var(--text-tertiary)] no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
        >
          <FiArrowLeft size={13} aria-hidden="true" />
          {isKo ? "홈으로" : "Home"}
        </Link>

        {/* Danger-zone hero */}
        <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--accent-border)] bg-[var(--bg-surface)] p-6 md:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-2"
            style={{ background: HAZARD }}
          />
          <div className="flex flex-wrap items-center gap-2">
            <Chip tone="danger" size="sm">
              <FiAlertTriangle size={12} aria-hidden="true" />
              {isKo ? "시크릿 구역" : "Restricted area"}
            </Chip>
            <span className="font-mono text-[16px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              空き地 · KAMUROCHO
            </span>
          </div>
          <h1 className="font-display m-0 mt-4 text-[34px] font-extrabold leading-tight tracking-tight text-white md:text-[44px]">
            {isKo ? "한 평의 공터" : "The Empty Lot"}
          </h1>
          <p className="m-0 mt-3 max-w-[68ch] text-[17px] leading-7 text-[var(--text-secondary)]">
            {isKo
              ? "용과 같이 0에서 카무로초 전체가 가장 많이 다투던 빈 땅. 여긴 아직 아무것도 세워지지 않았지만, 도시의 모든 외부 공략이 여기 묻혀 있습니다. 작품별 Steam 커뮤니티 공략과 PowerPyx 트로피 로드맵을 한자리에 모았어요."
              : "The patch of dirt all of Kamurocho fought over in Yakuza 0. Nothing's built here yet — but every external guide in the city is buried in this lot. Steam Community walkthroughs and PowerPyx trophy roadmaps for each title, gathered in one place."}
          </p>
          <p className="m-0 mt-3 max-w-[68ch] text-[15px] leading-6 text-[var(--text-muted)]">
            {isKo
              ? "세이브 파일이나 자동 해제 같은 건 없습니다 — 100%는 직접 일궈야 의미가 있으니까요. 여긴 길을 알려주는 지도일 뿐입니다."
              : "No save files, no auto-unlocks — 100% only means something when you earn it. This lot just hands you the map."}
          </p>
        </section>

        {/* Per-game external guide links */}
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {guides.map((game) => (
            <li
              key={game.slug}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[16px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                  {game.year}
                </span>
                <Link
                  href={`/game/${game.slug}`}
                  className="font-display text-[17px] font-bold text-white no-underline transition-colors hover:text-[var(--accent)]"
                >
                  {game.name}
                </Link>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {game.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-white/5 px-3 py-2 text-[15px] font-semibold text-[var(--text-secondary)] no-underline transition-colors hover:border-[var(--accent-border)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                  >
                    <FiExternalLink size={13} aria-hidden="true" />
                    {linkLabel(link.kind)}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[15px] leading-6 text-[var(--text-muted)]">
          {isKo
            ? "외부 링크는 각 커뮤니티/제작자의 자료로 연결됩니다. kamurocho.gg는 이 자료들과 무관하며, 사이트 내 가이드는 이들을 교차 참조해 작성했습니다."
            : "External links point to each community's or author's own work. kamurocho.gg isn't affiliated with them; the on-site guides cross-reference these sources."}
        </p>
      </div>
    </SiteShell>
  );
}
