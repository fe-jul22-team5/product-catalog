import { Params } from '../types/params';
import { Phone } from '../types/phone';
import { SortTypes } from '../types/sortTypes';

import { client } from './fetchClient';

const productEndPoint = '/product';
const countOfProductsEndPoint = productEndPoint + '/count';

export const getPhones = async (
  from?: string,
  to?: string,
  sortType: SortTypes = SortTypes.alphabetically,
) => {
  const params: Params = { sort: sortType };

  params.from = from;
  params.to = to;

  const phones = await client.get<Phone[]>(productEndPoint, params);

  return phones;
};

export const getCountOfPhones = async () => {
  const count = await client.get(countOfProductsEndPoint);

  return count;
};
