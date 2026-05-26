import Link from "next/link";
import { FiTarget } from "react-icons/fi";

import { Chip } from "@/components/ui/chip";
import type { Locale } from "@/lib/i18n";
import type { GameAchievementCard } from "@/lib/data";
import type { ChapterMissable } from "@/lib/content";

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
    <aside
      aria-label={locale === "ko" ? "장별 놓치기 쉬운 항목" : "Chapter missables"}
      className="space-y-4"
    >
      <div className="sticky top-24">
        <h2 className="font-display flex items-center gap-2 text-[15px] font-extrabold tracking-tight text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] ring-1 ring-inset ring-[var(--accent-border)]">
            <FiTarget size={13} aria-hidden="true" />
          </span>
          {locale === "ko" ? "장별 놓치기 쉬운 항목" : "Chapter missables"}
        </h2>
        <div className="mt-4 flex max-h-[70vh] flex-col gap-3 overflow-y-auto pr-1">
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
                  <span className="text-[15px] font-bold leading-tight text-white">
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
                        ? locale === "ko" ? "놓치기 쉬움" : "MISSABLE"
                        : item.kind === "recommended"
                          ? locale === "ko" ? "권장" : "RECOMMENDED"
                          : locale === "ko" ? "참고" : "ANYTIME"}
                    </Chip>
                    <div className="mt-2 text-[15px] font-bold leading-snug text-white">
                      {locale === "ko" ? item.title.ko : item.title.en}
                    </div>
                    <div className="mt-1 text-[13px] text-[var(--text-tertiary)]">
                      {locale === "ko" ? item.when.ko : item.when.en}
                    </div>
                    <p className="m-0 mt-2.5 text-[14px] leading-7 text-[var(--text-secondary)]">
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
    </aside>
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
      <div className="mt-2 text-[15px] font-bold leading-snug text-white transition-colors group-hover:text-[var(--accent)]">
        {achievement.name}
      </div>
      <p className="m-0 mt-1.5 line-clamp-2 text-[14px] leading-6 text-[var(--text-secondary)]">
        {achievement.guideSummary || achievement.guideSteps[0] || achievement.description}
      </p>
    </Link>
  );
}
