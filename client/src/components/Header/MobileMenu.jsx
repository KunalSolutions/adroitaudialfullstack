import {
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import { HiOutlineClipboardList } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import { logout } from '@slices/authSlice';
import { useLogoutMutation } from '@slices/userApiSlice';

const MobileMenu = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const baseStyle =
    "block py-2 text-sm font-medium text-black transition-all duration-300 hover:opacity-80";

  return (
    <nav className="w-full bg-white sm:max-w-sm overflow-y-auto h-full p-4">

      {/* MAIN LINKS */}
      <div className="flex flex-col gap-3 border-b pb-4">

        <NavLink to="/" onClick={closeMenu} className={baseStyle}>
          Home
        </NavLink>

        <NavLink to="/about-us" onClick={closeMenu} className={baseStyle}>
          About Us
        </NavLink>

        <NavLink to="/brand" onClick={closeMenu} className={baseStyle}>
          Brand
        </NavLink>

        <NavLink to="/products" onClick={closeMenu} className={baseStyle}>
          Products
        </NavLink>

        <NavLink to="/services" onClick={closeMenu} className={baseStyle}>
          Services
        </NavLink>

        <NavLink to="/software" onClick={closeMenu} className={baseStyle}>
          Software & Plugins
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu} className={baseStyle}>
          Contact
        </NavLink>
      </div>

      {/* CART */}
      <div className="flex items-center justify-between py-4 border-b">
        <Link to="/cart" onClick={closeMenu} className="flex items-center gap-2">
          <ShoppingBagIcon className="h-5 w-5" />
          <span>Cart</span>
        </Link>

        {cartItems?.length > 0 && (
          <span className="min-w-5 rounded-full bg-[#EF5622] text-center text-sm font-semibold text-white px-2">
            {cartItems.length}
          </span>
        )}
      </div>

      {/* ORDERS */}
      <div className="py-4 border-b">
        <Link
          to="/orders"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <HiOutlineClipboardList className="h-5 w-5" />
          <span>Orders</span>
        </Link>
      </div>

      {/* USER SECTION */}
      <div className="py-4 border-b">

        {userInfo ? (
          <>
            {/* USER BUTTON */}
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 font-medium"
            >
              <UserIcon className="h-5 w-5" />
              {userInfo.name}
            </button>

            {userMenuOpen && (
              <div className="mt-3 flex flex-col gap-2 pl-7">

                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="text-sm text-gray-700"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-left text-sm text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login" onClick={closeMenu} className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Login
          </Link>
        )}
      </div>

      {/* ADMIN */}
      {userInfo?.isAdmin && (
        <div className="py-4">

          <button
            onClick={() => setAdminMenuOpen(!adminMenuOpen)}
            className="font-bold text-[#EF5622]"
          >
            Admin Dashboard
          </button>

          {adminMenuOpen && (
            <div className="mt-3 flex flex-col gap-2 pl-4">

              <Link to="/admin/dashboard" onClick={closeMenu}>
                Dashboard
              </Link>

              <Link to="/admin/orderlist" onClick={closeMenu}>
                All Orders
              </Link>

              <Link to="/admin/userlist" onClick={closeMenu}>
                All Users
              </Link>

              <Link to="/admin/productlist" onClick={closeMenu}>
                All Products
              </Link>

            </div>
          )}
        </div>
      )}

    </nav>
  );
};

export default MobileMenu;