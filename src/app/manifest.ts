import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "kamurocho.gg",
    short_name: "kamurocho",
    description: "Fan-curated RGG Steam achievement guides, missables, and play order.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5f3",
    theme_color: "#0b1b33",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
