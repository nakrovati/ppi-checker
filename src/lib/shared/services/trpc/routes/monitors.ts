import { db } from "$lib/shared/services/db";
import { t } from "$lib/shared/services/trpc/t";
import { parse, string } from "valibot";

export const monitorsRouter = t.router({
  search: t.procedure
    .input((input) => parse(string(), input))
    .query(({ input }) => db.getDisplaysByString(input)),
});
