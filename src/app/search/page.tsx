import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiSearch, FiTarget } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GameCover } from "@/components/ui/game-cover";
import { getLocale } from "@/lib/i18n";
import { searchKamurocho } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isKo = locale === "ko";
  return {
    title: isKo ? "공략 검색" : "Search guides",
    description: isKo
      ? "용과 같이·이치반·저지먼트 시리즈 게임, 업적, 공략 키워드 검색."
      : "Search across games, achievements, and guide keywords for the entire RGG Studio catalog.",
    alternates: { canonical: "/search" },
    robots: { index: false, follow: true },
  };
}

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const locale = await getLocale();
  const resolved = (await searchParams) ?? {};
  const raw = Array.isArray(resolved.q) ? resolved.q[0] : resolved.q;
  const query = (raw ?? "").trim();
  const results = await searchKamurocho(query, locale);
  const hasResults = results.games.length + results.achievements.length > 0;

  return (
    <SiteShell locale={locale} section="search">
      <div className="mx-auto max-w-[980px] px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <Eyebrow locale={locale} tracking="0.2em">
          {locale === "ko" ? "검색" : "Search"}
        </Eyebrow>
        <h1 className="font-display m-0 mt-2 text-[34px] font-extrabold tracking-tight text-white md:text-[44px]">
          {locale === "ko" ? "공략을 한 번에 찾기" : "Find a guide, fast"}
        </h1>
        <p className="m-0 mt-2 text-[14px] leading-7 text-[var(--text-secondary)]">
          {locale === "ko" ? "게임 제목, 업적 이름, 공략 키워드로 찾을 수 있습니다." : "Search across game titles, achievement names, and guide keywords."}
        </p>

        <form className="mt-7" role="search" action="/search" method="get">
          <label htmlFor="kamurocho-search" className="sr-only">
            {locale === "ko" ? "검색어 입력" : "Search query"}
          </label>
          <div className="group relative flex items-center">
            <FiSearch
              size={16}
              aria-hidden="true"
              className="pointer-events-none absolute left-4 text-[var(--text-tertiary)] transition-colors group-focus-within:text-[var(--accent)]"
            />
            <input
              id="kamurocho-search"
              type="search"
              name="q"
              defaultValue={query}
              autoComplete="off"
              placeholder={locale === "ko" ? "예: 키류, 부동산, 놓치기 쉬움, 시오리" : "e.g. Kiryu, Real Estate, missable, Shiori"}
              className="h-14 w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] pl-11 pr-32 text-[15px] text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-tertiary)] hover:border-[var(--border-strong)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent-subtle)]"
            />
            <button
              type="submit"
              className="absolute right-2 inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-xl bg-[var(--accent)] px-4 text-[14px] font-bold text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
            >
              {locale === "ko" ? "검색" : "Search"}
              <FiArrowRight size={13} aria-hidden="true" />
            </button>
          </div>
        </form>

        {query && (
          <div className="mt-5 flex flex-wrap items-center gap-3 text-[14px] text-[var(--text-tertiary)]">
            <span>{locale === "ko" ? `"${query}" 검색 결과` : `Results for "${query}"`}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">
              {results.games.length + results.achievements.length} {locale === "ko" ? "건" : "matches"}
            </span>
          </div>
        )}

        {!query && (
          <div className="mt-12 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-surface)]/40 p-10 text-center">
            <Eyebrow locale={locale} tone="muted" tracking="0.2em">
              {locale === "ko" ? "검색 팁" : "Tips"}
            </Eyebrow>
            <p className="font-display m-0 mt-3 text-[20px] font-bold text-white">
              {locale === "ko" ? "검색어를 입력해 보세요" : "Type something to begin"}
            </p>
            <p className="m-0 mt-2 text-[14px] text-[var(--text-secondary)]">
              {locale === "ko" ? "한국어·영어·로마자 표기 모두 인식합니다." : "Korean, English, and romanized spellings all work."}
            </p>
          </div>
        )}

        {query && !hasResults && (
          <div className="mt-12 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-surface)]/40 p-10 text-center">
            <p className="font-display m-0 text-[20px] font-bold text-white">
              {locale === "ko" ? `"${query}"와 일치하는 결과가 없어요` : `No matches for "${query}"`}
            </p>
            <p className="m-0 mt-2 text-[14px] text-[var(--text-secondary)]">
              {locale === "ko" ? "철자나 한·영 표기를 바꿔 다시 시도해 보세요." : "Try different spelling or a romanized name."}
            </p>
          </div>
        )}

        {hasResults && (
          <div className="mt-10 flex flex-col gap-10">
            {results.games.length > 0 && (
              <section>
                <h2 className="font-display flex items-center gap-2 text-[15px] font-extrabold tracking-tight text-white">
                  {locale === "ko" ? "게임" : "Games"}
                  <span className="font-mono text-[14px] font-normal text-[var(--text-tertiary)]">
                    {results.games.length}
                  </span>
                </h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {results.games.map((game) => (
                    <li key={game.appId}>
                      <Link
                        href={`/game/${game.slug}`}
                        className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-3 no-underline transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-[var(--bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                      >
                        <div className="w-[112px] shrink-0 overflow-hidden rounded-lg border border-[var(--border-subtle)]">
                          <GameCover
                            appId={game.appId}
                            ratio="header"
                            imgIconUrl={game.imgIconUrl}
                            headerUrl={game.headerUrl}
                            capsuleUrl={game.capsuleUrl}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-display truncate text-[14px] font-bold text-white transition-colors group-hover:text-[var(--accent)]">
                            {game.name}
                          </div>
                          <p className="m-0 mt-1 line-clamp-2 text-[14px] leading-6 text-[var(--text-secondary)]">
                            {game.summary}
                          </p>
                          <div className="mt-1.5 font-mono text-[14px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                            {game.year} · {game.estimatedHours}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {results.achievements.length > 0 && (
              <section>
                <h2 className="font-display flex items-center gap-2 text-[15px] font-extrabold tracking-tight text-white">
                  {locale === "ko" ? "업적" : "Achievements"}
                  <span className="font-mono text-[14px] font-normal text-[var(--text-tertiary)]">
                    {results.achievements.length}
                  </span>
                </h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {results.achievements.map(({ game, achievement }) => (
                    <li key={`${game.appId}-${achievement.id}`}>
                      <Link
                        href={`/game/${game.slug}/achievement/${achievement.slug}`}
                        className="group block cursor-pointer rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 no-underline transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-[var(--bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="font-display text-[14px] font-bold text-white transition-colors group-hover:text-[var(--accent)]">
                            {achievement.name}
                          </div>
                          <div className="flex items-center gap-2">
                            {achievement.missable && (
                              <Chip tone="danger" size="xs">
                                <FiTarget size={10} aria-hidden="true" />
                                {locale === "ko" ? "놓치기 쉬움" : "Missable"}
                              </Chip>
                            )}
                            <span className="font-mono text-[14px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                              {game.name}
                            </span>
                          </div>
                        </div>
                        <p className="m-0 mt-1.5 line-clamp-2 text-[14px] leading-6 text-[var(--text-secondary)]">
                          {achievement.guideSteps[0] || achievement.guideSummary || achievement.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </SiteShell>
  );
}
