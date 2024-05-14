interface CalculatePPIOptions {
  diagonal: number;
  horizontalResolution: number;
  verticalResolution: number;
}

export function calculatePPI({
  diagonal,
  horizontalResolution,
  verticalResolution,
}: CalculatePPIOptions) {
  return +(
    Math.sqrt(verticalResolution ** 2 + horizontalResolution ** 2) / diagonal
  ).toFixed(2);
}
