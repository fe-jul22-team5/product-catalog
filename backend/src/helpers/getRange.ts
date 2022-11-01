export function getRange(array: unknown[], from: number, to: number) {
  const range: unknown[] = [];

  for (let i = from; i <= to; i++) {
    range.push(array[i]);
  }

  return range;
}
