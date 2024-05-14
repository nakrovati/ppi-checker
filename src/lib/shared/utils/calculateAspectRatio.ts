const gcd = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

export function calculateAspectRatio(width: number, height: number) {
  const aspectRatio = gcd(width, height);
  const aspectRatioString = `${width / aspectRatio}/${height / aspectRatio}`;

  return aspectRatioString;
}
