# HackHubAfrica

An Astro-powered project and documentation hub for HackHubAfrica, published as a static site on GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

Build and preview the static output with:

```sh
npm run build
npm run preview
```

## Add a project

Create a Markdown file under `src/content/projects/`. Front matter is checked against the project collection schema in `src/content.config.ts`:

```yaml
---
title: Example build
status: active
category: Embedded systems
tech: [ESP32, C++]
summary: A short description of the project.
github_repo: https://github.com/hackhubafrica/example-build
starter: false
---
```

Allowed statuses are `active`, `prototyping`, `completed`, and `archived`. Project Markdown becomes a detail page automatically. Omit optional fields such as `start_date` and `github_repo` when unknown. Starter examples in the repository are illustrative and should be replaced with verified work before being presented as portfolio claims.

## Add documentation

Create a Markdown file under `src/content/docs/`, in a `hardware/` or `software/` subfolder. Set `category` to `hardware` or `software`, then provide a title, summary, and optional ordering number. Documentation pages are linked from the landing page automatically.

## Publish

The workflow at `.github/workflows/deploy.yml` builds and deploys on pushes to `main`. In the repository's GitHub Pages settings, select **GitHub Actions** as the build and deployment source. The site is configured for `https://hackhubafrica.github.io` at the root path.
