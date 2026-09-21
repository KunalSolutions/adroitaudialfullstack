import colors from 'colors';
import dotenv from 'dotenv';

import connectDB from '#config/db.config.js';
import products from '#data/products.data.js';
import UserModel from '#models/user.model.js';
import ProductModel from '#models/product.model.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const adminUser = await UserModel.findOne();

    if (!adminUser) {
      console.log('No user found. Please create a user first.'.red);
      process.exit(1);
    }

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser._id,
      };
    });

    await ProductModel.insertMany(sampleProducts);

    console.log('Products Imported Successfully'.bgGreen);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.underline);
    process.exit(1);
  }
};

importData();