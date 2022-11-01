'use strict';

import { Phone } from '../types/phone';
import { PhoneFull } from '../types/phoneFull';
import fs from 'fs';

export function getPhonesDescriptionFromDir(pathToDir: string) {

  const allData: PhoneFull[] = [];

  const files = fs.readdirSync(pathToDir);

  files.forEach((file) => {
    allData.push(getData(`${pathToDir}${file}`));
  });

  return allData;
}

export function getPhonesFromJSON(pathToJSON: string) {

  const allData: Phone[] = [];
  const phones = getData(pathToJSON);

  allData.push(...phones);

  return allData;
}

function getData(pathToFile: string) {
  try {
    const fileData = fs.readFileSync(pathToFile, 'utf8');

    const parsedData = JSON.parse(fileData);

    return parsedData;
  } catch (error) {
    console.log('Error occurred when loadind a file', error);
  }
}
