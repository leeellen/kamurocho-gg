import { cn } from "@/lib/cn";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        isCenter ? "items-center text-center" : "items-start",
        action && !isCenter && "sm:flex-row sm:items-end sm:justify-between sm:gap-6",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        {eyebrow && (
          <span
            className={cn(
              "font-mono text-[14px] font-semibold uppercase text-[var(--accent)]",
              /[ㄱ-힝]/u.test(eyebrow) ? "tracking-normal" : "tracking-[0.18em]",
            )}
          >
            {eyebrow}
          </span>
        )}
        <h2 className="font-display m-0 text-[28px] font-extrabold leading-tight text-[var(--text-primary)] md:text-[34px]">
          {title}
        </h2>
        {description && (
          <p className="m-0 max-w-[64ch] text-[15px] leading-7 text-[var(--text-secondary)]">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
