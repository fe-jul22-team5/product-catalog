'use strict';

import express from 'express';
import {
  getAllProducts,
  getProductDescriptionById,
} from '../controllers/phone.js';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductDescriptionById);
