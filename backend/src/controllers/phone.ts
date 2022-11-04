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
import { getPage } from '../helpers/getPage.js';

export const getAllProducts = (req: Request, res: Response) => {
  const {
    sort,
    count,
    page
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

  if (count && page && Number.isInteger(Number(count)) && Number.isInteger(Number(page))) {
    products = getPage(products, Number(count), Number(page));
  } else if (count && Number.isInteger(Number(count))) {
    products = getPage(products, Number(count), 0);
  }

  res.statusCode = 200;
  res.send(products);
};

export const getProductDescriptionById = (req: Request, res: Response) => {
  const { id } = req.params;

  const phone = getPhoneDescriptionById(id);

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

  res.statusCode = 200;
  res.send({ count });
};
