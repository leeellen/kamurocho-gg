import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FiArrowLeft, FiArrowUp, FiExternalLink } from "react-icons/fi";

import { AppShell } from "@/components/layout/app-shell";
import { GuideBody, renderInline } from "@/components/markdown/inline";
import { AchievementIcon } from "@/components/ui/achievement-icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getLocale, getMessages } from "@/lib/i18n";
import { getGameDetail, getUserSummary } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

export default async function AchievementGuidePage({
  params,
}: {
  params: Promise<{ id: string; achievement: string }>;
}) {
  const { id, achievement: achievementSlug } = await params;
  const locale = await getLocale();
  const m = getMessages(locale);
  const [user, game] = await Promise.all([getUserSummary(), getGameDetail(id)]);

  if (!user.steamId) redirect("/login");

  const achievement = game?.achievements.find((item) => item.slug === achievementSlug);
  if (!game || !achievement) notFound();

  // Use the locked (gray) icon when achievement isn't unlocked.
  const iconSrc = achievement.unlocked
    ? achievement.iconUrl
    : (achievement.iconGrayUrl || achievement.iconUrl);

  // Layer 2 = AI guide content; render every paragraph from DB.
  const guideParagraphs = (achievement.guide?.content ?? []).filter(Boolean);
  const quickSteps = [...(achievement.guideSteps ?? []), ...(achievement.guideTips ?? [])].slice(0, 4);

  return (
    <AppShell section="library" locale={locale} user={user}>
      <div className="mx-auto max-w-[820px] px-6 pb-24 pt-5 md:px-9 md:pb-10">
        <Link
          href={`/game/${id}`}
          className="mb-5 inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] no-underline hover:text-[var(--text-primary)]"
        >
          <FiArrowLeft size={14} /> {game.name}
        </Link>

        {/* Header */}
        <Card className="mb-6 flex items-center gap-4 px-5 py-5">
          <AchievementIcon
            src={iconSrc}
            size={64}
            unlocked={achievement.unlocked}
            className="rounded-xl"
          />
          <div className="min-w-0 flex-1">
            <h1 className="m-0 mb-1 text-[20px] font-bold tracking-tight text-[var(--text-primary)]">
              {achievement.name}
            </h1>
            {achievement.description && (
              <p className="m-0 text-[13px] text-[var(--text-secondary)]">
                {achievement.description}
              </p>
            )}
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            <Badge variant={achievement.unlocked ? "l3" : "neutral"}>
              {achievement.unlocked ? m.ach.unlocked : m.ach.locked}
            </Badge>
            <span className="font-mono text-[12px] tabular-nums text-[var(--text-tertiary)]">
              {achievement.rarity}%
            </span>
          </div>
        </Card>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-2.5 text-xs text-[var(--text-tertiary)]">
          <span>{achievement.difficulty}</span>
          <span>·</span>
          <span>{achievement.estimatedTime}</span>
          {achievement.unlockedAt && (
            <>
              <span>·</span>
              <span className="text-[var(--l3)]">{achievement.unlockedAt}</span>
            </>
          )}
        </div>

        <Card className="mb-6 px-4 py-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--l2)]">
                {locale === "ko" ? "지금 해야 할 일" : "Do this next"}
              </div>
              <div className="mt-1 text-[15px] font-semibold text-[var(--text-primary)]">
                {achievement.guideSummary || (locale === "ko" ? "핵심 조건부터 확인하세요." : "Start from the core trigger condition.")}
              </div>
            </div>
            {achievement.guideStatsLine && (
              <div className="rounded-full border border-[var(--l2-border)] bg-[var(--l2-tint)] px-3 py-1 text-[11px] font-medium text-[var(--text-secondary)]">
                {achievement.guideStatsLine}
              </div>
            )}
          </div>
          {quickSteps.length > 0 && (
            <ul className="m-0 space-y-2 pl-5 text-[14px] leading-6 text-[var(--text-secondary)]">
              {quickSteps.map((step, index) => (
                <li key={`${achievement.slug}-quick-${index}`}>{step}</li>
              ))}
            </ul>
          )}
        </Card>

        {/* 3-Layer Guide */}
        <div className="mb-6">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
            {m.ach.layer}
          </div>
          <div className="flex flex-col gap-2">
            {/* L1 — statistical */}
            <GuideLayer
              num={1}
              title={m.ach.layer1Title}
              body={
                locale === "ko"
                  ? `이 업적을 가진 플레이어의 ${achievement.rarity}%가 이미 달성했습니다.`
                  : `${achievement.rarity}% of players have unlocked this achievement.`
              }
              source={`https://steamcommunity.com/stats/${game.appId}/achievements/`}
            />

            {/* L2 — AI guide (full DB content) */}
            <GuideLayer
              num={2}
              title={locale === "ko" ? "실행 가이드" : "Actionable guide"}
              meta={
                achievement.guide?.confidence
                  ? `${locale === "ko" ? "신뢰도" : "Confidence"}: ${achievement.guide.confidence}`
                  : undefined
              }
              source={achievement.guide?.source}
            >
              {guideParagraphs.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {achievement.guideSummary && (
                    <p className="m-0 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                      {achievement.guideSummary}
                    </p>
                  )}
                  {achievement.guideSteps && achievement.guideSteps.length > 0 && (
                    <div>
                      <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
                        {locale === "ko" ? "단계별 안내" : "Steps"}
                      </div>
                      <GuideBody paragraphs={achievement.guideSteps.map((step) => `- ${step}`)} />
                    </div>
                  )}
                  {achievement.guideTips && achievement.guideTips.length > 0 && (
                    <div>
                      <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
                        {locale === "ko" ? "놓치기 쉬운 포인트" : "Watch for"}
                      </div>
                      <GuideBody paragraphs={achievement.guideTips.map((tip) => `- ${tip}`)} />
                    </div>
                  )}
                  {(!achievement.guideSteps || achievement.guideSteps.length === 0) &&
                    (!achievement.guideTips || achievement.guideTips.length === 0) && (
                      <GuideBody paragraphs={guideParagraphs} />
                    )}
                </div>
              ) : (
                <p className="m-0 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  {locale === "ko" ? "AI 가이드가 아직 생성되지 않았습니다." : "AI guide not generated yet."}
                </p>
              )}
            </GuideLayer>

            {/* L3 — community tips */}
            <GuideLayer
              num={3}
              title={locale === "ko" ? "커뮤니티 팁" : "Community tips"}
              body={
                achievement.tips?.[0]?.body
                  ? undefined
                  : (locale === "ko" ? "커뮤니티 팁이 없습니다." : "No community tips yet.")
              }
            >
              {achievement.tips && achievement.tips.length > 0 ? (
                <p className="m-0 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  {renderInline(achievement.tips[0].body, "tip-preview")}
                </p>
              ) : null}
            </GuideLayer>
          </div>
        </div>

        {/* All community tips */}
        {achievement.tips && achievement.tips.length > 0 && (
          <div>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
              {m.gamehub.communityTips}
            </div>
            <div className="flex flex-col gap-2">
              {achievement.tips.map((tip, i) => (
                <Card key={i} className="px-4 py-3">
                  <p className="mb-2 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                    {renderInline(tip.body, `tip-${i}`)}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-[var(--text-tertiary)]">
                    <Badge variant="l3">
                      <FiArrowUp size={10} /> {tip.votes}
                    </Badge>
                    <span>{tip.author}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {achievement.guideReferences && achievement.guideReferences.length > 0 && (
          <div className="mt-8">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
              {locale === "ko" ? "참고 원문" : "Source references"}
            </div>
            <div className="flex flex-col gap-2">
              {achievement.guideReferences.map((reference) => (
                <Card key={reference.url} className="px-4 py-3">
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between gap-3 text-[13px] font-medium text-[var(--text-primary)] no-underline"
                  >
                    <span className="min-w-0 truncate">{reference.label}</span>
                    <FiExternalLink size={13} className="shrink-0 text-[var(--text-tertiary)]" />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}

function GuideLayer({
  num,
  title,
  body,
  meta,
  source,
  children,
}: {
  num: 1 | 2 | 3;
  title: string;
  body?: string;
  meta?: string;
  source?: string;
  children?: React.ReactNode;
}) {
  const color = num === 1 ? "var(--l1)" : num === 2 ? "var(--l2)" : "var(--l3)";
  const bg = num === 1 ? "var(--l1-tint)" : num === 2 ? "var(--l2-tint)" : "var(--l3-tint)";
  const border = num === 1 ? "var(--l1-border)" : num === 2 ? "var(--l2-border)" : "var(--l3-border)";
  return (
    <div
      className="rounded-r-[10px] px-4 py-4"
      style={{ background: bg, borderLeft: `2px solid ${color}` }}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold"
            style={{ background: bg, borderColor: border, color }}
          >
            L{num}
          </span>
          <span className="text-[13px] font-semibold text-[var(--text-primary)]">{title}</span>
        </div>
        {meta && <span className="font-mono text-[11px] text-[var(--text-tertiary)]">{meta}</span>}
      </div>
      {body && <p className="m-0 text-[13px] leading-relaxed text-[var(--text-secondary)]">{body}</p>}
      {children}
      {source && (
        <div className="mt-3 text-[11px] text-[var(--text-tertiary)]">
          <span className="opacity-80">source:</span>{" "}
          {/^https?:\/\//.test(source) ? (
            <a
              href={source}
              target="_blank"
              rel="noreferrer noopener"
              className="break-all text-[var(--l2)] underline decoration-[var(--l2)]/40 underline-offset-2 hover:decoration-[var(--l2)]"
            >
              {source}
            </a>
          ) : (
            source
          )}
        </div>
      )}
    </div>
  );
}
