import OrderModel from '#models/order.model.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';

const createRazorpayOrder = async (req, res) => {
	try {
		console.log('RAZORPAY_KEY_ID:', process.env.RAZORPAY_KEY_ID);
		console.log('SECRET EXISTS:', !!process.env.RAZORPAY_KEY_SECRET);

		const razorpay = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID,
			key_secret: process.env.RAZORPAY_KEY_SECRET,
		});

		const { amount } = req.body;

		const options = {
			amount: amount * 100,
			currency: 'INR',
			receipt: `rcpt_${Date.now()}`,
		};

		const order = await razorpay.orders.create(options);

		res.json(order);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};
/**
 * @desc		Create new order
 * @route		POST /api/orders
 * @access	Private
 */
const createOrder = async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		shippingPrice,
		taxPrice,
		totalPrice,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error('No order items');
	} else {
		const order = new OrderModel({
			orderItems: orderItems.map((item) => ({
				...item,
				product: { ...item },
			})),
			user: req.user._id,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			shippingPrice,
			taxPrice,
			totalPrice,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}
};

/**
 * @desc		Get logged in user's order
 * @route		GET /api/orders/my-orders
 * @access	Private
 */
const getMyOrders = async (req, res) => {
	const orders = await OrderModel.find({ user: req.user._id });
	res.status(200).json(orders);
};

/**
 * @desc		Get order by ID
 * @route		GET /api/orders/:id
 * @access	Private
 */
const getOrderById = async (req, res) => {
	const order = await OrderModel.findById(req.params.id).populate(
		'user',
		'name email'
	);

	if (order) {
		res.status(200).json(order);
	} else {
		res.status(404);
		throw new Error('Order not found');
	}
};


/**
 * @desc    Update order to paid
 * @route   PUT /api/orders/:id/pay
 * @access  Private
 */
const updateOrderToPaid = async (req, res) => {
	const order = await OrderModel.findById(req.params.id);

	if (!order) {
		res.status(404);
		throw new Error('Order not found');
	}

	const {
		razorpay_order_id,
		razorpay_payment_id,
		razorpay_signature,
	} = req.body;

	// 1. Create expected signature
	const generatedSignature = crypto
		.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
		.update(razorpay_order_id + '|' + razorpay_payment_id)
		.digest('hex');

	// 2. Verify signature
	if (generatedSignature !== razorpay_signature) {
		res.status(400);
		throw new Error('Invalid payment signature');
	}

	// 3. Mark order as paid ONLY after verification
	order.isPaid = true;
	order.paidAt = Date.now();

	order.paymentResult = {
		razorpay_order_id,
		razorpay_payment_id,
		razorpay_signature,
		status: 'success',
	};

	const updatedOrder = await order.save();

	res.status(200).json(updatedOrder);
};

/**
 * @desc    Update order to delivered
 * @route   PUT /api/orders/:id/deliver
 * @access  Private/Admin
 */
const updateOrderToDelivered = async (req, res) => {
	const order = await OrderModel.findById(req.params.id);

	if (order) {
		order.isDelivered = true;
		order.deliveredAt = Date.now();

		const updatedOrder = await order.save();
		res.status(200).json(updatedOrder);
	} else {
		res.status(404);
		throw new Error('Order not found');
	}
};

/**
 * @desc		Get all orders
 * @route		GET /api/orders
 * @access	Private/Admin
 */
const getOrders = async (req, res) => {
	const orders = await OrderModel.find({}).populate('user', 'name email');
	res.status(200).json(orders);
};

export {
	createOrder,
	getMyOrders,
	getOrderById,
	getOrders,
	updateOrderToDelivered,
	updateOrderToPaid,
	createRazorpayOrder,
};
