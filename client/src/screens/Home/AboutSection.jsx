import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/Hero/01.jpg"
              alt="Our Story"
              className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Our Story
            </h2>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
              We believe that nothing should come between you and your
              audio-visual experience. Founded with a vision to deliver
              world-class AV excellence, we partner with globally recognized
              brands to provide premium professional audio and video solutions
              across India.
            </p>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8">
              Our expertise spans integrated AV systems, enterprise
              installations, and large-scale technology deployments. We are
              committed to delivering reliable, cost-effective, and future-ready
              solutions that transform spaces and enhance experiences.
            </p>

            <a
              href="/about-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:opacity-80 transition-all duration-300"
            >
              Read more
              <ArrowRight size={18} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}