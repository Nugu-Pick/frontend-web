import { defaultShouldDehydrateQuery, isServer, QueryClient } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR we usually want a non-zero staleTime so data isn't refetched
        // immediately on the client after hydration.
        staleTime: 60 * 1000,
      },
      dehydrate: {
        // Also dehydrate pending queries so streamed prefetches hydrate on the client.
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

/**
 * Server: always a fresh client per request.
 * Browser: a singleton, so React suspense during the initial render doesn't
 * throw the client away.
 */
export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }
  browserQueryClient ??= makeQueryClient();
  return browserQueryClient;
}
