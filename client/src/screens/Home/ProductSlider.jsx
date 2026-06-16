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
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-bl from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-10 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-40 w-96 h-96 bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating dots */}
        <div className="absolute top-14 left-1/1 w-3 h-3 rounded-full bg-[#EF5622] animate-bounce"></div>

        <div className="absolute bottom-22 right-1/2 w-2 h-2 rounded-full bg-[#232466] animate-ping"></div>

        <div className="absolute top-1/1 left-14 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

        <div className="absolute top-10 right-16 w-4 h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>

      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Products */}
        <div className="">

          <div className="text-center mb-10">
            <span className="text-[#EF5622] uppercase tracking-[0.25em] text-sm font-semibold">
              Featured Categories
            </span>

            <h2 className="mt-4 text-4xl capitalize md:text-5xl font-bold text-[#232466]">
              popular professional audio products
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-slate-600">
              Discover professional audio equipment, integrated solutions,
              and industry-leading technologies designed for commercial,
              educational, hospitality, and entertainment environments.
            </p>

            <div className="w-24 h-1 bg-[#EF5622] mx-auto mt-8"></div>
          </div>

          <div className="relative overflow-hidden">

            {/* Left Fade */}
            <div className="absolute left-0 top-0 z-10 h-full w-24" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 z-10 h-full w-24" />

            <div className="flex animate-marquee gap-6 w-max">

              {[...categories, ...categories].map((product, index) => (
                <Link
                key={index}
                to={`/category/${product.slug}`}
                className="group w-[220px] flex-shrink-0 block  rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-[220px] bg-white overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full grayscale hover:grayscale-0 object-contain p-2"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#232466] text-center">
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