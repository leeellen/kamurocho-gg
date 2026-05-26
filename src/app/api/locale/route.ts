import { NextResponse } from "next/server";

import { defaultLocale, type Locale } from "@/lib/i18n";

function resolveLocale(value: string | null): Locale {
  return value === "ko" || value === "en" ? value : defaultLocale;
}

// Constrain `redirect` to a same-origin pathname. `new URL("//evil.com", origin)`
// resolves to `https://evil.com` — bare scheme-relative URLs would otherwise let
// any caller forward the user off-site.
function safeRedirectPath(value: string | null): string {
  if (!value || typeof value !== "string") return "/";
  if (!value.startsWith("/")) return "/";
  if (value.startsWith("//") || value.startsWith("/\\")) return "/";
  return value;
}

// Legacy GET redirect kept for direct links / non-JS fallbacks.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const locale = resolveLocale(url.searchParams.get("locale"));
  const redirect = safeRedirectPath(url.searchParams.get("redirect"));

  const response = NextResponse.redirect(new URL(redirect, url.origin));
  response.cookies.set("kamurocho-locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

// Client-side fast path — sets the cookie without a redirect so the caller
// can router.refresh() in place. Avoids the second SSR round-trip used by GET.
export async function POST(request: Request) {
  let locale: Locale = defaultLocale;
  try {
    const body = (await request.json()) as { locale?: string };
    locale = resolveLocale(body.locale ?? null);
  } catch {
    locale = defaultLocale;
  }

  const response = NextResponse.json({ locale });
  response.cookies.set("kamurocho-locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}
