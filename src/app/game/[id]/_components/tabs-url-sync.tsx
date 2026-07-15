"use client";

import type { ComponentProps } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Tabs } from "@/components/ui/tabs";

// Wraps the plain Radix Tabs root to push the active tab into `?tab=` so a
// refresh (or shared link) restores the same tab instead of resetting to
// "achievements".
export function GameTabsRoot(props: ComponentProps<typeof Tabs>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Tabs
      {...props}
      onValueChange={(value) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("tab", value);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }}
    />
  );
}
