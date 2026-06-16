import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Pages = () => {
  const [showProducts, setShowProducts] = useState(false);

  const productCategories = [
    "Microphone",
    "Audio Interfaces",
    "Monitor Speakers",
    "Monitor Speaker Bundle",
    "Mixers",
    "Studio Headphones",
    "Pre Amps",
    "Groove Production",
    "Sound Proofing",
    "Studio Accessories",
  ];

  const navLinkClass = ({ isActive }) =>
    `relative text-lg font-medium transition-all duration-300 ${
      isActive
        ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
        : "text-[#232466] hover:text-[#EF5622]"
    }`;

  const createSlug = (text) =>
    text.toLowerCase().replace(/\s+/g, "-");

  return (
    <nav className="hidden md:flex items-center gap-8 lg:gap-10">

      <NavLink to="/" end className={navLinkClass}>
        Home
      </NavLink>

      <NavLink to="/about-us" className={navLinkClass}>
        About Us
      </NavLink>

      <NavLink to="/brand" className={navLinkClass}>
        Brands
      </NavLink>

      {/* Products Dropdown */}
      <div
  className="relative"
  onMouseEnter={() => setShowProducts(true)}
  onMouseLeave={() => setShowProducts(false)}
>
  <NavLink
    to="/products"
    className={({ isActive }) =>
      `relative flex items-center gap-1 text-lg font-medium ${
        isActive
          ? "text-[#232466]"
          : "text-[#232466] hover:text-[#EF5622]"
      }`
    }
  >
    Products

    <ChevronDown
      size={16}
      className={`transition-transform ${
        showProducts ? "rotate-0" : ""
      }`}
    />
  </NavLink>

  {showProducts && (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
      <div className="w-72  rounded-xl shadow-2xl border border-slate-200 overflow-hidden">

        {productCategories.map((category) => (
          <Link
            key={category}
            to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setShowProducts(false)}
            className="
              block
              px-5
              py-3
              text-sm
              text-slate-700
              hover:bg-[#232466]
              hover:text-white
            "
          >
            {category}
          </Link>
        ))}

      </div>
    </div>
  )}
</div>

      <NavLink to="/services" className={navLinkClass}>
        Services
      </NavLink>

      <NavLink to="/software" className={navLinkClass}>
        Software & Plugins
      </NavLink>

      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>

    </nav>
  );
};

export default Pages;
