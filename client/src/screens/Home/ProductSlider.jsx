import { Link } from "react-router-dom";

export default function ProductSlider() {
  const categories = [
    {
      name: "Microphones",
      image: "https://i.pinimg.com/1200x/87/e0/73/87e0732e48d139dea1f4b9f2b7e6ffe4.jpg",
      slug: "microphone",
    },
    {
      name: "Audio Interfaces",
      image: "https://i.pinimg.com/1200x/d4/60/b1/d460b1df8e28aff9103f95fb4558f3a4.jpg",
      slug: "audio-interfaces",
    },
    {
      name: "Monitor Speakers",
      image: "https://i.pinimg.com/1200x/44/d8/07/44d807b49997b54f06ca7579314ef84b.jpg",
      slug: "monitor-speakers",
    },
    {
      name: "Monitor Speaker Bundle",
      image: "https://i.pinimg.com/1200x/f7/e9/08/f7e908f200d99b6c9e2dd018260d7c0b.jpg",
      slug: "monitor-speaker-bundle",
    },
    {
      name: "Mixers",
      image: "https://i.pinimg.com/1200x/38/50/4c/38504c7b79843b6d1be56423f2cb80a2.jpg",
      slug: "mixers",
    },
    {
      name: "Studio Headphones",
      image: "https://i.pinimg.com/736x/56/ba/83/56ba83a4120c89af29b2d556da67b122.jpg",
      slug: "studio-headphones",
    },
    {
      name: "Pre Amps",
      image: "https://i.pinimg.com/1200x/61/3e/3f/613e3f3c0eed0a3fb82f8b6e8438c98f.jpg",
      slug: "pre-amps",
    },
    {
      name: "Groove Production",
      image: "https://i.pinimg.com/736x/60/05/70/6005701cdc98a1db216074b42a18dac4.jpg",
      slug: "groove-production",
    },
    {
      name: "Sound Proofing",
      image: "https://cdn.shopify.com/s/files/1/0657/6821/files/primacoustic-sound-proofing-acoustic-treatment-horizontal-primacoustic-rx5-recoil-professional-studio-monitor-isolator-mount-13708590350408_540x.jpg?v=1768999038&width=1080",
      slug: "sound-proofing",
    },
    {
      name: "Studio Accessories",
      image: "https://i.pinimg.com/1200x/93/c2/05/93c2056c90d0327554b621519335845e.jpg",
      slug: "studio-accessories",
    }, 
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden bg-gradient-to-bl from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-10 left-10 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-20 lg:right-40 w-64 sm:w-96 md:w-[450px] h-64 sm:h-96 md:h-[450px] bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-56 sm:w-80 md:w-[400px] h-56 sm:h-80 md:h-[400px] bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating Dots */}
        <div className="absolute top-14 left-1/2 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#EF5622] animate-bounce"></div>

        <div className="absolute bottom-24 right-1/2 w-2 h-2 rounded-full bg-[#232466] animate-ping"></div>

        <div className="absolute top-[70%] left-14 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

        <div className="absolute top-10 right-16 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>

      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">

        {/* Products */}
        <div>

          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">

            <span
              className="
                inline-block
                text-[#EF5622]
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.25em]
                text-xs
                sm:text-sm
                md:text-base
                font-semibold
              "
            >
              Featured Categories
            </span>

            <h2
              className="
                mt-4
                text-[2rem]
                sm:text-[2.5rem]
                md:text-[3rem]
                lg:text-[3.5rem]
                xl:text-[4rem]
                2xl:text-[5rem]
                font-bold
                capitalize
                text-[#232466]
                leading-[1.1]
              "
            >
              Popular Professional Audio Products
            </h2>

            <p
              className="
                mt-4
                max-w-full
                sm:max-w-2xl
                md:max-w-3xl
                xl:max-w-4xl
                mx-auto
                text-slate-600
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[22px]
                2xl:text-2xl
                leading-relaxed
              "
            >
              Discover professional audio equipment, integrated solutions,
              and industry-leading technologies designed for commercial,
              educational, hospitality, and entertainment environments.
            </p>

            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#EF5622] mx-auto mt-6 sm:mt-8"></div>

          </div>

          {/* Marquee Products */}
          <div className="relative overflow-hidden">

            {/* Left Fade */}
            <div className="absolute left-0 top-0 z-10 h-full w-8 sm:w-12 md:w-20 lg:w-24 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

            {/* Right Fade */}
            <div className="absolute right-0 top-0 z-10 h-full w-8 sm:w-12 md:w-20 lg:w-24 bg-gradient-to-l from-white via-white/70 to-transparent"></div>

            <div className="flex animate-marquee gap-4 sm:gap-5 md:gap-6 xl:gap-8 w-max">

              {[...categories, ...categories].map((product, index) => (
                <Link
                  key={index}
                  to={`/category/${product.slug}`}
                  className="
                    group
                    w-[180px]
                    sm:w-[220px]
                    md:w-[250px]
                    lg:w-[280px]
                    xl:w-[320px]
                    2xl:w-[350px]
                    flex-shrink-0
                    block
                    rounded-2xl
                    overflow-hidden
                    hover:shadow-xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                  "
                >
                  <div
                    className="
                      h-[180px]
                      sm:h-[220px]
                      md:h-[250px]
                      lg:h-[280px]
                      xl:h-[320px]
                      2xl:h-[350px]
                      bg-white
                      overflow-hidden
                      rounded-2xl
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="
                        w-full
                        h-full
                        grayscale
                        group-hover:grayscale-0
                        object-contain
                        p-3
                        sm:p-4
                        transition-all
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-4 sm:p-5 md:p-6">

                    <h3
                      className="
                        text-center
                        text-sm
                        sm:text-base
                        md:text-lg
                        lg:text-xl
                        xl:text-2xl
                        font-semibold
                        text-[#232466]
                        leading-snug
                      "
                    >
                      {product.name}
                    </h3>

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}