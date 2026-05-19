import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { getLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function NotFound() {
  const locale = await getLocale();
  return (
    <SiteShell locale={locale} section="home">
      <section className="mx-auto flex min-h-[60vh] max-w-[640px] flex-col items-center justify-center px-5 py-20 text-center md:px-8">
        <span className="font-mono text-[12px] uppercase tracking-wider text-[var(--accent)]">
          404
        </span>
        <h1 className="font-display m-0 mt-3 text-[48px] font-extrabold leading-tight tracking-tight text-white md:text-[64px]">
          {locale === "ko" ? "찾는 공략이 없어요" : "Guide not found"}
        </h1>
        <p className="mt-4 max-w-[48ch] text-[14px] leading-7 text-[var(--text-secondary)] md:text-[15px]">
          {locale === "ko"
            ? "주소가 바뀌었거나 아직 등록되지 않은 작품/업적입니다. 게임 목록이나 검색에서 다시 찾아보세요."
            : "The page you tried to reach moved, or that game/achievement isn't covered yet. Try the games index or search."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-[13px] font-bold text-white no-underline transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiHome size={14} aria-hidden="true" />
            {locale === "ko" ? "홈으로" : "Back home"}
          </Link>
          <Link
            href="/games"
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-5 text-[13px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiArrowLeft size={14} aria-hidden="true" />
            {locale === "ko" ? "작품 목록" : "Games"}
          </Link>
          <Link
            href="/search"
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-5 text-[13px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            {locale === "ko" ? "검색" : "Search"}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
