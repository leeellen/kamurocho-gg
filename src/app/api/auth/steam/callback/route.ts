import { createHash } from "node:crypto";
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

import { getPlayerSummary } from "@/lib/steam/api";
import { createAdminClient } from "@/lib/supabase/admin";
import { extractSteamId, verifySteamAssertion } from "@/lib/steam/openid";

function redirectWithSteamError(origin: string, code: string) {
  return NextResponse.redirect(new URL(`/login?steam=${code}`, origin));
}

function isDuplicateUserError(error: { message?: string } | null) {
  const message = error?.message?.toLowerCase() ?? "";

  return [
    "already been registered",
    "already registered",
    "already exists",
    "duplicate",
    "email exists",
    "user already exists",
  ].some((fragment) => message.includes(fragment));
}

function getSyntheticEmail(steamId: string) {
  return `${steamId}@steam.unlokd.gg`;
}

function buildSteamPassword(steamId: string) {
  const secret = process.env.STEAM_AUTH_SHARED_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!secret) {
    throw new Error("Missing STEAM_AUTH_SHARED_SECRET or SUPABASE_SERVICE_ROLE_KEY.");
  }

  return `${createHash("sha256").update(`${steamId}:${secret}`).digest("hex")}Aa1!`;
}

function createResponseSupabaseClient(request: Request, response: NextResponse) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
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
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const valid = await verifySteamAssertion(url.searchParams);

  if (!valid) {
    return redirectWithSteamError(url.origin, "invalid");
  }

  const steamId = extractSteamId(url.searchParams.get("openid.claimed_id"));

  if (!steamId) {
    return redirectWithSteamError(url.origin, "missing-id");
  }

  try {
    const profile = await getPlayerSummary(steamId);
    const admin = createAdminClient();
    const syntheticEmail = getSyntheticEmail(steamId);
    const syntheticPassword = buildSteamPassword(steamId);
    const userMetadata = {
      steam_id: steamId,
      persona_name: profile?.personaname ?? null,
      avatar_url: profile?.avatarfull ?? null,
      profile_url: profile?.profileurl ?? null,
    };
    const response = NextResponse.redirect(new URL("/", url.origin));
    const supabase = createResponseSupabaseClient(request, response);
    const initialSignInResult = await supabase.auth.signInWithPassword({
      email: syntheticEmail,
      password: syntheticPassword,
    });

    let authUserId = initialSignInResult.data.user?.id ?? null;

    if (!initialSignInResult.error && authUserId) {
      const upsertResult = await admin.from("users").upsert(
        {
          id: authUserId,
          steam_id: steamId,
          persona_name: profile?.personaname,
          avatar_url: profile?.avatarfull,
          profile_url: profile?.profileurl,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "steam_id" },
      );

      if (upsertResult.error) {
        console.error("Steam callback user upsert failed after existing sign-in, continuing:", upsertResult.error);
      }

      return response;
    }

    const createUserResult = await admin.auth.admin.createUser({
      email: syntheticEmail,
      password: syntheticPassword,
      email_confirm: true,
      user_metadata: userMetadata,
    });

    if (createUserResult.error && !isDuplicateUserError(createUserResult.error)) {
      console.error("Steam callback createUser failed:", createUserResult.error);
      return redirectWithSteamError(url.origin, "auth-user-create-failed");
    }

    authUserId = createUserResult.data.user?.id ?? authUserId;

    if (!authUserId) {
      const { data: existingProfile } = await admin
        .from("users")
        .select("id")
        .eq("steam_id", steamId)
        .maybeSingle();

      authUserId = existingProfile?.id ?? null;
    }

    if (!authUserId) {
      return redirectWithSteamError(url.origin, "auth-user-missing");
    }

    const updateUserResult = await admin.auth.admin.updateUserById(authUserId, {
      password: syntheticPassword,
      email_confirm: true,
      user_metadata: userMetadata,
    });

    if (updateUserResult.error) {
      console.error("Steam callback updateUserById failed:", updateUserResult.error);
      return redirectWithSteamError(url.origin, "auth-user-update-failed");
    }

    const upsertResult = await admin.from("users").upsert(
      {
        id: authUserId,
        steam_id: steamId,
        persona_name: profile?.personaname,
        avatar_url: profile?.avatarfull,
        profile_url: profile?.profileurl,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "steam_id" },
    );

    if (upsertResult.error) {
      console.error("Steam callback user upsert failed, continuing with auth session:", upsertResult.error);
    }

    const finalSignInResult = await supabase.auth.signInWithPassword({
      email: syntheticEmail,
      password: syntheticPassword,
    });

    if (finalSignInResult.error) {
      console.error("Steam callback signInWithPassword failed:", finalSignInResult.error);
      return redirectWithSteamError(url.origin, "session-failed");
    }

    return response;
  } catch (error) {
    console.error("Steam callback failed:", error);
    const message = error instanceof Error ? error.message : "";

    if (message.includes("STEAM_API_KEY")) {
      return redirectWithSteamError(url.origin, "missing-steam-api-key");
    }

    if (message.includes("SUPABASE_SERVICE_ROLE_KEY")) {
      return redirectWithSteamError(url.origin, "missing-supabase-service-key");
    }

    if (message.includes("NEXT_PUBLIC_SUPABASE_URL")) {
      return redirectWithSteamError(url.origin, "missing-supabase-url");
    }

    if (message.includes("NEXT_PUBLIC_SUPABASE_ANON_KEY")) {
      return redirectWithSteamError(url.origin, "missing-supabase-anon-key");
    }

    if (message.includes("SUPABASE_SERVICE_ROLE_KEY")) {
      return redirectWithSteamError(url.origin, "missing-supabase-service-key");
    }

    return redirectWithSteamError(url.origin, "setup-required");
  }
}
