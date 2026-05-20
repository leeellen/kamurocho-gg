import { FiExternalLink, FiPackage, FiPlayCircle } from "react-icons/fi";

import { Chip } from "@/components/ui/chip";
import type { Locale } from "@/lib/i18n";
import type { CollectibleCategory, CollectibleGroup, CollectibleItem, CollectibleStep } from "@/lib/collectibles";

type Props = {
  locale: Locale;
  categories: CollectibleCategory[];
};

function videoEmbed(url: string) {
  const m = url.match(/(?:v=|embed\/)([A-Za-z0-9_-]{11})/);
  if (!m) return null;
  return `https://www.youtube.com/embed/${m[1]}`;
}

export function CollectiblesSection({ locale, categories }: Props) {
  if (categories.length === 0) return null;

  return (
    <section
      aria-label={locale === "ko" ? "수집 요소 공략" : "Collectibles guide"}
      className="mt-12 border-t border-[var(--border-subtle)] pt-10"
    >
      <div className="flex items-end justify-between gap-3">
        <div>
          <span
            className={`font-mono text-[12px] uppercase text-[var(--accent)] ${locale === "ko" ? "tracking-wider" : "tracking-[0.16em]"}`}
          >
            {locale === "ko" ? "수집 요소" : "Collectibles"}
          </span>
          <h2 className="font-display m-0 mt-2 flex items-center gap-2 text-[24px] font-extrabold tracking-tight text-white md:text-[28px]">
            <FiPackage className="text-[var(--accent)]" size={22} aria-hidden="true" />
            {locale === "ko" ? "수집 요소 공략" : "Collectible Guides"}
          </h2>
        </div>
        <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
          {locale === "ko" ? `${categories.length}개 카테고리` : `${categories.length} categories`}
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} locale={locale} category={cat} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ locale, category }: { locale: Locale; category: CollectibleCategory }) {
  const itemCount =
    (category.items?.length ?? 0) +
    (category.groups?.reduce((s, g) => s + g.items.length, 0) ?? 0);

  return (
    <details className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] open:border-[var(--accent-border)] open:bg-[var(--bg-raised)]">
      <summary className="cursor-pointer list-none p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display m-0 text-[17px] font-extrabold tracking-tight text-white md:text-[18px]">
              {locale === "ko" ? category.title.ko : category.title.en}
            </h3>
            <p className="m-0 max-w-[80ch] text-[13px] leading-6 text-[var(--text-secondary)]">
              {locale === "ko" ? category.summary.ko : category.summary.en}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {itemCount > 0 && (
              <Chip tone="accent" size="xs">
                {itemCount}
              </Chip>
            )}
            <span
              aria-hidden="true"
              className="font-mono text-[11px] text-[var(--text-tertiary)] transition-transform group-open:rotate-180"
            >
              ▼
            </span>
          </div>
        </div>
      </summary>

      <div className="border-t border-[var(--border-subtle)] px-5 py-5">
        {category.tips && category.tips.length > 0 && (
          <ul className="mb-5 flex flex-col gap-1.5">
            {category.tips.map((tip, i) => (
              <li
                key={i}
                className="relative pl-4 text-[13px] leading-6 text-[var(--text-secondary)] before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)]"
              >
                {locale === "ko" ? tip.ko : tip.en}
              </li>
            ))}
          </ul>
        )}

        {category.groups?.map((group, gi) => (
          <GroupBlock key={gi} locale={locale} group={group} dense={gi > 0} />
        ))}

        {category.items && category.items.length > 0 && (
          <ItemGrid locale={locale} items={category.items} />
        )}

        {category.source && (
          <a
            href={category.source.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-[12px] font-semibold text-[var(--accent)] no-underline hover:underline"
          >
            {category.source.label}
            <FiExternalLink size={11} aria-hidden="true" />
          </a>
        )}
      </div>
    </details>
  );
}

