const STEAM_API_ROOT = "https://api.steampowered.com";

function getSteamApiKey() {
  const key = process.env.STEAM_API_KEY;

  if (!key) {
    throw new Error("Missing STEAM_API_KEY.");
  }

  return key;
}

export async function getPlayerSummary(steamId: string) {
  const url = new URL("/ISteamUser/GetPlayerSummaries/v0002/", STEAM_API_ROOT);
  url.searchParams.set("key", getSteamApiKey());
  url.searchParams.set("steamids", steamId);

  const response = await fetch(url, { next: { revalidate: 3600 } });

  if (!response.ok) {
    throw new Error("Failed to fetch player summary from Steam.");
  }

  const payload = (await response.json()) as {
    response?: { players?: Array<Record<string, unknown>> };
  };

  return payload.response?.players?.[0] ?? null;
}

export async function getSteamLevel(steamId: string): Promise<number | null> {
  try {
    const url = new URL("/IPlayerService/GetSteamLevel/v1/", STEAM_API_ROOT);
    url.searchParams.set("key", getSteamApiKey());
    url.searchParams.set("steamid", steamId);
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = (await res.json()) as { response?: { player_level?: number } };
    return json.response?.player_level ?? null;
  } catch {
    return null;
  }
}

export async function getPlayerJoinTimestamp(steamId: string): Promise<number | null> {
  try {
    const summary = await getPlayerSummary(steamId);
    const ts = summary?.timecreated;
    return typeof ts === "number" ? ts : null;
  } catch {
    return null;
  }
}
