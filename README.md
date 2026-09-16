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
| Docs / visual  | Storybook 10 + Chromatic                  |
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

| Command                | What it does                              |
| ----------------------- | ----------------------------------------- |
| `pnpm dev`             | Dev server (Turbopack)                    |
| `pnpm build`           | Production build                          |
| `pnpm start`           | Serve the production build                |
| `pnpm lint`            | Biome check (lint + format + import sort) |
| `pnpm lint:fix`        | Biome check with `--write`                |
| `pnpm format`          | Biome format only, with `--write`         |
| `pnpm typecheck`       | `tsc --noEmit`                            |
| `pnpm test`            | Vitest (watch)                            |
| `pnpm test:run`        | Vitest (single run)                       |
| `pnpm test:coverage`   | Vitest with V8 coverage                   |
| `pnpm storybook`       | Storybook dev server (port 6006)          |
| `pnpm build-storybook` | Static Storybook build                    |
| `pnpm chromatic`       | Publish Storybook to Chromatic            |

## Git hooks (lefthook)

- **pre-commit** — Biome `check --write` on staged files, re-stages fixes.
- **pre-push** — `pnpm typecheck` + `pnpm test:run`.

## Project layout — Feature-Sliced Design

[FSD](https://feature-sliced.design) adapted to the Next.js App Router: `app/`
stays routing-only, and the FSD `pages` layer is renamed `views` to avoid the
Pages Router name clash.

```
src/
  app/               # Next.js App Router — routing only (+ FSD "app" layer)
    layout.tsx       #   root layout, mounts <Providers>
    providers.tsx    #   "use client" — QueryClientProvider + devtools
    page.tsx         #   thin: renders <HomePage /> from views/home
  views/             # FSD pages layer — route-level compositions
    home/
      ui/            #   home-page.tsx (+ .css.ts), example-query.tsx
      index.ts       #   public API
  widgets/           # (later) self-contained UI blocks — Header, BottomNav
  features/          # (later) user actions — auth/login, pick/vote
  entities/          # (later) domain entities — user, pick
  shared/            # reusable, framework-agnostic
    api/             #   query-client.ts — server/browser QueryClient factory
    config/          #   tokens.ts — PRIMITIVE tokens (palette, space, radius,
                      #     fontFamily, fontWeight — all from Figma exports)
    styles/          #   theme.css.ts   — SEMANTIC color/space/radius/font
                      #     contract, light/dark + reset
                      #   text.css.ts   — named type-scale classes
                      #     (display/heading/body/label × size × weight)
      __stories__/    #   Storybook: Foundations/{Colors,Spacing,Radius,Typography}
    test/             #   renderWithProviders() helper
    ui/               #   (later) design-system primitives
```

**Import rule:** a layer may only import from layers strictly below it
(`app → views → widgets → features → entities → shared`). Never sideways within
a layer. Cross-slice access goes through the slice's `index.ts` only. Not
enforced by a linter yet — add [Steiger](https://github.com/feature-sliced/steiger)
later.

## Conventions

- **Styling:** every component that needs styles gets a sibling `*.css.ts`.
  Reference design tokens through `vars` from `@/shared/styles/theme.css` — no
  raw hex values in component styles.
- **Design tokens — two tiers, from Figma exports:**
  `shared/config/tokens.ts` holds primitives — `palette` (`palette.orange[500]`
  …), `space` (`4`–`64` px), `radius` (`8`–`24`, `full`), `fontFamily`,
  `fontWeight`. `shared/styles/theme.css.ts` builds the semantic contract
  mirroring Figma's Semantic collection:
  `vars.color.{background,text,icon,fill,border}.*` mapped per Light/Dark
  mode, plus static `vars.space[16]`, `vars.radius[12]`, `vars.font.*`.
  `shared/styles/text.css.ts` builds named type-scale classes (`text.body.md.regular`
  …) from the same primitives — these are compiled classes, not `vars`, since
  they don't change between themes. Components use `vars.*` / `text.*` only —
  never import `tokens.ts` directly. Only `color.*` swaps between themes
  (`prefers-color-scheme`, or `[data-theme]` for a manual/Storybook override).
  Pretendard has no `@font-face` wired up yet (`next/font/local` + woff2
  pending) — it falls back through the system Korean sans stack.
- **Data fetching:** Server Components fetch directly / `prefetchQuery` +
  `HydrationBoundary`; `useQuery` on the client is for interactive state
  (pagination, polling, optimistic updates).
- **`"use client"`:** push the boundary as low as possible — interactive
  `shared/ui` primitives and hook-using `features/*`; keep `views`/`widgets`
  as server components where possible.
- **Path alias:** `@/*` → `src/*` (e.g. `@/shared/api`, `@/views/home`).
- `src/views/home/ui/example-query.tsx` is a throwaway demo of the Query
  wiring — delete it once real features land.

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
