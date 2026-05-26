import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiClock, FiCompass, FiLayers, FiTarget } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GameCover } from "@/components/ui/game-cover";
import { SectionTitle } from "@/components/ui/section-title";
import { StatTile } from "@/components/ui/stat-tile";
import { getLocale } from "@/lib/i18n";
import { getMissablesIndex, getPlayOrderData, getSeriesGames } from "@/lib/kamurocho-data";

export default async function HomePage() {
  const locale = await getLocale();
  const [games, playOrder, missables] = await Promise.all([
    getSeriesGames(locale),
    getPlayOrderData(locale),
    getMissablesIndex(locale),
  ]);

  const totalAchievements = games.reduce((sum, game) => sum + game.achievements, 0);
  const totalGuidedAchievements = games.reduce((sum, game) => sum + game.guideCoverage, 0);
  const totalMissables = missables.reduce(
    (sum, entry) =>
      sum + entry.chapters.reduce((s, chapter) => s + chapter.items.length, 0),
    0,
  );
  const coveragePct = totalAchievements
    ? Math.round((totalGuidedAchievements / totalAchievements) * 100)
    : 0;
  const featured = games[0];

  return (
    <SiteShell locale={locale} section="home">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {featured && (
            <>
              <div className="absolute inset-0 scale-110">
                <GameCover
                  appId={featured.appId}
                  ratio="header"
                  imgIconUrl={featured.imgIconUrl}
                  headerUrl={featured.headerUrl}
                  capsuleUrl={featured.capsuleUrl}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    aspectRatio: "auto",
                    objectFit: "cover",
                    filter: "saturate(1.2) brightness(0.45) blur(32px)",
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/30 via-[var(--bg-base)]/70 to-[var(--bg-base)]" />
              <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(239,68,68,0.25),transparent_60%)]" />
            </>
          )}
        </div>

        <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
            <Eyebrow locale={locale} tracking="0.2em">
              {locale === "ko" ? "RGG 시리즈 공략" : "RGG Studio · Steam guides"}
            </Eyebrow>
          </div>

          <h1 className="font-display mt-5 max-w-[18ch] text-[44px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white md:text-[72px]">
            {locale === "ko" ? (
              <>
                시리즈 전체를
                <br />
                <span className="text-[var(--accent)]">한곳에서</span> 공략하세요.
              </>
            ) : (
              <>
                Clear the whole series
                <br />
                from <span className="text-[var(--accent)]">one place</span>.
              </>
            )}
          </h1>

          <p className="mt-6 max-w-[56ch] text-[15px] leading-7 text-[var(--text-secondary)] md:text-[16px]">
            {locale === "ko"
              ? "키류·이치반 사가와 저지먼트 시리즈의 스팀 업적 공략을 모았습니다. 게임별 진행도, 장별 놓치기 쉬움, 희귀 업적, 단계별 실행법까지 흩어진 정보 없이 바로 확인하세요."
              : "Every Steam achievement guide for the Kiryu saga, Ichiban saga, and Judgment line — coverage, missables, rare picks, and step-by-step routes in one place."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/games"
              className="group inline-flex h-12 cursor-pointer items-center gap-2.5 rounded-full bg-[var(--accent)] px-6 text-[14px] font-bold text-white no-underline shadow-[var(--accent-glow)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-[0_0_0_1px_var(--accent-border),0_0_48px_rgba(239,68,68,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
            >
              {locale === "ko" ? "게임 둘러보기" : "Browse games"}
              <FiArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/order"
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-[14px] font-semibold text-white no-underline backdrop-blur transition-colors hover:border-white/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
            >
              <FiCompass size={15} aria-hidden="true" />
              {locale === "ko" ? "플레이 순서 보기" : "View play order"}
            </Link>
          </div>

          {/* Featured pick — single clickable card with clean image/content split */}
          {featured && (
            <Link
              href={`/game/${featured.slug}`}
              aria-label={locale === "ko" ? `${featured.name} 공략 열기` : `Open ${featured.name} guide`}
              className="group mt-12 grid w-full max-w-[640px] cursor-pointer items-center grid-cols-[140px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 no-underline backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] sm:grid-cols-[180px_1fr] sm:gap-5"
            >
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <GameCover
                  appId={featured.appId}
                  ratio="header"
                  imgIconUrl={featured.imgIconUrl}
                  headerUrl={featured.headerUrl}
                  capsuleUrl={featured.capsuleUrl}
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center gap-2 py-1">
                <Chip tone="accent" size="xs" className="self-start">
                  {locale === "ko" ? "입문 추천작" : "Start here"}
                </Chip>
                <div className="font-display text-[18px] font-extrabold leading-tight tracking-tight text-white transition-colors group-hover:text-[var(--accent)] sm:text-[20px]">
                  {featured.name}
                </div>
                <p className="m-0 line-clamp-2 text-[14px] leading-6 text-[var(--text-secondary)] sm:text-[14px]">
                  {featured.summary}
                </p>
                <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[var(--text-tertiary)]">
                  <span className="font-mono">{featured.estimatedHours}</span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span>{locale === "ko" ? `업적 ${featured.achievements}` : `${featured.achievements} ach.`}</span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span>{locale === "ko" ? `놓침 ${featured.missableCount}` : `${featured.missableCount} missable`}</span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* STATS */}
        <section aria-label={locale === "ko" ? "사이트 통계" : "Site stats"} className="-mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatTile
            label={locale === "ko" ? "수록 작품" : "Games covered"}
            value={games.length}
            hint={locale === "ko" ? "RGG 스튜디오 시리즈" : "RGG Studio titles"}
          />
          <StatTile
            label={locale === "ko" ? "전체 업적" : "Achievements"}
            value={totalAchievements.toLocaleString()}
          />
          <StatTile
            tone="accent"
            label={locale === "ko" ? "공략 커버리지" : "Guide coverage"}
            value={`${coveragePct}%`}
            hint={locale === "ko" ? `${totalGuidedAchievements.toLocaleString()}개 공략 연결` : `${totalGuidedAchievements.toLocaleString()} guides linked`}
          />
          <StatTile
            tone="gold"
            label={locale === "ko" ? "놓치기 쉬운 항목" : "Missable checks"}
            value={totalMissables}
            hint={locale === "ko" ? "장별 정리" : "Chapter-aware"}
          />
        </section>

        {/* SERIES GRID */}
        <section className="mt-20">
          <SectionTitle
            eyebrow={locale === "ko" ? "작품 목록" : "Series index"}
            title={locale === "ko" ? "작품별 공략 모음" : "Every RGG title, one click in"}
            description={locale === "ko" ? "스팀 커뮤니티 공략이 확보된 작품만 추렸습니다. 카드에서 분량·놓치기 쉬운 항목·희귀 업적을 한눈에 확인하세요." : "Only titles backed by real Steam Community guides. Each card shows scale, missables, and rare picks up front."}
            action={
              <Link
                href="/games"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--border-strong)] px-4 py-2 text-[14px] font-semibold text-[var(--text-secondary)] no-underline transition-colors hover:border-white/30 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
              >
                {locale === "ko" ? "전체 보기" : "See all"} <FiArrowRight size={13} aria-hidden="true" />
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((game) => (
              <Link
                key={game.appId}
                href={`/game/${game.slug}`}
                aria-label={locale === "ko" ? `${game.name} 공략 열기` : `Open ${game.name} guide`}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
              >
                <div className="relative overflow-hidden">
                  <GameCover
                    appId={game.appId}
                    ratio="header"
                    imgIconUrl={game.imgIconUrl}
                    headerUrl={game.headerUrl}
                    capsuleUrl={game.capsuleUrl}
                  />
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-1.5">
                    <Chip
                      tone="solid"
                      size="xs"
                      className="font-mono"
                      title={locale === "ko" ? "스토리 시점" : "Story era"}
                    >
                      {game.year}
                    </Chip>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-display line-clamp-1 text-[15px] font-extrabold tracking-tight text-white">
                    {game.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 min-h-[3em] text-[14px] leading-6 text-[var(--text-secondary)]">
                    {game.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {game.missableCount > 0 && (
                      <Chip tone="danger" size="xs">
                        <FiTarget size={10} aria-hidden="true" />
                        {locale === "ko" ? `놓침 ${game.missableCount}` : `${game.missableCount} missable`}
                      </Chip>
                    )}
                    {game.rareCount > 0 && (
                      <Chip tone="gold" size="xs">
                        {locale === "ko" ? `희귀 ${game.rareCount}` : `${game.rareCount} rare`}
                      </Chip>
                    )}
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-[var(--border-subtle)] pt-3 mt-3 text-[14px] text-[var(--text-tertiary)]">
                    <span className="font-mono">{game.estimatedHours}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] transition-transform group-hover:translate-x-0.5">
                      {locale === "ko" ? "공략" : "Guide"}
                      <FiArrowRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ORDER + MISSABLES */}
        <section className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
            <SectionTitle
              eyebrow={locale === "ko" ? "플레이 순서" : "Play order"}
              title={locale === "ko" ? "처음 시작한다면" : "If you're new"}
              description={locale === "ko" ? "감정·서사 흐름과 공략 동선을 동시에 잡는 추천 순서입니다." : "A recommended path that balances story payoff with cleanup flow."}
            />
            <ol className="relative mt-6 space-y-1">
              <span aria-hidden="true" className="absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border-strong)] to-transparent" />
              {playOrder.newcomer.slice(0, 6).map((entry, index) => (
                <li key={entry.slug} className="relative pl-9">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-3 flex h-6 w-6 items-center justify-center rounded-full text-[14px] font-bold ${
                      entry.recommended
                        ? "bg-[var(--accent)] text-white shadow-[var(--accent-glow)]"
                        : "border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text-tertiary)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={`/game/${entry.slug}`}
                    className="block cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-3 no-underline transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-[var(--bg-raised)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[14px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">{entry.game?.year}</span>
                      <span className="font-display text-[14px] font-bold text-white">{entry.game?.name}</span>
                      {entry.recommended && (
                        <Chip tone="accent" size="xs">{locale === "ko" ? "입문 추천" : "Recommended"}</Chip>
                      )}
                    </div>
                    <p className="mt-1.5 m-0 text-[14px] leading-6 text-[var(--text-secondary)]">{entry.reason}</p>
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              href="/order"
              className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-[14px] font-semibold text-[var(--accent)] no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] focus-visible:rounded-sm"
            >
              {locale === "ko" ? "전체 순서 보기" : "See the full order"} <FiArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
            <SectionTitle
              eyebrow={locale === "ko" ? "놓치기 쉬움" : "Missables"}
              title={locale === "ko" ? "놓치기 쉬운 구간" : "Watch the chapters"}
              description={locale === "ko" ? "장 잠금·분기 때문에 다시 못 보는 구간 위주로 모았습니다." : "Chapter locks and route splits that erase progress if you miss them."}
            />
            <ul className="mt-5 flex flex-col gap-3">
              {missables.slice(0, 3).map((entry) => (
                <li key={entry.game?.appId}>
                  <Link
                    href={`/game/${entry.game?.slug}`}
                    className="block cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 no-underline transition-all hover:-translate-y-0.5 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-display text-[14px] font-bold text-white">{entry.game?.name}</div>
                      <FiArrowRight size={13} aria-hidden="true" className="text-[var(--text-tertiary)]" />
                    </div>
                    {entry.chapters.slice(0, 2).map((chapter) => (
                      <div
                        key={`${entry.game?.appId}-${chapter.chapter}`}
                        className="mt-2 rounded-lg border border-[var(--border-subtle)] bg-black/20 px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <Chip tone="gold" size="xs" className="font-mono">CH {chapter.chapter}</Chip>
                          <span className="text-[14px] font-semibold text-white">{chapter.title}</span>
                        </div>
                        {chapter.items[0] && (
                          <div className="mt-1 line-clamp-1 text-[14px] text-[var(--text-tertiary)]">
                            {chapter.items[0].title}
                          </div>
                        )}
                      </div>
                    ))}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/missables"
              className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-[14px] font-semibold text-[var(--accent)] no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] focus-visible:rounded-sm"
            >
              {locale === "ko" ? "놓치기 쉬움 전체 보기" : "Open missables index"} <FiArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-20">
          <SectionTitle
            eyebrow={locale === "ko" ? "왜 kamurocho.gg인가" : "What this site does"}
            title={locale === "ko" ? "공략을 그냥 모으는 게 아닙니다" : "Built around the cleanup flow"}
            align="left"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FiBookOpen size={18} aria-hidden="true" />,
                title: locale === "ko" ? "단계별 실행 공략" : "Actionable steps",
                desc: locale === "ko" ? "줄글이 아닌, 따라 하기 좋은 액션 단계로 정리합니다." : "Step-by-step actions, not wall-of-text.",
              },
              {
                icon: <FiTarget size={18} aria-hidden="true" />,
                title: locale === "ko" ? "희귀 업적 우선" : "Rare-first routing",
                desc: locale === "ko" ? "달성률 낮은 업적부터 처리하도록 정렬합니다." : "Sorted to clear the rarest first.",
              },
              {
                icon: <FiLayers size={18} aria-hidden="true" />,
                title: locale === "ko" ? "장별 놓침 정리" : "Chapter-locked notes",
                desc: locale === "ko" ? "잠기기 전에 무엇을 챙길지 장별로 표시합니다." : "What to grab before each chapter locks.",
              },
              {
                icon: <FiClock size={18} aria-hidden="true" />,
                title: locale === "ko" ? "완료 예상 시간" : "Completion estimates",
                desc: locale === "ko" ? "어디까지가 무리인지 미리 가늠합니다." : "Plan your route before you commit.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-white/15"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--accent-subtle)] opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] ring-1 ring-inset ring-[var(--accent-border)]">
                  {pillar.icon}
                </div>
                <h3 className="font-display relative mt-4 text-[15px] font-bold text-white">{pillar.title}</h3>
                <p className="relative mt-1.5 text-[14px] leading-6 text-[var(--text-secondary)]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/60 p-6 md:p-8">
          <p className="m-0 max-w-[80ch] text-[14px] leading-7 text-[var(--text-secondary)]">
            {locale === "ko"
              ? "kamurocho.gg는 스팀 커뮤니티 공략을 실제 플레이 흐름에 맞게 재구성한 비공식 팬 공략 모음입니다. SEGA 및 RGG Studio와는 무관한 비영리 프로젝트입니다."
              : "kamurocho.gg is an unofficial, fan-curated guide companion that restructures Steam Community guides into a practical completion flow. It is not affiliated with SEGA or RGG Studio."}
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
