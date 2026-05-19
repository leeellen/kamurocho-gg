import type { Metadata, Viewport } from "next";

import { getLocale } from "@/lib/i18n";

import "./globals.css";

const SITE_URL = "https://kamurocho.gg";
const SITE_NAME = "kamurocho.gg";
const KEYWORDS = [
  // English
  "RGG Studio",
  "Yakuza",
  "Like a Dragon",
  "Judgment",
  "Lost Judgment",
  "Steam achievements",
  "achievement guide",
  "missables",
  "rare achievements",
  "100% completion",
  "play order",
  "Kiryu",
  "Ichiban",
  "Yagami",
  // Korean
  "용과 같이",
  "이치반",
  "키류",
  "야가미",
  "저지먼트",
  "스팀 업적",
  "업적 공략",
  "놓치기 쉬운 업적",
  "희귀 업적",
  "플레이 순서",
  "공략",
  "RGG 스튜디오",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "kamurocho.gg — 용과 같이 · 저지먼트 스팀 공략",
    template: "%s | kamurocho.gg",
  },
  description:
    "RGG Studio 시리즈(용과 같이·이치반·저지먼트) 스팀 업적 공략을 한곳에 모았습니다. 게임별 진행도, 챕터별 놓치기 쉬운 항목, 희귀 업적, 단계별 실행법까지. 비공식 팬 가이드.",
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  authors: [{ name: "kamurocho.gg" }],
  creator: "kamurocho.gg",
  publisher: "kamurocho.gg",
  category: "games",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      ko: "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "kamurocho.gg — 용과 같이 · 저지먼트 스팀 공략",
    description:
      "RGG Studio 시리즈 스팀 업적 공략·놓치기 쉬운 항목·희귀 업적을 한곳에. 비공식 팬 가이드.",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "kamurocho.gg — RGG Steam Guides",
    description:
      "Yakuza · Like a Dragon · Judgment Steam achievement guides, missables, and play order.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
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
        <script
          type="application/ld+json"
          // Site-wide WebSite + SearchAction so Google can offer the
          // in-search-results search box widget. Inline JSON is the
          // documented integration.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              inLanguage: ["ko-KR", "en-US"],
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
