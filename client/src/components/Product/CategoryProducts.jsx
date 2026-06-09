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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex text-gray-400 gap-1 mb-3 " >
          <Link to={'/'}>
          <p className="relative inline-block text-gray-500 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:text-black after:bg-black after:transition-all after:duration-300 hover:after:w-full">Home</p>
          </Link>
          <span className="text-gray-400">/</span>
          <Link to={'/products'} >
          <p className="relative inline-block text-gray-500 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:text-black after:bg-black after:transition-all after:duration-300 hover:after:w-full">Products</p>
          </Link>
          <span className="text-gray-400">/</span>
          <Link>
          <p className="text-black cursor-not-allowed" > {categoryName}</p>
          </Link>
        </div>

      <div className="text-center mt-15 mb-10" >
        <h1 className="text-4xl text-indigo-700 tracking-normal leading-relaxed font-semibold">
          {categoryName}
        </h1>

        <p className="text-gray-500 ">
          Explore our {categoryName} collection.
        </p>
        <span className="inline-block w-10 h-0.5 bg-indigo-700 mr-2 "></span>
      
      </div>

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