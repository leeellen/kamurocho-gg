import type { Metadata } from "next";
import Link from "next/link";
import { FiAlertTriangle, FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";

import { SiteShell } from "@/components/layout/site-shell";
import { Chip } from "@/components/ui/chip";
import { getLocale } from "@/lib/i18n";
import { getEmptyLotGuides } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isKo = locale === "ko";
  const title = isKo ? "한 평의 공터 — 지친 컴플리셔니스트의 지름길" : "The Empty Lot — the burned-out completionist's shortcut";
  const description = isKo
    ? "노가다에 지쳤는데 100% 업적은 갖고 싶다면. 작품별 외부 공략과 Steam 커뮤니티 100% 세이브 파일을 한자리에 모았습니다."
    : "Burned out on the grind but still want the 100%? Every game's external guide and the community 100% save files, gathered in one place.";
  return {
    title,
    description,
    // Keep the Easter-egg page out of search indexes.
    robots: { index: false, follow: true },
  };
}

const HAZARD =
  "repeating-linear-gradient(45deg, rgba(239,68,68,0.16) 0 14px, transparent 14px 28px)";

export default async function EmptyLotPage() {
  const locale = await getLocale();
  const guides = await getEmptyLotGuides(locale);
  const isKo = locale === "ko";

  const linkLabel = (kind: "steam" | "powerpyx") =>
    kind === "steam"
      ? isKo
        ? "Steam 커뮤니티 공략"
        : "Steam Community guide"
      : isKo
        ? "PowerPyx 트로피 가이드"
        : "PowerPyx trophy guide";

  return (
    <SiteShell locale={locale} section="empty-lot">
      <div className="mx-auto max-w-[1080px] px-5 pb-20 pt-12 md:px-8 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-[var(--text-tertiary)] no-underline transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
        >
          <FiArrowLeft size={13} aria-hidden="true" />
          {isKo ? "홈으로" : "Home"}
        </Link>

        {/* Danger-zone hero */}
        <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--accent-border)] bg-[var(--bg-surface)] p-6 md:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-2"
            style={{ background: HAZARD }}
          />
          <div className="flex flex-wrap items-center gap-2">
            <Chip tone="danger" size="sm">
              <FiAlertTriangle size={12} aria-hidden="true" />
              {isKo ? "시크릿 구역" : "Restricted area"}
            </Chip>
            <span className="font-mono text-[16px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              {isKo ? "공터 · 카무로초" : "EMPTY LOT · KAMUROCHO"}
            </span>
          </div>
          <h1 className="font-display m-0 mt-4 text-[34px] font-extrabold leading-tight tracking-tight text-white md:text-[44px]">
            {isKo ? "한 평의 공터" : "The Empty Lot"}
          </h1>
          <p className="m-0 mt-3 max-w-[68ch] text-[18px] font-semibold leading-7 text-white">
            {isKo
              ? "노가다는 너무 스트레스인데, 그래도 100% 업적은 갖고 싶다면."
              : "Too burned out to grind — but you still want that 100%?"}
          </p>
          <p className="m-0 mt-3 max-w-[68ch] text-[17px] leading-7 text-[var(--text-secondary)]">
            {isKo
              ? "용과 같이 0에서 카무로초 전체가 가장 많이 다투던 빈 땅. 여긴 지름길입니다. 작품별 외부 공략은 물론, Steam 커뮤니티에 올라온 100% 세이브 파일까지 바로 안내합니다. 마작 4000점도, 당구 캐롬도 건너뛰고 싶은 날을 위해서요."
              : "The patch of dirt all of Kamurocho fought over in Yakuza 0 — and the shortcut. Alongside each title's external walkthrough, this lot points you straight to the community 100% save files. For the days you just can't face mahjong yaku or carom shots one more time."}
          </p>
          <p className="m-0 mt-3 max-w-[68ch] text-[15px] leading-6 text-[var(--text-muted)]">
            {isKo
              ? "세이브 파일은 모두 싱글플레이어용이고 본인 계정·본인 게임에만 적용됩니다. 다운로드 전 기존 세이브는 꼭 백업하세요. 직접 깨는 재미가 그리우면 언제든 위 공략으로 돌아오면 됩니다."
              : "These saves are single-player only and apply to your own account and copy. Back up your existing save before swapping. And if you miss earning it yourself, the guides above are always here."}
          </p>
        </section>

        {/* Per-game external guide links */}
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {guides.map((game) => (
            <li
              key={game.slug}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[16px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
                  {game.year}
                </span>
                <Link
                  href={`/game/${game.slug}`}
                  className="font-display text-[17px] font-bold text-white no-underline transition-colors hover:text-[var(--accent)]"
                >
                  {game.name}
                </Link>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {game.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-white/5 px-3 py-2 text-[15px] font-semibold text-[var(--text-secondary)] no-underline transition-colors hover:border-[var(--accent-border)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                  >
                    <FiExternalLink size={13} aria-hidden="true" />
                    {linkLabel(link.kind)}
                  </a>
                ))}
                {game.save && (
                  <a
                    href={game.save.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={
                      game.save.source === "steam"
                        ? isKo
                          ? "Steam 커뮤니티 100% 세이브 파일 가이드"
                          : "Steam Community 100% save-file guide"
                        : isKo
                          ? "Nexus Mods 100% 세이브 파일"
                          : "Nexus Mods 100% save file"
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--accent-border)] bg-[var(--danger-bg)] px-3 py-2 text-[15px] font-semibold text-[var(--danger-text)] no-underline transition-colors hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
                  >
                    <FiDownload size={13} aria-hidden="true" />
                    {isKo
                      ? `100% 세이브 파일 (${game.save.source === "steam" ? "Steam" : "Nexus"})`
                      : `100% save file (${game.save.source === "steam" ? "Steam" : "Nexus"})`}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[15px] leading-6 text-[var(--text-muted)]">
          {isKo
            ? "외부 링크는 각 커뮤니티/제작자의 자료로 연결됩니다. kamurocho.gg는 이 자료들과 무관하며, 사이트 내 가이드는 이들을 교차 참조해 작성했습니다."
            : "External links point to each community's or author's own work. kamurocho.gg isn't affiliated with them; the on-site guides cross-reference these sources."}
        </p>
      </div>
    </SiteShell>
  );
}
