import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiCheck, FiExternalLink, FiTarget } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { GameCover } from "@/components/ui/game-cover";
import { RarityBar } from "@/components/ui/rarity-bar";
import { StatTile } from "@/components/ui/stat-tile";
import { difficultyLabel } from "@/lib/difficulty";
import { getLocale } from "@/lib/i18n";
import { getGamePageData } from "@/lib/kamurocho-data";
import { SignInButton } from "@/components/ui/user-menu";
import { getCurrentUser, getUserAchievementMap } from "@/lib/user-progress";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();
  const data = await getGamePageData(id, locale);
  if (!data) return {};
  const title = locale === "ko"
    ? `${data.game.name} 스팀 업적 공략`
    : `${data.game.name} Steam achievement guide`;
  const description = data.game.summary;
  const url = `https://kamurocho.gg/game/${data.game.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: data.game.headerUrl ? [{ url: data.game.headerUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: data.game.headerUrl ? [data.game.headerUrl] : undefined,
    },
    keywords: [
      data.game.name,
      `${data.game.name} 공략`,
      `${data.game.name} 업적`,
      `${data.game.name} 놓치기 쉬운 업적`,
      `${data.game.name} 미서블`,
      data.game.lead,
      "Steam achievement",
      "RGG Studio",
    ],
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const locale = await getLocale();
  const data = await getGamePageData(id, locale);
  if (!data) notFound();

  const [user, userAchMap] = await Promise.all([
    getCurrentUser(),
    getUserAchievementMap(data.game.appId),
  ]);

  const userUnlocked = data.achievements.filter((a) => userAchMap.get(a.id)?.unlocked).length;
  const userPct = data.achievements.length
    ? Math.round((userUnlocked / data.achievements.length) * 100)
    : 0;

  const coveragePct = data.game.achievements
    ? Math.round((data.game.guideCoverage / data.game.achievements) * 100)
    : 0;

  // Build a unified chapter-aware "missable" sidebar that merges the curated
  // chapter notes (sub-stories, magazines, route choices) with every missable
  // achievement that references a chapter in its guide content. This is what
  // the user expects to see — the list previously only showed curated rows.
  type ChapterBucket = {
    chapter: number;
    curatedTitle: { ko: string; en: string } | null;
    curatedItems: NonNullable<typeof data.missables>[number]["items"];
    achievements: typeof data.achievements;
  };
  const chapterMap = new Map<number, ChapterBucket>();
  for (const chapter of data.missables ?? []) {
    chapterMap.set(chapter.chapter, {
      chapter: chapter.chapter,
      curatedTitle: chapter.title,
      curatedItems: chapter.items,
      achievements: [],
    });
  }
  for (const achievement of data.achievements) {
    if (!achievement.missable || !achievement.chapter) continue;
    const bucket = chapterMap.get(achievement.chapter);
    if (bucket) {
      bucket.achievements.push(achievement);
    } else {
      chapterMap.set(achievement.chapter, {
        chapter: achievement.chapter,
        curatedTitle: null,
        curatedItems: [],
        achievements: [achievement],
      });
    }
  }
  // Stray missable achievements with no chapter info still surface in the sidebar
  // under a dedicated "anytime" bucket so the list never silently drops items.
  const unlocatedMissable = data.achievements.filter(
    (a) => a.missable && !a.chapter,
  );
  const chapterBuckets = Array.from(chapterMap.values()).sort(
    (a, b) => a.chapter - b.chapter,
  );
  const hasSidebar = chapterBuckets.length > 0 || unlocatedMissable.length > 0;

  // Schema.org structured data: VideoGame for the game-level overview +
  // BreadcrumbList for the trail. Adds rich-snippet eligibility on Google.
  const baseUrl = "https://kamurocho.gg";
  const pageUrl = `${baseUrl}/game/${data.game.slug}`;
  const videoGameJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: data.game.name,
    alternateName: data.game.altName ?? undefined,
    url: pageUrl,
    image: data.game.headerUrl ?? undefined,
    description: data.game.summary,
    gamePlatform: data.game.platforms,
    inLanguage: locale === "ko" ? "ko-KR" : "en-US",
    publisher: { "@type": "Organization", name: "SEGA" },
    developer: { "@type": "Organization", name: "Ryu Ga Gotoku Studio" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: locale === "ko" ? "홈" : "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: locale === "ko" ? "작품 목록" : "Games", item: `${baseUrl}/games` },
      { "@type": "ListItem", position: 3, name: data.game.name, item: pageUrl },
    ],
  };

  return (
    <SiteShell locale={locale} section="games">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* CINEMATIC HERO */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 scale-110">
            <GameCover
              appId={data.game.appId}
              ratio="header"
              imgIconUrl={data.game.imgIconUrl}
              headerUrl={data.game.headerUrl}
              capsuleUrl={data.game.capsuleUrl}
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
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md text-[12px] font-medium text-[var(--text-tertiary)] no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiArrowLeft size={13} aria-hidden="true" />
            {locale === "ko" ? "작품 목록으로" : "Back to games"}
          </Link>

          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[360px_1fr] lg:gap-10">
            <div className="self-start overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-pop)] lg:max-w-[360px]">
              <GameCover
                appId={data.game.appId}
                ratio="header"
                imgIconUrl={data.game.imgIconUrl}
                headerUrl={data.game.headerUrl}
                capsuleUrl={data.game.capsuleUrl}
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--accent)]">{data.game.arc}</span>
              <h1 className="font-display m-0 text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-[56px]">
                {data.game.name}
              </h1>
              <p className="m-0 max-w-[64ch] text-[14px] leading-7 text-[var(--text-secondary)] md:text-[15px]">
                {data.game.summary}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Chip tone="neutral">{locale === "ko" ? `업적 ${data.game.achievements}개` : `${data.game.achievements} achievements`}</Chip>
                <Chip tone="accent">{locale === "ko" ? `공략 ${data.game.guideCoverage}개` : `${data.game.guideCoverage} guides linked`}</Chip>
                <Chip tone="danger">
                  <FiTarget size={11} aria-hidden="true" />
                  {locale === "ko" ? `놓침 ${data.game.missableCount}개` : `${data.game.missableCount} missables`}
                </Chip>
                <Chip tone="gold">{locale === "ko" ? `희귀 ${data.game.rareCount}개` : `${data.game.rareCount} rare`}</Chip>
                <Chip tone="neutral">{data.game.estimatedHours}</Chip>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`https://store.steampowered.com/app/${data.game.appId}/`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-white/5 px-4 py-2 text-[12px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                >
                  {locale === "ko" ? "스팀 상점" : "Steam store"}
                  <FiExternalLink size={12} aria-hidden="true" />
                </a>
                <a
                  href={`https://steamcommunity.com/app/${data.game.appId}/guides/`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-white/5 px-4 py-2 text-[12px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                >
                  {locale === "ko" ? "커뮤니티 공략" : "Community guides"}
                  <FiExternalLink size={12} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* OVERVIEW STATS */}
          <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {user && userAchMap.size > 0 ? (
              <StatTile
                tone="success"
                label={locale === "ko" ? "내 진행률" : "Your progress"}
                value={`${userPct}%`}
                hint={locale === "ko" ? `${userUnlocked} / ${data.achievements.length}` : `${userUnlocked} of ${data.achievements.length}`}
              />
            ) : (
              <StatTile
                label={locale === "ko" ? "스토리 시점" : "Story era"}
                value={data.game.year}
              />
            )}
            <StatTile
              label={locale === "ko" ? "주인공" : "Lead"}
              value={data.game.lead}
              hint={data.game.platforms.join(" · ")}
            />
            <StatTile
              tone="accent"
              label={locale === "ko" ? "공략 커버리지" : "Coverage"}
              value={`${coveragePct}%`}
              hint={locale === "ko" ? `업적 ${data.game.achievements} 중 ${data.game.guideCoverage}` : `${data.game.guideCoverage} of ${data.game.achievements}`}
            />
            <StatTile
              tone="gold"
              label={locale === "ko" ? "예상 분량" : "Est. time"}
              value={data.game.estimatedHours}
            />
          </dl>

          {user && userAchMap.size > 0 && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[12px]">
                <span className={`font-mono uppercase text-[var(--text-tertiary)] ${locale === "ko" ? "tracking-wider" : "tracking-[0.16em]"}`}>
                  {locale === "ko" ? "스팀 진행 상황" : "Steam progress"}
                </span>
                <span className="font-mono text-white">
                  {userUnlocked} / {data.achievements.length} · {userPct}%
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
          {!user && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-surface)]/40 p-4">
              <div className="text-[12px] text-[var(--text-secondary)]">
                {locale === "ko"
                  ? "스팀 계정을 연동하면 본인의 미완료 업적이 강조됩니다."
                  : "Sign in through Steam to highlight your remaining achievements here."}
              </div>
              <SignInButton locale={locale} />
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-5 pb-20 md:px-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[320px_1fr]">
          {/* SIDEBAR: MISSABLES */}
          {hasSidebar && (
            <aside aria-label={locale === "ko" ? "챕터별 놓치기 쉬운 항목" : "Chapter missables"} className="space-y-4">
              <div className="sticky top-24">
                <h2 className="font-display flex items-center gap-2 text-[15px] font-extrabold tracking-tight text-white">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] ring-1 ring-inset ring-[var(--accent-border)]">
                    <FiTarget size={13} aria-hidden="true" />
                  </span>
                  {locale === "ko" ? "챕터별 놓치기 쉬운 항목" : "Chapter missables"}
                </h2>
                <div className="mt-4 flex max-h-[70vh] flex-col gap-3 overflow-y-auto pr-1">
                  {chapterBuckets.map((bucket) => (
                    <div
                      key={bucket.chapter}
                      className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4"
                    >
                      <div className="flex items-center gap-2">
                        <Chip tone="gold" size="xs" className="font-mono">
                          CH {bucket.chapter}
                        </Chip>
                        {bucket.curatedTitle && (
                          <span className="text-[13px] font-bold text-white">
                            {locale === "ko" ? bucket.curatedTitle.ko : bucket.curatedTitle.en}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 flex flex-col gap-2">
                        {bucket.curatedItems.map((item, index) => (
                          <div
                            key={`curated-${index}`}
                            className="rounded-lg border border-[var(--border-subtle)] bg-black/20 p-3"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <Chip
                                tone={item.kind === "missable" ? "danger" : item.kind === "recommended" ? "accent" : "info"}
                                size="xs"
                              >
                                {item.kind}
                              </Chip>
                              <span className="text-[12px] font-semibold text-white">
                                {locale === "ko" ? item.title.ko : item.title.en}
                              </span>
                            </div>
                            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                              {locale === "ko" ? item.when.ko : item.when.en}
                            </div>
                            <p className="m-0 mt-2 text-[12px] leading-6 text-[var(--text-secondary)]">
                              {locale === "ko" ? item.body.ko : item.body.en}
                            </p>
                          </div>
                        ))}
                        {bucket.achievements.map((ach) => (
                          <Link
                            key={`ach-${ach.id}`}
                            href={`/game/${data.game.slug}/achievement/${ach.slug}`}
                            className="group block cursor-pointer rounded-lg border border-[var(--accent-border)] bg-[var(--danger-bg)]/40 p-3 no-underline transition-colors hover:bg-[var(--danger-bg)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <Chip tone="danger" size="xs">
                                <FiTarget size={10} aria-hidden="true" />
                                {locale === "ko" ? "업적" : "Achievement"}
                              </Chip>
                              <span className="text-[12px] font-semibold text-white transition-colors group-hover:text-[var(--accent)]">
                                {ach.name}
                              </span>
                            </div>
                            <p className="m-0 mt-1.5 line-clamp-2 text-[12px] leading-6 text-[var(--text-secondary)]">
                              {ach.guideSummary || ach.guideSteps[0] || ach.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  {unlocatedMissable.length > 0 && (
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                      <div className="flex items-center gap-2">
                        <Chip tone="info" size="xs">{locale === "ko" ? "챕터 미지정" : "Anytime / unspecified"}</Chip>
                      </div>
                      <div className="mt-3 flex flex-col gap-2">
                        {unlocatedMissable.map((ach) => (
                          <Link
                            key={ach.id}
                            href={`/game/${data.game.slug}/achievement/${ach.slug}`}
                            className="group block cursor-pointer rounded-lg border border-[var(--accent-border)] bg-[var(--danger-bg)]/40 p-3 no-underline transition-colors hover:bg-[var(--danger-bg)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <Chip tone="danger" size="xs">
                                <FiTarget size={10} aria-hidden="true" />
                                {locale === "ko" ? "업적" : "Achievement"}
                              </Chip>
                              <span className="text-[12px] font-semibold text-white transition-colors group-hover:text-[var(--accent)]">
                                {ach.name}
                              </span>
                            </div>
                            <p className="m-0 mt-1.5 line-clamp-2 text-[12px] leading-6 text-[var(--text-secondary)]">
                              {ach.guideSummary || ach.guideSteps[0] || ach.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          )}

          {/* ACHIEVEMENTS */}
          <section aria-label={locale === "ko" ? "업적 목록" : "Achievements"}>
            <div className="flex items-end justify-between gap-3">
              <div>
                <span className={`font-mono text-[12px] uppercase text-[var(--accent)] ${locale === "ko" ? "tracking-wider" : "tracking-[0.16em]"}`}>
                  {locale === "ko" ? "업적 가이드" : "Achievement guide"}
                </span>
                <h2 className="font-display m-0 mt-2 text-[24px] font-extrabold tracking-tight text-white md:text-[28px]">
                  {locale === "ko" ? "놓치기 쉬운 업적부터" : "Missable first, then by rarity"}
                </h2>
              </div>
              <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
                {locale === "ko" ? `전체 ${data.achievements.length}개` : `${data.achievements.length} total`}
              </span>
            </div>
            {(() => {
              const missable = data.achievements.filter((a) => a.missable);
              const rare = data.achievements.filter((a) => !a.missable && a.rarity > 0 && a.rarity < 10);
              const rest = data.achievements.filter((a) => !a.missable && (a.rarity === 0 || a.rarity >= 10));
              return (
                <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px] text-[var(--text-tertiary)]">
                  <a href="#group-missable" className="cursor-pointer rounded-full border border-[var(--accent-border)] bg-[var(--danger-bg)]/40 px-3 py-1 font-semibold text-[var(--danger-text)] no-underline transition-colors hover:bg-[var(--danger-bg)]/60">
                    {locale === "ko" ? `놓치기 쉬움 ${missable.length}` : `${missable.length} missable`}
                  </a>
                  <a href="#group-rare" className="cursor-pointer rounded-full border border-[var(--gold-tint)] bg-[var(--gold-tint)] px-3 py-1 font-semibold text-[var(--gold)] no-underline transition-opacity hover:opacity-80">
                    {locale === "ko" ? `희귀 ${rare.length}` : `${rare.length} rare`}
                  </a>
                  <a href="#group-rest" className="cursor-pointer rounded-full border border-[var(--border-strong)] bg-white/5 px-3 py-1 font-semibold text-white no-underline transition-colors hover:bg-white/10">
                    {locale === "ko" ? `일반 ${rest.length}` : `${rest.length} general`}
                  </a>
                </div>
              );
            })()}

            <ul className="mt-6 flex flex-col gap-3">
              {(() => {
                type Group = "missable" | "rare" | "rest";
                const classify = (a: typeof data.achievements[number]): Group =>
                  a.missable ? "missable" : a.rarity > 0 && a.rarity < 10 ? "rare" : "rest";
                const order: Record<Group, number> = { missable: 0, rare: 1, rest: 2 };
                const sorted = [...data.achievements].sort((a, b) => {
                  const ga = order[classify(a)];
                  const gb = order[classify(b)];
                  if (ga !== gb) return ga - gb;
                  return a.rarity - b.rarity;
                });
                const labels: Record<Group, { ko: string; en: string }> = {
                  missable: { ko: "놓치기 쉬운 업적", en: "Missable" },
                  rare: { ko: "희귀 업적", en: "Rare" },
                  rest: { ko: "일반 업적", en: "General" },
                };
                let lastGroup: Group | null = null;
                const nodes: React.ReactNode[] = [];
                for (const achievement of sorted) {
                  const group = classify(achievement);
                  if (group !== lastGroup) {
                    nodes.push(
                      <li key={`header-${group}`} id={`group-${group}`} className="-mb-1 mt-2 first:mt-0">
                        <div className="flex items-center gap-3 px-1 pt-2">
                          <h3 className="font-display m-0 text-[15px] font-extrabold tracking-tight text-white">
                            {labels[group][locale]}
                          </h3>
                          <span aria-hidden="true" className="h-px flex-1 bg-[var(--border)]" />
                        </div>
                      </li>,
                    );
                    lastGroup = group;
                  }
                  nodes.push(renderAchievementRow(achievement));
                }
                return nodes;
              })()}
            </ul>
          </section>
        </div>
      </div>
    </SiteShell>
  );
  function renderAchievementRow(achievement: NonNullable<typeof data>["achievements"][number]) {
    const gameSlug = data!.game.slug;
                const userState = userAchMap.get(achievement.id);
                const isUnlocked = userState?.unlocked === true;
                const isIncomplete = user && userAchMap.size > 0 && !isUnlocked;
                return (
                  <li key={achievement.id}>
                    <Link
                      href={`/game/${gameSlug}/achievement/${achievement.slug}`}
                      className={`group block cursor-pointer rounded-2xl border p-4 no-underline transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] md:p-5 ${
                        isUnlocked
                          ? "border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 opacity-70 hover:opacity-100 hover:border-white/20"
                          : isIncomplete
                            ? "border-[var(--accent-border)] bg-[var(--bg-elevated)] hover:border-[var(--accent)] hover:bg-[var(--bg-raised)]"
                            : "border-[var(--border)] bg-[var(--bg-elevated)] hover:border-white/20 hover:bg-[var(--bg-raised)]"
                      }`}
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_1fr_180px_24px] md:items-center">
                        {(() => {
                          // Official Steam achievement art (icon / icongray)
                          // returned by GetSchemaForGame. Show the colored icon
                          // when unlocked, the gray icon when locked. Fall back
                          // to the gray asset if the unlock state is unknown.
                          const showColor = isUnlocked || (!user) || userAchMap.size === 0;
                          const src = showColor ? (achievement.iconUrl ?? achievement.iconGrayUrl) : (achievement.iconGrayUrl ?? achievement.iconUrl);
                          if (!src) return null;
                          return (
                            <div className="relative flex shrink-0 items-center">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={src}
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
                          );
                        })()}
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className={`font-display m-0 text-[15px] font-bold transition-colors md:text-[16px] ${
                              isUnlocked ? "text-[var(--text-tertiary)] line-through decoration-1" : "text-white group-hover:text-[var(--accent)]"
                            }`}>
                              {achievement.name}
                            </h3>
                            {isUnlocked && (
                              <Chip tone="success" size="xs">
                                <FiCheck size={10} aria-hidden="true" />
                                {locale === "ko"
                                  ? userState?.unlockTime
                                    ? new Date(userState.unlockTime).toLocaleDateString("ko-KR")
                                    : "획득"
                                  : userState?.unlockTime
                                    ? new Date(userState.unlockTime).toLocaleDateString("en-US")
                                    : "Unlocked"}
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
                                {locale === "ko" ? "놓치기 쉬움" : "Missable"}
                              </Chip>
                            )}
                            {achievement.chapter && (
                              <Chip tone="gold" size="xs" className="font-mono">
                                CH {achievement.chapter}
                              </Chip>
                            )}
                          </div>
                          <p className="m-0 mt-1.5 line-clamp-2 text-[13px] leading-6 text-[var(--text-secondary)]">
                            {achievement.description}
                          </p>
                          {(achievement.guideSteps[0] || achievement.guideSummary) && (
                            <p className="m-0 mt-2 line-clamp-1 text-[12px] text-[var(--text-tertiary)]">
                              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)]">
                                {locale === "ko" ? "공략 " : "Guide "}
                              </span>
                              {achievement.guideSteps[0] || achievement.guideSummary}
                            </p>
                          )}
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
                    </Link>
                  </li>
                );
  }
}
