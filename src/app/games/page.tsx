import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiClock, FiTarget, FiUser } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { GameCover } from "@/components/ui/game-cover";
import { SectionTitle } from "@/components/ui/section-title";
import { getLocale } from "@/lib/i18n";
import { getSeriesGames, type SeriesGameCard } from "@/lib/kamurocho-data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isKo = locale === "ko";
  const title = isKo
    ? "작품 목록 — RGG 시리즈 공략"
    : "All games — RGG Studio Steam guides";
  const description = isKo
    ? "용과 같이·이치반·저지먼트 시리즈 스팀 공략 작품 목록. 각 작품의 분량, 놓치기 쉬운 항목, 희귀 업적을 한눈에 확인하세요."
    : "Every RGG Studio Steam title we cover — completion scale, missables, and rare achievements at a glance.";
  return {
    title,
    description,
    alternates: { canonical: "/games" },
    openGraph: {
      title,
      description,
      url: "https://kamurocho-gg.vercel.app/games",
    },
  };
}

const GROUP_LABEL: Record<string, { ko: string; en: string }> = {
  yakuza: { ko: "용과 같이 시리즈", en: "Yakuza / Like a Dragon series" },
  judgment: { ko: "저지먼트 시리즈", en: "Judgment series" },
  ishin: { ko: "외전 · 스핀오프", en: "Spin-offs" },
};

function groupOf(game: SeriesGameCard): "yakuza" | "judgment" | "ishin" {
  if (game.arc === "judgment") return "judgment";
  if (game.arc === "spinoff") return "ishin";
  return "yakuza";
}

export default async function GamesPage() {
  const locale = await getLocale();
  const games = await getSeriesGames(locale);
  const grouped: Record<string, SeriesGameCard[]> = {};
  for (const game of games) {
    const g = groupOf(game);
    (grouped[g] ||= []).push(game);
  }
  for (const list of Object.values(grouped)) {
    list.sort((a, b) => a.year - b.year);
  }
  const groupOrder: Array<keyof typeof GROUP_LABEL> = ["yakuza", "judgment", "ishin"];

  return (
    <SiteShell locale={locale} section="games">
      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-12 md:px-8 md:pt-16">
        <SectionTitle
          eyebrow={locale === "ko" ? "스팀 공략 모음" : "Steam guide index"}
          title={locale === "ko" ? "작품 목록" : "Games"}
          description={locale === "ko"
            ? `스팀 커뮤니티 공략이 확보된 RGG 스튜디오 ${games.length}개 작품. 카드에서 예상 분량·놓치기 쉬운 항목·희귀 업적을 먼저 확인하세요.`
            : `${games.length} RGG Studio titles backed by real Steam Community guides — scale, missables, and rare picks shown up front.`}
        />

        {groupOrder.map((group) => {
          const list = grouped[group];
          if (!list?.length) return null;
          return (
            <section key={group} className="mt-14">
              <div className="mb-6 flex items-baseline gap-3">
                <h2 className="font-display m-0 text-[20px] font-extrabold tracking-tight text-white">
                  {GROUP_LABEL[group][locale] ?? group}
                </h2>
                <span className="font-mono text-[14px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                  {list.length} {locale === "ko" ? "작품" : "titles"}
                </span>
                <span aria-hidden="true" className="ml-2 h-px flex-1 bg-[var(--border)]" />
              </div>
              <ul className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
                {list.map((game) => (
                  <li key={game.appId}>
                    <Link
                      href={`/game/${game.slug}`}
                      aria-label={locale === "ko" ? `${game.name} 공략 열기` : `Open ${game.name} guide`}
                      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                    >
                      <div className="relative overflow-hidden">
                        <GameCover
                          appId={game.appId}
                          ratio="header"
                          imgIconUrl={game.imgIconUrl}
                          headerUrl={game.headerUrl}
                          capsuleUrl={game.capsuleUrl}
                        />
                        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--bg-elevated)]/70 to-transparent" />
                        <div className="absolute left-3 top-3">
                          <Chip
                            tone="solid"
                            size="xs"
                            className="font-mono"
                            title={locale === "ko" ? "스토리 시점" : "Story era"}
                          >
                            {game.year}
                          </Chip>
                        </div>
                        <div className="absolute right-3 top-3">
                          <Chip tone="neutral" size="xs" className="border-0 bg-black/60 text-white backdrop-blur ring-0">
                            <FiClock size={10} aria-hidden="true" />
                            {game.estimatedHours}
                          </Chip>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-display text-[18px] font-extrabold leading-tight tracking-tight text-white">
                          {game.name}
                        </h3>
                        {locale !== "ko" && game.altName && (
                          <div className="mt-1 text-[14px] text-[var(--text-tertiary)]">{game.altName}</div>
                        )}
                        <p className="mt-2 line-clamp-2 min-h-[3em] text-[14px] leading-6 text-[var(--text-secondary)]">
                          {game.summary}
                        </p>

                        <dl className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-[var(--border-subtle)] bg-black/20 p-3">
                          <Meta label={locale === "ko" ? "업적" : "Achievements"} value={game.achievements} />
                          <Meta label={locale === "ko" ? "공략" : "Guides"} value={game.guideCoverage} tone="accent" />
                          <Meta label={locale === "ko" ? "희귀" : "Rare"} value={game.rareCount} tone="gold" />
                        </dl>

                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                          {game.missableCount > 0 && (
                            <Chip tone="danger" size="xs">
                              <FiTarget size={10} aria-hidden="true" />
                              {locale === "ko" ? `놓침 ${game.missableCount}` : `${game.missableCount} missable`}
                            </Chip>
                          )}
                          <Chip tone="neutral" size="xs">
                            <FiUser size={10} aria-hidden="true" />
                            {game.lead}
                          </Chip>
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 mt-4 text-[14px]">
                          <span className="font-mono text-[var(--text-tertiary)]">{locale === "ko" ? `스토리 시점 ${game.year}` : `Story era ${game.year}`}</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] transition-transform group-hover:translate-x-0.5">
                            {locale === "ko" ? "공략 열기" : "Open guide"}
                            <FiArrowRight size={13} aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </SiteShell>
  );
}

function Meta({ label, value, tone = "neutral" }: { label: string; value: number | string; tone?: "neutral" | "accent" | "gold" }) {
  const color = tone === "accent" ? "text-[var(--accent)]" : tone === "gold" ? "text-[var(--gold)]" : "text-white";
  return (
    <div>
      <dt className="font-mono text-[14px] uppercase tracking-[0.12em] text-[var(--text-tertiary)]">{label}</dt>
      <dd className={`mt-1 font-display text-[18px] font-extrabold leading-none ${color}`}>{value}</dd>
    </div>
  );
}
