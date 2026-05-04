import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://ukvly.org",
  vite: {
    server: {
      watch: {
        // Prevent weird interactions with Nix
        ignored: [".direnv/**", "**/result*/**"],
      },
    },
  },
});
