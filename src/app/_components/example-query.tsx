"use client";

import { useQuery } from "@tanstack/react-query";
import * as styles from "../page.css";

/**
 * Throwaway example that proves the TanStack Query provider is wired up.
 * Delete this once real data fetching exists.
 */
export function ExampleQuery() {
  const { data, isPending } = useQuery({
    queryKey: ["example", "greeting"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return { message: "TanStack Query is working" };
    },
  });

  return <div className={styles.card}>{isPending ? "loading…" : data?.message}</div>;
}
