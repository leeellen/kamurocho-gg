import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_KR } from "next/font/google";
import Script from "next/script";

import { getLocale } from "@/lib/i18n";

import "./globals.css";

// Self-host via next/font: eliminates blocking <link> roundtrip, applies
// size-adjust to cut CLS from font-swap, and preloads the LCP-critical Inter.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-kr",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = "https://kamurocho-gg.vercel.app";
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
  "Missable achievement",
  "희귀 업적",
  "플레이 순서",
  "공략",
  "RGG 스튜디오",
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isKo = locale === "ko";
  const defaultTitle = isKo
    ? "kamurocho.gg — 용과 같이 · 저지먼트 스팀 공략"
    : "kamurocho.gg — RGG Steam Guides";
  const description = isKo
    ? "RGG Studio 시리즈(용과 같이·이치반·저지먼트) 스팀 업적 공략을 한곳에 모았습니다. 게임별 진행도, 장별 Missable, 희귀 업적, 단계별 실행법까지. 비공식 팬 가이드."
    : "Achievement guides, missables, and play order for the RGG Studio Steam catalog — Yakuza, Like a Dragon, and Judgment. Unofficial fan project.";
  const ogDescription = isKo
    ? "RGG Studio 시리즈 스팀 업적 공략·Missable·희귀 업적을 한곳에. 비공식 팬 가이드."
    : "Yakuza · Like a Dragon · Judgment Steam achievement guides, missables, and play order.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: defaultTitle,
      template: "%s | kamurocho.gg",
    },
    description,
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
      title: defaultTitle,
      description: ogDescription,
      locale: isKo ? "ko_KR" : "en_US",
      alternateLocale: [isKo ? "en_US" : "ko_KR"],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: ogDescription,
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
    verification: GSC_VERIFICATION ? { google: GSC_VERIFICATION } : undefined,
  };
}

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
    <html
      lang={locale}
      className={`h-full ${inter.variable} ${notoSansKr.variable} ${jetbrainsMono.variable}`}
    >
      <head>
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
      <body className="min-h-full">
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
