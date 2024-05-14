import type { Display } from "$lib/shared/services/db";

import { evaluatePPI } from "../utils";

function isDisplayHaveLargeScreen(display: Display): boolean {
  return display.resolution.height >= 720 && display.resolution.width >= 1280;
}

export function isDisplayCompatibleWithMacOS(
  display: Display,
  ppi: number,
): boolean {
  const isHaveLargeScreen = isDisplayHaveLargeScreen(display);
  const isProductByApple = display.name.includes("Apple");
  const isPpiGood = evaluatePPI(ppi) === "good";

  return isHaveLargeScreen && (isProductByApple || isPpiGood);
}

export function isDisplayCompatibleWithLinux(
  display: Display,
  ppi: number,
): boolean {
  const isHaveLargeScreen = isDisplayHaveLargeScreen(display);
  const isPpiGood = evaluatePPI(ppi) === "good";

  return isHaveLargeScreen && isPpiGood;
}

export function isDisplayCompatibleWithWindows(display: Display): boolean {
  const isHaveLargeScreen = isDisplayHaveLargeScreen(display);
  return isHaveLargeScreen;
}
