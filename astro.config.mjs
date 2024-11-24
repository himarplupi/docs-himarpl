import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.himarpl.com",
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      editLink: {
        baseUrl: "https://github.com/himarplupi/docs-himarpl/edit/main",
      },
      title: "Documentation HIMARPL",
      defaultLocale: "root",
      locales: {
        // English docs in `src/content/docs/`
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
          label: "Start Here",
          translations: {
            id: "Mulai Dari Sini",
          },
          autogenerate: {
            directory: "getting-started",
          },
        },
        {
          label: "Overview",
          translations: {
            id: "Pengantar",
          },
          autogenerate: {
            directory: "overview",
          },
        },
        {
          label: "ascendia-himarpl",
          autogenerate: {
            directory: "ascendia-himarpl",
          },
        },
        {
          label: "blog-himarpl",
          autogenerate: {
            directory: "blog-himarpl",
          },
        },
        {
          label: "pmb-himarpl",
          autogenerate: {
            directory: "pmb-himarpl",
          },
        },
        {
          label: "Other Projects",
          translations: {
            id: "Proyek Lainnya",
          },
          autogenerate: {
            directory: "other-projects",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
  output: "server",
  adapter: vercel(),
});
