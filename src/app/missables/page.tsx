import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { getLocale } from "@/lib/i18n";
import { getMissablesIndex } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export default async function MissablesPage() {
  const locale = await getLocale();
  const entries = await getMissablesIndex(locale);

  return (
    <SiteShell locale={locale} section="missables">
      <div className="mx-auto max-w-[980px] px-5 py-10 md:px-8">
        <h1 className="m-0 text-[34px] font-extrabold tracking-tight">
          {locale === "ko" ? "미서블 인덱스" : "Missables Index"}
        </h1>
        <p className="mt-3 max-w-[70ch] text-[14px] leading-7 text-[var(--text-secondary)]">
          {locale === "ko"
            ? "현재는 챕터 잠금이나 루트 분기 때문에 실수가 자주 나는 구간 위주로 정리했습니다."
            : "This index focuses on chapter locks, route branches, and the completion traps most likely to waste a cleanup run."}
        </p>

        <div className="mt-8 flex flex-col gap-5">
          {entries.map((entry) => (
            <section key={entry.game?.appId} className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <Link href={`/game/${entry.game?.slug}`} className="text-[18px] font-bold no-underline">
                    {entry.game?.name}
                  </Link>
                  <div className="mt-1 text-[12px] text-[var(--text-muted)]">
                    {entry.game?.missableCount} {locale === "ko" ? "체크포인트" : "checkpoints"}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {entry.chapters.map((chapter) => (
                  <div key={`${entry.game?.appId}-${chapter.chapter}`} className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--gold)]">CH {chapter.chapter}</span>
                      <span className="text-[13px] font-bold">{chapter.title}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {chapter.items.map((item, index) => (
                        <div key={index} className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-[2px] bg-[var(--danger-bg)] px-2 py-1 text-[10px] font-bold text-[var(--danger-text)]">
                              {item.kind}
                            </span>
                            <span className="text-[13px] font-semibold">{item.title}</span>
                            <span className="font-mono text-[11px] text-[var(--text-muted)]">{item.when}</span>
                          </div>
                          <p className="mt-2 text-[13px] leading-7 text-[var(--text-secondary)]">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
