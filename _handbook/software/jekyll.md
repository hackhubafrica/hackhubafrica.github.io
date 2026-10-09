---
title: Jekyll  Static Site Generator
category: software
summary: A popular Static Site Generator (SSG) written in the Ruby programming language.
order: 2
starter: true
---

# What is Jekyll?
Jekyll is a popular Static Site Generator (SSG) written in the Ruby programming language.

Instead of using a heavy database or server-side code (like WordPress or PHP), Jekyll takes plain text files—specifically Markdown files and HTML templates—and compiles them into a pure, lightning-fast static website consisting only of HTML, CSS, and JavaScript.

# Why is Jekyll famous?
Native GitHub Pages Support: GitHub has built-in support for Jekyll. If you push a Jekyll project to GitHub, GitHub Pages can automatically build and host it without needing external CI/CD workflows like GitHub Actions.

**Zero Database:** No database vulnerabilities, no slow backend queries, and high security.

**Great for Documentation and Blogs:** Many developer blogs and documentation sites (using themes like Minimal Mistakes or Just the Docs) are built on Jekyll.

**Note:** The catch is that Jekyll requires Ruby installed locally to build and test your site, which is why you saw that Ruby installation prompt earlier when working with GitHub's default templates.

# Jekyll Beginner's Guide & Workflow
Here is a complete guide you can save as a Markdown file (e.g., docs/jekyll-guide.md) in your project or use as a reference for understanding how Jekyll operates.

# Beginner's Guide to Jekyll: Workflow & Deployment

## 1. Understanding the Jekyll Directory Structure
When you initialize a Jekyll site, it comes with a specific folder layout. Every folder has a distinct job:

```sh
my-jekyll-site/
├── _config.yml         # Global site settings (title, description, theme)
├── _posts/             # Markdown files for blog posts (named YYYY-MM-DD-title.md)
├── _pages/             # Custom pages (About, Projects, Contact)
├── _layouts/           # HTML templates wrapping your content
├── _includes/          # Reusable components (navbars, footers, head tags)
├── assets/             # CSS, JavaScript, and images
└── index.md            # Your homepage content
```

# Tips and Tricks 
write Markdown in any editor, then put it in the right source folder. Jekyll builds that content into web pages; Markdown isn’t executed like a program. A few habits will prevent missing pages and broken navigation:

Use the right folder. Put projects in _projects and handbook articles in _handbook. Both are configured collections, so nested folders work and their pages get the matching layouts. Files under docs are regular pages: they need to be linked from an index or another page to be easy to find.
Add front matter first. Collection files need it to be discovered and receive the right layout. For example:

Then write Markdown below the closing ---. The missing front matter was why groups.md initially didn’t render.
# 2. The Core Jekyll Workflow
Working with Jekyll follows a simple three-step cycle: Write, Preview, and Compile.

Step A: Write Content with Front Matter
Every file in Jekyll starts with Front Matter (YAML configuration enclosed by --- dashes) followed by standard Markdown content:

---
layout: default
title: "Getting Started with ESP32"
date: 2026-10-09
category: "Embedded Systems"
---

## Introduction
Write your technical documentation or blog post here using standard **Markdown**!


Use descriptive filenames. Prefer pkgbuild-files.md over PKGBUILD Files.md. Simple lowercase names with hyphens produce cleaner, more predictable URLs.
Make navigation part of the content. Jekyll doesn’t automatically create a menu for every directory. For folders under docs, use an index.md with links to its child folders and pages. Handbook pages get related links by category; add clear links between sections when readers need a specific path through them.
Keep images and downloads in a source-assets folder. For example, use assets/images/ and link to them from Markdown. Don’t copy generated files from _site; that directory is build output, not source.
Use simple Markdown for tables. Very wide tables are hard to read on phones. Also, raw HTML inside Markdown table cells may display as literal escaped markup—as happened in the generated APT groups page. Prefer plain Markdown cell content or split dense data into individual pages.

# Step B: Local Testing (The Preview Phase)
Because Jekyll runs on Ruby, testing your site locally requires Ruby and the GitHub Pages gem installed on your machine:

Install Ruby and Bundler (depending on your OS, e.g., sudo apt install ruby-full or sudo pacman -S ruby).

Install dependencies:
```sh
bundle init
bundle add github-pages
```

Start the local development server:

```Bash
bundle exec jekyll serve
```
Preview before publishing. Run jekyll serve and browse http://127.0.0.1:4000; run jekyll build before pushing. Check the build output for errors and warnings. Don’t edit _site directly.
Remember GitHub Pages constraints. Its built-in Jekyll publishing supports a fixed set of plugins and theme configuration. A custom plugin that works on your computer may not work when Pages builds the site.
For this project, the main places to work are _projects/, _handbook/, and [docs/] (docs/). The collection and permalink rules are in _config.yml, and the shared page layout is in _layouts/.

# 3. The Deployment Phases
Deploying a Jekyll site to GitHub Pages is one of the smoothest deployment pipelines available because GitHub handles the build process for you.

Phase 1: Push Source Code to GitHub
You push your raw Jekyll source files (_config.yml, _posts/, index.md, etc.) directly to your GitHub repository (e.g., to the main branch). You do not push the compiled HTML.

Phase 2: GitHub's Automated Build
Once your code reaches GitHub:

GitHub detects the Jekyll configuration.

It automatically provisions a secure Ruby environment on their servers.

It runs jekyll build, converting all your Markdown files and Liquid templates into a static _site directory.