import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    appEntrypoint: "/src/_vue"
  }), react(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});