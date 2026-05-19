import type { Metadata } from "next";

import { getLocale } from "@/lib/i18n";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamurocho.gg"),
  title: "kamurocho.gg",
  description: "Fan-curated RGG Studio Steam achievement guides, missables, and play order.",
  applicationName: "kamurocho.gg",
  keywords: ["RGG Studio", "Yakuza", "Judgment", "Steam", "achievements", "guides", "missables"],
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+KR:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
