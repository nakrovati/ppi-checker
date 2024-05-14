export function round(num: number, precision = 0): number {
  const factor = 10 ** precision;
  const rounded = Math.round(num * factor) / factor;
  return rounded === 0 ? 0 : rounded;
}
