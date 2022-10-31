'use strict';

import express from 'express';
import {
  getAllProducts,
} from '../controllers/phone.js';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
