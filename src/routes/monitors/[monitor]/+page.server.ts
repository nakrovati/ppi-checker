import { db } from "$lib/shared/services/db";
import { error } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
  const searchedMonitor = params.monitor.replaceAll("-", " ");

  const foundMonitor = db.getDisplay(searchedMonitor);

  if (!foundMonitor)
    error(404, { message: `Monitor ${searchedMonitor} not found` });

  return foundMonitor;
};
