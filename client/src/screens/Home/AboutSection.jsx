import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50"
    >

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating dots */}
        <div className="absolute top-24 left-1/4 w-3 h-3 rounded-full bg-[#EF5622] animate-bounce"></div>

        <div className="absolute bottom-32 right-1/4 w-2 h-2 rounded-full bg-[#232466] animate-ping"></div>

        <div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Section */}
          <div className="relative overflow-hidden rounded-3xl"> 
            {/* Glow Effects */} 
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#EF5622]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#232466]/20 rounded-full blur-3xl animate-pulse"></div> 
                <img src="/Hero/about.png" alt="About Adroit Audial" className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover scale-105 hover:scale-110 transition-all duration-[3000ms]" /> 
                <div className="absolute inset-0 bg-gradient-to-t from-[#232466]/50 to-transparent">
              </div> 
            </div>

          {/* Content */}
          <div>

            <span className="inline-block text-[#EF5622] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
              About Adroit Audial
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#232466] leading-tight mb-6">
              Delivering Intelligent Audio Solutions Across India
            </h2>

            {/* Animated Line */}
            <div className="relative mb-8">
              <div className="w-20 h-1 bg-[#EF5622]"></div>
              <div className="absolute top-0 left-0 w-8 h-1 bg-[#232466] animate-slideLine"></div>
            </div>

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
                className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-[#232466] text-white font-semibold rounded-xl"
              >
                <span className="relative z-10">
                  Learn More
                </span>

                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-2 transition-all duration-300"
                />

                <span className="absolute inset-0 bg-[#EF5622] translate-y-full group-hover:translate-y-0 transition-all duration-500"></span>
              </a>

              <a
                href="https://wa.me/919511609437"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#EF5622] text-[#EF5622] font-semibold rounded-xl hover:bg-[#EF5622] hover:text-white transition-all duration-300"
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