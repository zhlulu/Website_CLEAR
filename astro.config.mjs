import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // GitHub Pages URL: https://zhlulu.github.io/Website_CLEAR/
  // When you switch to a custom domain (e.g., clear.engin.umich.edu),
  // change `site` to that domain and remove the `base` line.
  site: "https://zhlulu.github.io",
  base: "/Website_CLEAR/",
  integrations: [tailwind()],
});
