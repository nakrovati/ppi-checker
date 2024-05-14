type PpiStatuses = "bad" | "good" | "maybe";

export function evaluatePpi(ppi: number): PpiStatuses {
  const basePPI = 110;
  const tolerance = 10;

  const lowerBoundGood = basePPI - tolerance;
  const upperBoundGood = basePPI + tolerance;
  const lowerBoundMaybe = basePPI + tolerance + 1;
  const upperBoundMaybe = basePPI + 2 * tolerance;

  if (ppi >= lowerBoundGood && ppi <= upperBoundGood) {
    return "good";
  } else if (ppi >= lowerBoundMaybe && ppi <= upperBoundMaybe) {
    return "maybe";
  } else {
    return "bad";
  }
}
