import type { MetadataRoute } from "next";

import { BRAND } from "@/data/content";

/** Manifesto do app web (nome, cores e ícone da marca). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name}, ${BRAND.role}`,
    short_name: BRAND.firstName,
    description: BRAND.slogan,
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f3",
    theme_color: "#1b2e23",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
