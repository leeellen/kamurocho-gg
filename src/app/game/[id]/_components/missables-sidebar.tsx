import Link from "next/link";
import { FiTarget } from "react-icons/fi";

import { Chip } from "@/components/ui/chip";
import type { Locale } from "@/lib/i18n";
import type { GameAchievementCard } from "@/lib/data";
import type { ChapterMissable } from "@/lib/content";

import { PanelHeader } from "./panel-header";

export type ChapterBucket = {
  chapter: number;
  curatedTitle: ChapterMissable["title"] | null;
  curatedItems: ChapterMissable["items"];
  achievements: GameAchievementCard[];
};

type MissablesSidebarProps = {
  locale: Locale;
  gameSlug: string;
  chapterBuckets: ChapterBucket[];
  unlocatedMissable: GameAchievementCard[];
};

export function MissablesSidebar({
  locale,
  gameSlug,
  chapterBuckets,
  unlocatedMissable,
}: MissablesSidebarProps) {
  return (
    <section
      aria-label={locale === "ko" ? "장별 Missable" : "Chapter missables"}
    >
      <PanelHeader
        icon={<FiTarget size={18} aria-hidden="true" />}
        title={locale === "ko" ? "Missable" : "Missables"}
        meta={
          chapterBuckets.length > 0
            ? locale === "ko"
              ? `${chapterBuckets.length}개 장`
              : `${chapterBuckets.length} chapters`
            : null
        }
        description={
          locale === "ko"
            ? "장 진행과 병행해 챙겨야 하는 서브스토리·트로피·선택지를 장별로 모았습니다."
            : "Chapter-aligned list of substories, trophies, and choices to pick up while progressing."
        }
      />
      <div>
        <div className="flex flex-col gap-3">
          {chapterBuckets.map((bucket) => (
            <div
              key={bucket.chapter}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4"
            >
              <div className="flex items-center gap-2">
                <Chip tone="gold" size="xs" className="font-mono">
                  {bucket.chapter > 0
                    ? locale === "ko" ? `${bucket.chapter}장` : `CH ${bucket.chapter}`
                    : locale === "ko" ? "메모" : "NOTE"}
                </Chip>
                {bucket.curatedTitle && (
                  <span className="text-[17px] font-bold leading-tight text-white">
                    {locale === "ko" ? bucket.curatedTitle.ko : bucket.curatedTitle.en}
                  </span>
                )}
              </div>
              <div className="mt-3.5 flex flex-col gap-2.5">
                {bucket.curatedItems.map((item, index) => (
                  <div
                    key={`curated-${index}`}
                    className="rounded-lg border border-[var(--border-subtle)] bg-black/20 p-3.5"
                  >
                    <Chip
                      tone={item.kind === "missable" ? "danger" : item.kind === "recommended" ? "accent" : "info"}
                      size="xs"
                      className="font-mono uppercase tracking-[0.08em]"
                    >
                      {item.kind === "missable"
                        ? locale === "ko" ? "Missable" : "MISSABLE"
                        : item.kind === "recommended"
                          ? locale === "ko" ? "권장" : "RECOMMENDED"
                          : locale === "ko" ? "참고" : "ANYTIME"}
                    </Chip>
                    <div className="mt-2 text-[17px] font-bold leading-snug text-white">
                      {locale === "ko" ? item.title.ko : item.title.en}
                    </div>
                    <div className="mt-1 text-[15px] text-[var(--text-tertiary)]">
                      {locale === "ko" ? item.when.ko : item.when.en}
                    </div>
                    <p className="m-0 mt-2.5 text-[16px] leading-7 text-[var(--text-secondary)]">
                      {locale === "ko" ? item.body.ko : item.body.en}
                    </p>
                  </div>
                ))}
                {bucket.achievements.map((ach) => (
                  <MissableAchievementCard
                    key={`ach-${ach.id}`}
                    locale={locale}
                    gameSlug={gameSlug}
                    achievement={ach}
                  />
                ))}
              </div>
            </div>
          ))}
          {unlocatedMissable.length > 0 && (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
              <div className="flex items-center gap-2">
                <Chip tone="info" size="xs">
                  {locale === "ko" ? "장 미지정" : "Anytime / unspecified"}
                </Chip>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {unlocatedMissable.map((ach) => (
                  <MissableAchievementCard
                    key={ach.id}
                    locale={locale}
                    gameSlug={gameSlug}
                    achievement={ach}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function MissableAchievementCard({
  locale,
  gameSlug,
  achievement,
}: {
  locale: Locale;
  gameSlug: string;
  achievement: GameAchievementCard;
}) {
  return (
    <Link
      href={`/game/${gameSlug}/achievement/${achievement.slug}`}
      className="group block cursor-pointer rounded-lg border border-[var(--accent-border)] bg-[var(--danger-bg)]/40 p-3.5 no-underline transition-colors hover:bg-[var(--danger-bg)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
    >
      <Chip tone="danger" size="xs" className="font-mono uppercase tracking-[0.08em]">
        <FiTarget size={10} aria-hidden="true" />
        {locale === "ko" ? "업적" : "Achievement"}
      </Chip>
      <div className="mt-2 text-[17px] font-bold leading-snug text-white transition-colors group-hover:text-[var(--accent)]">
        {achievement.name}
      </div>
      <p className="m-0 mt-1.5 line-clamp-2 text-[16px] leading-6 text-[var(--text-secondary)]">
        {achievement.guideSummary || achievement.guideSteps[0] || achievement.description}
      </p>
    </Link>
  );
}
