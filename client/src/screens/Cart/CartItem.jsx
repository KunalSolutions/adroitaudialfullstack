import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ItemQuantityDropdown from './ItemQuantityDropdown';

const CartItem = ({
	product,
	index,
	handleAddToCart,
	handleRemoveFromCart,
}) => {
	return (
		<li className="group rounded-3xl border gap-10 border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl">

			<div className="flex flex-col gap-5 sm:flex-row">

				{/* Product Image */}
				<div className="relative flex-shrink-0">

				<Link to={`/shop/${product._id}`}>
					<div className="overflow-hidden rounded-2xl">

					<img
						src={product.image}
						alt={product.name}
						className="h-40 w-full sm:h-36 sm:w-36 object-contain p-3 transition duration-500 group-hover:scale-105"
					/>

					</div>
				</Link>

				{product.offerPrice &&
					product.price > product.offerPrice && (
					<span className="absolute left-3 top-3 rounded-full bg-[#EF5622] px-3 py-1 text-xs font-bold text-white">
						{Math.round(
						((product.price - product.offerPrice) /
							product.price) *
							100
						)}
						% OFF
					</span>
					)}
				</div>

				{/* Product Info */}
				<div className="flex flex-1 flex-col justify-between">

				<div>

					{/* Brand */}
					<span className="inline-flex rounded-full bg-[#EF5622]/10 px-3 py-1 text-xs font-semibold text-[#EF5622]">
					{product.brand}
					</span>

					{/* Product Name */}
					<Link to={`/shop/${product._id}`}>
					<h3 className="mt-3 text-lg font-bold text-[#232466] transition hover:text-[#EF5622]">
						{product.name}
					</h3>
					</Link>

					{/* Price */}
					<div className="mt-3 flex items-center gap-3">

					<span className="text-2xl font-black text-[#232466]">
						₹{product.offerPrice || product.price}
					</span>

					{product.offerPrice &&
						product.price > product.offerPrice && (
						<span className="text-sm text-slate-400 line-through">
							₹{product.price}
						</span>
						)}

					</div>

					{/* Stock */}
					<div className="mt-4">

					{product.countInStock > 0 ? (
						<span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
						<CheckIcon className="h-4 w-4" />
						In Stock
						</span>
					) : (
						<span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600">
						<ClockIcon className="h-4 w-4" />
						Out Of Stock
						</span>
					)}

					</div>

				</div>

				{/* Bottom Actions */}
				<div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

					<ItemQuantityDropdown
					product={product}
					index={index}
					handleAddToCart={handleAddToCart}
					/>

					<button
					onClick={() => handleRemoveFromCart(product._id)}
					className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-red-500 transition hover:bg-red-50"
					>
					<XMarkIcon className="h-5 w-5" />
					Remove
					</button>

				</div>

				</div>

			</div>

			</li>
	);
};

export default CartItem;
