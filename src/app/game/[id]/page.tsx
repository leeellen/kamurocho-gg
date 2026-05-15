import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

import { AchievementListBrowser } from "@/components/game/achievement-list-browser";
import { AppShell } from "@/components/layout/app-shell";
import { Progress } from "@/components/ui/progress";
import { GameCover } from "@/components/ui/game-cover";
import { getLocale, getMessages } from "@/lib/i18n";
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
              <Link
                href="/library"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-black/50 px-3.5 py-2 text-[13px] text-[var(--text-secondary)] no-underline hover:bg-black/70"
              >
                <FiArrowLeft size={14} /> {m.nav.library}
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[var(--bg-base)] px-6 pb-5 md:px-9">
          <Progress value={game.completion} className="h-1" />
        </div>

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
