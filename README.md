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

