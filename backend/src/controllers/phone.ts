'use strict';

import {
  getAll,
  getPhone,
} from '../services/phone.js';

export const getAllProducts = (req, res) => {
  const products = getAll();

  console.log('products requested');

  res.statusCode = 200;
  res.send(products);
};
