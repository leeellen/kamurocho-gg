import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { getLocale, getMessages } from "@/lib/i18n";
import { getSettingsData } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

const SettingsGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{
      fontSize: 11,
      fontWeight: 700,
      color: "var(--text-tertiary)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: 8,
    }}>
      {title}
    </div>
    <div style={{
      background: "var(--bg-elevated)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 12,
      overflow: "hidden",
    }}>
      {children}
    </div>
  </div>
);

const SettingsRow = ({
  label,
  sub,
  right,
  danger,
}: {
  label: string;
  sub?: string;
  right?: React.ReactNode;
  danger?: boolean;
}) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "1px solid var(--border-subtle)",
    minHeight: 56,
  }}>
    <div>
      <div style={{ fontSize: 14, fontWeight: 500, color: danger ? "var(--danger)" : "var(--text-primary)" }}>
        {label}
      </div>
      {sub && <div style={{ fontSize: 12, color: "var(--text-tertiary)", marginTop: 2 }}>{sub}</div>}
    </div>
    {right && <div>{right}</div>}
  </div>
);

export default async function SettingsPage() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const data = await getSettingsData();

  if (!data.user.steamId) redirect("/login");

  return (
    <AppShell section="settings" locale={locale} user={data.user}>
      <div style={{ padding: "28px 24px 100px", maxWidth: 760 }} className="md:px-[36px] md:pb-[40px]">

        <h1 style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 24 }}>
          {m.settings.title}
        </h1>

        {/* Account */}
        <SettingsGroup title={m.settings.account}>
          <div style={{ padding: "16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid var(--border-subtle)" }}>
            {data.user.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt="Avatar"
                src={data.user.avatarUrl}
                style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }}
              />
            ) : (
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--bg-raised)" }} />
            )}
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{data.user.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{m.settings.signedAs}</div>
            </div>
          </div>
          <SettingsRow label={m.settings.signOut} right={
            <button style={{
              padding: "6px 14px",
              borderRadius: 8,
              background: "var(--bg-raised)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              fontSize: 13,
              cursor: "pointer",
            }}>
              {m.settings.signOut}
            </button>
          } />
          <div style={{ borderBottom: "none" }}>
            <SettingsRow label={m.settings.deleteAccount} danger />
          </div>
        </SettingsGroup>

        {/* Sync */}
        <SettingsGroup title={m.settings.sync}>
          <SettingsRow
            label={m.settings.syncFreq}
            sub={m.settings.syncFreqV}
            right={
              <span style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                {data.user.lastSyncedLabel}
              </span>
            }
          />
          <div style={{ borderBottom: "none" }}>
            <SettingsRow label={m.settings.syncNow} right={
              <button style={{
                padding: "6px 14px",
                borderRadius: 8,
                background: "var(--accent-subtle)",
                border: "1px solid var(--accent-border)",
                color: "var(--accent)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}>
                {m.settings.syncNow}
              </button>
            } />
          </div>
        </SettingsGroup>

        {/* Notifications */}
        <SettingsGroup title={m.settings.notifications}>
          {[
            { label: m.settings.notifPush, enabled: true },
            { label: m.settings.notifFriend, enabled: false },
            { label: m.settings.notifDLC, enabled: true },
          ].map((item, i, arr) => (
            <div key={item.label} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 16px",
              borderBottom: i < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
            }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{item.label}</span>
              <div style={{
                width: 44,
                height: 24,
                borderRadius: 999,
                background: item.enabled ? "var(--accent)" : "var(--bg-raised)",
                border: "1px solid var(--border-subtle)",
                position: "relative",
                cursor: "pointer",
              }}>
                <div style={{
                  position: "absolute",
                  top: 3,
                  left: item.enabled ? "calc(100% - 19px)" : 3,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: item.enabled ? "var(--text-inverse)" : "var(--text-tertiary)",
                  transition: "left var(--dur-fast) var(--ease-out)",
                }} />
              </div>
            </div>
          ))}
        </SettingsGroup>

        {/* Language */}
        <SettingsGroup title={m.settings.language}>
          <div style={{ padding: "16px", borderBottom: "none" }}>
            <LanguageSwitcher
              locale={locale}
              label={m.common.language}
              englishLabel="EN"
              koreanLabel="KO"
            />
          </div>
        </SettingsGroup>

        {/* About */}
        <SettingsGroup title={m.settings.about}>
          <SettingsRow
            label={m.settings.version}
            right={<span style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>1.0.0</span>}
          />
          <SettingsRow label={m.settings.privacy} right={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          } />
          <div style={{ borderBottom: "none" }}>
            <SettingsRow label={m.settings.sources} right={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            } />
          </div>
        </SettingsGroup>
      </div>
    </AppShell>
  );
}
