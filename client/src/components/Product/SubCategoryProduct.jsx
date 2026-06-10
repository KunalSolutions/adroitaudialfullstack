import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import products from '../../data/Products';
import ProductCard from "./ProductCard";
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

const SubCategoryProduct = () => {

    const { subCategory } = useParams();
    const navigate = useNavigate();

    const filteredProducts = products.filter(
        (product) =>
        product.subCategory.toLowerCase().replace(/\s+/g, "-") ===
        subCategory
    )
    const subCategoryName = filteredProducts[0]?.subCategory || subCategory;
    const categoryName = filteredProducts[0]?.category || "";
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm mb-8">

          <Link
            to="/"
            className="text-slate-500 hover:text-[#EF5622] transition-colors"
          >
            Home
          </Link>

          <span className="text-slate-300">/</span>

          <Link
            to="/products"
            className="text-slate-500 hover:text-[#EF5622] transition-colors"
          >
            Products
          </Link>

          <span className="text-slate-300">/</span>

          <Link
            to={`/category/${categoryName
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="text-slate-500 hover:text-[#EF5622] transition-colors"
          >
            {categoryName}
          </Link>

          <span className="text-slate-300">/</span>

          <span className="font-medium text-[#232466]">
            {subCategory}
          </span>

        </div>

        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-[#232466]">
            {subCategory}
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our premium range of {subCategory.toLowerCase()} designed
            for professional audio applications, installations, studios,
            commercial spaces, and performance environments.
          </p>

          <div className="w-20 h-1 bg-[#EF5622] mx-auto mt-6"></div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default SubCategoryProduct
