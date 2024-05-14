import alienware from "$lib/shared/services/db/displays/alienware.json";
import apple from "$lib/shared/services/db/displays/apple.json";
import dell from "$lib/shared/services/db/displays/dell.json";
import lg from "$lib/shared/services/db/displays/lg.json";
import samsung from "$lib/shared/services/db/displays/samsung.json";

const displays = [...alienware, ...apple, ...dell, ...samsung, ...lg];

export interface Display {
  diagonal: number;
  name: string;
  resolution: {
    height: number;
    width: number;
  };
}

class Database {
  displays: Display[];

  constructor(displays: Display[]) {
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
