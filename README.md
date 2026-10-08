# HackHubAfrica Jekyll site

This branch contains the Jekyll alternative for the HackHubAfrica project and documentation hub. It uses GitHub Pages' built-in `minima` theme and branch publishing; it does not need a custom GitHub Actions workflow.

## Publish this branch

In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/(root)`. Save the setting. A push to `main` will publish this version and replace whichever version is currently served at `https://hackhubafrica.github.io`.

This removes the need for a custom site-build workflow, but GitHub still performs and reports the Pages deployment through its managed Actions workflow. An account-wide billing lock may therefore still prevent publication; branch publishing is not a billing workaround.

To return to the Astro version, change Pages back to **GitHub Actions** after Actions billing is available, or configure a working workflow for Astro. `master` is the Astro branch; `git-book` contains the existing GitBook source. The `docs/` directory on this branch is an existing static knowledge archive and is preserved.

## Add a project

Add a Markdown file under `_projects/` with front matter like:

```yaml
---
title: Example build
status: active
category: Embedded systems
tech: [ESP32, C++]
summary: A short description of the project.
starter: false
---

## Build notes

Document decisions, tests, and current progress.
```

Allowed status values are `active`, `prototyping`, `completed`, and `archived`. Active and prototyping records appear under **On the bench**; completed records appear under **Built & documented**. Optional fields include `start_date` and `github_repo`.

## Add documentation

Add Markdown under `_handbook/hardware/` or `_handbook/software/`. Include `title`, `category`, and `summary` in front matter. The category must be `hardware` or `software`; `order` controls where it appears in the homepage list.

Jekyll collections create the detail pages and homepage links automatically. The existing static docs remain available at `/docs/`.

## Local preview

Install Ruby and the `github-pages` gem to reproduce GitHub Pages' Jekyll environment. Then run `jekyll serve` and open `http://localhost:4000`. This workspace does not include Ruby; GitHub's branch publisher performs the Jekyll build when enabled.
