"use strict";
import express from "express";
import cors from "cors";
import { productRouter } from "./routers/productRouter.js";
const PORT = 3000;
const app = express();
app.use(cors());
app.use("/product", express.json(), productRouter);
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT || PORT}`);
});
