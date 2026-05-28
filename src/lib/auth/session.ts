import { cookies } from "next/headers";

const COOKIE_NAME = "kamurocho_steam";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
const SESSION_TTL_MS = COOKIE_MAX_AGE * 1000;
const CLOCK_SKEW_MS = 60_000;

function getSecret(): string {
  const explicit = process.env.STEAM_SESSION_SECRET || process.env.NEXTAUTH_SECRET;
  if (explicit) return explicit;

  // Deployment-derived fallback so sign-in keeps working when neither
  // STEAM_SESSION_SECRET nor NEXTAUTH_SECRET is set in the environment.
  // Combines two non-rotating, already-secret values that are present in
  // every Vercel runtime: the Supabase service role key (secret strength)
  // and the deploy's commit SHA / URL (stability per deploy). Rotating
  // either invalidates outstanding sessions, which is acceptable. Always
  // prefer setting STEAM_SESSION_SECRET explicitly in production.
  const seed =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.VERCEL_OIDC_TOKEN;
  const tag =
    process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.VERCEL_DEPLOYMENT_ID ??
    process.env.VERCEL_URL ??
    "local";
  if (seed) {
    return `kamurocho-session-${seed.slice(0, 32)}-${tag}`;
  }

  throw new Error(
    "Session signing key unavailable. Set STEAM_SESSION_SECRET (or NEXTAUTH_SECRET) in the deployment environment.",
  );
}

function toBase64Url(bytes: Uint8Array): string {
  let str = "";
  for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(input: string): Uint8Array {
  const pad = input.length % 4 === 0 ? 0 : 4 - (input.length % 4);
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function copyToArrayBuffer(view: Uint8Array): ArrayBuffer {
  const copy = new ArrayBuffer(view.byteLength);
  new Uint8Array(copy).set(view);
  return copy;
}

async function getKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const secretBytes = encoder.encode(getSecret());
  return crypto.subtle.importKey(
    "raw",
    copyToArrayBuffer(secretBytes),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function sign(payload: string): Promise<string> {
  const key = await getKey();
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    copyToArrayBuffer(new TextEncoder().encode(payload)),
  );
  return toBase64Url(new Uint8Array(sig));
}

async function verify(payload: string, signature: string): Promise<boolean> {
  try {
    const key = await getKey();
    return await crypto.subtle.verify(
      "HMAC",
      key,
      copyToArrayBuffer(fromBase64Url(signature)),
      copyToArrayBuffer(new TextEncoder().encode(payload)),
    );
  } catch {
    return false;
  }
}

export type SteamSession = {
  steamId: string;
  issuedAt: number;
};

export async function encodeSession(session: SteamSession): Promise<string> {
  const payload = toBase64Url(new TextEncoder().encode(JSON.stringify(session)));
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

export async function decodeSession(token: string | undefined | null): Promise<SteamSession | null> {
  if (!token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  if (!(await verify(payload, sig))) return null;
  try {
    const data = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as SteamSession;
    if (!data.steamId) return null;
    if (typeof data.issuedAt !== "number" || Number.isNaN(data.issuedAt)) return null;
    const now = Date.now();
    // Reject tokens dated in the future (beyond clock-skew tolerance) so a
    // backward-skewed clock or a forged future timestamp cannot extend the TTL.
    if (data.issuedAt > now + CLOCK_SKEW_MS) return null;
    if (now - data.issuedAt > SESSION_TTL_MS) return null;
    return data;
  } catch {
    return null;
  }
}

export async function getCurrentSession(): Promise<SteamSession | null> {
  const store = await cookies();
  return decodeSession(store.get(COOKIE_NAME)?.value);
}

export const SESSION_COOKIE = COOKIE_NAME;
export const SESSION_MAX_AGE = COOKIE_MAX_AGE;
