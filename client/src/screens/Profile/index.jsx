import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import { setCredentials } from '@slices/authSlice';
import { useGetMyOrdersQuery } from '@slices/orderApiSlice';
import { useProfileMutation } from '@slices/userApiSlice';

const ProfileScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.auth);

	const {
		data: orders,
		isLoading: loadingOrders,
		error: errorOrders,
	} = useGetMyOrdersQuery();

	const [updateProfile, { isLoading: loadingUpdateProfile }] =
		useProfileMutation();

	useEffect(() => {
		if (userInfo) {
			setName(userInfo.name);
			setEmail(userInfo.email);
		}
	}, [userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error('Passwords do not match');
		} else {
			try {
				const response = await updateProfile({
					name,
					email,
					password,
				}).unwrap();
				dispatch(setCredentials(response));
				toast.success('Profile updated');
			} catch (error) {
				toast.error(error?.data?.message || error?.error);
			}
		}
	};

	return (
	<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

	<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

		{/* HEADER */}
		<div className="mb-10">
		<h1 className="text-4xl font-black text-[#232466]">
			My Profile
		</h1>

		<p className="mt-2 text-slate-500">
			Manage your account information and track your orders.
		</p>
		</div>

		{/* PROFILE CARD */}
		<div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

		<div className="bg-[#232466] p-8">
			<h2 className="text-2xl font-bold text-white">
			Personal Information
			</h2>

			<p className="text-white/80 mt-2">
			Update your profile details below.
			</p>
		</div>

		<form onSubmit={submitHandler} className="p-6 sm:p-8">

			<div className="grid md:grid-cols-2 gap-6">

			<div>
				<label className="block mb-2 text-sm font-semibold text-[#232466]">
				Full Name
				</label>

				<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				type="text"
				className="w-full h-14 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#EF5622]"
				/>
			</div>

			<div>
				<label className="block mb-2 text-sm font-semibold text-[#232466]">
				Email Address
				</label>

				<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				className="w-full h-14 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#EF5622]"
				/>
			</div>

			<div>
				<label className="block mb-2 text-sm font-semibold text-[#232466]">
				New Password
				</label>

				<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				placeholder="Enter new password"
				className="w-full h-14 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#EF5622]"
				/>
			</div>

			<div>
				<label className="block mb-2 text-sm font-semibold text-[#232466]">
				Confirm Password
				</label>

				<input
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				type="password"
				placeholder="Confirm password"
				className="w-full h-14 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#EF5622]"
				/>
			</div>

			</div>

			<div className="mt-8 flex justify-end">

			<button
				type="submit"
				className="px-8 h-14 rounded-2xl bg-[#EF5622] hover:bg-[#232466] text-white font-bold transition-all duration-300"
			>
				{loadingUpdateProfile ? "Updating..." : "Update Profile"}
			</button>

			</div>

		</form>

		</div>

		{/* ORDER HISTORY */}
		<div className="mt-14">

		<div className="flex items-center justify-between mb-8">

			<div>
			<h2 className="text-3xl font-black text-[#232466]">
				Order History
			</h2>

			<p className="text-slate-500 mt-2">
				View and track all your previous orders.
			</p>
			</div>

		</div>

		{loadingOrders ? (
			<Loader />
		) : errorOrders ? (
			<Alert type="error">
			{errorOrders?.data?.message || errorOrders?.error}
			</Alert>
		) : orders?.length === 0 ? (

			<div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-12 text-center">

			<h3 className="text-2xl font-bold text-[#232466]">
				No Orders Found
			</h3>

			<p className="mt-3 text-slate-500">
				Looks like you haven't placed any orders yet.
			</p>

			</div>

		) : (

			<div className="space-y-8">

			{orders?.map((order, index) => (

				<div
				key={order._id}
				className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
				>

				{/* TOP BAR */}
				<div className="bg-slate-50 p-6 border-b border-slate-100">

					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

					<div>

						<p className="text-sm text-slate-500">
						Order #{index + 1}
						</p>

						<h3 className="text-lg font-bold text-[#232466] break-all">
						{order._id}
						</h3>

					</div>

					<div className="flex flex-wrap gap-3">

						<span
						className={`px-4 py-2 rounded-full text-sm font-semibold
						${
							order.isPaid
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-600"
						}`}
						>
						{order.isPaid ? "Paid" : "Pending Payment"}
						</span>

						<span
						className={`px-4 py-2 rounded-full text-sm font-semibold
						${
							order.isDelivered
							? "bg-green-100 text-green-700"
							: "bg-yellow-100 text-yellow-700"
						}`}
						>
						{order.isDelivered
							? "Delivered"
							: "Processing"}
						</span>

					</div>

					</div>

				</div>

				{/* BODY */}
				<div className="p-6">

					<div className="grid md:grid-cols-4 gap-6 mb-8">

					<div>
						<p className="text-sm text-slate-500">
						Order Date
						</p>

						<p className="font-semibold text-[#232466]">
						{new Date(order.createdAt).toLocaleDateString()}
						</p>
					</div>

					<div>
						<p className="text-sm text-slate-500">
						Total Amount
						</p>

						<p className="font-black text-xl text-[#EF5622]">
						₹{order.totalPrice}
						</p>
					</div>

					<div>
						<p className="text-sm text-slate-500">
						Items
						</p>

						<p className="font-semibold text-[#232466]">
						{order.orderItems?.length}
						</p>
					</div>

					<div>
						<Link
						to={`/order/${order._id}`}
						className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#232466] hover:bg-[#EF5622] text-white font-semibold transition-all"
						>
						View Details
						</Link>
					</div>

					</div>

					{/* PRODUCTS */}
					<div className="space-y-4">

					{order.orderItems?.slice(0, 3).map((item) => (

						<div
						key={item.product}
						className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50"
						>

						<img
							src={item.image}
							alt={item.name}
							className="w-20 h-20 rounded-xl object-cover"
						/>

						<div className="flex-1">

							<h4 className="font-semibold text-[#232466]">
							{item.name}
							</h4>

							<p className="text-slate-500 text-sm">
							Qty: {item.qty}
							</p>

						</div>

						<div className="font-bold text-[#232466]">
							₹{item.price}
						</div>

						</div>

					))}

					</div>

				</div>

				</div>

			))}

			</div>

		)}

		</div>

	</div>

	</div>
	);
};

export default ProfileScreen;
