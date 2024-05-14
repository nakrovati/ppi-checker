import { monitorsRouter } from "./routes/monitors";
import { t } from "./t";

export const router = t.router({
  monitors: monitorsRouter,
});

export type Router = typeof router;
