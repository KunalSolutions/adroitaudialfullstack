import { Link } from "react-router-dom";

const ProductCategories = () => {
  
  const categories = [
    {
      name: "Microphones",
      image: "https://i.pinimg.com/1200x/89/1f/fa/891ffa1c876c683b3e4820333f4d7e02.jpg",
      slug: "microphone",
    },
    {
      name: "Audio Interfaces",
      image: "https://i.pinimg.com/736x/5a/dd/38/5add38eeebfde35896bd73165c5fd519.jpg",
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
      image: "https://i.pinimg.com/736x/e8/26/5c/e8265c485433ea33c884cd2e8a71e9de.jpg",
      slug: "studio-accessories",
    }, 
  ];

  return (
    <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4">

      {/* Heading */}
      <div className="mb-12 text-center">

        <span className="text-[#EF5622] uppercase tracking-[0.25em] text-sm font-semibold">
          Browse Categories
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#232466]">
          Explore Our Products
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-slate-600">
          Discover professional audio equipment, integrated solutions,
          and industry-leading technologies designed for commercial,
          educational, hospitality, and entertainment environments.
        </p>

        <div className="w-24 h-1 bg-[#EF5622] mx-auto mt-8"></div>

      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="group"
          >
            <div className="bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="aspect-square overflow-hidden bg-slate-50">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="max-w-xl px-1 bg-[#232466]">

                <h3 className="text-sm md:text-base font-semibold text-center text-[#fff] leading-5 min-h-[40px] flex items-center justify-center">
                  {category.name}
                </h3>

              </div>

            </div>
          </Link>
        ))}

      </div>

    </section>
  );
};

export default ProductCategories;