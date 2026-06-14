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
