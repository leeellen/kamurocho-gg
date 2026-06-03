import { FiPackage, FiPlayCircle } from "react-icons/fi";

import { Chip } from "@/components/ui/chip";
import { ReportButton } from "@/components/ui/report-button";
import { isFallbackText, pickLocalized, type Locale } from "@/lib/i18n";
import type { CollectibleCategory, CollectibleGroup, CollectibleItem, CollectibleStep } from "@/lib/collectibles";
import { telephoneCardMaps } from "@/lib/telephone-cards";

import { PanelHeader } from "./panel-header";
import { TelephoneCardsChecklist } from "./telephone-cards-checklist";

const INTERACTIVE_CATEGORIES: Record<number, Record<string, true>> = {
  2988580: { "telephone-cards": true },
};

function hasInteractive(appId: number, slug: string): boolean {
  return Boolean(INTERACTIVE_CATEGORIES[appId]?.[slug]);
}

function langOf(
  pair: { ko?: string | null; en?: string | null } | null | undefined,
  locale: Locale,
): "ko" | "en" {
  if (locale === "ko") return "ko";
  return isFallbackText(pair, locale) ? "ko" : "en";
}

type Props = {
  locale: Locale;
  appId: number;
  categories: CollectibleCategory[];
};

function videoEmbed(url: string) {
  const m = url.match(/(?:v=|embed\/)([A-Za-z0-9_-]{11})/);
  if (!m) return null;
  return `https://www.youtube.com/embed/${m[1]}`;
}

export function CollectiblesSection({ locale, appId, categories }: Props) {
  if (categories.length === 0) return null;

  return (
    <section aria-label={locale === "ko" ? "수집 요소 공략" : "Collectibles guide"}>
      <PanelHeader
        icon={<FiPackage size={18} aria-hidden="true" />}
        title={locale === "ko" ? "수집 요소" : "Collectibles"}
        meta={
          locale === "ko"
            ? `${categories.length}개 카테고리`
            : `${categories.length} categories`
        }
        description={
          locale === "ko"
            ? "지역별 수집품과 보스 보상 등을 카테고리별로 정리했습니다."
            : "Region-by-region collectibles and side-mission rewards grouped by category."
        }
      />

      <div className="flex flex-col gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} locale={locale} appId={appId} category={cat} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({
  locale,
  appId,
  category,
}: {
  locale: Locale;
  appId: number;
  category: CollectibleCategory;
}) {
  const interactive = hasInteractive(appId, category.slug);
  const interactiveMaps = interactive
    ? Object.values(telephoneCardMaps).filter((m) => m.appId === appId)
    : [];
  const interactiveCount = interactiveMaps.reduce((s, m) => s + m.totalCount, 0);
  const itemCount =
    interactiveCount +
    (category.items?.length ?? 0) +
    (category.groups?.reduce((s, g) => s + g.items.length, 0) ?? 0);
  const hasExpandable =
    interactive ||
    itemCount > 0 ||
    (category.tips?.length ?? 0) > 0 ||
    Boolean(category.source);

  if (!hasExpandable) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3
              className="font-display m-0 text-[20px] font-extrabold tracking-tight text-white md:text-[21px]"
              lang={langOf(category.title, locale)}
            >
              {pickLocalized(category.title, locale)}
            </h3>
            <p
              className="m-0 mt-1.5 max-w-[80ch] text-[16px] leading-6 text-[var(--text-secondary)]"
              lang={langOf(category.summary, locale)}
            >
              {pickLocalized(category.summary, locale)}
            </p>
          </div>
          <ReportButton
            locale={locale}
            appId={appId}
            kind="collectible"
            targetRef={category.slug}
          />
        </div>
      </div>
    );
  }

  return (
    <details className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] open:border-[var(--accent-border)] open:bg-[var(--bg-raised)]">
      <summary className="cursor-pointer list-none rounded-2xl p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <h3
              className="font-display m-0 text-[20px] font-extrabold tracking-tight text-white md:text-[21px]"
              lang={langOf(category.title, locale)}
            >
              {pickLocalized(category.title, locale)}
            </h3>
            <p
              className="m-0 max-w-[80ch] text-[16px] leading-6 text-[var(--text-secondary)]"
              lang={langOf(category.summary, locale)}
            >
              {pickLocalized(category.summary, locale)}
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
              className="font-mono text-[16px] text-[var(--text-tertiary)] transition-transform group-open:rotate-180"
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
                className="relative pl-4 text-[16px] leading-6 text-[var(--text-secondary)] before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)]"
                lang={langOf(tip, locale)}
              >
                {pickLocalized(tip, locale)}
              </li>
            ))}
          </ul>
        )}

        {interactive && interactiveMaps.length > 0 && (
          <TelephoneCardsChecklist maps={interactiveMaps} locale={locale} />
        )}

        {category.groups?.map((group, gi) => (
          <GroupBlock key={gi} locale={locale} group={group} dense={gi > 0} />
        ))}

        {category.items && category.items.length > 0 && (
          <ItemGrid locale={locale} items={category.items} />
        )}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          {category.source && (
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {(Array.isArray(category.source) ? category.source : [category.source]).map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[12px] text-[var(--text-tertiary)] no-underline hover:text-[var(--text-secondary)] hover:underline"
                >
                  {locale === "ko" ? "출처: " : "Source: "}
                  {s.label}
                </a>
              ))}
            </div>
          )}
          <ReportButton
            locale={locale}
            appId={appId}
            kind="collectible"
            targetRef={category.slug}
          />
        </div>
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
      <h4
        className="font-display m-0 mb-3 flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)]"
        lang={langOf(group.title, locale)}
      >
        {pickLocalized(group.title, locale)}
      </h4>
      {group.mapImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={group.mapImage}
          alt={
            locale === "ko"
              ? `${pickLocalized(group.title, locale)} 위치 맵`
              : `${pickLocalized(group.title, locale)} location map`
          }
          loading="lazy"
          className="mb-4 w-full max-w-[640px] rounded-xl border border-[var(--border-subtle)]"
        />
      )}
      {embed && (
        <div className="relative mb-4 aspect-video w-full max-w-[640px] overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-black/40">
          <iframe
            src={embed}
            title={pickLocalized(group.title, locale)}
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

function parseBodyChoices(body: string): { intro?: string; choices?: string[]; rest?: string } | null {
  const patterns = [
    /^(정답 선택지\(순서\):|정답 경로:|Correct choices \(in order\):|Correct path:)\s*/,
  ];
  for (const re of patterns) {
    const m = body.match(re);
    if (!m) continue;
    const intro = m[0].trim();
    const after = body.slice(m[0].length);
    // Split on numbered arrows: "1) ... → 2) ... → 3) ..."
    if (/(?:^|\s)1\)/.test(after) && /→/.test(after)) {
      const parts = after.split(/\s*→\s*/).map((s) => s.replace(/^\d+\)\s*/, "").trim()).filter(Boolean);
      return { intro, choices: parts };
    }
    return { intro, rest: after.trim() };
  }
  return null;
}

