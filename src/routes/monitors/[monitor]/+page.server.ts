import { db } from "$lib/db";
import { error } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
  const searchedMonitor = params.monitor.replaceAll("-", " ");

  const foundMonitor = db.getDisplay(searchedMonitor);

  if (foundMonitor) {
    return foundMonitor;
  }

  error(404, { message: `Monitor ${searchedMonitor} not found` });
}) satisfies PageServerLoad;
