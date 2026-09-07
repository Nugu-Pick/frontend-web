import { ExampleQuery } from "./example-query";
import * as styles from "./home-page.css";

export function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>nugupick</h1>
      <p className={styles.subtitle}>
        Next.js App Router · TypeScript · TanStack Query · vanilla-extract · Biome · Vitest
      </p>
      <ExampleQuery />
    </main>
  );
}
