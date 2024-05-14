interface CalculatePpiOptions {
  diagonal: number;
  horizontalResolution: number;
  verticalResolution: number;
}

export function calculatePpi({
  diagonal,
  horizontalResolution,
  verticalResolution,
}: CalculatePpiOptions): number {
  const ppi = Math.hypot(verticalResolution, horizontalResolution) / diagonal;
  return +ppi.toFixed(2);
}
