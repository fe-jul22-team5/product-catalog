'use strict';

import {
  Request,
  Response,
} from 'express';

import {
  getAll,
  getPhoneDescriptionById,
} from '../services/phone.js';

import { SortTypes } from '../types/sortTypes.js';

import { sortBy } from '../helpers/phoneSort.js';
import { getRange } from '../helpers/getRange.js';

export const getAllProducts = (req: Request, res: Response) => {
  const {
    from,
    to,
    sort,
  } = req.query;

  let products = getAll();

  if (sort) {
    if (!Object.values(SortTypes).includes(sort as SortTypes)) {
      res.statusCode = 404;
      res.send('This type of sort is not supported');

      return;
    }

    products = sortBy(products, sort as SortTypes);
  }

  if (from && to) {
    const fromNumber = Number(from);
    const toNumber = Number(to);

    if (!(Number.isInteger(fromNumber) && Number.isInteger(toNumber))) {
      res.statusCode = 404;
      res.send('Range parameters must be an integer');

      return;
    }

    products = getRange(products, fromNumber, toNumber);
  }

  res.statusCode = 200;
  res.send(products);
};

export const getProductDescriptionById = (req: Request, res: Response) => {
  const { id } = req.params;

  const phone = getPhoneDescriptionById(id);

  console.log(phone);

  if (phone === undefined) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(phone);
};

export const getAllProductsCount = (req: Request, res: Response) => {
  const products = getAll();
  const count = products.length;

  console.log('count');

  res.statusCode = 200;
  res.send({ count });
};
