// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://calm-llama-8c2852.netlify.app",
  integrations: [preact()]
});