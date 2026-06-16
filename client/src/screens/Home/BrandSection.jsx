const brands = [
  "/Brands/01.svg",
  "/Brands/02.avif",
  "/Brands/03.png",
  "/Brands/04.avif",
  "/Brands/05.png",
  "/Brands/06.png",
  "/Brands/07.png",
  "/Brands/08.png",
  "/Brands/09.svg",
  "/Brands/10.svg",
  "/Brands/11.png",
  "/Brands/12.svg",
  "/Brands/13.svg",
  "/Brands/14.png",
  "/Brands/15.svg",
  "/Brands/16.png",
  "/Brands/17.svg",
  "/Brands/18.png",
  "/Brands/19.svg",
  "/Brands/20.png",
];

export default function BrandSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
        <span className="inline-block text-[#EF5622] font-semibold uppercase tracking-wider mb-2">
          Premium Audio Partners
        </span>

        <h2 className="text-4xl font-bold text-[#232466]">
          Trusted Brands
        </h2>

        <p className="mt-3 text-slate-600">
          Partnering with industry-leading audio brands worldwide
        </p>

        <div className="flex justify-center mt-5">
          <div className="w-24 h-1 bg-[#EF5622] rounded-full"></div>
        </div>
      </div>

        <div className="relative mt-10">

          <div className="flex animate-marquee whitespace-nowrap">

            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="mx-6 flex-shrink-0"
              >
                <div className="w-[180px] h-[100px] rounded-xl flex items-center justify-center p-5">

                  <img
                    src={brand}
                    alt="Brand Logo"
                    className="max-w-full max-h-full object-contain transition-all duration-300"
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