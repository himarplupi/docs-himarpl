# Contributing to docs-himarpl

Thank you for your interest in contributing to HIMARPL's technical documentation! This guide will help you get started.

## Before Contributing

Please read:

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](LICENSE)
- [Developer Certificate of Origin 1.1](#developer-certificate-of-origin)

## Getting Started

1. Fork and clone the repository:

```bash
git clone https://github.com/himarplupi/docs-himarpl.git # HTTPS
git clone git@github.com:himarplupi/docs-himarpl.git # SSH
gh repo clone himarplupi/docs-himarpl # GitHub CLI
```

2. Navigate to project directory:

   ```bash
   cd docs-himarpl
   ```

3. Create remote to keep your fork and local clone up to date.

   ```bash
   git remote add upstream git@github.com:himarplupi/docs-himarpl.git # SSH
   git remote add upstream https://github.com/himarplupi/docs-himarpl.git # HTTPS
   gh repo sync himarplupi/docs-himarpl # GitHub CLI
   ```

4. Create a new branch for your changes.

   ```bash
   git checkout -b your-branch-name
   ```

5. Install dependencies:

   ```bash
   npm ci
   ```

6. Start development server:

   ```bash
   npm run dev
   ```

   The documentation site should now be running at `http://localhost:4321`.

7. Make your changes to the documentation.

8. Merge your current branch with the upstream branch.

   ```bash
   git fetch upstream
   git merge upstream/main
   ```

9. After you are satisfied with your changes, add and commit them to your branch, then push your branch to your fork.

   ```bash
   git add .
   git commit # Follow the commit guidelines below
   git push -u origin your-branch-name
   ```

## Project Structure

The documentation is built using [Astro](https://astro.build) with [Starlight](https://starlight.astro.build/). Content is written in MDX format and organized by sections in the `src/content/docs` directory.

Key directories:

- `src/content/docs/` - English documentation
- `src/content/docs/id/` - Indonesian documentation
- `src/assets/` - Images and other assets
- `src/styles/` - Custom CSS styles

## Commit Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/) specification
- Sign your commits (recommended)
- Commit messages should not end with a period
- Include appropriate type (feat, fix, docs, etc.)

Examples:

```text
docs: add deployment guide for blog platform
fix: correct broken link in infrastructure overview
feat: add Indonesian translation for tech stack page
```

## Pull Request Policy

PRs must meet these requirements before merging:

- All required status checks must pass
- All discussions must be resolved
- Multiple commits should be squashed
- Follow the PR template
- Avoid unnecessary rebasing/updating with main branch

## Translation Guidelines

When adding new content:

1. Add English version in `src/content/docs/`
2. Add Indonesian version in `src/content/docs/id/`
3. Ensure both versions maintain consistent structure
4. Update sidebar configuration in astro.config.mjs if adding new sections

## Developer Certificate of Origin

By contributing to this project, you certify that:

```
By contributing to this project, I certify that:
(a) The contribution was created in whole or in part by me and I have the right to submit it
under the open source license indicated in the file; or
(b) The contribution is based upon previous work that, to the best of my knowledge, is covered
under an appropriate open source license and I have the right under that license to submit that
work with modifications, whether created in whole or in part by me, under the same open source
license (unless I am permitted to submit under a different license), as indicated in the file; or
(c) The contribution was provided directly to me by some other person who certified (a), (b)
or (c) and I have not modified it.
(d) I understand and agree that this project and the contribution are public and that a record
of the contribution (including all personal information I submit with it, including my sign-off)
is maintained indefinitely and may be redistributed consistent with this project or the
open source license(s) involved.
```

## Need Help?

- Browse the [documentation](https://docs.himarpl.com)
- Open an issue
- Contact the Kominfo department
