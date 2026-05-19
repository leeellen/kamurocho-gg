import { NextResponse } from "next/server";

import { defaultLocale, type Locale } from "@/lib/i18n";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale");
  const redirect = url.searchParams.get("redirect") || "/";
  const safeLocale: Locale =
    locale === "ko" || locale === "en" ? locale : defaultLocale;

  const response = NextResponse.redirect(new URL(redirect, url.origin));
  response.cookies.set("kamurocho-locale", safeLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}
