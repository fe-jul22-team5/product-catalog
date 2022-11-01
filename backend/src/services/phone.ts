'use strict';

import { Phone } from '../types/phone';
import { PhoneFull } from '../types/phoneFull';
import {
  getPhonesFromJSON,
  getPhonesDescriptionFromDir,
} from '../helpers/getPhones.js';

const pathToPhoneJSON = './api_data/phones.json';
const pathToPhonesDescriptionDir = './api_data/phones/';

const phones: Phone[] = getPhonesFromJSON(pathToPhoneJSON);
const phonesDescriptions: PhoneFull[] = getPhonesDescriptionFromDir(pathToPhonesDescriptionDir);

export function getAll() {
  return phones;
}

export function getPhoneDescriptionById(phoneId: string) {
  const foundPhone = phonesDescriptions.find((phone) => phone.id === phoneId);

  return foundPhone;
}

// export function getPhonesByRange(from: string, to: string) {

// }
