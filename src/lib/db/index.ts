import type { DisplaysList } from "$lib/types/models";

import alienware from "$lib/db/displays/alienware.json";
import apple from "$lib/db/displays/apple.json";
import dell from "$lib/db/displays/dell.json";
import lg from "$lib/db/displays/lg.json";
import samsung from "$lib/db/displays/samsung.json";

const displays = [...alienware, ...apple, ...dell, ...samsung, ...lg];

class Database {
  displays: DisplaysList;

  constructor(displays: DisplaysList) {
    this.displays = displays;
  }

  getDisplay(name: string) {
    return this.displays.find(
      (display) =>
        display.name.toLocaleLowerCase() === name.toLocaleLowerCase().trim(),
    );
  }

  getDisplaysByString(input: string) {
    return this.displays.filter((display) =>
      display.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
    );
  }
}

const db = new Database(displays);

export { db };
