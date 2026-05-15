import { redirect } from "next/navigation";
import { FiAward, FiShare2 } from "react-icons/fi";

import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLocale, getMessages } from "@/lib/i18n";
import { getProfileData } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const data = await getProfileData();

  if (!data.user.steamId) redirect("/login");

  const monthLabels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const now = new Date();
  const months = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (11 - i), 1);
    return { label: monthLabels[d.getMonth()], idx: i };
  });
  const maxMonth = Math.max(1, ...data.monthlyUnlocks);
  const totalMonthlyUnlocks = data.monthlyUnlocks.reduce((s, n) => s + n, 0);

  const stats = [
    { label: m.common.achievements, value: data.user.unlockedCount.toLocaleString(), sub: locale === "ko" ? "달성" : "unlocked" },
    { label: m.profile.avgCompletion, value: `${data.avgCompletion}%`, sub: locale === "ko" ? "평균" : "avg" },
    { label: m.profile.totalPlaytime, value: `${data.totalHours.toLocaleString()}h`, sub: locale === "ko" ? "총 시간" : "total" },
    { label: m.dash.ultraRare, value: String(data.ultraRareCount), sub: locale === "ko" ? "1% 미만" : "<1% rarity" },
  ];

  return (
    <AppShell section="me" locale={locale} user={data.user}>
      <div className="mx-auto max-w-[960px] px-6 pt-8 pb-24 md:px-9 md:pb-10">
        {/* Identity card */}
        <Card className="mb-6 flex items-center gap-5 px-7 py-6">
          {data.user.avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="Avatar"
              src={data.user.avatarUrl}
              className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-[var(--accent-border)]"
            />
          ) : (
            <div className="h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#9D7AFF]" />
          )}
          <div className="min-w-0 flex-1">
            <h1 className="m-0 text-[26px] font-extrabold tracking-tight text-[var(--text-primary)]">
              {data.user.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {data.joinYear && (
                <Badge variant="neutral">
                  {m.profile.joined.replace("{y}", String(data.joinYear))}
                </Badge>
              )}
              {typeof data.steamLevel === "number" && (
                <Badge variant="accent">
                  {locale === "ko" ? `Steam Lv. ${data.steamLevel}` : `Steam Level ${data.steamLevel}`}
                </Badge>
              )}
              <Badge variant="l3">
                {data.user.overallPct}% {locale === "ko" ? "달성률" : "complete"}
              </Badge>
            </div>
          </div>
          <Button variant="secondary" size="sm" className="shrink-0">
            <FiShare2 size={13} /> {m.profile.shareCard}
          </Button>
        </Card>

        {/* 4-stat row */}
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="px-5 py-4">
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
                {s.label}
              </div>
              <div className="font-mono text-[32px] font-extrabold leading-none tabular-nums text-[var(--text-primary)]">
                {s.value}
              </div>
              <div className="mt-1.5 text-[11px] text-[var(--text-tertiary)]">{s.sub}</div>
            </Card>
          ))}
        </div>

        {/* Monthly bar chart */}
        <Card className="mb-6 px-6 py-5">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <div className="text-[15px] font-bold text-[var(--text-primary)]">{m.profile.monthly}</div>
              <div className="mt-0.5 text-xs text-[var(--text-tertiary)]">
                {locale === "ko"
                  ? `최근 12개월 · 총 ${totalMonthlyUnlocks}개`
                  : `Last 12 months · ${totalMonthlyUnlocks} total`}
              </div>
            </div>
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {data.monthlyUnlocks.map((val, i) => {
              const isCurrent = i === 11;
              const heightPct = (val / maxMonth) * 100;
              return (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className={`w-full rounded-t-sm transition-all ${
                        isCurrent
                          ? "bg-[var(--accent)]"
                          : "border border-[var(--border-subtle)] bg-[var(--bg-raised)]"
                      }`}
                      style={{ height: `${Math.max(heightPct, val > 0 ? 6 : 0)}%` }}
                      title={`${months[i].label}: ${val}`}
                    />
                  </div>
                  <span
                    className={`font-mono text-[10px] uppercase ${
                      isCurrent ? "text-[var(--accent)]" : "text-[var(--text-tertiary)]"
                    }`}
                  >
                    {months[i].label.slice(0, 1)}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Hall of fame */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="m-0 text-[18px] font-bold tracking-tight text-[var(--text-primary)]">
              {m.profile.hallOfFame}
            </h2>
            <span className="text-xs text-[var(--text-tertiary)]">
              {locale === "ko" ? "희귀도 기준" : "by rarity"}
            </span>
          </div>
          <Card className="overflow-hidden p-0">
            {data.hall.map((entry, i) => (
              <div
                key={entry.rank}
                className={`flex items-center gap-3 px-4 py-3 ${
                  i > 0 ? "border-t border-[var(--border-subtle)]" : ""
                }`}
              >
                <span className="w-8 shrink-0 font-mono text-[18px] font-extrabold text-[var(--text-disabled)] tabular-nums">
                  {entry.rank}
                </span>
                <FiAward className="shrink-0 text-[var(--accent)]" size={18} />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[14px] font-semibold text-[var(--text-primary)]">
                    {entry.title}
                  </div>
                  <div className="text-[11px] text-[var(--text-tertiary)]">{entry.game}</div>
                </div>
                <Badge variant="l3" className="shrink-0">{entry.label}</Badge>
                <span className="shrink-0 font-mono text-[13px] font-bold tabular-nums text-[var(--text-secondary)]">
                  {entry.rarity}
                </span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
