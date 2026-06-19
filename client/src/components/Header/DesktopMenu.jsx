import {
	Cog8ToothIcon,
	ShoppingBagIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import { HiOutlineClipboardList } from "react-icons/hi";
import { logout } from '@slices/authSlice';
import { useLogoutMutation } from '@slices/userApiSlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import MenuItem from './MenuItem';

const DesktopMenu = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { cartItems } = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.auth);

	const [isOpen, setIsOpen] = useState(false);
	const [adminIsOpen, setAdminIsOpen] = useState(false);
	const menuRef = useRef(null);
	const adminMenuRef = useRef(null);

	const [logoutApiCall] = useLogoutMutation();

	const handleLogout = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate('/login');
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setIsOpen(false);
			}

			if (adminMenuRef.current && !adminMenuRef.current.contains(e.target)) {
				setAdminIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<nav className='hidden items-center text-black sm:ml-6 sm:flex sm:space-x-8'>

			<div className='flex items-center gap-2'>
				<MenuItem url='/cart' label='Cart' icon={ShoppingBagIcon} />
				{cartItems.length > 0 && (
					<span className='min-w-5 rounded-full bg-[#EF5622] text-center text-sm font-semibold text-white'>
						{cartItems.length}
					</span>
				)}
			</div>
			
			{/* ORDERS */}
			<div className='flex text-black items-center gap-2'>
			<MenuItem 
				url='/orders' 
				label='Orders' 
				icon={HiOutlineClipboardList} 
			/>
			</div>


			{userInfo ? (
				<div className='relative z-50' ref={menuRef}>
					<button
						className='focus:outline-offset-3 rounded-full bg-[#232466] text-white p-2 focus:outline focus:outline-2'
						onClick={() => setIsOpen(!isOpen)}>
						<UserIcon className='h-5 w-5' />
					</button>

					{isOpen && (
						<nav className='absolute right-0 top-10 min-w-48 rounded-lg bg-white text-black shadow-md'>
							<div className='border-b border-gray-300 p-4 pb-3'>
								<p className='text-sm leading-normal'>
									<span className='font-semibold text-black'>
										{userInfo.name}
									</span>
									<br />
									<span className='text-gray-900'>{userInfo.email}</span>
								</p>
							</div>
							<Link
								to='/profile'
								className='block px-4 py-2 text-sm text-slate-950 transition-all hover:bg-gray-200 focus:bg-gray-300'>
								Profile
							</Link>
							<button
								onClick={handleLogout}
								className='block w-full px-4 py-2 text-left text-sm text-slate-950  transition-all hover:bg-gray-200 focus:bg-gray-300'>
								Logout
							</button>
						</nav>
					)}
				</div>
			) : (
				<MenuItem url='/login' label='Login' icon={UserIcon} />
			)}

			{userInfo && userInfo.isAdmin && (
				<div className='relative z-50' ref={adminMenuRef}>
					<button
						className='focus:outline-offset-3 rounded-xl px-0  bg-[#EF5622] cursor-pointer focus:outline focus:outline-2'
						onClick={() => setAdminIsOpen(!adminIsOpen)}>
						{/* <Cog8ToothIcon className='h-5 w-5' /> */}
						 <Link
							to='/admin/dashboard'
							className='block px-2 py-1 text-sm text-[#fff] font-bold'>
							Dashboard
						</Link>

					</button>

					{adminIsOpen && (
						<nav className='absolute right-0 top-10 min-w-48 rounded-lg bg-white shadow-md'>
							<Link
								to='/admin/orderlist'
								className='block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300'>
								All Orders
							</Link>
							<Link
								to='/admin/userlist'
								className='block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300'>
								All Users
							</Link>
							<Link
								to='/admin/productlist'
								className='block px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-200 focus:bg-gray-300'>
								All Products
							</Link>
						</nav>
					)}
				</div>
			)}
		</nav>
	);
};

export default DesktopMenu;
