import products from "../../data/Products";
import ProductCard from "../../components/Product/ProductCard";

const SoftwareCategories = () => {
const filteredProducts = products.filter(
(product) =>
product.category &&
product.category.toLowerCase().includes("software")
);

return ( 
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-bl from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating dots */}
        <div className="absolute top-24 left-1/4 w-3 h-3 rounded-full bg-[#EF5622] animate-bounce"></div>

        <div className="absolute bottom-32 right-1/4 w-2 h-2 rounded-full bg-[#232466] animate-ping"></div>

        <div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>

      </div>
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
