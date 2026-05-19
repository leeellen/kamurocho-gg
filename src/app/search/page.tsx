import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { getLocale } from "@/lib/i18n";
import { searchKamurocho } from "@/lib/kamurocho-data";

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

  return (
    <SiteShell locale={locale} section="search">
      <div className="mx-auto max-w-[980px] px-5 py-10 md:px-8">
        <h1 className="m-0 text-[34px] font-extrabold tracking-tight">{locale === "ko" ? "검색" : "Search"}</h1>
        <form className="mt-6">
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder={locale === "ko" ? "게임, 업적, 공략 키워드" : "Games, achievements, guide keywords"}
            className="h-12 w-full rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] px-4 text-[15px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
          />
        </form>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section>
            <div className="mb-3 text-[14px] font-bold">{locale === "ko" ? "게임" : "Games"}</div>
            <div className="flex flex-col gap-2">
              {results.games.map((game) => (
                <Link
                  key={game.appId}
                  href={`/game/${game.slug}`}
                  className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[13px] no-underline shadow-[var(--shadow-card)]"
                >
                  <div className="font-semibold text-[var(--text-primary)]">{game.name}</div>
                  <div className="mt-1 text-[12px] text-[var(--text-secondary)]">{game.summary}</div>
                </Link>
              ))}
              {results.games.length === 0 && (
                <div className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[13px] text-[var(--text-secondary)]">
                  {locale === "ko" ? "검색된 게임이 없습니다." : "No games matched this query."}
                </div>
              )}
            </div>
          </section>

          <section>
            <div className="mb-3 text-[14px] font-bold">{locale === "ko" ? "업적" : "Achievements"}</div>
            <div className="flex flex-col gap-2">
              {results.achievements.map(({ game, achievement }) => (
                <Link
                  key={`${game.appId}-${achievement.id}`}
                  href={`/game/${game.slug}/achievement/${achievement.slug}`}
                  className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[13px] no-underline shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-[var(--text-primary)]">{achievement.name}</div>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">{game.name}</span>
                  </div>
                  <div className="mt-1 text-[12px] text-[var(--text-secondary)]">
                    {achievement.guideSteps[0] || achievement.guideSummary || achievement.description}
                  </div>
                </Link>
              ))}
              {results.achievements.length === 0 && (
                <div className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[13px] text-[var(--text-secondary)]">
                  {locale === "ko" ? "검색된 업적이 없습니다." : "No achievements matched this query."}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
