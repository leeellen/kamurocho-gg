"use client";

import { useMemo, useState } from "react";

type Ratio = "header" | "library" | "capsule" | "square";

const RATIO_PX: Record<Ratio, { w: number; h: number }> = {
  header:  { w: 460, h: 215 },
  library: { w: 460, h: 215 },
  capsule: { w: 231, h: 87 },
  square:  { w: 300, h: 300 },
};

function iconHashUrl(appId: number, raw?: string | null): string | null {
  if (!raw) return null;
  if (raw.startsWith("http")) return raw;
  if (/^[a-f0-9]{20,}$/i.test(raw)) {
    return `https://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${raw}.jpg`;
  }
  return null;
}

function candidateUrls(
  appId: number,
  ratio: Ratio,
  imgIconUrl?: string | null,
  headerUrl?: string | null,
  capsuleUrl?: string | null,
): string[] {
  const base = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}`;
  const iconUrl = iconHashUrl(appId, imgIconUrl);
  const stored = [headerUrl, capsuleUrl].filter((u): u is string => Boolean(u));

  switch (ratio) {
    case "library":
    case "header":
    default:
      return [
        ...stored,
        `${base}/header.jpg`,
        `${base}/library_hero.jpg`,
        `${base}/capsule_616x353.jpg`,
      ];
    case "capsule":
      return [
        `${base}/capsule_231x87.jpg`,
        ...stored,
        `${base}/header.jpg`,
        `${base}/library_hero.jpg`,
        ...(iconUrl ? [iconUrl] : []),
      ];
  }
}

export function GameCover({
  appId,
  ratio = "header",
  imgIconUrl,
  headerUrl,
  capsuleUrl,
  className,
  style,
}: {
  appId: number;
  ratio?: Ratio;
  imgIconUrl?: string | null;
  headerUrl?: string | null;
  capsuleUrl?: string | null;
  className?: string;
  style?: React.CSSProperties;
}) {
  const urls = useMemo(
    () => candidateUrls(appId, ratio, imgIconUrl, headerUrl, capsuleUrl),
    [appId, ratio, imgIconUrl, headerUrl, capsuleUrl],
  );
  const [idx, setIdx] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { w, h } = RATIO_PX[ratio];
  const fallbackClass = `cover-${appId % 20}`;

  if (idx >= urls.length) {
    return (
      <div
        className={`${fallbackClass}${className ? ` ${className}` : ""}`}
        style={{ width: "100%", aspectRatio: `${w} / ${h}`, ...style }}
      />
    );
  }

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: `${w} / ${h}`,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-elevated)",
        ...style,
      }}
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(90deg, var(--bg-elevated) 0%, var(--bg-base) 50%, var(--bg-elevated) 100%)`,
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
            zIndex: 1,
          }}
          aria-hidden="true"
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={urls[idx]}
        src={urls[idx]}
        alt=""
        onError={() => {
          setIdx((i) => i + 1);
          setIsLoaded(false);
        }}
        onLoad={() => setIsLoaded(true)}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          position: "relative",
          zIndex: 2,
        }}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
