import Link from "next/link";
import { FiArrowRight, FiMapPin, FiPlayCircle } from "react-icons/fi";

import { Chip } from "@/components/ui/chip";
import type { Locale } from "@/lib/i18n";
import type { Minigame, MinigamesData } from "@/lib/minigames";

function pick(value: { ko: string; en: string }, locale: Locale): string {
  return locale === "ko" ? value.ko : value.en;
}

/** Convert a YouTube watch/share/shorts URL to a privacy-enhanced embed URL. */
function toYouTubeEmbed(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/embed\/)([\w-]{11})/,
  );
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null;
}

function DifficultyPips({ value, locale }: { value: number; locale: Locale }) {
  const label = locale === "ko" ? "난이도" : "Difficulty";
  return (
    <span className="inline-flex items-center gap-1.5" title={`${label} ${value}/5`}>
      <span className="font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--text-tertiary)]">
        {label}
      </span>
      <span aria-hidden="true" className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i < value ? "bg-[var(--accent)]" : "bg-white/15"}`}
          />
        ))}
      </span>
    </span>
  );
}

function MinigameCard({
  game,
  gameSlug,
  locale,
}: {
  game: Minigame;
  gameSlug: string;
  locale: Locale;
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Chip tone="accent" size="xs">{pick(game.category, locale)}</Chip>
          </div>
          <h3 className="font-display m-0 mt-2 text-[20px] font-extrabold tracking-tight text-white md:text-[22px]">
            {pick(game.name, locale)}
          </h3>
        </div>
        <DifficultyPips value={game.difficulty} locale={locale} />
      </div>

      <div className="mt-2 inline-flex items-center gap-1.5 text-[15px] text-[var(--text-tertiary)]">
        <FiMapPin size={12} aria-hidden="true" className="shrink-0" />
        {pick(game.location, locale)}
      </div>

      <p className="m-0 mt-3 text-[16px] leading-7 text-[var(--text-secondary)]">
        {pick(game.summary, locale)}
      </p>

      <ul className="mt-4 flex flex-col gap-2" role="list">
        {game.howTo.map((tip, index) => (
          <li key={index} className="flex gap-3 text-[16px] leading-7 text-[var(--text-secondary)]">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{pick(tip, locale)}</span>
          </li>
        ))}
      </ul>

      {game.courses && game.courses.length > 0 && (
        <details className="group mt-4 rounded-xl border border-[var(--border-subtle)]">
          <summary className="cursor-pointer list-none rounded-xl px-4 py-3 text-[16px] font-semibold text-[var(--text-secondary)] hover:text-white">
            {locale === "ko" ? "코스별 투구 순서표 보기" : "Show course-by-course pitch order"}
            <span aria-hidden="true" className="ml-1.5 inline-block transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="flex flex-col gap-5 border-t border-[var(--border-subtle)] px-4 pb-4 pt-4">
            <p className="m-0 text-[15px] leading-6 text-[var(--text-tertiary)]">
              {locale === "ko"
                ? "위치는 넘버패드 배열입니다: 7 8 9 / 4 5 6 / 1 2 3 (타자 시점 좌상단=7). 위치 칸이 빈 구질은 그 코스가 자유 조준이라 정해진 착탄점이 없다는 뜻입니다."
                : "Positions use a numpad layout: 7 8 9 / 4 5 6 / 1 2 3 (top-left = 7, batter's view). A blank position means that course is free-aim — pitch type/speed is fixed but the landing zone is the player's choice."}
            </p>
            {game.courses.map((course, ci) => (
              <div key={ci} className="overflow-x-auto">
                <div className="mb-2 text-[16px] font-bold text-white">{pick(course.title, locale)}</div>
                {course.note && (
                  <div className="mb-2 text-[15px] leading-6 text-[var(--text-tertiary)]">{pick(course.note, locale)}</div>
                )}
                {course.pitches && course.pitches.length > 0 && (
                  <table className="w-max min-w-full border-collapse text-[15px]">
                    <thead>
                      <tr className="text-[var(--text-tertiary)]">
                        <th className="border-b border-[var(--border-subtle)] px-2.5 py-1.5 text-left font-mono">#</th>
                        {course.pitches.map((_, i) => (
                          <th key={i} className="border-b border-[var(--border-subtle)] px-2.5 py-1.5 text-left font-mono">
                            {i + 1}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2.5 py-1.5 font-mono text-[var(--text-tertiary)]">
                          {locale === "ko" ? "위치" : "Pos"}
                        </td>
                        {course.pitches.map((p, i) => (
                          <td key={i} className="px-2.5 py-1.5 font-mono font-bold text-[var(--accent)]">
                            {p.pos ?? "–"}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-2.5 py-1.5 font-mono text-[var(--text-tertiary)]">
                          {locale === "ko" ? "구질" : "Type"}
                        </td>
                        {course.pitches.map((p, i) => (
                          <td key={i} className="whitespace-nowrap px-2.5 py-1.5 text-[var(--text-secondary)]">
                            {p.type}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-2.5 py-1.5 font-mono text-[var(--text-tertiary)]">
                          {locale === "ko" ? "구속" : "Speed"}
                        </td>
                        {course.pitches.map((p, i) => (
                          <td key={i} className="whitespace-nowrap px-2.5 py-1.5 text-[var(--text-secondary)]">
                            {p.speed ?? "–"}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
        </details>
      )}

      {game.source && (
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[var(--text-tertiary)]">
          <span>{locale === "ko" ? "출처" : "Source"}</span>
          {(Array.isArray(game.source) ? game.source : [game.source]).map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] underline decoration-dotted underline-offset-2 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}

      {game.videos && game.videos.length > 0 && (
        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {game.videos.map((video) => {
            const embed = toYouTubeEmbed(video.url);
            return (
              <figure key={video.url} className="m-0">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-[var(--border)] bg-black">
                  {embed ? (
                    <iframe
                      src={embed}
                      title={pick(video.title, locale)}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center gap-2 text-[15px] font-semibold text-white no-underline"
                    >
                      <FiPlayCircle size={20} aria-hidden="true" className="text-[var(--accent)]" />
                      {locale === "ko" ? "YouTube에서 열기" : "Open on YouTube"}
                    </a>
                  )}
                </div>
                <figcaption className="mt-2 flex items-center gap-2 text-[14px] font-semibold leading-5 text-[var(--text-tertiary)]">
                  <FiPlayCircle size={13} aria-hidden="true" className="shrink-0 text-[var(--accent)]" />
                  {pick(video.title, locale)}
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}

      {game.achievementSlug && (
        <Link
          href={`/game/${gameSlug}/achievement/${game.achievementSlug}`}
          className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-[var(--accent)] no-underline transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]"
        >
          {locale === "ko" ? "관련 업적 공략 보기" : "Related achievement guide"}
          <FiArrowRight size={13} aria-hidden="true" />
        </Link>
      )}
    </article>
  );
}

export function MinigamesSection({
  locale,
  gameSlug,
  data,
}: {
  locale: Locale;
  gameSlug: string;
  data: MinigamesData;
}) {
  return (
    <div>
      <p className="m-0 max-w-[72ch] text-[16px] leading-7 text-[var(--text-secondary)]">
        {pick(data.intro, locale)}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {data.minigames.map((game) => (
          <MinigameCard key={game.slug} game={game} gameSlug={gameSlug} locale={locale} />
        ))}
      </div>
    </div>
  );
}
