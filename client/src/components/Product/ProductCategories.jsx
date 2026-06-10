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
  ];

  return (
    <section className="py-12 mx-auto max-w-7xl">
      <div className="mb-8">
        <p className="text-black font-medium">
          Browse Categories
        </p>

        <h2 className="text-3xl font-semibold tracking-normal text-indigo-700 mt-2 mb-10">
          Explore Our Products
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="group"
          >
            <div className="border border-gray-200 bg-white overflow-hidden transition-all duration-300">

              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-3">
                <h3 className="text-sm tracking-tight font-medium text-center leading-5 min-h-[20px]">
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