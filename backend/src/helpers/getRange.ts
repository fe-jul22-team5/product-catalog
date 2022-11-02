/* eslint-disable @typescript-eslint/no-explicit-any */
export function getRange(array: any[], from: number, to: number) {
  const range: any[] = [];

  for (let i = from - 1; i <= to - 1; i++) {
    range.push(array[i]);
  }

  return range;
}
