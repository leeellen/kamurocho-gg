import { ImageResponse } from "next/og";

import { getGamePageData } from "@/lib/kamurocho-data";

// Per-game Open Graph card. Pulls the curated metadata at request time so
// the social preview reflects the current game name, summary, and stats.

export const runtime = "nodejs";
export const alt = "kamurocho.gg game guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({ params }: { params: { id: string } }) {
  const data = await getGamePageData(params.id, "ko");
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

  const coveragePct = data.game.achievements
    ? Math.round((data.game.guideCoverage / data.game.achievements) * 100)
    : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "radial-gradient(700px 400px at 80% 0%, rgba(239,68,68,0.35), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(96,165,250,0.18), transparent 60%), #07070a",
          color: "#f5f5f7",
          fontFamily: "Inter, sans-serif",
          padding: 64,
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 900,
              color: "#fff",
            }}
          >
            K
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>
            kamurocho<span style={{ color: "#ef4444" }}>.gg</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
          <span style={{ fontSize: 18, color: "#ef4444", letterSpacing: 4, textTransform: "uppercase", fontWeight: 700 }}>
            {data.game.arc} · {data.game.year}
          </span>
          <span style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, letterSpacing: -2.5 }}>
            {data.game.name}
          </span>
          <span style={{ fontSize: 22, color: "#b8b8c0", lineHeight: 1.5, marginTop: 8 }}>
            {data.game.summary}
          </span>
        </div>

        <div style={{ display: "flex", gap: 32, marginTop: "auto", color: "#f5f5f7" }}>
          <Stat label="업적" value={String(data.game.achievements)} tone="#f5f5f7" />
          <Stat label="공략 커버리지" value={`${coveragePct}%`} tone="#ef4444" />
          <Stat label="놓침" value={String(data.game.missableCount)} tone="#fbbf24" />
          <Stat label="희귀" value={String(data.game.rareCount)} tone="#fbbf24" />
          <Stat label="분량" value={data.game.estimatedHours} tone="#f5f5f7" />
        </div>
      </div>
    ),
    { ...size },
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 14, color: "#76767e", letterSpacing: 2, textTransform: "uppercase" }}>{label}</span>
      <span style={{ fontSize: 44, fontWeight: 900, color: tone, lineHeight: 1 }}>{value}</span>
    </div>
  );
}
