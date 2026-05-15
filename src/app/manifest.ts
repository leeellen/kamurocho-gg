import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unlokd",
    short_name: "Unlokd",
    description: "Steam achievement tracker and guide platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080b",
    theme_color: "#b6a0ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
