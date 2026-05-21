import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiClock, FiExternalLink, FiTarget } from "react-icons/fi";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isKo = locale === "ko";
  return {
    title: isKo
      ? "내 라이브러리 — 미완료 업적 우선 공략"
      : "My library — incomplete achievements first",
    description: isKo
      ? "스팀 계정 연동으로 보유 작품과 미완료 업적을 한 화면에서 확인하고 희귀도 낮은 업적부터 처리하세요."
      : "Link Steam to see owned RGG titles, unfinished achievements, and a rarity-first cleanup route.",
    alternates: { canonical: "/me" },
    robots: { index: false, follow: true },
  };
}

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GameCover } from "@/components/ui/game-cover";
import { RarityBar } from "@/components/ui/rarity-bar";
import { SectionTitle } from "@/components/ui/section-title";
import { StatTile } from "@/components/ui/stat-tile";
import { SyncButton } from "@/components/ui/sync-button";
import { SignInButton } from "@/components/ui/user-menu";
import { getLocale } from "@/lib/i18n";
import { getSeriesGames } from "@/lib/kamurocho-data";
import {
  getCurrentUser,
  getIncompleteAchievements,
  getUserGameProgress,
} from "@/lib/user-progress";

export const dynamic = "force-dynamic";

export default async function MePage() {
  const locale = await getLocale();
  const user = await getCurrentUser();

  if (!user) {
    return (
      <SiteShell locale={locale} section="games">
        <div className="mx-auto flex max-w-[600px] flex-col items-center px-5 pb-20 pt-24 text-center md:px-8">
          <Eyebrow locale={locale} tracking="0.2em">
            {locale === "ko" ? "내 라이브러리" : "Library"}
          </Eyebrow>
          <h1 className="font-display m-0 mt-3 text-[36px] font-extrabold tracking-tight text-white md:text-[48px]">
            {locale === "ko" ? "스팀으로 시작하세요" : "Sign in with Steam"}
          </h1>
          <p className="m-0 mt-3 text-[14px] leading-7 text-[var(--text-secondary)]">
            {locale === "ko"
              ? "스팀 계정을 연동하면 보유 작품과 미완료 업적을 한 화면에서 확인하고, 희귀도 낮은 업적부터 우선 공략을 안내해 드립니다."
              : "Link your Steam account to see your owned RGG titles, unfinished achievements, and a rarity-first cleanup route."}
          </p>
          <div className="mt-8 flex justify-center">
            <SignInButton locale={locale} size="lg" />
          </div>
          <p className="m-0 mt-5 text-[14px] text-[var(--text-tertiary)]">
            {locale === "ko"
              ? "스팀 OpenID로만 인증합니다. 비밀번호는 입력하지 않으며, 공개 프로필 정보만 사용합니다."
              : "Authenticates via Steam OpenID. No passwords; only public profile data is used."}
          </p>
        </div>
      </SiteShell>
    );
  }

  const [games, progressMap, incomplete] = await Promise.all([
    getSeriesGames(locale),
    getUserGameProgress(),
    getIncompleteAchievements(locale, 24),
  ]);

  const owned = games
    .filter((game) => progressMap.has(game.appId))
    .map((game) => ({ game, progress: progressMap.get(game.appId)! }))
    .sort((a, b) => (b.progress.unlocked / Math.max(1, b.progress.total)) - (a.progress.unlocked / Math.max(1, a.progress.total)));

  const totalUnlocked = owned.reduce((sum, o) => sum + o.progress.unlocked, 0);
  const totalAch = owned.reduce((sum, o) => sum + o.progress.total, 0);
  const overallPct = totalAch ? Math.round((totalUnlocked / totalAch) * 100) : 0;
  const totalPlaytimeHours = Math.round(owned.reduce((sum, o) => sum + o.progress.playtimeMins, 0) / 60);

  const gameBySlug = new Map(games.map((g) => [g.appId, g]));
  const incompleteWithGame = incomplete
    .map((item) => ({ item, game: gameBySlug.get(item.appId) }))
    .filter((entry): entry is { item: typeof incomplete[0]; game: NonNullable<ReturnType<typeof gameBySlug.get>> } => Boolean(entry.game));

  const name = user.displayName ?? `Steam ${user.steamId.slice(-6)}`;

  return (
    <SiteShell locale={locale} section="games">
      <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-12 md:px-8">
        {/* PROFILE HERO */}
        <section className="overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              {user.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.avatarUrl}
                  alt=""
                  className="h-16 w-16 rounded-2xl border border-white/10 object-cover shadow-[var(--shadow-pop)] md:h-20 md:w-20"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)] text-[24px] font-black text-white shadow-[var(--accent-glow)] md:h-20 md:w-20 md:text-[28px]"
                >
                  {name.slice(0, 1).toUpperCase()}
                </span>
              )}
              <div>
                <Eyebrow locale={locale} tracking="0.2em">
                  {locale === "ko" ? "내 라이브러리" : "Library"}
                </Eyebrow>
                <h1 className="font-display m-0 mt-1.5 text-[28px] font-extrabold tracking-tight text-white md:text-[36px]">
                  {name}
                </h1>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-[var(--text-tertiary)]">
                  <span className="font-mono">{user.steamId}</span>
                  {user.lastSynced && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>
                        {locale === "ko" ? "마지막 동기화" : "Last synced"}{" "}
                        {new Date(user.lastSynced).toLocaleString(locale === "ko" ? "ko-KR" : "en-US")}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <SyncButton
                idleLabel={locale === "ko" ? "지금 동기화" : "Sync now"}
                syncingLabel={locale === "ko" ? "동기화 중..." : "Syncing..."}
                doneLabel={locale === "ko" ? "완료" : "Done"}
                errorLabel={locale === "ko" ? "실패" : "Failed"}
              />
              {user.profileUrl && (
                <a
                  href={user.profileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-white/5 px-4 text-[14px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                >
                  {locale === "ko" ? "스팀 프로필" : "Steam profile"}
                  <FiExternalLink size={12} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <StatTile
              label={locale === "ko" ? "보유 작품" : "Owned titles"}
              value={owned.length}
              hint={locale === "ko" ? `수록 ${games.length}개 중` : `of ${games.length} covered`}
            />
            <StatTile
              tone="accent"
              label={locale === "ko" ? "전체 진행률" : "Overall completion"}
              value={`${overallPct}%`}
              hint={locale === "ko" ? `${totalUnlocked.toLocaleString()} / ${totalAch.toLocaleString()}` : `${totalUnlocked.toLocaleString()} of ${totalAch.toLocaleString()}`}
            />
            <StatTile
              label={locale === "ko" ? "획득한 업적" : "Unlocked"}
              value={totalUnlocked.toLocaleString()}
            />
            <StatTile
              tone="gold"
              label={locale === "ko" ? "총 플레이타임" : "Playtime"}
              value={`${totalPlaytimeHours}h`}
              hint={locale === "ko" ? "수록된 작품 합계" : "Across covered titles"}
            />
          </dl>
        </section>

        {/* NOT OWNED FALLBACK */}
        {owned.length === 0 && (
          <section className="mt-10 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-surface)]/40 p-10 text-center">
            <p className="font-display m-0 text-[20px] font-bold text-white">
              {locale === "ko" ? "여기서 다루는 작품이 라이브러리에 아직 없네요." : "No covered RGG titles in your library yet."}
            </p>
            <p className="m-0 mt-2 text-[14px] text-[var(--text-secondary)]">
              {locale === "ko" ? `${games.length}개 작품 중 하나를 보유한 뒤 다시 동기화해 보세요.` : `Pick up any of the ${games.length} covered titles, then sync again.`}
            </p>
          </section>
        )}

        {/* INCOMPLETE PRIORITY */}
        {incompleteWithGame.length > 0 && (
          <section className="mt-16">
            <SectionTitle
              eyebrow={locale === "ko" ? "우선 공략" : "Priority queue"}
              title={locale === "ko" ? "지금 남은 업적, 희귀도 순" : "Your remaining achievements, rarest first"}
              description={locale === "ko"
                ? "달성률이 낮은 업적부터 먼저 처리하면 평균 진행률이 빠르게 올라갑니다."
                : "Burn the rarest unfinished achievements first — your overall completion jumps faster."}
            />
            <ul className="mt-8 flex flex-col gap-3">
              {incompleteWithGame.map(({ item, game }) => (
                <li key={item.achievementId}>
                  <Link
                    href={`/game/${game.slug}/achievement/${item.apiName.toLowerCase()}`}
                    className="group block cursor-pointer rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-4 no-underline transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-[var(--bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] md:p-5"
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_200px_24px] md:items-center">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[14px] uppercase tracking-[0.1em] text-[var(--accent)]">
                            {game.name}
                          </span>
                          <Chip tone="danger" size="xs">
                            <FiTarget size={10} aria-hidden="true" />
                            {locale === "ko" ? "미완료" : "Incomplete"}
                          </Chip>
                        </div>
                        <h3 className="font-display m-0 mt-1.5 text-[15px] font-bold text-white transition-colors group-hover:text-[var(--accent)] md:text-[16px]">
                          {item.displayName}
                        </h3>
                        {item.description && (
                          <p className="m-0 mt-1 line-clamp-2 text-[14px] leading-6 text-[var(--text-secondary)]">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center md:justify-end">
                        <RarityBar rarity={item.rarity} />
                      </div>
                      <FiArrowRight
                        size={16}
                        aria-hidden="true"
                        className="hidden text-[var(--text-tertiary)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--accent)] md:block"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* LIBRARY GRID */}
        {owned.length > 0 && (
          <section className="mt-16">
            <SectionTitle
              eyebrow={locale === "ko" ? "보유 라이브러리" : "Your library"}
              title={locale === "ko" ? "수록 작품 중 보유한 것" : "Covered titles you own"}
              description={locale === "ko" ? "각 작품의 진행률과 공략 페이지를 한 번에 확인하세요." : "Progress and direct guide links for everything you own here."}
            />
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {owned.map(({ game, progress }) => {
                const pct = progress.total ? Math.round((progress.unlocked / progress.total) * 100) : 0;
                const finished = progress.total > 0 && progress.unlocked === progress.total;
                return (
                  <li key={game.appId}>
                    <Link
                      href={`/game/${game.slug}`}
                      aria-label={locale === "ko" ? `${game.name} 공략 열기` : `Open ${game.name} guide`}
                      className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[var(--shadow-pop)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                    >
                      <div className="relative">
                        <GameCover
                          appId={game.appId}
                          ratio="header"
                          imgIconUrl={game.imgIconUrl}
                          headerUrl={game.headerUrl}
                          capsuleUrl={game.capsuleUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-[var(--bg-elevated)]/40 to-transparent" />
                        {finished && (
                          <Chip tone="success" size="xs" className="absolute right-3 top-3">
                            <FiCheck size={10} aria-hidden="true" />
                            {locale === "ko" ? "완료" : "Complete"}
                          </Chip>
                        )}
                      </div>
                      <div className="relative -mt-10 p-5">
                        <h3 className="font-display text-[18px] font-extrabold tracking-tight text-white">
                          {game.name}
                        </h3>
                        <div className="mt-4">
                          <div className="flex items-end justify-between text-[14px]">
                            <span className="font-mono uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
                              {locale === "ko" ? "진행률" : "Completion"}
                            </span>
                            <span className="font-display text-[16px] font-extrabold text-white">{pct}%</span>
                          </div>
                          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                            <div
                              className={`h-full rounded-full ${finished ? "bg-[var(--success)]" : "bg-[var(--accent)]"}`}
                              style={{ width: `${pct}%` }}
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[14px] text-[var(--text-tertiary)]">
                            <span className="font-mono">
                              {progress.unlocked} / {progress.total}
                            </span>
                            <span className="inline-flex items-center gap-1 font-mono">
                              <FiClock size={11} aria-hidden="true" />
                              {Math.round(progress.playtimeMins / 60)}h
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    </SiteShell>
  );
}
