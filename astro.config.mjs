import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://clear.engin.umich.edu",
  integrations: [tailwind()],
});
