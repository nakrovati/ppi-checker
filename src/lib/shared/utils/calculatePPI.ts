interface CalculatePPIOptions {
  diagonal: number;
  horizontalResolution: number;
  verticalResolution: number;
}

export function calculatePPI({
  diagonal,
  horizontalResolution,
  verticalResolution,
}: CalculatePPIOptions): number {
  const ppi = Math.hypot(verticalResolution, horizontalResolution) / diagonal;
  return +ppi.toFixed(2);
}
