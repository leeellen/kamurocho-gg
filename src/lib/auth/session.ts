import { cookies } from "next/headers";

const COOKIE_NAME = "kamurocho_steam";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
const SESSION_TTL_MS = COOKIE_MAX_AGE * 1000;

function getSecret(): string {
  const secret = process.env.STEAM_SESSION_SECRET || process.env.NEXTAUTH_SECRET;
  if (!secret) {
    throw new Error("Missing STEAM_SESSION_SECRET (or NEXTAUTH_SECRET) for session signing.");
  }
  return secret;
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
    if (Date.now() - data.issuedAt > SESSION_TTL_MS) return null;
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
