import type { MetadataRoute } from "next";

import { CURATED_GAMES } from "@/lib/content";
import { ARCHIVE_SLUGS } from "@/lib/data";
import snapshot from "@/lib/data/snapshot.json";

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
    { url: `${SITE_URL}/empty-lot`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  // `/search` is deliberately absent: its metadata sets `robots: index: false`,
  // so listing it would submit a page we ask not to be indexed.

  const gameRoutes: MetadataRoute.Sitemap = CURATED_GAMES.map((game) => ({
    url: `${SITE_URL}/game/${game.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const archiveRoutes: MetadataRoute.Sitemap = ARCHIVE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/archive/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  // The 863 achievement pages are the deepest content on the site and were
  // missing from the sitemap entirely. Built from the committed snapshot so
  // this route stays static and never depends on the database at build time.
  const slugByAppId = new Map(CURATED_GAMES.map((game) => [game.appId, game.slug]));
  const achievementRoutes: MetadataRoute.Sitemap = snapshot.achievements.flatMap(
    (achievement) => {
      const slug = slugByAppId.get(achievement.app_id);
      if (!slug) return [];
      return [
        {
          url: `${SITE_URL}/game/${slug}/achievement/${achievement.api_name.toLowerCase()}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        },
      ];
    },
  );

  return [...staticRoutes, ...gameRoutes, ...archiveRoutes, ...achievementRoutes];
}
