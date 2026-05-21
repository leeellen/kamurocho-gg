import { getLocale } from "@/lib/i18n";

// Lightweight skeleton shown while Supabase data resolves on first paint.
// Mirrors the dark chrome of SiteShell without depending on its async user
// fetch, so it can render instantly before the real layout swaps in.
export default async function GlobalLoading() {
  const locale = await getLocale();
  const isKo = locale === "ko";

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)]">
      <header className="sticky top-0 z-50 border-b border-[var(--chrome-line)] bg-[var(--chrome-top)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-5 py-3 md:px-8">
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[15px] font-extrabold tracking-tight text-white">
              kamurocho<span className="text-[var(--accent)]">.gg</span>
            </span>
            <span className="font-mono text-[14px] uppercase tracking-[0.16em] text-[var(--chrome-muted)]">
              {isKo ? "RGG 시리즈 공략" : "RGG Steam Guides"}
            </span>
          </div>
          <div className="ml-auto inline-flex items-center gap-2">
            <span className="h-9 w-24 animate-pulse rounded-full bg-white/5" />
            <span className="h-9 w-28 animate-pulse rounded-full bg-white/5" />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1280px] px-5 pb-20 pt-12 md:px-8">
        <div className="flex flex-col gap-4">
          <div className="h-3 w-20 animate-pulse rounded-full bg-white/5" />
          <div className="h-10 w-3/4 max-w-[480px] animate-pulse rounded-md bg-white/5" />
          <div className="h-4 w-2/3 max-w-[600px] animate-pulse rounded-md bg-white/5" />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[260px] animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]"
              />
            ))}
          </div>
        </div>
        <span className="sr-only" role="status" aria-live="polite">
          {isKo ? "공략 데이터를 불러오는 중입니다." : "Loading guide data."}
        </span>
      </main>
    </div>
  );
}
