import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
	return (
		<nav className="w-full max-w-4xl mx-auto">

			<div className="flex items-center justify-between">

				{/* Step 1 */}
				<div className="flex flex-col items-center flex-1">

				{step1 ? (
					<Link
					to="/login"
					className="flex h-12 w-12 items-center justify-center rounded-full bg-[#232466] text-white font-bold shadow-lg"
					>
					1
					</Link>
				) : (
					<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 text-slate-400 font-bold">
					1
					</div>
				)}

				<span
					className={`mt-3 text-sm font-semibold ${
					step1 ? "text-[#232466]" : "text-slate-400"
					}`}
				>
					Sign In
				</span>

				</div>

				{/* Line */}
				<div
				className={`h-1 flex-1 mx-2 rounded-full ${
					step2 ? "bg-[#EF5622]" : "bg-slate-200"
				}`}
				/>

				{/* Step 2 */}
				<div className="flex flex-col items-center flex-1">

				{step2 ? (
					<Link
					to="/shipping"
					className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EF5622] text-white font-bold shadow-lg"
					>
					2
					</Link>
				) : (
					<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 text-slate-400 font-bold">
					2
					</div>
				)}

				<span
					className={`mt-3 text-sm font-semibold ${
					step2 ? "text-[#232466]" : "text-slate-400"
					}`}
				>
					Shipping
				</span>

				</div>

				{/* Line */}
				<div
				className={`h-1 flex-1 mx-2 rounded-full ${
					step3 ? "bg-[#EF5622]" : "bg-slate-200"
				}`}
				/>

				{/* Step 3 */}
				<div className="flex flex-col items-center flex-1">

				{step3 ? (
					<Link
					to="/payment"
					className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EF5622] text-white font-bold shadow-lg"
					>
					3
					</Link>
				) : (
					<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 text-slate-400 font-bold">
					3
					</div>
				)}

				<span
					className={`mt-3 text-sm font-semibold ${
					step3 ? "text-[#232466]" : "text-slate-400"
					}`}
				>
					Payment
				</span>

				</div>

				{/* Line */}
				<div
				className={`h-1 flex-1 mx-2 rounded-full ${
					step4 ? "bg-[#EF5622]" : "bg-slate-200"
				}`}
				/>

				{/* Step 4 */}
				<div className="flex flex-col items-center flex-1">

				{step4 ? (
					<Link
					to="/place-order"
					className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EF5622] text-white font-bold shadow-lg"
					>
					4
					</Link>
				) : (
					<div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 text-slate-400 font-bold">
					4
					</div>
				)}

				<span
					className={`mt-3 text-sm font-semibold ${
					step4 ? "text-[#232466]" : "text-slate-400"
					}`}
				>
					Place Order
				</span>

				</div>

			</div>

			</nav>
	);
};

export default CheckoutSteps;
