import { Phone } from '../types/phone';
import { client } from './fetchClient';

const productHotPricesEndpoint = '/product/hotprices';

const getHotPricesURL = (discount: string) => productHotPricesEndpoint + `?discount=${discount}`;

export const getHotPrices = async (discount: string) => {
  const hotPhones = await client.get<Phone[]>(getHotPricesURL(discount).toString());

  return hotPhones;
};
