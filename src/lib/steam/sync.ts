export async function syncSteamLibrary(steamId: string) {
  return {
    steamId,
    queuedAt: new Date().toISOString(),
    status: "queued",
    note: "Implement owned games and achievement synchronization against your existing Supabase project.",
  };
}
