import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to access the body of the request

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("listening on port:" + PORT);
});
