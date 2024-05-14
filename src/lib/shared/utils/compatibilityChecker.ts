import type { Display } from "$lib/shared/services/db";

import { evaluatePPI } from "./evaluatePPI";

export function isDisplayCompatibleWithMacOS(
  display: Display,
  ppi: number,
): boolean {
  return (
    display.resolution.height >= 720 &&
    display.resolution.width >= 1280 &&
    (display.name.includes("Apple") ?? evaluatePPI(ppi) === "good")
  );
}
export function isDisplayCompatibleWithLinux(
  display: Display,
  ppi: number,
): boolean {
  return (
    display.resolution.height >= 720 &&
    display.resolution.width >= 1280 &&
    evaluatePPI(ppi) === "good"
  );
}
export function isDisplayCompatibleWithWindows(display: Display): boolean {
  return display.resolution.height >= 720 && display.resolution.width >= 1280;
}
