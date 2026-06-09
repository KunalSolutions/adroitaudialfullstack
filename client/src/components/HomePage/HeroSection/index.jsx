import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/Hero/01.jpg",
  "/Hero/02.jpg",
  "/Hero/03.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slider */}
      <div className="relative h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh]">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Optional Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index
                  ? "bg-white w-8"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}