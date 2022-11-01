import { PhoneDescription } from '../types/phoneDescription';

import { client } from './fetchClient';


const productByIdEndPoint = '/product/';

export const getPhoneDescription = async (phoneId: string) => {
  const phoneDescription = await client.get<PhoneDescription[]>(productByIdEndPoint + phoneId);

  return phoneDescription[0] || null;
};
