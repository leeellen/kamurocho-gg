import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-dim font-display text-lg font-bold text-black shadow-[0_0_30px_rgba(182,160,255,0.22)]">
        U
      </span>
      <div className="font-display text-3xl font-bold tracking-[-0.08em] text-foreground">
        UNLOKD
      </div>
    </Link>
  );
}
