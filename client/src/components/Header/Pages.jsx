import { NavLink } from "react-router-dom";

const Pages = () => {
  const baseStyle =
    "relative text-sm font-medium text-black transition-all duration-300";

  return (
    <nav className="hidden md:flex items-center gap-10">
      
      <NavLink
        to="/"
        end
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

    </nav>
  );
};

export default Pages;