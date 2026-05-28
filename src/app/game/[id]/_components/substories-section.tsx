import { FiBookOpen, FiPlayCircle } from "react-icons/fi";

import { PanelHeader } from "./panel-header";

import { Chip } from "@/components/ui/chip";
import { ReportButton } from "@/components/ui/report-button";
import { isFallbackText, pickLocalized, type Locale } from "@/lib/i18n";
import {
  flattenSubstories,
  type SubstoriesData,
  type SubstoryChoice,
  type SubstoryItem,
  type SubstoryStep,
} from "@/lib/substories";

// Many older substory entries left the `en` slot as a Korean placeholder.
// `pickLocalized` falls back to the Korean source when that happens; this
// helper inlines the right `lang` attribute so screen readers and browser
// hyphenation still pick the correct language.
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
  data: SubstoriesData;
};

function videoEmbed(url: string) {
  const m = url.match(/(?:v=|embed\/)([A-Za-z0-9_-]{11})/);
  if (!m) return null;
  return `https://www.youtube.com/embed/${m[1]}`;
}

function groupByProtagonist(
  items: SubstoryItem[],
  locale: Locale,
): { key: string; label: string | null; items: SubstoryItem[] }[] {
  const buckets = new Map<string, { label: string | null; items: SubstoryItem[] }>();
  for (const item of items) {
    const label = item.protagonist ? pickLocalized(item.protagonist, locale) : null;
    const key = label ?? "__none__";
    if (!buckets.has(key)) buckets.set(key, { label, items: [] });
    buckets.get(key)!.items.push(item);
  }
  for (const bucket of buckets.values()) {
    bucket.items.sort((a, b) => a.number - b.number);
  }
  return Array.from(buckets, ([key, value]) => ({ key, ...value }));
}

export function SubstoriesSection({ locale, appId, data }: Props) {
  const items = flattenSubstories(data);
  if (items.length === 0) return null;
  const groups = groupByProtagonist(items, locale);
  const showProtagonistHeaders = groups.length > 1;

  return (
    <section aria-label={locale === "ko" ? "서브 스토리 공략" : "Substory guide"}>
      <PanelHeader
        icon={<FiBookOpen size={18} aria-hidden="true" />}
        title={locale === "ko" ? "서브 스토리" : "Substories"}
        meta={locale === "ko" ? `${items.length}건` : `${items.length} entries`}
        description={
          data.summary
            ? locale === "ko"
              ? data.summary.ko
              : data.summary.en
            : undefined
        }
      />

      <div className="flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.key}>
            {showProtagonistHeaders && group.label && (
              <h3 className="font-display m-0 mb-3 flex items-center gap-2 text-[21px] font-extrabold tracking-tight text-white md:text-[23px]">
                <span className="inline-block h-4 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                {group.label}
                <span className="ml-1 font-mono text-[16px] font-normal text-[var(--text-tertiary)]">
                  {locale === "ko" ? `${group.items.length}건` : `${group.items.length}`}
                </span>
              </h3>
            )}
            <ol className="flex list-none flex-col gap-3 p-0">
              {group.items.map((item) => (
                <ItemCard
                  key={`${item.number}-${item.title.ko}`}
                  locale={locale}
                  appId={appId}
                  item={item}
                />
              ))}
            </ol>
          </div>
        ))}
      </div>

    </section>
  );
}

