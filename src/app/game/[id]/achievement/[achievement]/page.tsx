import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiAlertTriangle, FiArrowLeft, FiCheck, FiCheckCircle, FiExternalLink, FiLock, FiTarget } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { RarityBar } from "@/components/ui/rarity-bar";
import { difficultyLabel } from "@/lib/difficulty";
import { getLocale } from "@/lib/i18n";
import { getAchievementPageData } from "@/lib/kamurocho-data";
import { SignInButton } from "@/components/ui/user-menu";
import { getCurrentUser, getUserAchievementMap } from "@/lib/user-progress";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; achievement: string }>;
}): Promise<Metadata> {
  const { id, achievement } = await params;
  const locale = await getLocale();
  const data = await getAchievementPageData(id, achievement, locale);
  if (!data) return {};
  const ach = data.achievement;
  const title = locale === "ko"
    ? `${ach.name} — ${data.game.name} 업적 공략`
    : `${ach.name} — ${data.game.name} achievement guide`;
  const description = ach.guideSummary || ach.description || (locale === "ko" ? `${data.game.name}의 ${ach.name} 업적 공략.` : `${data.game.name} ${ach.name} achievement guide.`);
  const url = `https://kamurocho.gg/game/${data.game.slug}/achievement/${ach.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: ach.iconUrl ? [{ url: ach.iconUrl, width: 64, height: 64 }] : undefined,
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ach.iconUrl ? [ach.iconUrl] : undefined,
    },
    keywords: [
      ach.name,
      `${ach.name} 공략`,
      `${ach.name} 업적`,
      data.game.name,
      `${data.game.name} 업적`,
      ach.missable ? "놓치기 쉬운 업적" : "업적 공략",
      "Steam achievement guide",
    ],
  };
}

function sourceLabel(sourceUrl: string, locale: "ko" | "en") {
  try {
    const url = new URL(sourceUrl);
    if (url.hostname.includes("steamcommunity.com")) {
      return locale === "ko" ? "스팀 커뮤니티 공략 보기" : "Open Steam Community guide";
    }
    return locale === "ko" ? "원문 보기" : "Open source";
  } catch {
    return sourceUrl;
  }
}

export default async function AchievementPage({
  params,
}: {
  params: Promise<{ id: string; achievement: string }>;
}) {
  const { id, achievement } = await params;
  const locale = await getLocale();
  const data = await getAchievementPageData(id, achievement, locale);
  if (!data) notFound();

  const ach = data.achievement;
  const [user, achMap] = await Promise.all([
    getCurrentUser(),
    getUserAchievementMap(data.game.appId),
  ]);
  const userState = achMap.get(ach.id);
  const isUnlocked = userState?.unlocked === true;
  const tracksProgress = Boolean(user && achMap.size > 0);

  // Schema.org HowTo + BreadcrumbList structured data. Guides this site
  // surfaces are step-by-step "how to earn X" content, which is exactly the
  // shape Google's HowTo rich result expects. Inline JSON keeps it crawlable
  // in the first HTML payload.
  const baseUrl = "https://kamurocho.gg";
  const pageUrl = `${baseUrl}/game/${data.game.slug}/achievement/${ach.slug}`;
  const howToJsonLd = ach.guideSteps.length > 0 || ach.guideSummary ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: ach.name,
    description: ach.guideSummary || ach.description,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    image: ach.iconUrl ?? undefined,
    step: (ach.guideSteps.length > 0 ? ach.guideSteps : [ach.guideSummary || ach.description]).map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: locale === "ko" ? `${index + 1}단계` : `Step ${index + 1}`,
      text,
    })),
  } : null;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "ko" ? "홈" : "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: locale === "ko" ? "작품 목록" : "Games", item: `${baseUrl}/games` },
      { "@type": "ListItem", position: 3, name: data.game.name, item: `${baseUrl}/game/${data.game.slug}` },
      { "@type": "ListItem", position: 4, name: ach.name, item: pageUrl },
    ],
  };

  return (
    <SiteShell locale={locale} section="games">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <article className="mx-auto max-w-[900px] px-5 pb-20 pt-12 md:px-8">
        <Link
          href={`/game/${data.game.slug}`}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md text-[12px] font-medium text-[var(--text-tertiary)] no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
        >
          <FiArrowLeft size={13} aria-hidden="true" />
          {data.game.name}
        </Link>

        {/* HEADER */}
        <header
          className={`mt-6 rounded-2xl border p-6 md:p-8 ${
            isUnlocked
              ? "border-[var(--l3-border)] bg-[var(--success-subtle)]"
              : tracksProgress
                ? "border-[var(--accent-border)] bg-[var(--bg-surface)]"
                : "border-[var(--border)] bg-[var(--bg-surface)]"
          }`}
        >
          {tracksProgress && (
            <div
              className={`-mt-2 mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-bold ${
                isUnlocked
                  ? "bg-[var(--success-subtle)] text-[var(--safe-text)] ring-1 ring-inset ring-[var(--l3-border)]"
                  : "bg-[var(--accent)] text-white shadow-[var(--accent-glow)]"
              }`}
            >
              {isUnlocked ? (
                <>
                  <FiCheck size={12} aria-hidden="true" />
                  {locale === "ko"
                    ? userState?.unlockTime
                      ? `${new Date(userState.unlockTime).toLocaleDateString("ko-KR")} 획득`
                      : "획득함"
                    : userState?.unlockTime
                      ? `Unlocked ${new Date(userState.unlockTime).toLocaleDateString("en-US")}`
                      : "Unlocked"}
                </>
              ) : (
                <>
                  <FiLock size={12} aria-hidden="true" />
                  {locale === "ko" ? "아직 완료하지 못함" : "Not unlocked yet"}
                </>
              )}
            </div>
          )}
          <div className="flex flex-wrap items-start gap-4 md:flex-nowrap md:gap-6">
            {(() => {
              // Official Steam achievement art from GetSchemaForGame.
              const src = isUnlocked ? (ach.iconUrl ?? ach.iconGrayUrl) : (ach.iconGrayUrl ?? ach.iconUrl);
              if (!src) return null;
              return (
                <div className="relative shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    width={88}
                    height={88}
                    decoding="async"
                    className="h-20 w-20 rounded-2xl border border-[var(--border-subtle)] bg-black/40 object-cover shadow-[var(--shadow-card)] md:h-24 md:w-24"
                  />
                  {isUnlocked && (
                    <span
                      aria-label={locale === "ko" ? "획득함" : "Unlocked"}
                      className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--success)] text-white ring-2 ring-[var(--bg-surface)] shadow-md"
                    >
                      <FiCheck size={14} aria-hidden="true" />
                    </span>
                  )}
                  {tracksProgress && !isUnlocked && (
                    <span
                      aria-label={locale === "ko" ? "미획득" : "Locked"}
                      className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-white ring-2 ring-[var(--bg-surface)] shadow-md"
                    >
                      <FiLock size={12} aria-hidden="true" />
                    </span>
                  )}
                </div>
              );
            })()}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Chip tone="accent" size="xs">{difficultyLabel(locale, ach.difficulty)}</Chip>
                {ach.missable && (
                  <Chip tone="danger" size="xs">
                    <FiTarget size={10} aria-hidden="true" />
                    {locale === "ko" ? "놓치기 쉬움" : "Missable"}
                  </Chip>
                )}
                {ach.confidence && (() => {
                  const score = Number(ach.confidence);
                  const tier = Number.isFinite(score) && score >= 0.85
                    ? (locale === "ko" ? "신뢰도 높음" : "High confidence")
                    : Number.isFinite(score) && score >= 0.6
                      ? (locale === "ko" ? "신뢰도 보통" : "Medium confidence")
                      : (locale === "ko" ? "신뢰도 낮음" : "Low confidence");
                  return <Chip tone="info" size="xs">{tier}</Chip>;
                })()}
              </div>
              <h1 className="font-display m-0 mt-4 text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[36px]">
                {ach.name}
              </h1>
              <p className="m-0 mt-3 text-[14px] leading-7 text-[var(--text-secondary)] md:text-[15px]">
                {ach.description}
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-[var(--border-subtle)] pt-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
              {locale === "ko" ? "전체 달성률" : "Global unlock"}
            </span>
            <RarityBar rarity={ach.rarity} className="flex-1" />
          </div>
          {!user && (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-[var(--border)] bg-[var(--bg-elevated)]/60 p-3 text-[12px]">
              <span className="text-[var(--text-secondary)]">
                {locale === "ko"
                  ? "스팀을 연동하면 본인의 획득 여부와 날짜가 표시됩니다."
                  : "Sign in through Steam to see whether you've unlocked this and when."}
              </span>
              <SignInButton locale={locale} />
            </div>
          )}
        </header>

        {/* GUIDE */}
        <section className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 md:p-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] ring-1 ring-inset ring-[var(--accent-border)]">
                <FiCheckCircle size={14} aria-hidden="true" />
              </span>
              <h2 className="font-display m-0 text-[16px] font-extrabold tracking-tight text-white">
                {locale === "ko" ? "진행 순서" : "Do this next"}
              </h2>
            </div>
            {ach.chapter && (
              <Chip tone="gold" size="xs" className="font-mono">
                CH {ach.chapter}
              </Chip>
            )}
          </div>
          {ach.guidePointer && (
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-[var(--border-subtle)] bg-black/20 px-3 py-2 text-[12px] text-[var(--text-tertiary)]">
              <span className="font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                {locale === "ko" ? "원문 섹션" : "Source section"}
              </span>
              <span className="text-white">{ach.guidePointer}</span>
            </div>
          )}
          {ach.guideSummary && (
            <p className="m-0 mt-4 text-[15px] font-semibold leading-7 text-white">{ach.guideSummary}</p>
          )}
          {ach.guideSteps.length > 0 ? (
            <ol className="mt-5 flex flex-col gap-3" role="list">
              {ach.guideSteps.map((step, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] font-mono text-[12px] font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <p className="m-0 text-[14px] leading-7 text-[var(--text-secondary)]">{step}</p>
                </li>
              ))}
            </ol>
          ) : !ach.guideSummary ? (
            <p className="m-0 mt-4 text-[14px] leading-7 text-[var(--text-secondary)]">
              {locale === "ko"
                ? "핵심 조건을 먼저 확인한 뒤, 같은 플레이 안에서 이어서 진행하세요."
                : "Confirm the trigger condition first, then execute it in the same session."}
            </p>
          ) : null}
        </section>

        {/* TIPS */}
        {ach.guideTips.length > 0 && (
          <section className="mt-6 rounded-2xl border border-[var(--accent-border)] bg-[var(--danger-bg)]/40 p-6 md:p-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                <FiAlertTriangle size={14} aria-hidden="true" />
              </span>
              <h2 className="font-display m-0 text-[16px] font-extrabold tracking-tight text-white">
                {locale === "ko" ? "주의 사항" : "Watch for"}
              </h2>
            </div>
            <ul className="mt-4 flex flex-col gap-2" role="list">
              {ach.guideTips.map((tip, index) => (
                <li key={index} className="flex gap-3 text-[14px] leading-7 text-[var(--text-secondary)]">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* SOURCE */}
        <section className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
            {locale === "ko" ? "출처" : "Source"}
          </div>
          {ach.guideSource ? (
            <a
              href={ach.guideSource}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-4 py-2 text-[13px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
            >
              {sourceLabel(ach.guideSource, locale)}
              <FiExternalLink size={12} aria-hidden="true" />
            </a>
          ) : (
            <p className="m-0 mt-3 text-[13px] text-[var(--text-tertiary)]">
              {locale === "ko" ? "연결된 출처가 아직 없습니다." : "No linked source."}
            </p>
          )}
          {ach.guideReferences.length > 0 && (
            <div className="mt-4 border-t border-[var(--border-subtle)] pt-4">
              <div className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-tertiary)]">
                {locale === "ko" ? "참고 링크" : "References"}
              </div>
              <ul className="mt-2 flex flex-col gap-1">
                {ach.guideReferences.map((ref) => (
                  <li key={ref.url}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-sm text-[13px] text-[var(--accent)] no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                    >
                      {ref.label}
                      <FiExternalLink size={11} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </article>
    </SiteShell>
  );
}
