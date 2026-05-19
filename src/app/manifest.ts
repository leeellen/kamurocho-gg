import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "kamurocho.gg — RGG 스튜디오 스팀 공략",
    short_name: "kamurocho.gg",
    description:
      "용과 같이·이치반·저지먼트 시리즈 스팀 업적 공략, 놓치기 쉬운 항목, 추천 플레이 순서를 한곳에서.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#07070a",
    theme_color: "#07070a",
    lang: "ko-KR",
    categories: ["games", "entertainment", "utilities"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
