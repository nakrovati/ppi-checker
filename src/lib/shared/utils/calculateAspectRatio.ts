const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

export function calculateAspectRatio(width: number, height: number) {
  const aspectRatio = gcd(width, height);
  const aspectRatioString = `${width / aspectRatio}/${height / aspectRatio}`;

  return aspectRatioString;
}
