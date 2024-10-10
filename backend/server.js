import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to access the body of the request

app.post("/api/products", async (req, res) =>
{
  const product = req.body; // user will send this data

  if(!product.name && !product.image && !product.price)
  {
    return res.status(400).json({message: "All fields are required"});
  }
   const newProduct = new Product(product);

   try {
    await newProduct.save();
    res.status(201).json(newProduct);
   } catch (error) {
    console.log("Error in create product: " + error);
   }
});

app.delete("/api/products/:id", async (req, res) =>
{
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({message: "Product not found"});
  }
  await Product.findByIdAndDelete({_id: id});
  res.json({message: "Product deleted successfully"});
});

app.listen(5000, () =>
{
  connectDB();
  console.log("listening on port 5000");
});
