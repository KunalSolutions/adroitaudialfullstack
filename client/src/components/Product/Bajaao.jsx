// src/pages/Products.jsx

import products from "../../data/Products";
import ProductCard from "./ProductCard";

const Bajaao = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-15 text-center">
          <h1 className="text-4xl text-indigo-700 tracking-normal leading-relaxed font-semibold ">
            Our Products
          </h1>

          <p className="text-slate-700">
            Explore our professional audio equipment and accessories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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

export default Bajaao;