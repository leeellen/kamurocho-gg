import Link from "next/link";
import { FiArrowLeft, FiCompass, FiSearch } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getLocale } from "@/lib/i18n";

export default async function NotFoundPage() {
  const locale = await getLocale();
  const isKo = locale === "ko";

  return (
    <SiteShell locale={locale} section="home">
      <div className="mx-auto flex max-w-[640px] flex-col items-center px-5 pb-24 pt-24 text-center md:px-8 md:pt-32">
        <Eyebrow locale={locale} tracking="0.2em">404</Eyebrow>
        <h1 className="font-display m-0 mt-3 text-[36px] font-extrabold leading-tight tracking-tight text-white md:text-[48px]">
          {isKo ? "찾으시는 페이지가 없어요" : "Page not found"}
        </h1>
        <p className="m-0 mt-4 max-w-[52ch] text-[14px] leading-7 text-[var(--text-secondary)]">
          {isKo
            ? "주소가 잘못됐거나 페이지가 옮겨졌을 수 있어요. 아래에서 다른 길로 이동해 보세요."
            : "The URL might be off, or the page may have moved. Try one of these instead."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-[14px] font-bold text-white no-underline transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiArrowLeft size={14} aria-hidden="true" />
            {isKo ? "홈으로" : "Home"}
          </Link>
          <Link
            href="/games"
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-5 text-[14px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiCompass size={14} aria-hidden="true" />
            {isKo ? "작품 목록" : "All games"}
          </Link>
          <Link
            href="/search"
            className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/5 px-5 text-[14px] font-semibold text-white no-underline transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
          >
            <FiSearch size={14} aria-hidden="true" />
            {isKo ? "검색" : "Search"}
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
