import Link from "next/link";
import { redirect } from "next/navigation";
import { FiChevronRight, FiLogOut, FiUser } from "react-icons/fi";

import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SyncButton } from "@/components/ui/sync-button";
import { getLocale, getMessages } from "@/lib/i18n";
import { getUserSummary } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

const APP_VERSION = "1.0.0";

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
        {title}
      </div>
      <Card className="overflow-hidden p-0">{children}</Card>
    </section>
  );
}

function Row({
  label,
  sub,
  right,
  className = "",
}: {
  label: React.ReactNode;
  sub?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-h-[60px] items-center justify-between gap-4 border-b border-[var(--border-subtle)] px-4 py-3 last:border-b-0 ${className}`}>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] font-medium text-[var(--text-primary)]">{label}</div>
        {sub && <div className="mt-1 text-[12px] text-[var(--text-tertiary)]">{sub}</div>}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

export default async function SettingsPage() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const user = await getUserSummary();

  if (!user.steamId) redirect("/login");

  const steamProfileUrl = `https://steamcommunity.com/profiles/${user.steamId}`;

  return (
    <AppShell section="settings" locale={locale} user={user}>
      <div className="mx-auto max-w-[820px] px-6 pt-8 pb-24 md:px-9 md:pb-10">
        <h1 className="m-0 mb-7 text-[32px] font-extrabold tracking-tight text-[var(--text-primary)]">
          {m.settings.title}
        </h1>

        {/* Account */}
        <Group title={m.settings.account}>
          <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-4">
            {user.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.avatarUrl}
                alt=""
                className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--accent-border)]"
              />
            ) : (
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#9D7AFF]" />
            )}
            <div className="min-w-0 flex-1">
              <div className="truncate text-[15px] font-semibold text-[var(--text-primary)]">{user.name}</div>
              <div className="truncate font-mono text-[11px] text-[var(--text-tertiary)]">
                Steam ID · {user.steamId}
              </div>
            </div>
            <Button asChild variant="secondary" size="sm">
              <Link href={steamProfileUrl} target="_blank" rel="noreferrer">
                <FiUser size={13} />
                {locale === "ko" ? "Steam 프로필" : "Steam profile"}
              </Link>
            </Button>
          </div>
          <Row
            label={m.settings.signOut}
            sub={locale === "ko" ? "이 기기에서 로그아웃합니다." : "Sign out of this device."}
            right={
              <form action="/api/auth/signout" method="post">
                <Button type="submit" variant="danger" size="sm">
                  <FiLogOut size={13} /> {m.settings.signOut}
                </Button>
              </form>
            }
          />
        </Group>

        {/* Sync */}
        <Group title={m.settings.sync}>
          <Row
            label={locale === "ko" ? "마지막 동기화" : "Last synced"}
            sub={
              locale === "ko"
                ? "Steam 라이브러리와 업적을 다시 가져옵니다."
                : "Pulls your Steam library and achievements again."
            }
            right={
              <SyncButton
                label={m.settings.syncNow}
                syncedLabel={locale === "ko" ? "최근" : "last"}
                lastSynced={user.lastSyncedLabel}
              />
            }
          />
        </Group>

        {/* Language */}
        <Group title={m.settings.language}>
          <Row
            label={locale === "ko" ? "표시 언어" : "Display language"}
            sub={locale === "ko" ? "게임명·업적·설명에 적용됩니다." : "Applies to game names, achievements, and descriptions."}
            right={
              <LanguageSwitcher
                locale={locale}
                label={m.common.language}
                englishLabel="EN"
                koreanLabel="KO"
              />
            }
          />
        </Group>

        {/* About */}
        <Group title={m.settings.about}>
          <Row
            label={m.settings.version}
            right={
              <Badge variant="neutral">
                <span className="font-mono">{APP_VERSION}</span>
              </Badge>
            }
          />
          <Row
            label={m.settings.privacy}
            right={<FiChevronRight size={14} className="text-[var(--text-tertiary)]" />}
          />
          <Row
            label={locale === "ko" ? "데이터 출처" : "Data sources"}
            sub={
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[var(--text-tertiary)]">
                <a
                  href="https://steamcommunity.com/dev"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--l2)] underline decoration-[var(--l2)]/40 underline-offset-2 hover:decoration-[var(--l2)]"
                >
                  Steam Web API
                </a>
                <span>·</span>
                <a
                  href="https://partner.steamgames.com/doc/store/getreviews"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--l2)] underline decoration-[var(--l2)]/40 underline-offset-2 hover:decoration-[var(--l2)]"
                >
                  Steam Store API
                </a>
                <span>·</span>
                <a
                  href="https://steamcommunity.com/workshop/browse/?section=guides"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--l2)] underline decoration-[var(--l2)]/40 underline-offset-2 hover:decoration-[var(--l2)]"
                >
                  {locale === "ko" ? "커뮤니티 가이드" : "Community guides"}
                </a>
              </span>
            }
          />
        </Group>
      </div>
    </AppShell>
  );
}
