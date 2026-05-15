import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FiArrowLeft, FiBookOpen, FiExternalLink, FiPlay, FiShoppingBag, FiUsers } from "react-icons/fi";

import { AchievementListBrowser } from "@/components/game/achievement-list-browser";
import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GameCover } from "@/components/ui/game-cover";
import { getLocale, getMessages } from "@/lib/i18n";
import { getTopCommunityGuides } from "@/lib/steam/guides";
import { getGameDetail, getUserSummary } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const locale = await getLocale();
  const m = getMessages(locale);
  const [user, game] = await Promise.all([getUserSummary(), getGameDetail(id)]);

  if (!user.steamId) redirect("/login");
  if (!game) notFound();

  const communityGuides = await getTopCommunityGuides(game.appId, 6);

  return (
    <AppShell section="library" locale={locale} user={user}>
      <div className="pb-24 md:pb-10">
        {/* Hero */}
        <div className="relative h-[200px] overflow-hidden">
          <div className="absolute inset-0">
            <GameCover appId={game.appId} ratio="header" imgIconUrl={game.imgIconUrl} headerUrl={game.headerUrl} capsuleUrl={game.capsuleUrl} style={{ height: "100%", aspectRatio: "auto" }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-base)]" />
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 md:px-9">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h1 className="m-0 text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">{game.name}</h1>
                <div className="mt-1.5 flex gap-4">
                  <span className="text-[13px] text-[var(--text-secondary)]">
                    {game.completedAchievements}/{game.totalAchievements} {m.common.achievements}
                  </span>
                  <span className="font-mono text-[13px] font-bold text-[var(--accent)]">{game.completion}%</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`steam://run/${game.appId}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--accent-border)] bg-[var(--accent)] px-3 py-2 text-[12px] font-semibold text-[var(--text-inverse)] no-underline hover:bg-[var(--accent-hover)]"
                  title={locale === "ko" ? "Steam에서 실행" : "Launch in Steam"}
                >
                  <FiPlay size={13} />
                  <span className="hidden md:inline">{locale === "ko" ? "실행" : "Play"}</span>
                </a>
                <a
                  href={`https://store.steampowered.com/app/${game.appId}/`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-black/50 px-3 py-2 text-[12px] text-[var(--text-secondary)] no-underline hover:bg-black/70"
                  title={locale === "ko" ? "Steam 상점에서 보기" : "View on Steam Store"}
                >
                  <FiShoppingBag size={13} />
                  <span className="hidden md:inline">{locale === "ko" ? "Store" : "Store"}</span>
                </a>
                <a
                  href={`https://steamcommunity.com/app/${game.appId}/`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-black/50 px-3 py-2 text-[12px] text-[var(--text-secondary)] no-underline hover:bg-black/70"
                  title={locale === "ko" ? "Steam 커뮤니티 허브" : "Steam Community hub"}
                >
                  <FiUsers size={13} />
                  <span className="hidden md:inline">{locale === "ko" ? "Hub" : "Hub"}</span>
                </a>
                <Link
                  href="/library"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-black/50 px-3 py-2 text-[12px] text-[var(--text-secondary)] no-underline hover:bg-black/70"
                >
                  <FiArrowLeft size={13} /> {m.nav.library}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--bg-base)] px-6 pb-5 md:px-9">
          <Progress value={game.completion} className="h-1" />
        </div>

        {communityGuides.length > 0 && (
          <section className="px-6 pb-8 md:px-9">
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className="m-0 flex items-center gap-2 text-[16px] font-bold tracking-tight text-[var(--text-primary)]">
                <FiBookOpen size={16} className="text-[var(--l2)]" />
                {locale === "ko" ? "인기 커뮤니티 공략" : "Top community guides"}
                <span className="font-mono text-[12px] font-semibold text-[var(--text-tertiary)]">
                  {communityGuides.length}
                </span>
              </h2>
              <div className="flex items-center gap-3">
                <a
                  href={`https://steamcommunity.com/stats/${game.appId}/achievements/`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--text-tertiary)] no-underline hover:text-[var(--text-secondary)]"
                >
                  {locale === "ko" ? "글로벌 통계" : "Global stats"} <FiExternalLink size={11} />
                </a>
                <a
                  href={`https://steamcommunity.com/app/${game.appId}/guides/`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-[var(--text-tertiary)] no-underline hover:text-[var(--text-secondary)]"
                >
                  {locale === "ko" ? "Steam에서 더 보기" : "More on Steam"} <FiExternalLink size={11} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {communityGuides.map((g) => (
                <a
                  key={g.publishedFileId}
                  href={g.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block no-underline"
                >
                  <Card className="flex h-full items-start gap-3 px-4 py-3 transition-colors group-hover:border-[var(--l2-border)]">
                    <FiBookOpen className="mt-0.5 shrink-0 text-[var(--l2)]" size={14} />
                    <div className="min-w-0 flex-1">
                      <div className="line-clamp-2 text-[14px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--l2)]">
                        {g.title}
                      </div>
                      {g.shortDescription && (
                        <div className="mt-1 line-clamp-2 text-[12px] text-[var(--text-tertiary)]">
                          {g.shortDescription}
                        </div>
                      )}
                      <div className="mt-1.5 flex items-center gap-2 font-mono text-[11px] text-[var(--text-tertiary)]">
                        {typeof g.viewCount === "number" && (
                          <span>{g.viewCount.toLocaleString()} {locale === "ko" ? "조회" : "views"}</span>
                        )}
                        {typeof g.voteScore === "number" && g.voteScore > 0 && (
                          <span>· ★ {(g.voteScore * 100).toFixed(0)}</span>
                        )}
                      </div>
                    </div>
                    <FiExternalLink className="shrink-0 text-[var(--text-tertiary)] group-hover:text-[var(--l2)]" size={13} />
                  </Card>
                </a>
              ))}
            </div>
          </section>
        )}

        <AchievementListBrowser
          achievements={game.achievements}
          gameSlug={String(game.appId)}
          labels={{
            filterAll: m.gamehub.filterAll,
            filterUnlocked: m.gamehub.filterUnlocked,
            filterLocked: m.gamehub.filterLocked,
            unlockedSection: m.common.unlockedAchievements,
            lockedSection: m.common.lockedAchievements,
          }}
        />
      </div>
    </AppShell>
  );
}
