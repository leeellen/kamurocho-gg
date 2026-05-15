const STEAM_OPENID_ENDPOINT = "https://steamcommunity.com/openid/login";

export function buildSteamOpenIdUrl() {
  const origin = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
  const callback = new URL("/api/auth/steam/callback", origin);
  const params = new URLSearchParams({
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.mode": "checkid_setup",
    "openid.return_to": callback.toString(),
    "openid.realm": origin,
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
  });

  return `${STEAM_OPENID_ENDPOINT}?${params.toString()}`;
}

export function extractSteamId(claimedId?: string | null) {
  if (!claimedId) {
    return null;
  }

  const match = claimedId.match(/\/id\/(\d+)$/);
  return match?.[1] ?? null;
}

export async function verifySteamAssertion(searchParams: URLSearchParams) {
  const payload = new URLSearchParams(searchParams);
  payload.set("openid.mode", "check_authentication");

  const response = await fetch(STEAM_OPENID_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: payload.toString(),
  });

  const body = await response.text();
  return body.includes("is_valid:true");
}
