import { SortTypes } from '../types/sortTypes.js';

import { Phone } from '../types/phone';

export function sortBy(array: Phone[], filterType: SortTypes) {
  let filterCallback;

  switch (filterType) {
  case SortTypes.cheap:
    filterCallback = (phoneA: Phone, phoneB: Phone) => phoneA.price - phoneB.price;
    break;
  case SortTypes.novelty:
    filterCallback = (phoneA: Phone, phoneB: Phone) => phoneB.year - phoneA.year;
    break;

  default:
    filterCallback = (phoneA: Phone, phoneB: Phone) => phoneA.name.localeCompare(phoneB.name);
    break;
  }

  const filteredArray = array.sort(filterCallback);

  return filteredArray;
}
