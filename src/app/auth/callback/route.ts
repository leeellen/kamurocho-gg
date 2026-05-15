import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const tokenHash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type");
  const next = requestUrl.searchParams.get("next") || "/";

  const response = NextResponse.redirect(new URL(next, requestUrl.origin));
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.redirect(new URL("/login?steam=missing-supabase-env", requestUrl.origin));
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        const cookieHeader = request.headers.get("cookie") || "";
        return cookieHeader
          .split(/;\s*/)
          .filter(Boolean)
          .map((chunk) => {
            const index = chunk.indexOf("=");
            const name = index >= 0 ? chunk.slice(0, index) : chunk;
            const value = index >= 0 ? chunk.slice(index + 1) : "";
            return { name, value: decodeURIComponent(value) };
          });
      },
      setAll(cookiesToSet) {
        for (const cookie of cookiesToSet) {
          response.cookies.set(cookie);
        }
      },
    },
  });

  let error: Error | null = null;

  if (tokenHash && type) {
    const result = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: type as "magiclink" | "signup" | "invite" | "recovery" | "email" | "email_change",
    });
    error = result.error;
  } else if (code) {
    const result = await supabase.auth.exchangeCodeForSession(code);
    error = result.error;
  } else {
    return NextResponse.redirect(new URL("/login?steam=missing-auth-token", requestUrl.origin));
  }

  if (error) {
    console.error("Supabase auth callback failed:", error);
    return NextResponse.redirect(new URL("/login?steam=session-failed", requestUrl.origin));
  }

  return response;
}
