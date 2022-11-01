import { Phone } from '../types/phone';

import { client } from './fetchClient';

const productEndPoint = '/product';

export const getPhones = async () => {
  const phones = await client.get<Phone[]>(productEndPoint);

  return phones;
};

