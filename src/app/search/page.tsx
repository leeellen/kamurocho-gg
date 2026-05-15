import Link from "next/link";
import { redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { getLocale, getMessages } from "@/lib/i18n";
import { getSearchData, getUserSummary } from "@/lib/unlokd-data";

export const dynamic = "force-dynamic";

export default async function SearchPage() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const [user, data] = await Promise.all([getUserSummary(), getSearchData()]);

  if (!user.steamId) redirect("/login");

  return (
    <AppShell section="search" locale={locale} user={user}>
      <div style={{ padding: "28px 24px 100px", maxWidth: 1100 }} className="md:px-[36px] md:pb-[40px]">

        {/* Search bar */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.02em", marginBottom: 16 }}>
            {m.search.hero}
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "0 16px",
            height: 52,
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 12,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder={m.search.placeholder}
              style={{
                flex: 1,
                border: "none",
                background: "transparent",
                color: "var(--text-primary)",
                fontSize: 15,
                outline: "none",
              }}
            />
            <kbd style={{
              display: "none",
              padding: "2px 8px",
              borderRadius: 6,
              background: "var(--bg-raised)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-tertiary)",
              fontSize: 11,
              fontFamily: "var(--font-mono)",
            }} className="md:block">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Recent + Popular suggestions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }} className="md:grid-cols-2">
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              {m.search.recent}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {["Elden Ring", "Stardew Valley", "Hades"].map((q) => (
                <button key={q} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 10px",
                  borderRadius: 8,
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  fontSize: 13,
                  cursor: "pointer",
                  textAlign: "left",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>
                  </svg>
                  {q}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              {m.search.popular}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["100% Completion", "Ultra Rare", "Easy First", "Speed Run", "No Death"].map((tag) => (
                <button key={tag} style={{
                  padding: "4px 12px",
                  borderRadius: 999,
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-elevated)",
                  color: "var(--text-secondary)",
                  fontSize: 12,
                  cursor: "pointer",
                }}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trending games */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>{m.search.trending}</div>
              <div style={{ fontSize: 12, color: "var(--text-tertiary)", marginTop: 2 }}>{m.search.trendingBody}</div>
            </div>
            <button style={{ fontSize: 12, color: "var(--accent)", background: "none", border: "none", cursor: "pointer" }}>
              {m.search.viewAll} →
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }} className="md:grid-cols-3">
            {data.trendingAchievements.slice(0, 6).map((item) => (
              <div key={item.title} style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 10,
                padding: "12px 14px",
                cursor: "pointer",
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Matching titles */}
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 14 }}>
            {m.search.matchingTitles}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }} className="md:grid-cols-4">
            {data.matchingTitles.map((game) => (
              <Link key={game.name} href={`/game/${game.name.toLowerCase().replace(/\s+/g, "-")}`} style={{
                display: "block",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 10,
                overflow: "hidden",
                textDecoration: "none",
              }}>
                <div style={{ height: 80 }} className={game.className} />
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {game.name}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{game.subtitle}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
