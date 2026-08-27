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

## Project layout

```
src/
  app/                 # App Router routes
    layout.tsx         # root layout, mounts <Providers>
    providers.tsx      # "use client" — QueryClientProvider + devtools
    page.tsx
    page.css.ts        # vanilla-extract styles for the route
    _components/        # route-local components (underscore = not a route)
  lib/
    query/query-client.ts   # server/browser QueryClient factory
  styles/
    theme.css.ts       # design-token contract + light/dark themes + reset
  test/
    render.tsx         # renderWithProviders() test helper
```

## Conventions

- **Styling:** every component that needs styles gets a sibling `*.css.ts`.
  Reference design tokens through `vars` from `@/styles/theme.css` — no raw
  hex values in component styles.
- **Data fetching:** Server Components fetch directly / `prefetchQuery` +
  `HydrationBoundary`; `useQuery` on the client is for interactive state
  (pagination, polling, optimistic updates).
- **Path alias:** `@/*` → `src/*`.
- `src/app/_components/example-query.tsx` is a throwaway demo of the Query
  wiring — delete it once real features land.
