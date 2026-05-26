import Link from "next/link";
import { FiArrowLeft, FiExternalLink, FiTarget } from "react-icons/fi";

import { Chip } from "@/components/ui/chip";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GameCover } from "@/components/ui/game-cover";
import { StatTile } from "@/components/ui/stat-tile";
import { SignInButton } from "@/components/ui/user-menu";
import type { Locale } from "@/lib/i18n";
import type { SeriesGameCard } from "@/lib/data";

type GameHeroProps = {
  game: SeriesGameCard;
  locale: Locale;
  totalAchievements: number;
  hasUser: boolean;
  hasUserAchievements: boolean;
  userUnlocked: number;
  userPct: number;
  coveragePct: number;
};

function arcLabel(arc: string, locale: Locale) {
  const map: Record<string, { ko: string; en: string }> = {
    kiryu: { ko: "키류 사가", en: "Kiryu saga" },
    ichiban: { ko: "이치반 사가", en: "Ichiban saga" },
    judgment: { ko: "저지먼트", en: "Judgment line" },
    spinoff: { ko: "외전", en: "Spin-off" },
  };
  const entry = map[arc];
  if (!entry) return arc;
  return locale === "ko" ? entry.ko : entry.en;
}

export function GameHero({
  game,
  locale,
  totalAchievements,
  hasUser,
  hasUserAchievements,
  userUnlocked,
  userPct,
  coveragePct,
}: GameHeroProps) {
  const showSteamProgress = hasUser && hasUserAchievements;

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 scale-110">
          <GameCover
            appId={game.appId}
            ratio="header"
            imgIconUrl={game.imgIconUrl}
            headerUrl={game.headerUrl}
            capsuleUrl={game.capsuleUrl}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              aspectRatio: "auto",
              objectFit: "cover",
              filter: "saturate(1.2) brightness(0.4) blur(28px)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/30 via-[var(--bg-base)]/70 to-[var(--bg-base)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_15%_30%,rgba(239,68,68,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-8 md:px-8 md:pt-12">
        <Link
          href="/games"
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md text-[14px] font-medium text-[var(--text-tertiary)] no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
        >
          <FiArrowLeft size={13} aria-hidden="true" />
          {locale === "ko" ? "작품 목록으로" : "Back to games"}
        </Link>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
          <div className="self-start lg:max-w-[340px]">
            <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 bg-[var(--bg-elevated)] shadow-[var(--shadow-pop)]">
              <div aria-hidden="true" className="absolute inset-0">
                <GameCover
                  appId={game.appId}
                  ratio="header"
                  imgIconUrl={game.imgIconUrl}
                  headerUrl={game.headerUrl}
                  capsuleUrl={game.capsuleUrl}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    aspectRatio: "auto",
                    objectFit: "cover",
                    filter: "blur(24px) saturate(1.15) brightness(0.72)",
                    transform: "scale(1.22)",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_45%),linear-gradient(180deg,rgba(7,7,10,0.12),rgba(7,7,10,0.42))]" />
              </div>
              <div className="relative flex h-full items-center justify-center p-4">
                <div className="w-full overflow-hidden rounded-2xl border border-white/12 bg-black/20 shadow-[0_20px_44px_rgba(0,0,0,0.42)]">
                  <GameCover
                    appId={game.appId}
                    ratio="header"
                    imgIconUrl={game.imgIconUrl}
                    headerUrl={game.headerUrl}
                    capsuleUrl={game.capsuleUrl}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-[var(--accent)]">{arcLabel(game.arc, locale)}</span>
            <h1 className="font-display m-0 text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[56px]">
              {game.name}
            </h1>
            <p className="m-0 max-w-[64ch] text-[14px] leading-7 text-[var(--text-secondary)] md:text-[15px]">
              {game.summary}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Chip tone="neutral">{locale === "ko" ? `업적 ${game.achievements}개` : `${game.achievements} achievements`}</Chip>
              <Chip tone="accent">{locale === "ko" ? `공략 ${coveragePct}%` : `${coveragePct}% guided`}</Chip>
              {game.missableCount > 0 ? (
                <Chip tone="danger">
                  <FiTarget size={11} aria-hidden="true" />
                  {locale === "ko" ? `놓침 ${game.missableCount}개` : `${game.missableCount} missables`}
                </Chip>
              ) : (
                <Chip tone="success">
                  {locale === "ko" ? "영구 놓침 없음" : "No missables"}
                </Chip>
              )}
              {game.rareCount > 0 && (
                <Chip tone="gold">{locale === "ko" ? `희귀 ${game.rareCount}개` : `${game.rareCount} rare`}</Chip>
              )}
              <Chip tone="neutral">{game.estimatedHours}</Chip>
              <Chip tone="info" size="xs">
                {locale === "ko" ? `엔진: ${game.engine}` : `Engine: ${game.engine}`}
              </Chip>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`https://store.steampowered.com/app/${game.appId}/`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-white/5 px-4 py-2 text-[14px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
              >
                {locale === "ko" ? "스팀 상점" : "Steam store"}
                <FiExternalLink size={12} aria-hidden="true" />
              </a>
              <a
                href={`https://steamcommunity.com/app/${game.appId}/guides/`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-white/5 px-4 py-2 text-[14px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
              >
                {locale === "ko" ? "커뮤니티 공략" : "Community guides"}
                <FiExternalLink size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {showSteamProgress ? (
            <StatTile
              tone="success"
              label={locale === "ko" ? "내 진행률" : "Your progress"}
              value={`${userPct}%`}
              hint={locale === "ko" ? `${userUnlocked} / ${totalAchievements}` : `${userUnlocked} of ${totalAchievements}`}
            />
          ) : (
            <StatTile
              label={locale === "ko" ? "스토리 시점" : "Story era"}
              value={game.year}
            />
          )}
          <StatTile
            label={locale === "ko" ? "주인공" : "Lead"}
            value={game.lead}
            valueClassName="text-[18px] leading-tight md:text-[22px]"
            hint={game.platforms.join(" · ")}
          />
          <StatTile
            tone="accent"
            label={locale === "ko" ? "공략 커버리지" : "Coverage"}
            value={`${coveragePct}%`}
            hint={locale === "ko" ? `업적 ${game.achievements} 중 ${game.guideCoverage}` : `${game.guideCoverage} of ${game.achievements}`}
          />
          <StatTile
            tone="gold"
            label={locale === "ko" ? "예상 분량" : "Est. time"}
            value={game.estimatedHours}
            valueClassName="text-[30px] md:text-[36px]"
          />
        </dl>

        {showSteamProgress && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[14px]">
              <Eyebrow locale={locale} tone="muted">
                {locale === "ko" ? "스팀 진행 상황" : "Steam progress"}
              </Eyebrow>
              <span className="font-mono text-white">
                {userUnlocked} / {totalAchievements} · {userPct}%
              </span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--gold)]"
                style={{ width: `${userPct}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        )}
        {!hasUser && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-surface)]/40 p-4">
            <div className="text-[14px] text-[var(--text-secondary)]">
              {locale === "ko"
                ? "스팀 계정을 연동하면 본인의 미완료 업적이 강조됩니다."
                : "Sign in through Steam to highlight your remaining achievements here."}
            </div>
            <SignInButton locale={locale} />
          </div>
        )}
      </div>
    </section>
  );
}
