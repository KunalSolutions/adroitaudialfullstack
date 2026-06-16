import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
     console.error("MongoDB Error:");
    console.error(err);
    console.error(err.message);
    console.error(err.stack);
  }
};

export default connectDB;
