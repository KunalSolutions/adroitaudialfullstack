import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";

import Product from "./models/product.model.js";

dotenv.config({ path: "./.env" });

await mongoose.connect(process.env.MONGO_URI);

const products = JSON.parse(
  fs.readFileSync("./convertedProducts.json", "utf8")
);

await Product.deleteMany();

await Product.insertMany(
  products.map((p) => ({
    ...p,
    user: "686f1234567890abcdef1234"
  }))
);

console.log("Products Imported Successfully");

process.exit();