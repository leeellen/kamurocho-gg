"use client";

import { useRouter } from "next/navigation";
import { FiArrowRight, FiAward, FiCheck, FiTarget } from "react-icons/fi";

import { Chip } from "@/components/ui/chip";
import { RarityBar } from "@/components/ui/rarity-bar";

import { PanelHeader } from "./panel-header";
import { difficultyLabel } from "@/lib/difficulty";
import type { Locale } from "@/lib/i18n";
import type { GameAchievementCard } from "@/lib/data";
import type { UserAchievementState } from "@/lib/user-progress";

type AchievementsListProps = {
  locale: Locale;
  gameSlug: string;
  achievements: GameAchievementCard[];
  userAchMap: Map<number, UserAchievementState>;
  hasUser: boolean;
};

export function AchievementsList({
  locale,
  gameSlug,
  achievements,
  userAchMap,
  hasUser,
}: AchievementsListProps) {
  const trackingProgress = hasUser && userAchMap.size > 0;

  return (
    <section aria-label={locale === "ko" ? "업적 목록" : "Achievements"}>
      <PanelHeader
        icon={<FiAward size={18} aria-hidden="true" />}
        title={locale === "ko" ? "업적 가이드" : "Achievement guide"}
        meta={locale === "ko" ? `전체 ${achievements.length}개` : `${achievements.length} total`}
        description={
          locale === "ko"
            ? "희귀도 낮은 업적부터 정렬됩니다. 카드를 눌러 단계별 공략을 확인하세요."
            : "Sorted from rarest first. Tap a card for the step-by-step route."
        }
      />

      <ul className="flex flex-col gap-3">
        {achievements.map((achievement) => {
          const userState = userAchMap.get(achievement.id);
          const isUnlocked = userState?.unlocked === true;
          const isIncomplete = trackingProgress && !isUnlocked;
          return (
            <li key={achievement.id}>
              <AchievementRow
                locale={locale}
                gameSlug={gameSlug}
                achievement={achievement}
                userState={userState}
                isUnlocked={isUnlocked}
                isIncomplete={isIncomplete}
                trackingProgress={trackingProgress}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function AchievementRow({
  locale,
  gameSlug,
  achievement,
  userState,
  isUnlocked,
  isIncomplete,
  trackingProgress,
}: {
  locale: Locale;
  gameSlug: string;
  achievement: GameAchievementCard;
  userState: UserAchievementState | undefined;
  isUnlocked: boolean;
  isIncomplete: boolean;
  trackingProgress: boolean;
}) {
  const router = useRouter();
  const showColor = isUnlocked || !trackingProgress;
  const iconSrc = showColor
    ? achievement.iconUrl ?? achievement.iconGrayUrl
    : achievement.iconGrayUrl ?? achievement.iconUrl;

  return (
    <div
      onClick={() => router.push(`/game/${gameSlug}/achievement/${achievement.slug}`)}
      className={`group block cursor-pointer rounded-2xl border p-4 no-underline transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] md:p-5 ${
        isUnlocked
          ? "border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 opacity-70 hover:opacity-100 hover:border-white/20"
          : isIncomplete
            ? "border-[var(--accent-border)] bg-[var(--bg-elevated)] hover:border-[var(--accent)] hover:bg-[var(--bg-raised)]"
            : "border-[var(--border)] bg-[var(--bg-elevated)] hover:border-white/20 hover:bg-[var(--bg-raised)]"
      }`}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr_180px_24px] md:items-center">
        {iconSrc && (
          <div className="relative flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={iconSrc}
              alt=""
              aria-hidden="true"
              width={56}
              height={56}
              loading="lazy"
              decoding="async"
              className={`h-14 w-14 rounded-xl border border-[var(--border-subtle)] bg-black/40 object-cover ${
                isUnlocked ? "" : isIncomplete ? "opacity-90" : "opacity-95"
              }`}
            />
            {isUnlocked && (
              <span
                aria-label={locale === "ko" ? "획득함" : "Unlocked"}
                className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--success)] text-white ring-2 ring-[var(--bg-elevated)]"
              >
                <FiCheck size={11} aria-hidden="true" />
              </span>
            )}
            {isIncomplete && (
              <span
                aria-label={locale === "ko" ? "미획득" : "Locked"}
                className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-white ring-2 ring-[var(--bg-elevated)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
              </span>
            )}
          </div>
        )}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`font-display m-0 text-[17px] font-bold transition-colors md:text-[18px] ${
                isUnlocked
                  ? "text-[var(--text-tertiary)] line-through decoration-1"
                  : "text-white group-hover:text-[var(--accent)]"
              }`}
            >
              {achievement.name}
            </h3>
            {achievement.guideSource && (
              <a
                href={achievement.guideSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
                title={locale === "ko" ? "공략 출처" : "Guide source"}
                onClick={(e) => e.stopPropagation()}
              >
                {locale === "ko" ? "출처" : "Source"}
              </a>
            )}
            {isUnlocked && (
              <Chip tone="success" size="xs">
                <FiCheck size={10} aria-hidden="true" />
                {formatUnlockedLabel(locale, userState)}
              </Chip>
            )}
            {isIncomplete && (
              <Chip tone="danger" size="xs">
                {locale === "ko" ? "미완료" : "Incomplete"}
              </Chip>
            )}
            {achievement.missable && (
              <Chip tone="danger" size="xs">
                <FiTarget size={10} aria-hidden="true" />
                {locale === "ko" ? "Missable" : "Missable"}
              </Chip>
            )}
          </div>
          <p className="m-0 mt-1.5 line-clamp-2 text-[16px] leading-6 text-[var(--text-secondary)]">
            {achievement.description}
          </p>
        </div>
        <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2">
          <Chip tone="neutral" size="xs">
            {difficultyLabel(locale, achievement.difficulty)}
          </Chip>
          <RarityBar rarity={achievement.rarity} />
        </div>
        <FiArrowRight
          size={16}
          aria-hidden="true"
          className="hidden text-[var(--text-tertiary)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--accent)] md:block"
        />
      </div>
    </div>
  );
}

function formatUnlockedLabel(locale: Locale, userState: UserAchievementState | undefined) {
  if (userState?.unlockTime) {
    const localeTag = locale === "ko" ? "ko-KR" : "en-US";
    return new Date(userState.unlockTime).toLocaleDateString(localeTag);
  }
  return locale === "ko" ? "획득" : "Unlocked";
}
