import colors from 'colors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import path from 'path';

import connectDB from '#config/db.config.js';
import { errorHandler } from '#middlewares/error.middleware.js';
import orderRoutes from '#routes/order.route.js';
import productRoutes from '#routes/product.route.js';
import uploadRoutes from '#routes/upload.route.js';
import userRoutes from '#routes/user.route.js';
import contactRoutes from "./routes/contactRoutes.js";

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.set('trust proxy', 1); 

app.use(express.json());
app.use(cookieParser()); 

app.use(
	cors({
		origin: [
			'http://localhost:3000',
			'https://www.adroitaudial.in',
			'https://adroitaudial.in',
		],
		credentials: true,
	})
);

app.use(morgan('dev'));

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/upload', uploadRoutes);
app.use("/api/contact", contactRoutes);

app.get('/api/v1/config/razorpay', (req, res) => {
	res.json({ keyId: process.env.RAZORPAY_KEY_ID });
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'upload')));

app.get('/', (req, res) => {
	res.json({
		message: 'API is running...',
	});
});

app.use(errorHandler);

app.listen(port, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${port}.`.cyan.bold
	);
});