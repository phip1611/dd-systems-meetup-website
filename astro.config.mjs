import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://ukvly.org",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // Prevent weird interactions with Nix
        ignored: [".direnv/**", "**/result*/**"],
      },
    },
  },
});
