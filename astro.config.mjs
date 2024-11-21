import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentation HIMARPL",
      defaultLocale: "root",
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: "English",
          lang: "en",
        },
        // Indonesia docs in `src/content/docs/id/`
        id: {
          label: "Indonesia",
          lang: "id",
        },
      },
      social: {
        github: "https://github.com/himarplupi",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: {
            directory: "getting-started",
          },
        },
        {
          label: "Overview Projects",
          autogenerate: {
            directory: "overview-projects",
          },
        },
        {
          label: "A. www-himarpl",
          autogenerate: {
            directory: "www-himarpl",
          },
        },
        {
          label: "B. blog-himarpl",
          autogenerate: {
            directory: "blog-himarpl",
          },
        },
        {
          label: "C. pmb-himarpl",
          autogenerate: {
            directory: "pmb-himarpl",
          },
        },
        {
          label: "D. mabim-himarpl",
          autogenerate: {
            directory: "mabim-himarpl",
          },
        },
        {
          label: "E. docs-himarpl",
          autogenerate: {
            directory: "docs-himarpl",
          },
        },
        {
          label: "Other Projects",
          autogenerate: {
            directory: "other-projects",
          },
        },
      ],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
