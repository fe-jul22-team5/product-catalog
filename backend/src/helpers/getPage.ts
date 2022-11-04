import { Phone } from '../types/phone';

export function getPage(arr: Phone[], count: number, page: number) {
  const from = page * count;

  const to = from + count;

  const sliced = arr.slice(from, to);

  return sliced;
}
