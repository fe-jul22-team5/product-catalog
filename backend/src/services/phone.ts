'use strict';

import { Phone } from '../types/phone';
import { getPhonesFromJSON } from '../api/getPhones.js';

const pathToPhoneJSON = './api_data/phones.json';
const pathToPhonesDescriptionDir = './api_data/phones/';

const phones = getPhonesFromJSON(pathToPhoneJSON);

export function getAll() {
  return phones;
}

export function getPhone(id: string) {
  const foundPhone = phones.find((phone) => phone.id === id);

  return foundPhone;
}
