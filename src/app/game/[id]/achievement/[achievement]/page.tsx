import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { getLocale } from "@/lib/i18n";
import { getAchievementPageData } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export default async function AchievementPage({
  params,
}: {
  params: Promise<{ id: string; achievement: string }>;
}) {
  const { id, achievement } = await params;
  const locale = await getLocale();
  const data = await getAchievementPageData(id, achievement, locale);
  if (!data) notFound();

  return (
    <SiteShell locale={locale} section="games">
      <div className="mx-auto max-w-[880px] px-5 py-10 md:px-8">
        <Link href={`/game/${data.game.slug}`} className="inline-flex items-center gap-2 text-[13px] text-[var(--text-secondary)] no-underline hover:text-[var(--text-primary)]">
          <FiArrowLeft size={14} /> {data.game.name}
        </Link>

        <div className="mt-5 rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="m-0 text-[28px] font-extrabold tracking-tight">{data.achievement.name}</h1>
              <p className="mt-2 text-[14px] leading-7 text-[var(--text-secondary)]">{data.achievement.description}</p>
            </div>
            <div className="text-right">
              <div className="font-mono text-[12px] text-[var(--text-muted)]">{data.achievement.rarity.toFixed(2)}%</div>
              <div className="mt-1 rounded-[2px] bg-[var(--gold-tint)] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#7A4E0A]">
                {data.achievement.difficulty}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--l2)]">
            {locale === "ko" ? "지금 해야 할 일" : "Do this next"}
          </div>
          <div className="text-[16px] font-semibold">{data.achievement.guideSummary || (locale === "ko" ? "핵심 조건부터 먼저 충족하세요." : "Start from the core trigger condition.")}</div>
          <ol className="mt-4 space-y-2 pl-5 text-[14px] leading-7 text-[var(--text-secondary)]">
            {data.achievement.guideSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {data.achievement.guideTips.length > 0 && (
          <div className="mt-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--danger-text)]">
              {locale === "ko" ? "주의할 점" : "Watch for"}
            </div>
            <ul className="space-y-2 pl-5 text-[14px] leading-7 text-[var(--text-secondary)]">
              {data.achievement.guideTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--text-muted)]">
            {locale === "ko" ? "원문 출처" : "Source"}
          </div>
          {data.achievement.guideSource ? (
            <a
              href={data.achievement.guideSource}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-[13px] font-medium no-underline"
            >
              {data.achievement.guideSource} <FiExternalLink size={12} />
            </a>
          ) : (
            <div className="text-[13px] text-[var(--text-secondary)]">
              {locale === "ko" ? "연결된 출처가 없습니다." : "No linked source."}
            </div>
          )}
          {data.achievement.confidence && (
            <div className="mt-2 font-mono text-[11px] text-[var(--text-muted)]">
              {locale === "ko" ? "신뢰도" : "Confidence"}: {data.achievement.confidence}
            </div>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
