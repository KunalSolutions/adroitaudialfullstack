import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import CheckoutSteps from '@components/CheckoutSteps';
import Loader from '@components/Loader';
import { clearCartItems } from '@slices/cartSlice';
import {
	useCreateOrderMutation,
	useCreateRazorpayOrderMutation,
	useVerifyRazorpayPaymentMutation,
} from '@slices/orderApiSlice';

const PlaceOrderScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		if (!cart.shippingAddress.address) {
			navigate('/shipping');
		} else if (!cart.paymentMethod) {
			navigate('/payment');
		}
	}, [cart.shippingAddress, cart.paymentMethod, navigate]);

	const [createOrder, { isLoading }] = useCreateOrderMutation();
	const [createRazorpayOrder] = useCreateRazorpayOrderMutation();
	const [verifyRazorpayPayment] = useVerifyRazorpayPaymentMutation();

	// const handlerPlaceOrder = async () => {
	// 	try {
	// 		// Create MongoDB order first
	// 		const createdOrder = await createOrder({
	// 			orderItems: cart.cartItems,
	// 			shippingAddress: cart.shippingAddress,
	// 			paymentMethod: cart.paymentMethod,
	// 			itemsPrice: cart.itemsPrice,
	// 			shippingPrice: cart.shippingPrice,
	// 			taxPrice: cart.taxPrice,
	// 			totalPrice: cart.totalPrice,
	// 		}).unwrap();

	// 		// COD Flow
	// 		if (cart.paymentMethod === 'COD') {
	// 			dispatch(clearCartItems());
	// 			navigate(`/order/${createdOrder._id}`);
	// 			return;
	// 		}

	// 		// Razorpay Flow
	// 		// Razorpay Flow
	// 		if (cart.paymentMethod === 'Razorpay') {
	// 		console.log('Step 1: Razorpay selected');

	// 		const razorpayOrder = await createRazorpayOrder(
	// 			cart.totalPrice
	// 		).unwrap();

	// 		console.log('Step 2: Razorpay order created', razorpayOrder);

	// 		console.log('window.Razorpay =', window.Razorpay);

	// 		const options = {
	// 			key: import.meta.env.VITE_RAZORPAY_KEY_ID,
	// 			amount: razorpayOrder.amount,
	// 			currency: razorpayOrder.currency,
	// 			name: 'Adroit Audial',
	// 			description: 'Order Payment',
	// 			order_id: razorpayOrder.id,

	// 			handler: async function (response) {
	// 			console.log('Step 3: Payment success', response);
	// 			},
	// 		};

	// 		const rzp = new window.Razorpay(options);

	// 		console.log('Step 4: Opening popup');

	// 		rzp.open();
	// 		}
	// 	} catch (error) {
	// 		toast.error(error?.data?.message || 'Something went wrong');
	// 	}
	// };

	const handlerPlaceOrder = async () => {
	try {
		console.log('Payment Method:', cart.paymentMethod);

		const createdOrder = await createOrder({
			orderItems: cart.cartItems,
			shippingAddress: cart.shippingAddress,
			paymentMethod: cart.paymentMethod,
			itemsPrice: cart.itemsPrice,
			shippingPrice: cart.shippingPrice,
			taxPrice: cart.taxPrice,
			totalPrice: cart.totalPrice,
		}).unwrap();

		console.log('Mongo Order Created:', createdOrder);

		if (cart.paymentMethod === 'COD') {
			console.log('COD Flow');
			dispatch(clearCartItems());
			navigate(`/order/${createdOrder._id}`);
			return;
		}

		if (cart.paymentMethod === 'Razorpay') {
			console.log('Razorpay Flow Started');

			const razorpayOrder = await createRazorpayOrder(
				cart.totalPrice
			).unwrap();

			console.log('Razorpay Order:', razorpayOrder);

			console.log('window.Razorpay:', window.Razorpay);

			const rzp = new window.Razorpay({
				key: import.meta.env.VITE_RAZORPAY_KEY_ID,
				amount: razorpayOrder.amount,
				currency: razorpayOrder.currency,
				order_id: razorpayOrder.id,

				handler: async function (response) {
					try {
					await verifyRazorpayPayment({
						orderId: createdOrder._id,
						paymentData: response,
					}).unwrap();

					dispatch(clearCartItems());

					toast.success('Payment successful');

					navigate(`/order/${createdOrder._id}`);
					} catch (error) {
					toast.error(
						error?.data?.message || 'Payment verification failed'
					);
					}
				},
				});

			console.log('Opening Razorpay');

			rzp.open();
		}
	} catch (error) {
		console.log('ERROR:', error);
		toast.error(error?.data?.message || 'Something went wrong');
	}
};
	return (
		<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-12">

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

				{/* Checkout Steps */}
				<div className="mb-12 flex justify-center">
				<CheckoutSteps step1 step2 step3 step4 />
				</div>

				{/* Header */}
				<div className="mb-12 text-center">

				<h1 className="mt-4 text-4xl md:text-5xl font-black text-[#232466]">
					Review & Place Order
				</h1>

				<p className="mt-3 text-slate-500">
					Review your order details before confirming your purchase.
				</p>

				</div>

				<div className="grid lg:grid-cols-12 gap-10">

				{/* LEFT SIDE */}
				<div className="lg:col-span-8">

					{/* Shipping + Payment */}
					<div className="grid md:grid-cols-2 gap-6">

					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

						<h3 className="text-lg font-bold text-[#232466]">
						Shipping Address
						</h3>

						<div className="mt-4 text-slate-600 leading-7">

						<p>{cart.shippingAddress.address}</p>

						<p>
							{cart.shippingAddress.city},{" "}
							{cart.shippingAddress.postalCode}
						</p>

						<p>{cart.shippingAddress.country}</p>

						</div>

					</div>

					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

						<h3 className="text-lg font-bold text-[#232466]">
						Payment Method
						</h3>

						<div className="mt-4">

						<span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
							{cart.paymentMethod}
						</span>

						</div>

					</div>

					</div>

					{/* Order Items */}
					<div className="mt-10">

					<h2 className="text-2xl font-bold text-[#232466]">
						Order Items
					</h2>

					<ul className="mt-6 space-y-5">

						{cart?.cartItems?.map((product) => (

						<li
							key={product._id}
							className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
						>

							<div className="flex flex-col sm:flex-row gap-5">

							<img
								src={product.image}
								alt={product.name}
								className="h-24 w-24 rounded-2xl bg-slate-50 object-contain p-2"
							/>

							<div className="flex flex-1 flex-col justify-between">

								<div>

								<h3 className="font-bold text-[#232466]">
									<Link to={`/shop/${product._id}`}>
									{product.name}
									</Link>
								</h3>

								<p className="mt-2 text-sm text-slate-500">
									Quantity: {product.qty}
								</p>

								</div>

								<div className="mt-3 flex items-center justify-between">

								<span className="text-slate-500">
									₹{product.price} × {product.qty}
								</span>

								<span className="font-bold text-[#232466]">
									₹{product.price * product.qty}
								</span>

								</div>

							</div>

							</div>

						</li>

						))}

					</ul>

					</div>

				</div>

				{/* RIGHT SIDE */}
				<div className="lg:col-span-4">

					<div className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

					{/* Header */}
					<div className="bg-[#232466] p-6 text-white">

						<h2 className="text-2xl font-bold">
						Order Summary
						</h2>

						<p className="mt-1 text-slate-300">
						{cart.cartItems.length} Products
						</p>

					</div>

					<div className="p-6">

						<div className="space-y-5">

						<div className="flex justify-between">
							<span className="text-slate-500">
							Items
							</span>

							<span className="font-semibold text-[#232466]">
							₹{cart.itemsPrice}
							</span>
						</div>

						<div className="flex justify-between">
							<span className="text-slate-500">
							Shipping
							</span>

							<span className="font-semibold text-[#232466]">
							₹{cart.shippingPrice}
							</span>
						</div>

						<div className="flex justify-between">
							<span className="text-slate-500">
							GST (18%)
							</span>

							<span className="font-semibold text-[#232466]">
							₹{cart.taxPrice}
							</span>
						</div>

						<div className="border-t border-dashed border-slate-300 pt-5">

							<div className="flex justify-between">

							<span className="text-xl font-bold text-slate-900">
								Total
							</span>

							<span className="text-3xl font-black text-[#EF5622]">
								₹{cart.totalPrice}
							</span>

							</div>

						</div>

						</div>

						{/* Button */}
						<button
						onClick={handlerPlaceOrder}
						disabled={isLoading}
						className="mt-8 w-full rounded-2xl bg-[#EF5622] px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#232466] disabled:cursor-not-allowed disabled:opacity-70"
						>
						{isLoading ? "Processing..." : "Place Order"}
						</button>

						{isLoading && (
						<div className="mt-6">
							<Loader />
						</div>
						)}

					</div>

        </div>

      </div>

    </div>

  </div>

</div>
	);
};

export default PlaceOrderScreen;
