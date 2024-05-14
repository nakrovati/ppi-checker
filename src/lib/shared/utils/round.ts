export function round(number: number, decimal = 0) {
  const rounded = parseFloat(number.toFixed(decimal));

  if (decimal === 2 || rounded === 0 || (decimal === 1 && rounded % 1 === 0)) {
    return rounded;
  } else {
    return round(number, decimal + 1);
  }
}
