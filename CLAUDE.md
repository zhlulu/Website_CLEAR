# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Public website for the **CLEAR Center** — *Center for All-Clear SEP Forecast* — a NASA Space Weather Center of Excellence led by PI Lulu Zhao (University of Michigan, CLaSP), building an integrated prediction framework for Solar Energetic Particles (SEPs). The site is informational/static; there is no auth, no backend, no CMS.

## Commands

```bash
npm install         # first-time setup
npm run dev         # local dev server at http://localhost:4321
npm run build       # static build → dist/
npm run preview     # serve the built site locally
```

There is no test suite. The build itself is the primary verification: `npm run build` will fail on type errors, broken Markdown frontmatter, or broken content-collection schemas.

## Architecture

Astro 4 + Tailwind 3, fully static output.

- **`src/layouts/BaseLayout.astro`** — the single site shell (head, `<Header>`, `<Footer>`, skip link). Every page renders inside it; don't duplicate head/nav markup elsewhere.
- **`src/components/Section.astro`** — standard section wrapper with an optional `eyebrow` / `title` / `lede` header block. Use it for new content sections to keep spacing and typography consistent across pages.
- **`src/content/news/`** + **`src/content/config.ts`** — news posts are a typed Astro content collection. Adding a post is *just* dropping a Markdown file with the frontmatter schema (`title`, `date`, `summary`, optional `author`/`tags`); no component edits needed. `src/pages/news/[...slug].astro` renders the detail page automatically.
- **`tailwind.config.mjs`** — University of Michigan brand palette: `maize` (official UM Maize #FFCB05, Pantone 7406) and `umblue` (official UM Blue #00274C, Pantone 282), each as a 50–900 scale. Stick to these tokens rather than raw Tailwind colors (`yellow-*`, `blue-*`) so the palette can be retuned centrally.
- **`src/styles/global.css`** — defines reusable classes (`container-narrow`, `container-wide`, `btn-primary`, `btn-maize`, `btn-secondary`, `eyebrow`, `.starfield`). Prefer these over re-declaring the same utility strings on every page.

### Color use conventions

- Body text & headings on white: `text-umblue-800` or `text-umblue-900`. Maize on white has poor contrast — don't use `text-maize-600/700` for readable body/heading text, only as decorative borders, bullets, badges on tinted backgrounds, or text on dark UM-blue backgrounds.
- `.btn-primary` = solid UM Blue button (default CTA). `.btn-maize` = UM Maize button with UM Blue text, reserved for highlighted CTAs (e.g., hero, accent cards).
- On dark UM-blue backgrounds, accent text should be `text-maize-300/400` (high contrast, iconic UM).

## Content conventions

- The proposal PDF that seeded this site lives at `/Users/zhlulu/University of Michigan Dropbox/Lulu Zhao/03_PROPOSALS/funded/2022/Zhao_SWxC/CLEAR_proposal.pdf`. Treat it as the source of truth for scientific claims — don't invent figures (award amount, forecast horizon, institution list, module names).
- Team data is an inline array in `src/pages/team.astro`. If it grows or changes often, move it to a JSON/TS data file under `src/data/` — don't scatter duplicates across pages.
- The `clear.png` logo in `public/` is the official center logo (copied from the proposal folder). The SVG favicon is a stylized stand-in.

## Deployment

Target: **GitHub Pages** (or Netlify). `astro.config.mjs` currently sets `site: "https://clear.engin.umich.edu"` as a placeholder — update it when the real URL is known, then configure DNS + GitHub Pages custom-domain accordingly.
