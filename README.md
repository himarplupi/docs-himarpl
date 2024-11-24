# HIMARPL Technical Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

The official technical documentation for all HIMARPL (Software Engineering Student Association) open-source projects at the Education University of Indonesia.

## 🚀 Project Structure

Inside of this documentation project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   │   ├── docs/
│   │   ├── id/
│   │   └── config.ts
│   ├── styles/
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Documentation is written in `.md` or `.mdx` files in the `src/content/docs/` directory for English and `src/content/docs/id/` for Indonesian. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 📚 Documentation Structure

The documentation covers:

- Getting Started guides
- Project overviews and setup instructions
- Technical architecture and infrastructure
- Contribution guidelines
- Staff guides for Kominfo department

## 🌐 Deployment

This documentation is deployed on Vercel and available at [docs.himarpl.com](https://docs.himarpl.com)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Please read our [Contribution Guide](/CONTRIBUTING.md) before submitting any contributions.

## 🤝 Support

For questions or issues:

- Open a GitHub issue
- Contact Kominfo Department
- Visit [himarpl.com](https://www.himarpl.com)

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
