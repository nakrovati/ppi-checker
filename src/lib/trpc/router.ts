import type { Context } from "$lib/trpc/context";

import { db } from "$lib/db";
import { initTRPC } from "@trpc/server";
import { string } from "valibot";

export const t = initTRPC.context<Context>().create();

export const router = t.router({
  findMonitors: t.procedure
    .input(string())
    .query(({ input }) => db.getDisplaysByString(input)),
});

export type Router = typeof router;
