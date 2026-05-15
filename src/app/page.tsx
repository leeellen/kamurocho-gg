import Link from "next/link";
import { redirect } from "next/navigation";
import { FiArrowRight, FiAward, FiClock, FiRefreshCw, FiTrendingUp, FiZap } from "react-icons/fi";

import { AchievementIcon } from "@/components/ui/achievement-icon";
import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { GameCover } from "@/components/ui/game-cover";
import { Progress } from "@/components/ui/progress";
import { SyncButton } from "@/components/ui/sync-button";
import { getLocale, getMessages } from "@/lib/i18n";
import { getLibraryGames, getRarestLocked, getRecentUnlocks, getUserSummary } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const [user, games, recentUnlocks, rarestLocked] = await Promise.all([
    getUserSummary(),
    getLibraryGames(60),
    getRecentUnlocks(8),
    getRarestLocked(4),
  ]);

  if (!user.steamId) redirect("/login");

  const totalAch = games.reduce((s, g) => s + g.totalAchievements, 0);
  const overallPct = user.overallPct;
  const unlockedAch = user.unlockedCount;

  const almostDone = games
    .filter((g) => g.completion >= 60 && g.completion < 100)
    .sort((a, b) => b.completion - a.completion);
  const completed = games.filter((g) => g.completion === 100);
  const featured = almostDone[0] ?? games[0];
  const restAlmost = almostDone.slice(1, 5);
  const recentGames = games.slice(0, 6);
  const mostPlayed = [...games]
    .sort((a, b) => parsePlay(b.playtime) - parsePlay(a.playtime))
    .slice(0, 4);

  const isEmpty = games.length === 0;
  const greeting = m.dash.hello.replace("{name}", user.name);

  return (
    <AppShell section="home" locale={locale} user={user}>
      <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-8 md:px-10 md:pb-12">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 text-[15px] text-[var(--text-secondary)]">{greeting}</div>
            <h1 className="m-0 text-[40px] font-extrabold leading-none tracking-tight text-[var(--text-primary)] md:text-[44px]">
              {m.dash.title}
            </h1>
          </div>
          <SyncButton
            label={m.dash.sync}
            syncedLabel={locale === "ko" ? "마지막 동기화" : "last synced"}
            lastSynced={user.lastSyncedLabel}
          />
        </div>

        {isEmpty && (
          <Card className="mb-7 flex items-center gap-5 border-[var(--accent-border)] bg-[var(--accent-subtle)] px-7 py-6">
            <FiRefreshCw className="shrink-0 text-[var(--accent)]" size={36} />
            <div className="flex-1">
              <div className="mb-1 text-base font-bold text-[var(--text-primary)]">
                {locale === "ko" ? "라이브러리를 동기화해 주세요" : "Sync your library"}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {locale === "ko"
                  ? "스팀 라이브러리를 가져와야 통계와 업적이 채워집니다."
                  : "Pull your Steam library to populate stats and achievements."}
              </div>
            </div>
          </Card>
        )}

        {/* Hero stats — big type, more breathing room */}
        <Card className="mb-8 overflow-hidden p-0">
          <div className="grid grid-cols-2 divide-y divide-[var(--border-subtle)] md:grid-cols-4 md:divide-x md:divide-y-0">
            <StatTile
              label={m.dash.overall}
              value={`${overallPct}%`}
              accent
              icon={<FiTrendingUp size={18} />}
              footer={<Progress value={overallPct} className="mt-3 h-1" />}
            />
            <StatTile
              label={m.dash.unlockedAch}
              value={unlockedAch.toLocaleString()}
              icon={<FiAward size={18} />}
              footer={
                <div className="mt-3 font-mono text-[12px] text-[var(--text-tertiary)]">
                  / {totalAch.toLocaleString()} {locale === "ko" ? "보유" : "total"}
                </div>
              }
            />
            <StatTile
              label={locale === "ko" ? "완료한 게임" : "Completed"}
              value={String(completed.length)}
              icon={<FiZap size={18} />}
              valueClassName="text-[var(--success)]"
              footer={
                <div className="mt-3 font-mono text-[12px] text-[var(--text-tertiary)]">
                  / {games.length} {locale === "ko" ? "게임" : "games"}
                </div>
              }
            />
            <StatTile
              label={m.dash.ultraRare}
              value={isEmpty ? "0" : "—"}
              icon={<FiAward size={18} />}
              valueClassName="text-[var(--rarity-ultra)]"
              footer={
                <div className="mt-3 font-mono text-[12px] text-[var(--text-tertiary)]">
                  {locale === "ko" ? "상위 0.5%" : "top 0.5%"}
                </div>
              }
            />
          </div>
        </Card>

        {/* Featured "Next to conquer" */}
        {featured && (
          <SectionHeader
            title={locale === "ko" ? "다음 정복 대상" : "Next to conquer"}
            subtitle={locale === "ko" ? "한 발 남았어요" : "Almost there"}
          />
        )}
        {featured && (
          <Link
            href={`/game/${featured.appId}`}
            className="group mb-10 block no-underline"
          >
            <Card className="relative overflow-hidden p-0">
              <div className="relative">
                <GameCover
                  appId={featured.appId}
                  ratio="header"
                  imgIconUrl={featured.imgIconUrl}
                  headerUrl={featured.headerUrl}
                  capsuleUrl={featured.capsuleUrl}
                  style={{ aspectRatio: "1840 / 430" as unknown as string, width: "100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-base)] via-[var(--bg-base)]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center gap-4 p-7 md:p-10">
                  <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[var(--accent-border)] bg-[var(--accent-subtle)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
                    <FiZap size={12} /> {locale === "ko" ? "마무리 추천" : "Up next"}
                  </div>
                  <h2 className="m-0 max-w-[28ch] text-[28px] font-extrabold leading-tight tracking-tight text-white md:text-[38px]">
                    {featured.name}
                  </h2>
                  <div className="flex items-center gap-5 text-[14px]">
                    <span className="font-mono tabular-nums text-[var(--accent)]">
                      <span className="text-[28px] font-extrabold">{featured.completion}%</span>{" "}
                      <span className="text-[var(--text-tertiary)]">
                        {featured.completedAchievements}/{featured.totalAchievements}
                      </span>
                    </span>
                    <span className="hidden md:inline text-[var(--text-tertiary)]">
                      <FiClock className="-mt-0.5 mr-1 inline" size={13} />
                      {featured.playtime}
                    </span>
                  </div>
                  <Progress value={featured.completion} className="h-1.5 max-w-[420px]" />
                </div>
                <div className="absolute bottom-6 right-6 hidden items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-base)]/70 px-4 py-2 text-sm font-semibold text-[var(--text-primary)] backdrop-blur md:flex md:transition-transform md:group-hover:translate-x-1">
                  {locale === "ko" ? "가이드 보기" : "Open guide"} <FiArrowRight size={14} />
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Almost done + Recent timeline */}
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-[1.7fr_1fr]">
          <section>
            <SectionHeader
              title={m.dash.almost}
              count={almostDone.length}
              right={
                <Link href="/library" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] no-underline hover:underline">
                  {m.dash.viewAll} <FiArrowRight size={14} />
                </Link>
              }
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {(restAlmost.length > 0 ? restAlmost : recentGames).slice(0, 4).map((game) => (
                <Link key={game.appId} href={`/game/${game.appId}`} className="group block no-underline">
                  <Card className="overflow-hidden p-0 transition-all group-hover:-translate-y-0.5 group-hover:border-[var(--accent-border)]">
                    <div className="relative">
                      <GameCover
                        appId={game.appId}
                        ratio="header"
                        imgIconUrl={game.imgIconUrl}
                        headerUrl={game.headerUrl}
                        capsuleUrl={game.capsuleUrl}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between gap-2">
                        <span className="truncate text-[15px] font-bold text-white drop-shadow">
                          {game.name}
                        </span>
                        <span className="shrink-0 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[12px] font-bold text-[var(--accent)]">
                          {game.completion}%
                        </span>
                      </div>
                    </div>
                    <div className="px-4 pb-3.5 pt-3">
                      <Progress value={game.completion} className="mb-2.5 h-[3px]" />
                      <div className="flex items-center justify-between text-[12px]">
                        <span className="font-mono text-[var(--text-secondary)]">
                          {game.completedAchievements}/{game.totalAchievements}
                        </span>
                        <span className="font-mono text-[var(--text-tertiary)]">{game.playtime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader
              title={m.dash.recent}
              right={
                <span className="text-xs text-[var(--text-tertiary)]">
                  {locale === "ko" ? "달성 시각 기준" : "by unlock time"}
                </span>
              }
            />
            <Card className="overflow-hidden p-0">
              {recentUnlocks.length === 0 ? (
                <div className="px-4 py-10 text-center text-sm text-[var(--text-tertiary)]">
                  {locale === "ko" ? "최근 달성한 업적이 없습니다" : "No recent unlocks"}
                </div>
              ) : (
                recentUnlocks.map((u, i) => (
                  <Link
                    key={u.achievementId}
                    href={`/game/${u.appId}/achievement/${u.slug}`}
                    className={`flex items-center gap-3 px-4 py-3 no-underline transition-colors hover:bg-[var(--bg-raised)] ${
                      i > 0 ? "border-t border-[var(--border-subtle)]" : ""
                    }`}
                  >
                    <AchievementIcon src={u.iconUrl} size={40} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[14px] font-semibold text-[var(--text-primary)]">
                        {u.name}
                      </div>
                      <div className="truncate text-[11px] text-[var(--text-tertiary)]">
                        {u.gameName} · <span className="font-mono">{u.unlockedAtLabel}</span>
                      </div>
                    </div>
                    <div className="shrink-0 font-mono text-[12px] font-bold text-[var(--accent)] tabular-nums">
                      {u.rarity.toFixed(1)}%
                    </div>
                  </Link>
                ))
              )}
            </Card>
          </section>
        </div>

        {/* Rarest still locked */}
        {rarestLocked.length > 0 && (
          <section className="mb-10">
            <SectionHeader
              title={locale === "ko" ? "가장 도전적인 미달성 업적" : "Rarest still locked"}
              subtitle={locale === "ko" ? "전 세계 달성률 최저순" : "Lowest global unlock rate"}
            />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {rarestLocked.map((a) => (
                <Link
                  key={a.achievementId}
                  href={`/game/${a.appId}/achievement/${a.slug}`}
                  className="group block no-underline"
                >
                  <Card className="flex items-center gap-3 p-3 transition-colors group-hover:border-[var(--rarity-ultra)]/40">
                    <AchievementIcon src={a.iconGrayUrl || a.iconUrl} size={56} unlocked={false} />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[15px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--rarity-ultra)]">
                        {a.name}
                      </div>
                      {a.description && (
                        <div className="line-clamp-1 text-[12px] text-[var(--text-tertiary)]">{a.description}</div>
                      )}
                      <div className="mt-0.5 truncate font-mono text-[11px] text-[var(--text-tertiary)]">
                        {a.gameName}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="font-mono text-[20px] font-extrabold leading-none tabular-nums text-[var(--rarity-ultra)]">
                        {a.rarity.toFixed(1)}%
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)]">
                        {locale === "ko" ? "달성률" : "global"}
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Most played */}
        {mostPlayed.length > 0 && (
          <section>
            <SectionHeader
              title={locale === "ko" ? "가장 많이 플레이한 게임" : "Most played"}
              right={<span className="text-xs text-[var(--text-tertiary)]">{locale === "ko" ? "총 플레이 시간 기준" : "by hours played"}</span>}
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {mostPlayed.map((game, idx) => (
                <Link key={game.appId} href={`/game/${game.appId}`} className="group block no-underline">
                  <Card className="overflow-hidden p-0 transition-transform group-hover:-translate-y-0.5">
                    <div className="relative">
                      <GameCover
                        appId={game.appId}
                        ratio="header"
                        imgIconUrl={game.imgIconUrl}
                        headerUrl={game.headerUrl}
                        capsuleUrl={game.capsuleUrl}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute left-2.5 top-2.5 inline-flex h-7 min-w-[28px] items-center justify-center rounded-md bg-black/70 px-1.5 font-mono text-[13px] font-extrabold text-[var(--accent)]">
                        {idx + 1}
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <div className="truncate text-[14px] font-bold text-white drop-shadow">{game.name}</div>
                        <div className="mt-0.5 font-mono text-[11px] text-white/80">
                          {game.playtime} · {game.completion}%
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </AppShell>
  );
}

function parsePlay(p: string): number {
  const m = p.match(/(\d+)h(?:\s*(\d+)m)?/);
  if (!m) return 0;
  return Number(m[1]) * 60 + Number(m[2] ?? 0);
}

function StatTile({
  label,
  value,
  accent,
  icon,
  valueClassName,
  footer,
}: {
  label: string;
  value: string;
  accent?: boolean;
  icon?: React.ReactNode;
  valueClassName?: string;
  footer?: React.ReactNode;
}) {
  return (
    <div className="px-6 py-6 md:px-7 md:py-7">
      <div className="mb-2.5 flex items-center justify-between text-[var(--text-tertiary)]">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">{label}</span>
        {icon}
      </div>
      <div
        className={`font-mono text-[44px] font-extrabold leading-none tracking-tight tabular-nums ${
          accent ? "text-[var(--accent)]" : "text-[var(--text-primary)]"
        } ${valueClassName ?? ""}`}
      >
        {value}
      </div>
      {footer}
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  count,
  right,
}: {
  title: string;
  subtitle?: string;
  count?: number;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <h2 className="m-0 flex items-center gap-2.5 text-[20px] font-extrabold tracking-tight text-[var(--text-primary)]">
          {title}
          {typeof count === "number" && (
            <span className="rounded-full bg-[var(--bg-raised)] px-2.5 py-0.5 font-mono text-[12px] font-semibold text-[var(--text-tertiary)]">
              {count}
            </span>
          )}
        </h2>
        {subtitle && <div className="mt-0.5 text-sm text-[var(--text-tertiary)]">{subtitle}</div>}
      </div>
      {right}
    </div>
  );
}
