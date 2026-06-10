import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
  <section id="about" className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src="/Hero/04.jpeg"
          alt="About Adroit Audial"
          className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#232466]/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div>

        <span className="inline-block text-[#EF5622] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
          About Adroit Audial
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#232466] leading-tight mb-6">
          Delivering Intelligent Audio Solutions Across India
        </h2>

        <div className="w-20 h-1 bg-[#EF5622] mb-8"></div>

        <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
          Adroit Audial LLP is a leading audio solutions company
          specializing in professional audio products, system
          integration, installation, servicing, and customized
          sound solutions for commercial, educational, hospitality,
          entertainment, and institutional environments.
        </p>

        <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
          We design and deliver high-performance audio systems for
          auditoriums, theatres, classrooms, conference rooms,
          training facilities, public address systems, background
          music solutions, and large-scale commercial spaces.
        </p>

        <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-10">
          With a strong focus on innovation, reliability, and
          customer satisfaction, we provide complete end-to-end
          audio solutions that enhance communication,
          collaboration, learning, and entertainment experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">

          <a
            href="/about-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#232466] text-white font-semibold hover:bg-[#1b1c52] transition-all duration-300"
          >
            Learn More
            <ArrowRight size={18} />
          </a>

          <a
            href="https://wa.me/919511609437"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#EF5622] text-[#EF5622] font-semibold hover:bg-[#EF5622] hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
  );
}