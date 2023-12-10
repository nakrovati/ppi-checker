import { monitorsRouter } from "$lib/trpc/routes/monitors";
import { t } from "$lib/trpc/t";

export const router = t.router({
  monitors: monitorsRouter,
});

export type Router = typeof router;
