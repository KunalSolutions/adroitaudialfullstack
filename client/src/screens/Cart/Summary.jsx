import React from 'react';

const Summary = ({
	cartItems,
	itemsPrice,
	shippingPrice,
	taxPrice,
	totalPrice,
	handleCheckout,
}) => {
	return (
		<section className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:col-span-5">

			{/* Header */}
			<div className="bg-[#232466] p-6 text-white">

				<h2 className="text-2xl font-bold">
				Order Summary
				</h2>

				<p className="mt-1 text-sm text-slate-200">
				{cartItems.reduce((acc, currVal) => acc + currVal.qty, 0)} Items in Cart
				</p>

			</div>

			<div className="p-6">

				{/* Summary Rows */}
				<div className="space-y-5">

				<div className="flex items-center justify-between">
					<span className="text-slate-500">
					Subtotal
					</span>

					<span className="font-semibold text-[#232466]">
					₹{itemsPrice}
					</span>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-slate-500">
					Shipping
					</span>

					<span className="font-semibold text-[#232466]">
					₹{shippingPrice}
					</span>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-slate-500">
					GST (18%)
					</span>

					<span className="font-semibold text-[#232466]">
					₹{taxPrice}
					</span>
				</div>

				<div className="border-t border-dashed border-slate-300 pt-5">

					<div className="flex items-center justify-between">

					<span className="text-lg font-bold text-slate-900">
						Total
					</span>

					<span className="text-3xl font-black text-[#EF5622]">
						₹{totalPrice}
					</span>

					</div>

				</div>

				</div>

				{/* Checkout Button */}
				<button
				onClick={handleCheckout}
				className="mt-8 w-full rounded-2xl bg-[#EF5622] px-6 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#232466] hover:shadow-xl"
				>
				Proceed To Checkout
				</button>

			</div>

			</section>
	);
};

export default Summary;
