'use strict';

import {
  Request,
  Response,
} from 'express';

import {
  getAll,
  getPhoneById,
} from '../services/phone.js';

export const getAllProducts = (req: Request, res: Response) => {
  const products = getAll();

  res.statusCode = 200;
  res.send(products);
};

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;

  const phone = getPhoneById(id);

  console.log(phone);

  if (phone === undefined) {

    res.statusCode = 404;
    res.send();

    return;
  }

  res.statusCode = 200;
  res.send(phone);
};
