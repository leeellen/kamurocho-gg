import { ImageResponse } from "next/og";

// Site-wide default Open Graph image. Next.js picks this file up for every
// route that does not declare its own opengraph-image. Generated at request
// time using the next/og runtime so we can render real typography instead of
// shipping a static PNG.

export const runtime = "edge";
export const alt = "kamurocho.gg — RGG 스튜디오 스팀 공략";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(239,68,68,0.35), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(96,165,250,0.18), transparent 60%), #07070a",
          color: "#f5f5f7",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 900,
              color: "#fff",
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>
              kamurocho<span style={{ color: "#ef4444" }}>.gg</span>
            </span>
            <span style={{ fontSize: 14, color: "#a0a0a8", letterSpacing: 2, textTransform: "uppercase" }}>
              RGG Steam Guides
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 18, color: "#ef4444", letterSpacing: 4, textTransform: "uppercase", fontWeight: 700 }}>
            RGG Studio · Steam guides
          </span>
          <span style={{ fontSize: 80, fontWeight: 900, lineHeight: 1, letterSpacing: -3, color: "#fff" }}>
            시리즈 전체를
          </span>
          <span style={{ fontSize: 80, fontWeight: 900, lineHeight: 1, letterSpacing: -3, color: "#fff" }}>
            <span style={{ color: "#ef4444" }}>한곳에서</span> 공략하세요.
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#76767e", fontSize: 18 }}>
          <span>용과 같이 · 이치반 · 저지먼트 시리즈 공략·놓침 주의·희귀 업적</span>
          <span>kamurocho.gg</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
