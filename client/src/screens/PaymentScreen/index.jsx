import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CheckoutSteps from '@components/CheckoutSteps';
import { savePaymentMethod } from '@slices/cartSlice';

const PaymentScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [paymentMethod, setPaymentMethod] = useState('COD');

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	useEffect(() => {
		if (!shippingAddress) {
			navigate('/shipping');
		}
	}, [shippingAddress, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		navigate('/place-order');
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-12">
			<div className="mx-auto max-w-6xl px-4">
				{/* Checkout Steps */}
				<div className="mb-12 flex justify-center">
					<CheckoutSteps step1 step2 step3 />
				</div>

				<div className="grid lg:grid-cols-12 gap-10">
					{/* Left Side */}
					<div className="lg:col-span-5 hidden lg:block">
						<div className="sticky top-24 rounded-3xl bg-[#232466] p-10 text-white">
							<span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
								Secure Payment
							</span>

							<h2 className="mt-6 text-4xl font-black leading-tight">
								Payment
								<br />
								Method
							</h2>

							<p className="mt-5 text-slate-300 leading-7">
								Choose your preferred payment option to complete
								your order securely.
							</p>

							<div className="mt-10 space-y-4">
								<div className="flex items-center gap-3">
									<span className="text-green-400">✓</span>
									<span>Safe & Secure Checkout</span>
								</div>

								<div className="flex items-center gap-3">
									<span className="text-green-400">✓</span>
									<span>Trusted Payment Processing</span>
								</div>

								<div className="flex items-center gap-3">
									<span className="text-green-400">✓</span>
									<span>Fast Order Confirmation</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Side */}
					<div className="lg:col-span-7">
						<div className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-xl">
							<h1 className="mt-4 text-4xl font-black text-[#232466]">
								Choose Payment Method
							</h1>

							<p className="mt-2 text-slate-500">
								Select how you would like to pay for your order.
							</p>

							<form onSubmit={handleSubmit} className="mt-8">
								{/* COD */}
								<label
									htmlFor="cod"
									className={`group flex cursor-pointer items-center gap-5 rounded-3xl border-2 p-6 transition-all ${
										paymentMethod === 'COD'
											? 'border-[#EF5622] bg-[#EF5622]/5'
											: 'border-slate-200 hover:border-[#EF5622]/50'
									}`}
								>
									<input
										type="radio"
										id="cod"
										name="paymentMethod"
										value="COD"
										checked={paymentMethod === 'COD'}
										onChange={(e) =>
											setPaymentMethod(e.target.value)
										}
										className="h-5 w-5 accent-[#EF5622]"
									/>

									<div className="flex-1">
										<h3 className="font-bold text-[#232466]">
											Cash On Delivery
										</h3>

										<p className="mt-1 text-sm text-slate-500">
											Pay when your order is delivered to
											your doorstep.
										</p>
									</div>

									<div className="rounded-2xl bg-slate-50 px-4 py-2 text-sm font-semibold text-[#232466]">
										COD
									</div>
								</label>

								{/* Razorpay */}
								<label
									htmlFor="razorpay"
									className={`mt-4 group flex cursor-pointer items-center gap-5 rounded-3xl border-2 p-6 transition-all ${
										paymentMethod === 'Razorpay'
											? 'border-[#EF5622] bg-[#EF5622]/5'
											: 'border-slate-200 hover:border-[#EF5622]/50'
									}`}
								>
									<input
										type="radio"
										id="razorpay"
										name="paymentMethod"
										value="Razorpay"
										checked={
											paymentMethod === 'Razorpay'
										}
										onChange={(e) =>
											setPaymentMethod(e.target.value)
										}
										className="h-5 w-5 accent-[#EF5622]"
									/>

									<div className="flex-1">
										<h3 className="font-bold text-[#232466]">
											Online Payment (Razorpay)
										</h3>

										<p className="mt-1 text-sm text-slate-500">
											UPI, Credit Card, Debit Card,
											Net Banking & Wallets.
										</p>
									</div>

									<div className="rounded-2xl bg-slate-50 px-4 py-2 text-sm font-semibold text-[#232466]">
										Razorpay
									</div>
								</label>

								<button
									type="submit"
									className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-[#EF5622] text-lg font-bold text-white transition-all duration-300 hover:bg-[#232466]"
								>
									Continue To Review Order
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentScreen;