import { Params } from '../types/params';
import { Phone } from '../types/phone';
import { PhonesCount } from '../types/phonesCount';
import { SortTypes } from '../types/sortTypes';

import { client } from './fetchClient';

const productEndPoint = '/product';
const countOfProductsEndPoint = productEndPoint + '/count';

export const getPhones = async (
  page: string,
  count: string,
  sortType: SortTypes = SortTypes.alphabetically,
) => {
  const params: Params = {
    sort: sortType,
    page,
    count,
  };

  const phones = await client.get<Phone[]>(productEndPoint, params);

  console.log(params);

  return phones;
};

export const getCountOfPhones = async () => {
  const count = await client.get<PhonesCount>(countOfProductsEndPoint);

  return count;
};
