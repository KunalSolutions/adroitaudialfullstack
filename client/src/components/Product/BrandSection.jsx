import products from "../../data/Products";

const BrandSection = () => {
  const uniqueBrands = [
    ...new Set(products.map((product) => product.brand)),
  ].sort();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#EF5622] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Trusted Audio Brands
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#232466]">
            Brands We Offer
          </h2>

          <div className="w-20 h-1 bg-[#EF5622] mx-auto mt-5"></div>

          <p className="max-w-2xl mx-auto text-slate-600 mt-6">
            Explore professional audio, studio, live sound, conferencing,
            broadcasting and installation brands trusted worldwide.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">

          {uniqueBrands.map((brand) => (
            <div
              key={brand}
              className="bg-white border border-slate-200 hover:border-[#EF5622] transition-all duration-300 p-5 text-center group"
            >
              <h3 className="font-semibold text-[#232466] group-hover:text-[#EF5622] transition-colors">
                {brand}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BrandSection;