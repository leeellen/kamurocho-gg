import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { GameCover } from "@/components/ui/game-cover";
import { getLocale } from "@/lib/i18n";
import { getSeriesGames } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export default async function GamesPage() {
  const locale = await getLocale();
  const games = await getSeriesGames(locale);

  return (
    <SiteShell locale={locale} section="games">
      <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8">
        <h1 className="m-0 text-[34px] font-extrabold tracking-tight">{locale === "ko" ? "게임" : "Games"}</h1>
        <p className="mt-3 max-w-[70ch] text-[14px] leading-7 text-[var(--text-secondary)]">
          {locale === "ko"
            ? "현재 DB에 실공략 source가 연결된 RGG Studio Steam 타이틀만 노출합니다."
            : "This index only surfaces RGG Studio Steam titles whose achievement rows are already connected to real guide sources."}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                <div className="mb-1 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-bold">{game.name}</div>
                    <div className="mt-1 text-[12px] text-[var(--text-muted)]">{game.altName}</div>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">{game.year}</span>
                </div>
                <p className="mb-3 text-[13px] leading-7 text-[var(--text-secondary)]">{game.summary}</p>
                <div className="grid grid-cols-2 gap-2 text-[12px] text-[var(--text-secondary)]">
                  <div>{locale === "ko" ? "업적" : "Achievements"}: <span className="font-semibold text-[var(--text-primary)]">{game.achievements}</span></div>
                  <div>{locale === "ko" ? "공략 연결" : "Guide coverage"}: <span className="font-semibold text-[var(--text-primary)]">{game.guideCoverage}</span></div>
                  <div>{locale === "ko" ? "미서블" : "Missables"}: <span className="font-semibold text-[var(--text-primary)]">{game.missableCount}</span></div>
                  <div>{locale === "ko" ? "예상 시간" : "Est. hours"}: <span className="font-semibold text-[var(--text-primary)]">{game.estimatedHours}</span></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
