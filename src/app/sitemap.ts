import type { MetadataRoute } from "next";

import { CURATED_GAMES } from "@/lib/content";
import { getGamePageData } from "@/lib/data";

const SITE_URL = "https://kamurocho-gg.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/games`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/order`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/missables`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/search`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const gameRoutes: MetadataRoute.Sitemap = CURATED_GAMES.map((game) => ({
    url: `${SITE_URL}/game/${game.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Pull achievement detail URLs in parallel so the sitemap surfaces every
  // guide page to search engines, not just the top-level index.
  const achievementRoutes: MetadataRoute.Sitemap = [];
  await Promise.all(
    CURATED_GAMES.map(async (game) => {
      try {
        const data = await getGamePageData(game.slug, "en");
        if (!data) return;
        for (const ach of data.achievements) {
          achievementRoutes.push({
            url: `${SITE_URL}/game/${game.slug}/achievement/${ach.slug}`,
            lastModified: now,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          });
        }
      } catch {
        // Skip games whose page data fails to load at build time.
      }
    }),
  );

  return [...staticRoutes, ...gameRoutes, ...achievementRoutes];
}
