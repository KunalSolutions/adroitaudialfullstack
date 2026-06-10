import { NavLink } from "react-router-dom";

const Pages = () => {
  const baseStyle =
    "relative text-sm font-medium text-[#232466] transition-all duration-300";

  return (
    <nav className="hidden md:flex items-center gap-8 lg:gap-10">

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
              : "hover:text-[#EF5622]"
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
              ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
              : "hover:text-[#EF5622]"
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
              ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
              : "hover:text-[#EF5622]"
          }`
        }
      >
        Brands
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `${baseStyle} ${
            isActive
              ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
              : "hover:text-[#EF5622]"
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
              ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
              : "hover:text-[#EF5622]"
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
              ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
              : "hover:text-[#EF5622]"
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
              ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
              : "hover:text-[#EF5622]"
          }`
        }
      >
        Contact
      </NavLink>

    </nav>
  );
};

export default Pages;