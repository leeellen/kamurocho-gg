import { type Confidence } from "@/lib/mock-data";

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  const styles =
    confidence === "verified"
      ? "bg-secondary/14 text-secondary"
      : "bg-tertiary/14 text-tertiary";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 font-display text-[14px] uppercase tracking-[0.18em] ${styles}`}
    >
      {confidence}
    </span>
  );
}
