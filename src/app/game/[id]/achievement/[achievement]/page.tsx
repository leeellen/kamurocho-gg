import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
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

  const layers = [
    {
      num: 1,
      color: "var(--l1)",
      bg: "var(--l1-tint)",
      border: "var(--l1-border)",
      title: m.ach.layer1Title,
      body: locale === "ko"
        ? `이 업적을 가진 플레이어의 ${achievement.rarity}%가 이미 달성했습니다.`
        : `${achievement.rarity}% of players have unlocked this achievement.`,
    },
    {
      num: 2,
      color: "var(--l2)",
      bg: "var(--l2-tint)",
      border: "var(--l2-border)",
      title: m.ach.layer2Title,
      body: achievement.guide?.content?.[0] ?? (locale === "ko" ? "AI 가이드 생성 중입니다." : "AI guide is being generated."),
    },
    {
      num: 3,
      color: "var(--l3)",
      bg: "var(--l3-tint)",
      border: "var(--l3-border)",
      title: locale === "ko" ? "커뮤니티 팁" : "Community tips",
      body: achievement.tips?.[0]?.body ?? (locale === "ko" ? "커뮤니티 팁이 없습니다." : "No community tips yet."),
    },
  ];

  return (
    <AppShell section="library" locale={locale} user={user}>
      <div style={{ padding: "20px 24px 100px", maxWidth: 760 }} className="md:px-[36px] md:pb-[40px]">

        {/* Back */}
        <Link href={`/game/${id}`} style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 13,
          color: "var(--text-secondary)",
          textDecoration: "none",
          marginBottom: 20,
        }}>
          ← {game.name}
        </Link>

        {/* Achievement header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "16px",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          borderRadius: 12,
          marginBottom: 20,
        }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: 10,
            background: achievement.unlocked ? "var(--l3-tint)" : "var(--bg-raised)",
            border: `1px solid ${achievement.unlocked ? "var(--l3-border)" : "var(--border-subtle)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            flexShrink: 0,
          }}>
            {achievement.unlocked ? "🏆" : "🔒"}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", margin: "0 0 4px" }}>
              {achievement.name}
            </h1>
            {achievement.description && (
              <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>
                {achievement.description}
              </p>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, flexShrink: 0 }}>
            <span style={{
              padding: "2px 8px",
              borderRadius: 999,
              background: achievement.unlocked ? "var(--l3-subtle)" : "var(--bg-raised)",
              border: `1px solid ${achievement.unlocked ? "var(--l3-border)" : "var(--border-subtle)"}`,
              color: achievement.unlocked ? "var(--l3)" : "var(--text-tertiary)",
              fontSize: 11,
              fontWeight: 700,
            }}>
              {achievement.unlocked ? m.ach.unlocked : m.ach.locked}
            </span>
            <span style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
              {achievement.rarity}%
            </span>
          </div>
        </div>

        {/* Meta row */}
        <div style={{
          display: "flex",
          gap: 16,
          marginBottom: 20,
          fontSize: 12,
          color: "var(--text-tertiary)",
        }}>
          <span>{achievement.difficulty}</span>
          <span>·</span>
          <span>{achievement.estimatedTime}</span>
          {achievement.unlockedAt && (
            <>
              <span>·</span>
              <span style={{ color: "var(--l3)" }}>{achievement.unlockedAt}</span>
            </>
          )}
        </div>

        {/* 3-Layer Guide */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: "var(--text-tertiary)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 10,
          }}>
            {m.ach.layer}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {layers.map((l) => (
              <div key={l.num} style={{
                background: l.bg,
                borderLeft: `2px solid ${l.color}`,
                padding: "14px 16px",
                borderRadius: "0 10px 10px 0",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "2px 8px",
                    borderRadius: 999,
                    background: l.bg,
                    border: `1px solid ${l.border}`,
                    color: l.color,
                    fontSize: 10,
                    fontWeight: 700,
                  }}>
                    L{l.num}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{l.title}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips (community) */}
        {achievement.tips && achievement.tips.length > 0 && (
          <div>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--text-tertiary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}>
              {m.gamehub.communityTips}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {achievement.tips.map((tip, i) => (
                <div key={i} style={{
                  padding: "12px 14px",
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 10,
                }}>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: "0 0 8px", lineHeight: 1.5 }}>
                    {tip.body}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--text-tertiary)" }}>
                    <span style={{
                      padding: "2px 8px",
                      borderRadius: 999,
                      background: "var(--l3-subtle)",
                      border: "1px solid var(--l3-border)",
                      color: "var(--l3)",
                      fontWeight: 600,
                    }}>
                      ▲ {tip.votes}
                    </span>
                    <span>{tip.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