function ItemCard({ locale, item }: { locale: Locale; item: CollectibleItem }) {
  const embed = item.video ? videoEmbed(item.video) : null;
  const titleText = item.title
    ? pickLocalized(item.title, locale)
    : pickLocalized(item.location, locale);
  const titleLang = item.title ? langOf(item.title, locale) : langOf(item.location, locale);
  const locationText = pickLocalized(item.location, locale);
  const locationLang = langOf(item.location, locale);
  const titleEndsWithLocation =
    Boolean(item.title) && titleText.replace(/\s+/g, "").endsWith(locationText.replace(/\s+/g, ""));
  const bodyText = item.body ? pickLocalized(item.body, locale) : null;
  const bodyLang = item.body ? langOf(item.body, locale) : "en";
  const parsed = bodyText ? parseBodyChoices(bodyText) : null;
  return (
    <li className="flex flex-col gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/20 p-3.5">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[16px] font-extrabold text-[var(--accent)]">
          #{String(item.number).padStart(2, "0")}
        </span>
        <span className="text-[16px] font-bold text-white" lang={titleLang}>{titleText}</span>
      </div>
      {item.title && !titleEndsWithLocation && (
        <div className="text-[16px] text-[var(--text-tertiary)]" lang={locationLang}>{locationText}</div>
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
        <div
          className="rounded-md bg-[var(--accent-subtle)] px-2 py-1 text-[16px] leading-5 text-[var(--accent)]"
          lang={langOf(item.prereq, locale)}
        >
          {locale === "ko" ? `사전 조건: ${pickLocalized(item.prereq, "ko")}` : `Prereq: ${pickLocalized(item.prereq, locale)}`}
        </div>
      )}

      {item.steps && item.steps.length > 0 ? (
        <ol className="flex flex-col gap-1.5">
          {item.steps.map((step, i) => (
            <StepRow key={i} locale={locale} step={step} index={i + 1} />
          ))}
        </ol>
      ) : parsed ? (
        <div className="flex flex-col gap-1.5">
          {parsed.intro && (
            <div className="font-mono text-[16px] font-bold uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
              {parsed.intro}
            </div>
          )}
          {parsed.choices ? (
            <ol className="m-0 flex flex-col gap-1 pl-0">
              {parsed.choices.map((c, i) => (
                <li key={i} className="flex gap-2.5 text-[16px] leading-6 text-[var(--text-secondary)]">
                  <span className="shrink-0 rounded-md bg-white/5 px-1.5 py-0.5 font-mono text-[14px] font-bold text-[var(--text-tertiary)] ring-1 ring-inset ring-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-white">{c}</span>
                </li>
              ))}
            </ol>
          ) : parsed.rest ? (
            <p className="m-0 text-[16px] leading-6 text-[var(--text-secondary)]">{parsed.rest}</p>
          ) : null}
        </div>
      ) : bodyText ? (
        <p className="m-0 text-[16px] leading-6 text-[var(--text-secondary)]" lang={bodyLang}>{bodyText}</p>
      ) : null}

      {item.reward && (
        <div className="mt-1 flex items-center gap-1.5 text-[16px]">
          <Chip tone="gold" size="xs">
            {locale === "ko" ? "보상" : "Reward"}
          </Chip>
          <span className="text-[16px] font-semibold text-white" lang={langOf(item.reward, locale)}>
            {pickLocalized(item.reward, locale)}
          </span>
        </div>
      )}

      {embed && (
        <a
          href={item.video!}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 text-[16px] font-semibold text-[var(--accent)] no-underline hover:underline"
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
    <li className="flex gap-2 text-[16px] leading-6 text-[var(--text-secondary)]">
      <span className="shrink-0 font-mono text-[16px] font-bold text-[var(--accent)]">
        {step.index ?? index}.
      </span>
      <span className="flex-1" lang={langOf(step.body, locale)}>
        {pickLocalized(step.body, locale)}
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
