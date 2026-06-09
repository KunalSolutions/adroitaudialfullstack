import React from "react";

const products = [
  {
    image: "/Products/1.jpg",
    title: "Conncctrables",
    subtitle: "Wall Speakers",
  },
  {
    image: "/Products/2.jpg",
    title: "Amplifier",
    subtitle: "Premium Audio Technology",
  },
  {
    image: "/Products/3.jpg",
    title: "Brand Three",
    subtitle: " Ceiling Speaker",
  },
  {
    image: "/Products/4.jpg",
    title: "Brand Four",
    subtitle: "Handheld microphone Set",
  },
  {
    image: "/Products/7.jpg",
    title: "Aesthetic Speaker",
    subtitle: "Enterprise AV Systems",
  },
  {
    image: "/Products/8.jpg",
    title: "Party Box Speaker",
    subtitle: "Digital Solutions",
  },
];

const Repeet = () => {
  return (
    <section className="py-16 md:py-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-x-8 gap-y-12">

          {products.map((product, index) => (
            <div
              key={index}
              className="group  p-5 text-center"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                {/* 
                <p className="mt-1 text-sm text-slate-500">
                  {product.subtitle}
                </p> */}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Repeet;