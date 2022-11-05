import { Phone } from '../types/phone';

import { client } from './fetchClient';

const productByIdEndPoint = '/product/';

const getRecommendedURL = (phoneId: string) => productByIdEndPoint + phoneId + '/recommended';

export const getRecommendedProductsByProductId = async (phoneId: string) => {
  const recommended = await client.get<Phone[]>(getRecommendedURL(phoneId));

  return recommended;
};
