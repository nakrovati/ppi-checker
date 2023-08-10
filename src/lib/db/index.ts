import type { DisplaysList } from "$lib/types/models";

import appleDisplays from "$lib/db/displays/apple.json";
import lgDisplays from "$lib/db/displays/lg.json";
import samsungDisplays from "$lib/db/displays/samsung.json";

const displays = [...appleDisplays, ...samsungDisplays, ...lgDisplays];

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
