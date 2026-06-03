import type { MetadataRoute } from "next";

import { CURATED_GAMES } from "@/lib/content";

export const dynamic = "force-static";

const SITE_URL = "https://kamurocho-gg.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/games`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/order`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/missables`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/sources`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const gameRoutes: MetadataRoute.Sitemap = CURATED_GAMES.map((game) => ({
    url: `${SITE_URL}/game/${game.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...gameRoutes];
}
