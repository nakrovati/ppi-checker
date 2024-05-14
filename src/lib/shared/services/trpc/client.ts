import { type TRPCClientInit, createTRPCClient } from "trpc-sveltekit";

import type { Router } from "./router";

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

export function trpc(init?: TRPCClientInit) {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser && browserClient) return browserClient;
  const client = createTRPCClient<Router>({ init });
  if (isBrowser) browserClient = client;
  return client;
}