function GroupBlock({
  locale,
  group,
  dense,
}: {
  locale: Locale;
  group: CollectibleGroup;
  dense: boolean;
}) {
  const embed = group.video ? videoEmbed(group.video) : null;
  return (
    <div className={dense ? "mt-8" : ""}>
      <h4 className="font-display m-0 mb-3 flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
        {locale === "ko" ? group.title.ko : group.title.en}
      </h4>
      {group.mapImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={group.mapImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="mb-4 w-full max-w-[640px] rounded-xl border border-[var(--border-subtle)]"
        />
      )}
      {embed && (
        <div className="relative mb-4 aspect-video w-full max-w-[640px] overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-black/40">
          <iframe
            src={embed}
            title={locale === "ko" ? group.title.ko : group.title.en}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      )}
      <ItemGrid locale={locale} items={group.items} />
    </div>
  );
}

function ItemGrid({ locale, items }: { locale: Locale; items: CollectibleItem[] }) {
  return (
    <ol className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {items.map((item) => (
        <ItemCard key={item.number} locale={locale} item={item} />
      ))}
    </ol>
  );
}

function ItemCard({ locale, item }: { locale: Locale; item: CollectibleItem }) {
  const embed = item.video ? videoEmbed(item.video) : null;
  return (
    <li className="flex flex-col gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/20 p-3.5">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[12px] font-extrabold text-[var(--accent)]">
          #{String(item.number).padStart(2, "0")}
        </span>
        <span className="text-[13px] font-bold text-white">
          {item.title
            ? locale === "ko" ? item.title.ko : item.title.en
            : locale === "ko" ? item.location.ko : item.location.en}
        </span>
      </div>
      {item.title && (
        <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[var(--text-tertiary)]">
          {locale === "ko" ? item.location.ko : item.location.en}
        </div>
      )}

      {item.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full rounded-lg border border-[var(--border-subtle)]"
        />
      )}

      {item.prereq && (
        <div className="rounded-md bg-[var(--accent-subtle)] px-2 py-1 text-[11px] leading-5 text-[var(--accent)]">
          {locale === "ko" ? `사전 조건: ${item.prereq.ko}` : `Prereq: ${item.prereq.en}`}
        </div>
      )}

      {item.steps && item.steps.length > 0 ? (
        <ol className="flex flex-col gap-1.5">
          {item.steps.map((step, i) => (
            <StepRow key={i} locale={locale} step={step} index={i + 1} />
          ))}
        </ol>
      ) : item.body ? (
        <p className="m-0 text-[12px] leading-6 text-[var(--text-secondary)]">
          {locale === "ko" ? item.body.ko : item.body.en}
        </p>
      ) : null}

      {item.reward && (
        <div className="mt-1 flex items-center gap-1.5 text-[12px]">
          <Chip tone="gold" size="xs">
            {locale === "ko" ? "보상" : "Reward"}
          </Chip>
          <span className="text-[12px] font-semibold text-white">
            {locale === "ko" ? item.reward.ko : item.reward.en}
          </span>
        </div>
      )}

      {embed && (
        <a
          href={item.video!}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--accent)] no-underline hover:underline"
        >
          <FiPlayCircle size={12} aria-hidden="true" />
          {locale === "ko" ? "위치 영상 보기" : "Watch location video"}
        </a>
      )}
    </li>
  );
}

function StepRow({ locale, step, index }: { locale: Locale; step: CollectibleStep; index: number }) {
  return (
    <li className="flex gap-2 text-[12px] leading-6 text-[var(--text-secondary)]">
      <span className="shrink-0 font-mono text-[11px] font-bold text-[var(--accent)]">
        {step.index ?? index}.
      </span>
      <span className="flex-1">
        {locale === "ko" ? step.body.ko : step.body.en}
        {step.image && (
          <>
            <br />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={step.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="mt-1.5 max-w-full rounded border border-[var(--border-subtle)]"
            />
          </>
        )}
      </span>
    </li>
  );
}
