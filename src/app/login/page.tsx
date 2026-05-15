import Image from "next/image";
import Link from "next/link";
import { FaSteam } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { cn } from "@/lib/cn";
import { getLocale, getMessages } from "@/lib/i18n";

export const dynamic = "force-dynamic";

type LoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const STEAM_ERRORS: Record<string, { ko: string; en: string }> = {
  invalid:                      { ko: "Steam 인증 검증에 실패했습니다. 다시 시도해 주세요.", en: "Steam authentication verification failed. Please try again." },
  "missing-id":                 { ko: "Steam 계정 식별값을 가져오지 못했습니다.", en: "Steam account identifier was not returned." },
  "missing-steam-api-key":      { ko: "서버에 STEAM_API_KEY가 설정되어 있지 않습니다.", en: "STEAM_API_KEY is missing on the server." },
  "missing-supabase-service-key": { ko: "서버에 SUPABASE_SERVICE_ROLE_KEY가 설정되어 있지 않습니다.", en: "SUPABASE_SERVICE_ROLE_KEY is missing on the server." },
  "missing-supabase-url":       { ko: "서버에 NEXT_PUBLIC_SUPABASE_URL이 설정되어 있지 않습니다.", en: "NEXT_PUBLIC_SUPABASE_URL is missing on the server." },
  "missing-supabase-anon-key":  { ko: "서버에 NEXT_PUBLIC_SUPABASE_ANON_KEY가 설정되어 있지 않습니다.", en: "NEXT_PUBLIC_SUPABASE_ANON_KEY is missing on the server." },
  "missing-supabase-env":       { ko: "Supabase URL 또는 anon key가 설정되어 있지 않습니다.", en: "Supabase URL or anon key is missing on the server." },
  "auth-user-create-failed":    { ko: "Supabase Auth 사용자 생성에 실패했습니다.", en: "Failed to create the Supabase auth user." },
  "auth-user-lookup-failed":    { ko: "Supabase Auth 기존 사용자 조회에 실패했습니다.", en: "Failed to look up the existing Supabase auth user." },
  "auth-user-missing":          { ko: "Supabase Auth 사용자를 찾지 못했습니다.", en: "The Supabase auth user could not be found." },
  "auth-user-update-failed":    { ko: "Supabase Auth 사용자 갱신에 실패했습니다.", en: "Failed to update the Supabase auth user." },
  "magiclink-failed":           { ko: "Supabase 로그인 링크 생성에 실패했습니다.", en: "Failed to generate the Supabase login link." },
  "user-upsert-failed":         { ko: "프로필 정보를 저장하지 못했습니다.", en: "Failed to store the profile record." },
  "missing-auth-token":         { ko: "로그인 토큰이 없어 세션을 만들지 못했습니다.", en: "No auth token was returned for session creation." },
  "session-failed":             { ko: "Supabase 세션 생성에 실패했습니다.", en: "Failed to create the Supabase session." },
  "setup-required":             { ko: "로그인 설정이 아직 완전히 연결되지 않았습니다.", en: "The login setup is still incomplete." },
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const locale = await getLocale();
  const m = getMessages(locale);
  const resolved = (await searchParams) ?? {};
  const steamState = Array.isArray(resolved.steam) ? resolved.steam[0] : resolved.steam;
  const errorMsg = steamState ? STEAM_ERRORS[steamState]?.[locale] : undefined;

  const layers = [
    { num: 1, color: "var(--l1)", bg: "var(--l1-tint)", border: "var(--l1-border)", title: m.landing.l1Title, body: m.landing.l1Body },
    { num: 2, color: "var(--l2)", bg: "var(--l2-tint)", border: "var(--l2-border)", title: m.landing.l2Title, body: m.landing.l2Body },
    { num: 3, color: "var(--l3)", bg: "var(--l3-tint)", border: "var(--l3-border)", title: m.landing.l3Title, body: m.landing.l3Body },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Desktop */}
      <div className="hidden h-screen flex-col md:flex">
        <header className="flex items-center justify-between border-b border-[var(--border-subtle)] px-8 py-4">
          <Image src="/logo-unlokd.svg" alt="Unlokd" width={148} height={36} priority style={{ width: 148, height: "auto" }} />
          <LanguageSwitcher locale={locale} label={m.common.language} englishLabel="EN" koreanLabel="KO" />
        </header>

        <section className="grid flex-1 grid-cols-[1.1fr_1fr] items-center gap-12 overflow-auto px-14 py-12">
          <div className="flex max-w-[520px] flex-col">
            <h1 className="mb-4 text-[54px] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)]">
              {m.landing.heroLine1}<br />
              {m.landing.heroLine2}<br />
              <span className="text-[var(--accent)]">{m.landing.heroLine3}</span>
            </h1>
            <p className="mb-7 max-w-[460px] whitespace-pre-line text-base leading-relaxed text-[var(--text-secondary)]">
              {m.landing.sub}
            </p>

            {errorMsg && (
              <div className="mb-5 rounded-xl border border-[var(--danger)]/30 bg-[var(--danger-subtle)] px-4 py-3 text-sm text-[var(--danger)]">
                {errorMsg}
                {steamState && <div className="mt-1 font-mono text-[11px] opacity-70">code: {steamState}</div>}
              </div>
            )}

            <div className="mb-6 flex gap-2.5">
              <Button asChild variant="steam" size="lg">
                <Link href="/api/auth/steam" prefetch={false}>
                  <FaSteam size={18} /> {m.landing.signin}
                </Link>
              </Button>
            </div>

            <div className="flex gap-6 border-t border-[var(--border-subtle)] pt-4 text-xs text-[var(--text-tertiary)]">
              {[m.landing.proofA, m.landing.proofB, m.landing.proofC].map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3.5 self-center">
            <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
              {m.landing.tag3layer}
            </div>
            {layers.map((l) => (
              <div
                key={l.num}
                className="rounded-r-[10px] border px-4 py-3.5"
                style={{ background: l.bg, borderColor: l.border, borderLeft: `2px solid ${l.color}` }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span
                    className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold"
                    style={{ background: l.bg, borderColor: l.border, color: l.color }}
                  >
                    L{l.num}
                  </span>
                  <span className="text-[13px] font-semibold text-[var(--text-primary)]">{l.title}</span>
                </div>
                <p className="text-[13px] leading-snug text-[var(--text-secondary)]">{l.body}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex items-center justify-center gap-3 border-t border-[var(--border-subtle)] px-8 py-3.5 text-center text-[11px] text-[var(--text-tertiary)]">
          <span>{m.landing.disclaimer}</span>
          <a
            href="https://store.steampowered.com/subscriber_agreement/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[var(--text-tertiary)] underline decoration-[var(--text-tertiary)]/40 underline-offset-2 hover:text-[var(--text-secondary)]"
          >
            {locale === "ko" ? "Steam 가입자 동의서" : "Steam Subscriber Agreement"}
          </a>
        </footer>
      </div>

      {/* Mobile */}
      <div className="flex min-h-screen flex-col md:hidden">
        <div className="flex items-center justify-between px-5 pt-3.5">
          <Image src="/logo-unlokd.svg" alt="Unlokd" width={148} height={36} priority style={{ width: 148, height: "auto" }} />
          <LanguageSwitcher locale={locale} label={m.common.language} englishLabel="EN" koreanLabel="KO" />
        </div>

        <section className="px-5 pb-6 pt-10">
          <h1 className="mb-3.5 text-[32px] font-extrabold leading-tight tracking-tight text-[var(--text-primary)]">
            {m.landing.heroLine1}<br />
            {m.landing.heroLine2}{" "}
            <span className="whitespace-nowrap text-[var(--accent)]">{m.landing.heroLine3}</span>
          </h1>
          <p className="mb-7 whitespace-pre-line text-sm leading-relaxed text-[var(--text-secondary)]">
            {m.landing.sub}
          </p>

          {errorMsg && (
            <div className="mb-4 rounded-xl border border-[var(--danger)]/30 bg-[var(--danger-subtle)] px-3.5 py-2.5 text-sm text-[var(--danger)]">
              {errorMsg}
            </div>
          )}

          <Button asChild variant="steam" size="lg" className="w-full">
            <Link href="/api/auth/steam" prefetch={false}>
              <FaSteam size={18} /> {m.landing.signin}
            </Link>
          </Button>

          <div className="mt-6 flex justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3.5">
            {[m.landing.proofA, m.landing.proofB, m.landing.proofC].map((p, i) => (
              <div
                key={p}
                className={cn(
                  "flex-1 text-center text-[11px] leading-snug text-[var(--text-tertiary)]",
                  i < 2 && "border-r border-[var(--border-subtle)]",
                )}
              >
                {p}
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 pb-5 pt-2">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
            {m.landing.tag3layer}
          </div>
          <div className="flex flex-col gap-2">
            {layers.map((l) => (
              <div
                key={l.num}
                className="rounded-r-lg px-3.5 py-3"
                style={{ background: l.bg, borderLeft: `2px solid ${l.color}` }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-[10px] font-bold" style={{ color: l.color }}>
                    L{l.num}
                  </span>
                  <span className="text-[13px] font-semibold text-[var(--text-primary)]">{l.title}</span>
                </div>
                <p className="text-[13px] text-[var(--text-secondary)]">{l.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="px-5 pb-7 pt-4 text-center text-[10px] leading-snug text-[var(--text-tertiary)]">
          {m.landing.disclaimer}
        </div>
      </div>
    </main>
  );
}
