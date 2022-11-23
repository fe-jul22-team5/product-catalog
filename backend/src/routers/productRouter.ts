'use strict';

import express from 'express';
import {
  getAllProducts,
  getProductDescriptionById,
  getAllProductsCount,
  getProductRecommendationsById,
  getHotPrices,
} from '../controllers/phone.js';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/count', getAllProductsCount);
productRouter.get('/hotprices', getHotPrices);
productRouter.get('/:id', getProductDescriptionById);
productRouter.get('/:id/recommended', getProductRecommendationsById);
