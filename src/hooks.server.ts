import type { Handle } from "@sveltejs/kit";

import { createContext } from "$lib/shared/services/trpc/context";
import { router } from "$lib/shared/services/trpc/router";
import { createTRPCHandle } from "trpc-sveltekit";

export const handle: Handle = createTRPCHandle({ createContext, router });
