import products from "../../data/Products";
import ProductCard from "../../components/Product/ProductCard";

const SoftwareCategories = () => {
const filteredProducts = products.filter(
(product) =>
product.category &&
product.category.toLowerCase().includes("software")
);

return ( 
    
    <section className="py-16 lg:py-20"> 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-12 text-center">
    <span className="text-[#EF5622] text-3xl sm:text-4xl md:text-5xl font-semibold">
        SOFTWARE & PLUGINS
    </span>

    <p className="mt-4 max-w-3xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
        Discover industry-leading audio software, virtual instruments,
        effects plugins, recording tools, mixing solutions, and production
        applications designed to enhance creativity, streamline workflows,
        and deliver professional-quality sound for studios, broadcasters,
        content creators, and live production environments.
    </p>

    <div className="w-24 h-1 bg-[#EF5622] mx-auto mt-8"></div>
    </div>

    {/* Products */}
    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    ) : (
      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold text-slate-700">
          No Microphone Products Found
        </h3>

        <p className="text-slate-500 mt-2">
          Please check your Products data.
        </p>
      </div>
    )}

  </div>
</section>

);
};

export default SoftwareCategories;
