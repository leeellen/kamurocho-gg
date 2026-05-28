const STEAM_OPENID_ENDPOINT = 'https://steamcommunity.com/openid/login'

function resolveOrigin(origin?: string): string {
  // Always prefer the caller-provided origin (built from forwarded headers
  // by the route). Falling back to NEXTAUTH_URL is a footgun in production
  // because a stale value silently breaks OpenID realm verification.
  if (origin) return origin
  const env = process.env.NEXTAUTH_URL
  if (env) return env
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Steam OpenID flow: caller must pass the browser-facing origin (no NEXTAUTH_URL fallback in production).')
  }
  return 'http://localhost:3001'
}

function expectedCallback(origin: string): string {
  return new URL('/api/auth/steam/callback', origin).toString()
}

export function buildSteamOpenIdUrl(origin?: string) {
  const resolvedOrigin = resolveOrigin(origin)
  const callback = expectedCallback(resolvedOrigin)
  const params = new URLSearchParams({
    'openid.ns': 'http://specs.openid.net/auth/2.0',
    'openid.mode': 'checkid_setup',
    'openid.return_to': callback,
    'openid.realm': resolvedOrigin,
    'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
    'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
  })

  return `${STEAM_OPENID_ENDPOINT}?${params.toString()}`
}

export function extractSteamId(claimedId?: string | null) {
  if (!claimedId) {
    return null
  }

  const match = claimedId.match(/\/id\/(\d+)$/)
  return match?.[1] ?? null
}

function normalizeUrl(value: string): string {
  try {
    return new URL(value).toString()
  } catch {
    return value
  }
}

function normalizeOrigin(value: string): string {
  try {
    return new URL(value).origin
  } catch {
    return value
  }
}

export async function verifySteamAssertion(
  searchParams: URLSearchParams,
  expectedOrigin: string,
): Promise<boolean> {
  // Validate return_to / realm match our origin BEFORE asking Steam to verify.
  // Steam echoes back the same return_to/realm the client originally sent, so an
  // attacker can craft a response targeting a different origin if we skip this.
  const returnTo = searchParams.get('openid.return_to')
  const realm = searchParams.get('openid.realm')
  if (!returnTo || !realm) return false

  const expectedReturn = expectedCallback(expectedOrigin)
  if (normalizeUrl(returnTo) !== normalizeUrl(expectedReturn)) return false
  if (normalizeOrigin(realm) !== normalizeOrigin(expectedOrigin)) return false

  const payload = new URLSearchParams(searchParams)
  payload.set('openid.mode', 'check_authentication')

  const response = await fetch(STEAM_OPENID_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: payload.toString(),
  })

  const body = await response.text()
  // Steam returns key-value lines: `ns:...\nis_valid:true\n`. Exact line match
  // prevents bypass via `is_valid:true` appearing inside another field's value.
  return body.split(/\r?\n/).some((line) => line.trim() === 'is_valid:true')
}
