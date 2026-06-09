// src/components/ProductCard.jsx

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    
      <div className="overflow-hidden bg-white transition">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition duration-300"
          />
        </div>

        <div className="p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {product.brand}
          </p>

          <h3 className="mt-2 text-sm md:text-base font-medium text-gray-900 line-clamp-2 min-h-[48px]">
            {product.name}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-semibold text-rose-700">
              ₹{product.offPrice}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹{product.price}
            </span>
          </div>
        </div>
        <Link
          to={`/products/${product.slug}`}
          className="group block"
        >
        <div className="text-center cursor-pointer bg-indigo-700 text-white py-2 hover:bg-indigo-800" >
          <button className="cursor-pointer" >
            View Details
          </button>
        </div>
        </Link>

      </div>
  );
};

export default ProductCard;