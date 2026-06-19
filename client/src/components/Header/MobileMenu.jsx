import {
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { HiOutlineClipboardList } from "react-icons/hi";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '@slices/authSlice';
import { useLogoutMutation } from '@slices/userApiSlice';

import MenuItemMobile from './MenuItemMobile';
import Pages from './Pages';
import { NavLink } from 'react-router-dom'; 
import { useState } from 'react';

const MobileMenu = ({ setIsOpen }) => {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const closeMenu = () => setIsOpen(false);

  const [logoutApiCall] = useLogoutMutation();

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
    "relative text-sm font-medium text-black transition-all duration-300";

  return (
    <nav className='relative z-10 w-full bg-white sm:max-w-sm overflow-y-auto h-full'>

      {/* Header */}
      <div className='border-b flex flex-col gap-2 text-center border-t border-slate-500 p-4 text-lg font-medium md:hidden'>
        <NavLink
        to="/"
        end
        onClick={closeMenu}
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
              : "hover:opacity-80"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
              to="/about-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${baseStyle} ${
                  isActive
                    ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
                    : "hover:opacity-80"
                }`
              }
            >
              About Us
            </NavLink>
      
            <NavLink
              to="/brand"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${baseStyle} ${
                  isActive
                    ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
                    : "hover:opacity-80"
                }`
              }
            >
              Brand
            </NavLink>
      
            <NavLink
              to="/products"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${baseStyle} ${
                  isActive
                    ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
                    : "hover:opacity-80"
                }`
              }
            >
              Products
            </NavLink>
      
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${baseStyle} ${
                  isActive
                    ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
                    : "hover:opacity-80"
                }`
              }
            >
              Services
            </NavLink>
      
            <NavLink
              to="/software"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${baseStyle} ${
                  isActive
                    ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
                    : "hover:opacity-80"
                }`
              }
            >
              Software & Plugins
            </NavLink>
      
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${baseStyle} ${
                  isActive
                    ? "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white"
                    : "hover:opacity-80"
                }`
              }
            >
              Contact
            </NavLink>
      </div>

    </nav>
  );
};

export default MobileMenu;