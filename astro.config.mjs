import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation HIMARPL",
      social: {
        github: "https://github.com/himarplupi",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
