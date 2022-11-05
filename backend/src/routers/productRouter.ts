'use strict';

import express from 'express';
import {
  getAllProducts,
  getProductDescriptionById,
  getAllProductsCount,
  getProductRecommendationsById,
} from '../controllers/phone.js';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/count', getAllProductsCount);
productRouter.get('/:id', getProductDescriptionById);
productRouter.get('/:id/recommended', getProductRecommendationsById);
