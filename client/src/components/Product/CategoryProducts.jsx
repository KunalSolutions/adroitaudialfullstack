import { useParams , Link, useNavigate } from "react-router-dom";
import products from "../../data/Products";
import ProductCard from "./ProductCard";
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
const CategoryProducts = () => {
  const { category } = useParams();

  const navigate = useNavigate()

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().replace(/\s+/g, "-") ===
      category
  );

  const categoryName = filteredProducts[0]?.category || category;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm mb-10">

          <Link
            to="/"
            className="relative inline-block text-slate-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:text-[#232466] after:bg-[#EF5622] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          <span className="text-slate-400">/</span>

          <Link
            to="/products"
            className="relative inline-block text-slate-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:text-[#232466] after:bg-[#EF5622] after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </Link>

          <span className="text-slate-400">/</span>

          <span className="font-medium text-[#232466]">
            {categoryName}
          </span>

        </div>

        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#232466]">
            {categoryName}
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our premium range of {categoryName.toLowerCase()} <br />
            designed for professional audio applications, studios,
            auditoriums, educational institutions, commercial spaces,
            and integrated sound solutions.
          </p>

          <div className="w-24 h-1 bg-[#EF5622] mx-auto mt-8"></div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryProducts;