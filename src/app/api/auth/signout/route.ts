import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export const dynamic = "force-dynamic";

async function handleSignOut(request: Request) {
  const url = new URL(request.url);
  const response = NextResponse.redirect(new URL("/login", url.origin));
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) return response;

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        const header = request.headers.get("cookie") || "";
        return header
          .split(/;\s*/)
          .filter(Boolean)
          .map((chunk) => {
            const i = chunk.indexOf("=");
            const name = i >= 0 ? chunk.slice(0, i) : chunk;
            const value = i >= 0 ? chunk.slice(i + 1) : "";
            return { name, value: decodeURIComponent(value) };
          });
      },
      setAll(cookies) {
        for (const c of cookies) response.cookies.set(c);
      },
    },
  });

  try {
    await supabase.auth.signOut();
  } catch (err) {
    console.error("Sign out failed:", err);
  }
  return response;
}

export async function POST(request: Request) {
  return handleSignOut(request);
}

export async function GET(request: Request) {
  return handleSignOut(request);
}
