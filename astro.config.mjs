import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Production domain (UM-managed CNAME → zhlulu.github.io).
  // To revert to the default GitHub Pages URL, restore site/base:
  //   site: "https://zhlulu.github.io",
  //   base: "/Website_CLEAR/",
  site: "https://clear.engin.umich.edu",
  integrations: [tailwind()],
});
