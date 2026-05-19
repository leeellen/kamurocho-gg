import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiClock, FiLayers, FiTarget } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { GameCover } from "@/components/ui/game-cover";
import { getLocale } from "@/lib/i18n";
import { getMissablesIndex, getPlayOrderData, getSeriesGames } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const locale = await getLocale();
  const [games, playOrder, missables] = await Promise.all([
    getSeriesGames(locale),
    getPlayOrderData(locale),
    getMissablesIndex(locale),
  ]);

  const totalAchievements = games.reduce((sum, game) => sum + game.achievements, 0);
  const totalGuides = games.reduce((sum, game) => sum + game.guideCoverage, 0);
  const totalMissables = games.reduce((sum, game) => sum + game.missableCount, 0);
  const featured = games[0];

  return (
    <SiteShell locale={locale} section="home">
      <section className="relative overflow-hidden bg-[var(--chrome-top)] text-[var(--chrome-text)]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 pb-0 pt-12 md:grid-cols-[1fr_480px] md:px-8 md:pt-14">
          <div className="pb-12">
            <div className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--chrome-muted)]">
              {locale === "ko" ? "시리즈 종합 가이드" : "Series compendium"}
            </div>
            <h1 className="max-w-[12ch] font-['Bebas_Neue'] text-[64px] leading-[0.9] tracking-[0.02em] md:text-[88px]">
              {locale === "ko" ? "용과 같이 전 시리즈," : "Every game in the saga,"}
              <br />
              <span className="text-[var(--accent)]">
                {locale === "ko" ? "하나도 놓치지 않는 가이드" : "nothing missable left behind."}
              </span>
            </h1>
            <p className="mt-5 max-w-[56ch] text-[14px] leading-7 text-[var(--chrome-muted)]">
              {locale === "ko"
                ? "키류 아크, 이치반 아크, 저지먼트 라인의 Steam 업적과 실전 공략만 모았습니다. 챕터별 미서블, 희귀 업적, 바로 적용할 수 있는 가이드를 한 화면에서 정리합니다."
                : "A single hub for the Kiryu arc, Ichiban arc, and Judgment line. It keeps Steam achievements, missables, and actionable guide steps in one place."}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/games"
                className="inline-flex h-10 items-center gap-2 rounded-sm bg-[var(--danger)] px-4 text-[13px] font-bold uppercase tracking-[0.06em] text-white no-underline transition-colors hover:bg-[var(--danger-hover)]"
              >
                {locale === "ko" ? "게임 둘러보기" : "Browse games"} <FiArrowRight size={14} />
              </Link>
              <Link
                href="/order"
                className="inline-flex h-10 items-center gap-2 rounded-sm border border-white/20 px-4 text-[13px] font-medium text-white no-underline hover:border-white/50"
              >
                {locale === "ko" ? "추천 순서 보기" : "View play order"}
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[280px] items-end overflow-hidden border-t border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_20px)]">
            <div className="w-full p-6">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--chrome-muted)]">
                {locale === "ko" ? "추천 출발점" : "Recommended starting point"}
              </div>
              <div className="mb-2 text-[28px] font-extrabold tracking-tight">{featured.name}</div>
              <div className="text-[14px] leading-6 text-[var(--chrome-muted)]">{featured.summary}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/5">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-4 px-5 md:px-8">
            <Stat label={locale === "ko" ? "수록 게임" : "Games covered"} value={String(games.length)} />
            <Stat label={locale === "ko" ? "업적 수" : "Achievements"} value={String(totalAchievements)} />
            <Stat label={locale === "ko" ? "실가이드 row" : "Guide rows"} value={String(totalGuides)} />
            <Stat label={locale === "ko" ? "미서블 체크" : "Missable checks"} value={String(totalMissables)} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8">
        <SectionDivider
          label={locale === "ko" ? "series index" : "series index"}
          title={locale === "ko" ? "RGG Steam 가이드 허브" : "RGG Steam guide hub"}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <Link
              key={game.appId}
              href={`/game/${game.slug}`}
              className="overflow-hidden rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] no-underline shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-pop)]"
            >
              <GameCover
                appId={game.appId}
                ratio="header"
                imgIconUrl={game.imgIconUrl}
                headerUrl={game.headerUrl}
                capsuleUrl={game.capsuleUrl}
              />
              <div className="p-4">
                <div className="mb-1 line-clamp-1 text-[14px] font-bold text-[var(--text-primary)]">{game.name}</div>
                <div className="mb-2 font-mono text-[11px] text-[var(--text-muted)]">
                  {game.year} · {game.achievements} {locale === "ko" ? "업적" : "achievements"}
                </div>
                <p className="mb-3 line-clamp-2 text-[12px] leading-6 text-[var(--text-secondary)]">{game.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  <Chip tone="danger">{locale === "ko" ? `미서블 ${game.missableCount}` : `${game.missableCount} missables`}</Chip>
                  <Chip>{locale === "ko" ? `${game.guideCoverage}개 공략 연결` : `${game.guideCoverage} guides linked`}</Chip>
                  <Chip tone="safe">{locale === "ko" ? `희귀 ${game.rareCount}` : `${game.rareCount} rare`}</Chip>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section>
            <SectionDivider
              label={locale === "ko" ? "play order" : "play order"}
              title={locale === "ko" ? "입문자 추천 순서" : "Newcomer order"}
            />
            <div className="relative flex flex-col gap-0">
              <div className="absolute bottom-4 left-[27px] top-4 w-px bg-[var(--border)]" />
              {playOrder.newcomer.slice(0, 6).map((entry) => (
                <div key={entry.slug} className="relative flex gap-4 py-2">
                  <div className={`mt-4 h-[18px] w-[18px] rounded-full border-2 ${entry.recommended ? "border-[var(--danger)] bg-[var(--danger)]" : "border-[var(--border)] bg-[var(--bg-base)]"}`} />
                  <Link
                    href={`/game/${entry.slug}`}
                    className={`flex-1 rounded-[4px] border p-4 no-underline shadow-[var(--shadow-card)] ${entry.recommended ? "border-[var(--danger-bg)] bg-[var(--bg-surface)]" : "border-[var(--border)] bg-[var(--bg-surface)]"}`}
                  >
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                        {entry.game?.year}
                      </span>
                      <span className="text-[14px] font-bold">{entry.game?.name}</span>
                      {entry.recommended && <Chip tone="danger">{locale === "ko" ? "추천" : "Recommended"}</Chip>}
                    </div>
                    <p className="text-[12px] leading-6 text-[var(--text-secondary)]">{entry.reason}</p>
                  </Link>
                </div>
              ))}
            </div>
            <Link href="/order" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--danger)] no-underline">
              {locale === "ko" ? "전체 순서 보기" : "See the full order"} <FiArrowRight size={14} />
            </Link>
          </section>

          <section>
            <SectionDivider
              label={locale === "ko" ? "missables" : "missables"}
              title={locale === "ko" ? "챕터별 주의 구간" : "Watchlist by chapter"}
            />
            <div className="flex flex-col gap-3">
              {missables.slice(0, 3).map((entry) => (
                <div key={entry.game?.appId} className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-card)]">
                  <div className="mb-2 text-[14px] font-bold">{entry.game?.name}</div>
                  {entry.chapters.slice(0, 2).map((chapter) => (
                    <div key={`${entry.game?.appId}-${chapter.chapter}`} className="mb-2 rounded-[3px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-[var(--gold)]">CH {chapter.chapter}</span>
                        <span className="text-[12px] font-semibold">{chapter.title}</span>
                      </div>
                      <div className="mt-1 text-[12px] leading-6 text-[var(--text-secondary)]">
                        {chapter.items[0]?.title}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <Link href="/missables" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--danger)] no-underline">
              {locale === "ko" ? "미서블 목록 보기" : "Open missables index"} <FiArrowRight size={14} />
            </Link>
          </section>
        </div>

        <div className="mt-12 rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Chip><FiBookOpen size={11} /> {locale === "ko" ? "실행형 공략" : "Actionable guides"}</Chip>
            <Chip><FiTarget size={11} /> {locale === "ko" ? "희귀 업적 우선" : "Rare-first routing"}</Chip>
            <Chip><FiLayers size={11} /> {locale === "ko" ? "챕터 미서블 정리" : "Chapter missable notes"}</Chip>
            <Chip><FiClock size={11} /> {locale === "ko" ? "클린업 시간 예측" : "Cleanup time estimates"}</Chip>
          </div>
          <p className="m-0 text-[13px] leading-7 text-[var(--text-secondary)]">
            {locale === "ko"
              ? "kamurocho.gg는 팬이 직접 검증하고 Steam 커뮤니티 공략을 다시 실행형으로 정리한 비공식 가이드 허브입니다. SEGA 및 RGG Studio와는 무관합니다."
              : "kamurocho.gg is an unofficial, fan-curated guide hub that restructures Steam Community guides into a practical completion flow. It is not affiliated with SEGA or RGG Studio."}
          </p>
        </div>
      </div>
    </SiteShell>
  );
}

function SectionDivider({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">{label}</div>
      <div className="text-[15px] font-bold text-[var(--text-primary)]">{title}</div>
      <div className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-r border-white/10 px-5 py-4 last:border-r-0">
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--chrome-muted)]">{label}</div>
      <div className="mt-2 text-[28px] font-extrabold text-white">{value}</div>
    </div>
  );
}

function Chip({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "danger" | "safe";
}) {
  const style =
    tone === "danger"
      ? "bg-[var(--danger-bg)] text-[var(--danger-text)]"
      : tone === "safe"
        ? "bg-[var(--safe-bg)] text-[var(--safe-text)]"
        : "bg-[var(--bg-soft)] text-[var(--text-secondary)]";
  return <span className={`inline-flex items-center gap-1 rounded-[2px] px-2 py-1 text-[10px] font-medium ${style}`}>{children}</span>;
}
