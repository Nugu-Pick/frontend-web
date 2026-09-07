# nugupick — frontend-web

## Stack

| Concern        | Choice                                    |
| -------------- | ----------------------------------------- |
| Framework      | Next.js 16 (App Router) + React 19        |
| Language       | TypeScript (strict, `noUncheckedIndexedAccess`) |
| Package manager| pnpm (`packageManager` pinned)            |
| Server state   | TanStack Query v5                         |
| Styling        | vanilla-extract (`*.css.ts`)              |
| Lint / format  | Biome                                     |
| Unit tests     | Vitest + Testing Library (jsdom)          |
| Git hooks      | lefthook                                  |

Node version is pinned in `.nvmrc` (`nvm use`).

## Getting started

```bash
pnpm install
pnpm dev
```

`pnpm install` runs `lefthook install` via the `prepare` script, so git hooks
are wired up automatically after a fresh clone.

## Scripts

| Command              | What it does                              |
| -------------------- | ----------------------------------------- |
| `pnpm dev`           | Dev server (Turbopack)                    |
| `pnpm build`         | Production build                          |
| `pnpm start`         | Serve the production build                |
| `pnpm lint`          | Biome check (lint + format + import sort) |
| `pnpm lint:fix`      | Biome check with `--write`                |
| `pnpm format`        | Biome format only, with `--write`         |
| `pnpm typecheck`     | `tsc --noEmit`                            |
| `pnpm test`          | Vitest (watch)                            |
| `pnpm test:run`      | Vitest (single run)                       |
| `pnpm test:coverage` | Vitest with V8 coverage                   |
| `pnpm storybook`     | Storybook dev server (port 6006)          |
| `pnpm build-storybook` | Static Storybook build                   |
| `pnpm chromatic`     | Publish Storybook to Chromatic            |

## Storybook

`@storybook/nextjs-vite` (Vite builder — reuses `@vanilla-extract/vite-plugin`).
Stories live next to what they document (`*.stories.tsx`); currently the design
tokens under `src/shared/styles/__stories__/` (`Foundations/*`).

- **Themes:** `@storybook/addon-themes` toolbar toggles `data-theme` on `<html>`
  (light / dark). `theme.css.ts` handles both `prefers-color-scheme` (app
  default) and the `[data-theme]` override.
- **Chromatic:** `.github/workflows/chromatic.yml` runs on every push / PR and
  snapshots each story in light and dark (`chromatic.modes` in
  `.storybook/preview.tsx`). Requires a `CHROMATIC_PROJECT_TOKEN` repo secret —
  create the project at chromatic.com, link `Nugu-Pick/frontend-web`, add the
  token. Run `pnpm chromatic` locally to establish the first baseline.

