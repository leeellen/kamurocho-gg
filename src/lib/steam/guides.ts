import { cache } from "react";

const STEAM_API_ROOT = "https://api.steampowered.com";

function getKey() {
  const k = process.env.STEAM_API_KEY;
  if (!k) throw new Error("Missing STEAM_API_KEY.");
  return k;
}

export type SteamCommunityGuide = {
  publishedFileId: string;
  title: string;
  url: string;
  shortDescription?: string;
  viewCount?: number;
  voteScore?: number;
};

type RawFile = {
  publishedfileid?: string;
  title?: string;
  short_description?: string;
  views?: number;
  vote_data?: { score?: number };
};

export const getTopCommunityGuides = cache(
  async (appId: number, limit: number = 6): Promise<SteamCommunityGuide[]> => {
    try {
      const params = new URLSearchParams({
        key: getKey(),
        query_type: "9",      // most popular all-time
        numperpage: String(Math.min(20, Math.max(1, limit))),
        appid: String(appId),
        filetype: "10",        // integrated community guide
        return_short_description: "true",
        return_vote_data: "true",
        format: "json",
      });
      const url = `${STEAM_API_ROOT}/IPublishedFileService/QueryFiles/v1/?${params.toString()}`;
      const res = await fetch(url, {
        cache: "force-cache",
        next: { revalidate: 60 * 60 * 6 }, // 6h
      });
      if (!res.ok) return [];
      const payload = (await res.json()) as {
        response?: { publishedfiledetails?: RawFile[] };
      };
      const files = payload.response?.publishedfiledetails ?? [];
      return files
        .filter((f) => f.publishedfileid && f.title)
        .map((f) => ({
          publishedFileId: f.publishedfileid as string,
          title: (f.title as string).trim(),
          url: `https://steamcommunity.com/sharedfiles/filedetails/?id=${f.publishedfileid}`,
          shortDescription: f.short_description?.trim() || undefined,
          viewCount: typeof f.views === "number" ? f.views : undefined,
          voteScore: f.vote_data?.score,
        }))
        .slice(0, limit);
    } catch {
      return [];
    }
  },
);
