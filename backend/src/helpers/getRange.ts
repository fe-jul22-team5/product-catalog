export function getRange(array: any[], from: number, to: number) {
  const range: any[] = [];

  for (let i = from; i <= to; i++) {
    range.push(array[i]);
  }

  return range;
}
