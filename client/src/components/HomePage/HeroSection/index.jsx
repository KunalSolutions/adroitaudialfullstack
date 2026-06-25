import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  // "/Hero/1.jpg",
  "/Hero/2.jpg",
  // "/Hero/4.jpg",
  // "/Hero/5.jpg",
  "/Hero/01.jpg",
  "/Hero/02.jpg",
  // "/Hero.jpg",
  // "/hero2.jpg",
  // "/hero1.jpg",
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
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[30vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide}
              alt={`Hero Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/40 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/40 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white w-8"
                  : "bg-white/60 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
