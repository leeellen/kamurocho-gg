import { ImageResponse } from "next/og";

import { getAchievementPageData } from "@/lib/kamurocho-data";

export const runtime = "nodejs";
export const alt = "kamurocho.gg achievement guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: { id: string; achievement: string };
}) {
  const data = await getAchievementPageData(params.id, params.achievement, "ko");
  if (!data) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#07070a",
            color: "#f5f5f7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            fontFamily: "Inter, sans-serif",
          }}
        >
          kamurocho.gg
        </div>
      ),
      { ...size },
    );
  }

  const ach = data.achievement;
  const summary = ach.guideSummary || ach.description || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            ach.missable
              ? "radial-gradient(900px 500px at 80% 0%, rgba(239,68,68,0.4), transparent 60%), #07070a"
              : "radial-gradient(900px 500px at 80% 0%, rgba(96,165,250,0.25), transparent 60%), #07070a",
          color: "#f5f5f7",
          fontFamily: "Inter, sans-serif",
          padding: 64,
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 900,
              color: "#fff",
            }}
          >
            K
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>
            kamurocho<span style={{ color: "#ef4444" }}>.gg</span>
          </span>
          <span style={{ fontSize: 16, color: "#76767e", marginLeft: 12 }}>
            / {data.game.name}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
          {ach.missable && (
            <span
              style={{
                background: "#ef4444",
                color: "#fff",
                fontSize: 14,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 2,
                padding: "8px 14px",
                borderRadius: 999,
              }}
            >
              놓치기 쉬움
            </span>
          )}
          {ach.chapter && (
            <span
              style={{
                background: "rgba(251,191,36,0.18)",
                color: "#fbbf24",
                fontSize: 14,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 2,
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid rgba(251,191,36,0.4)",
              }}
            >
              CH {ach.chapter}
            </span>
          )}
          <span style={{ fontSize: 16, color: "#a0a0a8" }}>
            전체 달성률 {ach.rarity.toFixed(1)}%
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              color: "#fff",
            }}
          >
            {ach.name}
          </span>
          {summary && (
            <span
              style={{
                fontSize: 22,
                color: "#b8b8c0",
                lineHeight: 1.5,
                marginTop: 8,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {summary}
            </span>
          )}
        </div>

        <div style={{ display: "flex", marginTop: "auto", color: "#76767e", fontSize: 18, justifyContent: "space-between" }}>
          <span>{data.game.name} · 단계별 공략</span>
          <span>kamurocho.gg</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
