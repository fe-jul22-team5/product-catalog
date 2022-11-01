'use strict';

import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import cors from 'cors';
import { productRouter } from './routers/productRouter.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

app.use(cors());
app.use('/public', express.static(path.join(__dirname + '../src/public')));
app.use('/product', express.json(), productRouter);

console.log('ok');

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PORT || PORT}`);
});

