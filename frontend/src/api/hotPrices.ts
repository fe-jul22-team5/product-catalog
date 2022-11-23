import { Phone } from '../types/phone';
import { client } from './fetchClient';

const productByIdEndPoint = '/product/';

const getHotPricesURL = (discount: string) => {
  const url = new URL(productByIdEndPoint + 'hotprices');
  url.search = new URLSearchParams({ discount }).toString();

  return url;
};

export const getHotPrices = async (discount: string) => {
  const recommended = await client.get<Phone[]>(getHotPricesURL(discount).toString());

  return recommended;
};
