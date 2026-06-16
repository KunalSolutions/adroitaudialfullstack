const brands = [
  "/Brands/brand1.webp",
  "/Brands/brand2.png",
  "/Brands/brand3.jpg",
  "/Brands/brand4.webp",
  "/Brands/brand5.png",
  "/Brands/brand6.jpg",
  "/Brands/brand7.webp",
  "/Brands/brand8.png",
];

export default function BrandSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#232466]">
            Trusted Brands
          </h2>

          <p className="mt-3 text-slate-600">
            Partnering with industry-leading audio brands worldwide
          </p>
        </div>

        <div className="relative">

          <div className="flex animate-marquee whitespace-nowrap">

            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="mx-6 flex-shrink-0"
              >
                <div className="w-[180px] h-[100px] bg-white border border-slate-200 rounded-xl flex items-center justify-center p-5 hover:shadow-lg transition-all duration-300">

                  <img
                    src={brand}
                    alt="Brand Logo"
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}