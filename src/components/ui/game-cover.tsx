"use client";

import { useMemo, useState } from "react";

type Ratio = "header" | "library" | "capsule" | "square";

// All non-capsule slots render landscape header (460:215 = Steam's universal asset).
// Portrait library_600x900 is missing for many newer/regional games and creates inconsistent grids.
const RATIO_PX: Record<Ratio, { w: number; h: number }> = {
  header:  { w: 460, h: 215 },
  library: { w: 460, h: 215 },
  capsule: { w: 231, h: 87 },
  square:  { w: 300, h: 300 },
};

function iconHashUrl(appId: number, raw?: string | null): string | null {
  if (!raw) return null;
  // Some DB rows store a full URL, others store the Steam image hash.
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
  // Stored URLs from Store API (resolve hash-path assets for newer/regional apps)
  const stored = [headerUrl, capsuleUrl].filter((u): u is string => Boolean(u));

  // Stored URLs come from Steam Store API and are confirmed to load. Try them FIRST
  // so games whose standard CDN paths return 404 (newer/regional apps) render cleanly
  // without an initial broken-image flash. Fall back to standard paths only if missing.
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
  // Canonical React "reset state on prop change" pattern — see
  // https://react.dev/reference/react/useState#storing-information-from-previous-renders.
  // Render-phase setState here is intentional; React reruns immediately without commit.
  const [idx, setIdx] = useState(0);
  const [prevUrls, setPrevUrls] = useState(urls);
  if (prevUrls !== urls) {
    setPrevUrls(urls);
    setIdx(0);
  }
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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={urls[idx]}
      alt=""
      onError={() => setIdx((i) => i + 1)}
      className={className}
      style={{
        width: "100%",
        aspectRatio: `${w} / ${h}`,
        objectFit: "cover",
        display: "block",
        ...style,
      }}
    />
  );
}