function ItemCard({
  locale,
  appId,
  item,
}: {
  locale: Locale;
  appId: number;
  item: SubstoryItem;
}) {
  const embed = item.video ? videoEmbed(item.video) : null;
  const title = pickLocalized(item.title, locale);
  const location = pickLocalized(item.location, locale);
  const trigger = pickLocalized(item.trigger, locale);

  return (
    <li>
      <details className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] open:border-[var(--accent-border)] open:bg-[var(--bg-raised)]">
        <summary className="cursor-pointer list-none rounded-2xl p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] md:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="shrink-0 font-mono text-[16px] font-extrabold text-[var(--accent)]">
                  #{String(item.number).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-bold text-white" lang={langOf(item.title, locale)}>
                  {title}
                </span>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 font-mono text-[16px] text-[var(--text-tertiary)] transition-transform group-open:rotate-180"
            >
              ▼
            </span>
          </div>
        </summary>

        <div className="border-t border-[var(--border-subtle)] px-4 py-4 md:px-5 md:py-5">
          <div className="flex flex-col gap-2.5">
            <div
              className={`text-[16px] font-mono text-[var(--text-tertiary)] ${
                locale === "ko" ? "" : "uppercase tracking-[0.12em]"
              }`}
              lang={langOf(item.location, locale)}
            >
              {location}
            </div>

            <div className="text-[16px] leading-6 text-[var(--text-secondary)]">
              <span className="font-semibold text-white">
                {locale === "ko" ? "발생 조건: " : "Trigger: "}
              </span>
              <span lang={langOf(item.trigger, locale)}>{trigger}</span>
            </div>

            {item.prereq && (
              <div
                className="rounded-md bg-[var(--accent-subtle)] px-2 py-1 text-[16px] leading-5 text-[var(--accent)]"
                lang={langOf(item.prereq, locale)}
              >
                {locale === "ko" ? `사전 조건: ${pickLocalized(item.prereq, "ko")}` : `Prereq: ${pickLocalized(item.prereq, locale)}`}
              </div>
            )}

            {item.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.image}
                alt={
                  locale === "ko"
                    ? `${title} 참고 이미지`
                    : `${title} reference image`
                }
                loading="lazy"
                className="w-full rounded-lg border border-[var(--border-subtle)]"
              />
            )}

            {item.steps && item.steps.length > 0 ? (
              <ol className="flex flex-col gap-1.5">
                {item.steps.map((step, i) => (
                  <StepRow key={i} locale={locale} step={step} index={i + 1} />
                ))}
              </ol>
            ) : item.body ? (
              <p
                className="m-0 text-[16px] leading-6 text-[var(--text-secondary)]"
                lang={langOf(item.body, locale)}
              >
                {pickLocalized(item.body, locale)}
              </p>
            ) : null}

            {item.choices && item.choices.length > 0 && (
              <div className="mt-1 flex flex-col gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-black/30 p-2.5">
                <div
                  className={`font-mono text-[16px] font-bold text-[var(--text-tertiary)] ${
                    locale === "ko" ? "" : "uppercase tracking-[0.12em]"
                  }`}
                >
                  {locale === "ko" ? "선택지" : "Choices"}
                </div>
                {item.choices.map((c, i) => (
                  <ChoiceRow key={i} locale={locale} choice={c} />
                ))}
              </div>
            )}

            {item.reward && (
              <div className="mt-1 flex items-center gap-1.5 text-[16px]">
                <Chip tone="gold" size="xs">
                  {locale === "ko" ? "보상" : "Reward"}
                </Chip>
                <span
                  className="text-[16px] font-semibold text-white"
                  lang={langOf(item.reward, locale)}
                >
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
                {locale === "ko" ? "공략 영상" : "Watch walkthrough"}
              </a>
            )}

            <div className="mt-1">
              <ReportButton
                locale={locale}
                appId={appId}
                kind="substory"
                targetRef={`substory-${item.number}`}
              />
            </div>
          </div>
        </div>
      </details>
    </li>
  );
}

function StepRow({ locale, step, index }: { locale: Locale; step: SubstoryStep; index: number }) {
  return (
    <li className="flex gap-2 text-[16px] leading-6 text-[var(--text-secondary)]">
      <span className="shrink-0 font-mono text-[16px] font-bold text-[var(--accent)]">{index}.</span>
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

function ChoiceRow({ locale, choice }: { locale: Locale; choice: SubstoryChoice }) {
  return (
    <div className="flex flex-col gap-0.5 text-[16px] leading-6">
      <span className="text-[var(--text-secondary)]">
        <span className="font-mono text-[16px] text-[var(--text-tertiary)]">Q. </span>
        <span lang={langOf(choice.prompt, locale)}>{pickLocalized(choice.prompt, locale)}</span>
      </span>
      <span className="text-white">
        <span className="font-mono text-[16px] font-bold text-[var(--accent)]">A. </span>
        <span lang={langOf(choice.correct, locale)}>{pickLocalized(choice.correct, locale)}</span>
      </span>
      {choice.note && (
        <span className="text-[16px] text-[var(--text-tertiary)]" lang={langOf(choice.note, locale)}>
          {pickLocalized(choice.note, locale)}
        </span>
      )}
    </div>
  );
}
