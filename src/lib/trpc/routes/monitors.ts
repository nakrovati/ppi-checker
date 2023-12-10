import { db } from "$lib/db";
import { t } from "$lib/trpc/t";
import { parse, string } from "valibot";

export const monitorsRouter = t.router({
  search: t.procedure
    .input((input) => parse(string(), input))
    .query(({ input }) => db.getDisplaysByString(input)),
});
