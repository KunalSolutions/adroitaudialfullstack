import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

console.log(process.env.MONGO_URI);

try {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected:", conn.connection.host);
} catch (err) {
  console.error(err);
}