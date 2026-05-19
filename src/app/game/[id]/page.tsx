import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { GameCover } from "@/components/ui/game-cover";
import { getLocale } from "@/lib/i18n";
import { getGamePageData } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

function difficultyLabel(locale: "ko" | "en", difficulty: string) {
  if (locale === "ko") {
    if (difficulty === "legendary") return "전설";
    if (difficulty === "rare") return "희귀";
    if (difficulty === "uncommon") return "보통 이상";
    return "일반";
  }
  return difficulty;
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

  const featured = data.achievements.slice(0, 8);

  return (
    <SiteShell locale={locale} section="games">
      <div className="pb-16">
        <div className="relative overflow-hidden bg-[var(--chrome-top)] text-white">
          <div className="absolute inset-0 opacity-25">
            <GameCover
              appId={data.game.appId}
              ratio="header"
              imgIconUrl={data.game.imgIconUrl}
              headerUrl={data.game.headerUrl}
              capsuleUrl={data.game.capsuleUrl}
              style={{ aspectRatio: "1840 / 430" as unknown as string, height: "100%" }}
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,27,51,0.95),rgba(11,27,51,0.7),rgba(11,27,51,0.45))]" />
          <div className="relative mx-auto max-w-[1280px] px-5 py-12 md:px-8">
            <Link href="/games" className="inline-flex items-center gap-2 text-[13px] text-[var(--chrome-muted)] no-underline hover:text-white">
              <FiArrowLeft size={14} /> {locale === "ko" ? "게임 목록" : "Back to games"}
            </Link>
            <div className="mt-5 max-w-[72ch]">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--chrome-muted)]">{data.game.arc}</div>
              <h1 className="mt-2 text-[38px] font-extrabold tracking-tight md:text-[46px]">{data.game.name}</h1>
              <p className="mt-4 text-[14px] leading-7 text-[var(--chrome-muted)]">{data.game.summary}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>{data.game.achievements} {locale === "ko" ? "업적" : "achievements"}</Badge>
              <Badge>{data.game.guideCoverage} {locale === "ko" ? "공략 연결" : "guides linked"}</Badge>
              <Badge>{data.game.missableCount} {locale === "ko" ? "미서블" : "missables"}</Badge>
              <Badge>{data.game.estimatedHours}</Badge>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] px-5 py-10 md:px-8">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.78fr_1.22fr]">
            <aside>
              <div className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
                <div className="mb-4 text-[15px] font-bold">{locale === "ko" ? "게임 개요" : "Overview"}</div>
                <dl className="grid grid-cols-[120px_1fr] gap-y-3 text-[13px]">
                  <dt className="text-[var(--text-muted)]">{locale === "ko" ? "발매 시기" : "Story era"}</dt>
                  <dd>{data.game.year}</dd>
                  <dt className="text-[var(--text-muted)]">{locale === "ko" ? "주인공" : "Lead"}</dt>
                  <dd>{data.game.lead}</dd>
                  <dt className="text-[var(--text-muted)]">{locale === "ko" ? "플랫폼" : "Platforms"}</dt>
                  <dd>{data.game.platforms.join(" · ")}</dd>
                  <dt className="text-[var(--text-muted)]">{locale === "ko" ? "예상 시간" : "Est. time"}</dt>
                  <dd>{data.game.estimatedHours}</dd>
                </dl>
                <div className="mt-5 flex gap-2">
                  <a
                    href={`https://store.steampowered.com/app/${data.game.appId}/`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-[3px] border border-[var(--border)] px-3 py-2 text-[12px] no-underline"
                  >
                    Steam Store <FiExternalLink size={12} />
                  </a>
                  <a
                    href={`https://steamcommunity.com/app/${data.game.appId}/guides/`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-[3px] border border-[var(--border)] px-3 py-2 text-[12px] no-underline"
                  >
                    Community Guides <FiExternalLink size={12} />
                  </a>
                </div>
              </div>

              {data.missables && data.missables.length > 0 && (
                <div className="mt-6 rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
                  <div className="mb-4 text-[15px] font-bold">{locale === "ko" ? "챕터별 미서블" : "Chapter missables"}</div>
                  <div className="flex flex-col gap-3">
                    {data.missables.map((chapter) => (
                      <div key={chapter.chapter} className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[11px] font-bold text-[var(--gold)]">CH {chapter.chapter}</span>
                          <span className="text-[13px] font-semibold">{locale === "ko" ? chapter.title.ko : chapter.title.en}</span>
                        </div>
                        <div className="mt-2 flex flex-col gap-2">
                          {chapter.items.map((item, index) => (
                            <div key={index} className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-3">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-[2px] bg-[var(--danger-bg)] px-2 py-1 text-[10px] font-bold text-[var(--danger-text)]">{item.kind}</span>
                                <span className="text-[12px] font-semibold">{locale === "ko" ? item.title.ko : item.title.en}</span>
                              </div>
                              <div className="mt-1 font-mono text-[11px] text-[var(--text-muted)]">{locale === "ko" ? item.when.ko : item.when.en}</div>
                              <p className="mt-2 text-[12px] leading-6 text-[var(--text-secondary)]">{locale === "ko" ? item.body.ko : item.body.en}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>

            <section>
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="text-[16px] font-bold">{locale === "ko" ? "희귀 업적부터 보기" : "Start with the rarest achievements"}</div>
                <div className="font-mono text-[12px] text-[var(--text-muted)]">{data.achievements.length}</div>
              </div>
              <div className="overflow-hidden rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-[var(--shadow-card)]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[var(--bg-elevated)]">
                      <th className="border-b border-[var(--border)] px-4 py-3 text-left text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">{locale === "ko" ? "업적" : "Achievement"}</th>
                      <th className="border-b border-[var(--border)] px-4 py-3 text-left text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">{locale === "ko" ? "난이도" : "Difficulty"}</th>
                      <th className="border-b border-[var(--border)] px-4 py-3 text-left text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">{locale === "ko" ? "가이드" : "Guide"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featured.map((achievement) => (
                      <tr key={achievement.id} className="border-b border-[var(--border)] align-top last:border-b-0">
                        <td className="px-4 py-4">
                          <Link href={`/game/${data.game.slug}/achievement/${achievement.slug}`} className="no-underline">
                            <div className="font-semibold text-[var(--text-primary)]">{achievement.name}</div>
                            <div className="mt-1 text-[12px] leading-6 text-[var(--text-secondary)]">{achievement.description}</div>
                          </Link>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-[12px] font-semibold">{difficultyLabel(locale, achievement.difficulty)}</div>
                          <div className="mt-1 font-mono text-[11px] text-[var(--text-muted)]">{achievement.rarity.toFixed(2)}%</div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-[12px] leading-6 text-[var(--text-secondary)]">{achievement.guideSteps[0] || achievement.guideSummary || achievement.description}</div>
                          {achievement.missable && (
                            <div className="mt-2 inline-flex rounded-[2px] bg-[var(--danger-bg)] px-2 py-1 text-[10px] font-bold text-[var(--danger-text)]">
                              {locale === "ko" ? "미서블 가능성" : "Missable risk"}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-[2px] bg-white/10 px-2 py-1 text-[11px] font-medium text-white">{children}</span>;
}
