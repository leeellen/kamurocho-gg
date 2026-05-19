import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { getLocale } from "@/lib/i18n";
import { getPlayOrderData } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export default async function OrderPage() {
  const locale = await getLocale();
  const order = await getPlayOrderData(locale);

  return (
    <SiteShell locale={locale} section="order">
      <div className="mx-auto max-w-[980px] px-5 py-10 md:px-8">
        <h1 className="m-0 text-[34px] font-extrabold tracking-tight">
          {locale === "ko" ? "플레이 순서" : "Play Order"}
        </h1>
        <p className="mt-3 max-w-[70ch] text-[14px] leading-7 text-[var(--text-secondary)]">
          {locale === "ko"
            ? "입문자 추천과 시간 순서를 분리해서 보여줍니다. 공략 동선이 길어지는 구간은 이유를 같이 남깁니다."
            : "Two routes are shown here: a practical newcomer order and a strict chronology. Each recommendation includes why it helps the completion flow."}
        </p>

        <Section locale={locale} title={locale === "ko" ? "입문자 추천" : "New to the series"} entries={order.newcomer} />
        <Section locale={locale} title={locale === "ko" ? "시간 순서" : "Chronological"} entries={order.chronological} />
      </div>
    </SiteShell>
  );
}

function Section({
  locale,
  title,
  entries,
}: {
  locale: "ko" | "en";
  title: string;
  entries: Awaited<ReturnType<typeof getPlayOrderData>>["newcomer"];
}) {
  return (
    <section className="mt-10">
      <div className="mb-4 text-[16px] font-bold">{title}</div>
      <div className="flex flex-col gap-3">
        {entries.map((entry, index) => (
          <div key={`${entry.slug}-${index}`} className="rounded-[4px] border border-[var(--border)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-card)]">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)]">{String(index + 1).padStart(2, "0")}</span>
              <Link href={`/game/${entry.slug}`} className="text-[15px] font-bold no-underline">
                {entry.game?.name}
              </Link>
              {entry.recommended && (
                <span className="rounded-[2px] bg-[var(--danger-bg)] px-2 py-1 text-[10px] font-bold text-[var(--danger-text)]">
                  {locale === "ko" ? "추천" : "Recommended"}
                </span>
              )}
            </div>
            <div className="font-mono text-[11px] text-[var(--text-muted)]">{entry.game?.year} · {entry.game?.estimatedHours}</div>
            <p className="mt-2 text-[13px] leading-7 text-[var(--text-secondary)]">{entry.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
