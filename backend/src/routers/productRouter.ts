'use strict';

import express from 'express';
import {
  getAllProducts,
  getProductDescriptionById,
  getAllProductsCount,
} from '../controllers/phone.js';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/count', getAllProductsCount);
productRouter.get('/:id', getProductDescriptionById);
