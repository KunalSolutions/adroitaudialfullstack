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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden bg-gradient-to-t from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-64 sm:w-96 md:w-[450px] h-64 sm:h-96 md:h-[450px] bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-56 sm:w-80 md:w-[400px] h-56 sm:h-80 md:h-[400px] bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating dots */}
        <div className="absolute top-24 left-1/2 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#EF5622] animate-bounce"></div>

        <div className="absolute bottom-32 right-1/4 w-2 h-2 rounded-full bg-[#232466] animate-ping"></div>

      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">

          <span
            className="
              inline-block
              text-[#EF5622]
              font-semibold
              uppercase
              tracking-wider
              sm:tracking-[0.2em]
              md:tracking-[0.25em]
              text-xs
              sm:text-sm
              md:text-base
              mb-2
            "
          >
            Premium Audio Partners
          </span>

          <h2
            className="
              text-[2rem]
              sm:text-[2.5rem]
              md:text-[3rem]
              lg:text-[3.5rem]
              xl:text-[4rem]
              2xl:text-[5rem]
              font-bold
              text-[#232466]
              leading-tight
            "
          >
            Trusted Brands
          </h2>

          <p
            className="
              mt-3
              text-slate-600
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-[22px]
              2xl:text-2xl
              max-w-full
              sm:max-w-2xl
              mx-auto
            "
          >
            Partnering with industry-leading audio brands worldwide
          </p>

          <div className="flex justify-center mt-5 sm:mt-6 md:mt-8">
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#EF5622] rounded-full"></div>
          </div>

        </div>

        {/* Marquee */}
        <div className="relative mt-6 sm:mt-10 overflow-hidden">

          <div className="flex animate-marquee whitespace-nowrap">

            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="
                  mx-4 sm:mx-6 md:mx-8 lg:mx-10
                  flex-shrink-0
                "
              >
                <div
                  className="
                    w-[140px]
                    sm:w-[160px]
                    md:w-[180px]
                    lg:w-[200px]
                    xl:w-[220px]
                    2xl:w-[240px]
                    h-[80px]
                    sm:h-[90px]
                    md:h-[100px]
                    lg:h-[110px]
                    xl:h-[120px]
                    2xl:h-[130px]
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    p-3
                    sm:p-4
                    md:p-5
                    bg-white/40
                    backdrop-blur-sm
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <img
                    src={brand}
                    alt="Brand Logo"
                    loading="lazy"
                    className="
                      max-w-full
                      max-h-full
                      object-contain
                      grayscale
                      hover:grayscale-0
                      transition-all
                      duration-300
                    "
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