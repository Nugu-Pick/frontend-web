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
    styles/          #   theme.css.ts — token contract + light/dark + reset
    test/            #   renderWithProviders() helper
    ui/              #   (later) design-system primitives
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
- **Data fetching:** Server Components fetch directly / `prefetchQuery` +
  `HydrationBoundary`; `useQuery` on the client is for interactive state
  (pagination, polling, optimistic updates).
- **`"use client"`:** push the boundary as low as possible — interactive
  `shared/ui` primitives and hook-using `features/*`; keep `views`/`widgets`
  as server components where possible.
- **Path alias:** `@/*` → `src/*` (e.g. `@/shared/api`, `@/views/home`).
- `src/views/home/ui/example-query.tsx` is a throwaway demo of the Query
  wiring — delete it once real features land.
