import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FiArrowLeft, FiArrowUp } from "react-icons/fi";

import { AppShell } from "@/components/layout/app-shell";
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
        <div className="mb-6 flex flex-wrap items-center gap-2.5 text-xs text-[var(--text-tertiary)]">
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
            />

            {/* L2 — AI guide (full DB content) */}
            <GuideLayer
              num={2}
              title={m.ach.layer2Title}
              meta={
                achievement.guide?.confidence
                  ? `${locale === "ko" ? "신뢰도" : "Confidence"}: ${achievement.guide.confidence}`
                  : undefined
              }
              source={achievement.guide?.source}
            >
              {guideParagraphs.length > 0 ? (
                <GuideBody paragraphs={guideParagraphs} />
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
                <p className="m-0 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {achievement.tips[0].body}
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
                  <p className="mb-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">{tip.body}</p>
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

// Render a single text run with inline **bold** + [text](url) link parsing.
function renderInline(text: string, baseKey: string | number): React.ReactNode[] {
  // First split on markdown links to preserve them as anchor nodes.
  const out: React.ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let segIdx = 0;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      out.push(...renderBold(text.slice(lastIndex, match.index), `${baseKey}-t${segIdx++}`));
    }
    out.push(
      <a
        key={`${baseKey}-a${segIdx++}`}
        href={match[2]}
        target="_blank"
        rel="noreferrer noopener"
        className="break-all text-[var(--l2)] underline decoration-[var(--l2)]/40 underline-offset-2 transition-colors hover:text-[var(--l2)] hover:decoration-[var(--l2)]"
      >
        {match[1]}
      </a>,
    );
    lastIndex = linkRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    out.push(...renderBold(text.slice(lastIndex), `${baseKey}-t${segIdx++}`));
  }
  return out;
}

function renderBold(text: string, baseKey: string | number): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((seg, i) => {
    if (seg.startsWith("**") && seg.endsWith("**")) {
      return (
        <strong key={`${baseKey}-b${i}`} className="font-semibold text-[var(--text-primary)]">
          {seg.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${baseKey}-s${i}`}>{seg}</span>;
  });
}

// Render an array of guide paragraphs, grouping consecutive `- ` lines into <ul>.
function GuideBody({ paragraphs }: { paragraphs: string[] }) {
  const blocks: React.ReactNode[] = [];
  let bulletGroup: string[] = [];
  const flushBullets = (key: string) => {
    if (bulletGroup.length === 0) return;
    blocks.push(
      <ul key={`ul-${key}`} className="m-0 list-none space-y-1 pl-0">
        {bulletGroup.map((b, i) => (
          <li
            key={`li-${key}-${i}`}
            className="flex gap-2 text-[14px] leading-relaxed text-[var(--text-secondary)]"
          >
            <span className="mt-[0.55em] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--text-tertiary)]" />
            <span className="min-w-0 flex-1 break-words">
              {renderInline(b, `b-${key}-${i}`)}
            </span>
          </li>
        ))}
      </ul>,
    );
    bulletGroup = [];
  };
  paragraphs.forEach((para, i) => {
    if (para.startsWith("- ")) {
      bulletGroup.push(para.slice(2));
    } else {
      flushBullets(String(i));
      blocks.push(
        <p
          key={`p-${i}`}
          className="m-0 text-[14px] leading-relaxed text-[var(--text-secondary)]"
        >
          {renderInline(para, `p-${i}`)}
        </p>,
      );
    }
  });
  flushBullets("end");
  return <div className="flex flex-col gap-2">{blocks}</div>;
}
