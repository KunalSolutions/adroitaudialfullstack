import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { useGetCategoriesQuery } from "../../slices/productApiSlice";

const Pages = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showCorporateProducts, setShowCorporateProducts] = useState(false);

  const { data: categories = [] } = useGetCategoriesQuery();

  const { data: corporateCategories = [] } =
    useGetCategoriesQuery("Corporate");

    const navLinkClass = ({ isActive }) =>
    `relative text-base font-medium transition-all duration-300 ${
      isActive
        ? "text-[#232466] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-[#EF5622]"
        : "text-[#232466] hover:text-[#EF5622]"
    }`;

  const createSlug = (text) =>
    text.toLowerCase().replace(/\s+/g, "-");

  return (
    <nav className="hidden md:flex gap-8 lg:gap-10">

      <NavLink to="/" end className={navLinkClass}>
        Home
      </NavLink>

      <NavLink to="/about-us" className={navLinkClass}>
        About Us
      </NavLink>

      <NavLink to="/brand" className={navLinkClass}>
        Brands
      </NavLink>

      <div
        className="relative"
        onMouseEnter={() => setShowProducts(true)}
        onMouseLeave={() => setShowProducts(false)}
      >
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `relative flex items-center gap-1 text-base font-medium ${
              isActive
                ? "text-[#232466]"
                : "text-[#232466] hover:text-[#EF5622]"
            }`
          }
        >
          Regular products

          <ChevronDown
            size={16}
            className={`transition-transform ${
              showProducts ? "rotate-0" : ""
            }`}
          />
        </NavLink>

        {showProducts && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
            <div className="w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">

              {categories.length > 0 ? (
                categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${createSlug(category)}`}
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
                ))
              ) : (
                <div className="px-5 py-3 text-sm text-slate-500">
                  No categories available
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setShowCorporateProducts(true)}
        onMouseLeave={() => setShowCorporateProducts(false)}
      >
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `relative flex items-center gap-1 text-base font-medium ${
              isActive
                ? "text-[#232466]"
                : "text-[#232466] hover:text-[#EF5622]"
            }`
          }
        >
          Corporate products

          <ChevronDown
            size={16}
            className={`transition-transform ${
              showCorporateProducts ? "rotate-0" : ""
            }`}
          />
        </NavLink>

        {showCorporateProducts && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
            <div className="w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">

              {corporateCategories.length > 0 ? (
                corporateCategories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${createSlug(category)}`}
                    onClick={() => setShowCorporateProducts(false)}
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
                ))
              ) : (
                <div className="px-5 py-3 text-sm text-slate-500">
                  No corporate categories available
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      <NavLink to="/solutions" className={navLinkClass}>
        Solutions
      </NavLink>

      <NavLink to="/software-and-plugins" className={navLinkClass}>
        Software
      </NavLink>

      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>

    </nav>
  );
};

export default Pages;