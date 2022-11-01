import { Params } from '../types/params';
import { Phone } from '../types/phone';
import { SortTypes } from '../types/sortTypes';

import { client } from './fetchClient';

const productEndPoint = '/product';

export const getPhones = async (
  from?: number,
  to?: number,
  sortType: SortTypes = SortTypes.alphabetically,
) => {
  const params: Params = { sort: sortType };

  if (Number.isInteger(from) && Number.isInteger(to)) {
    params.from = from?.toString();
    params.to = to?.toString();
  }

  const phones = await client.get<Phone[]>(productEndPoint, params);

  return phones;
};

