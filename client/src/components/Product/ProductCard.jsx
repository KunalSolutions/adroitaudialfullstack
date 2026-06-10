// src/components/ProductCard.jsx

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    
    <div className="group bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:border-slate-300">

      {/* Product Image */}
      <div className="aspect-square bg-white overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5">

        <p className="text-xs uppercase tracking-[0.15em] text-slate-500 font-medium">
          {product.brand}
        </p>

        <h3 className="mt-2 text-sm md:text-base font-medium text-[#232466] leading-6 min-h-[52px] line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-4 flex items-center gap-3">

          <span className="text-xl font-semibold text-[#232466]">
            ₹{product.offPrice}
          </span>

          <span className="text-sm text-slate-400 line-through">
            ₹{product.price}
          </span>

        </div>

        <Link
          to={`/products/${product.slug}`}
          className="inline-flex items-center mt-5 px-6 py-2.5 bg-[#EF5622] text-white text-sm tracking-wide font-medium hover:bg-[#d94a1b] transition-all duration-300"
        >
          View Details
          <span className="ml-2">→</span>
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;