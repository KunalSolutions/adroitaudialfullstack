import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50"
    >
      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-64 sm:w-96 md:w-[450px] h-64 sm:h-96 md:h-[450px] bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-56 sm:w-80 md:w-[400px] h-56 sm:h-80 md:h-[400px] bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating Dots */}
        <div className="absolute top-24 left-1/4 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#EF5622] animate-bounce"></div>

        <div className="absolute bottom-32 right-1/4 w-2 h-2 rounded-full bg-[#232466] animate-ping"></div>

        <div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

        <div className="absolute top-20 right-20 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32 items-center">

          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Glow Effects */}
            <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#EF5622]/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="absolute -bottom-10 -right-10 w-40 sm:w-48 h-40 sm:h-48 bg-[#232466]/20 rounded-full blur-3xl animate-pulse"></div>

            <img
              src="/Hero/about.png"
              alt="About Adroit Audial"
              className="
                w-full
                h-[280px]
                sm:h-[380px]
                md:h-[500px]
                lg:h-[600px]
                xl:h-[700px]
                2xl:h-[850px]
                object-cover
                scale-105
                hover:scale-110
                transition-all
                duration-[3000ms]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#232466]/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div>
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
                mb-3
                sm:mb-4
              "
            >
              About Adroit Audial
            </span>

            <h2
              className="
                text-[2rem]
                sm:text-[2.5rem]
                md:text-[3rem]
                lg:text-[3.5rem]
                xl:text-[4rem]
                2xl:text-[5rem]
                font-bold
                text-[#232466]
                leading-[1.1]
                mb-5
                sm:mb-6
              "
            >
              Delivering Intelligent Audio Solutions Across India
            </h2>

            {/* Animated Line */}
            <div className="relative mb-6 sm:mb-8">
              <div className="w-16 sm:w-20 h-1 bg-[#EF5622]"></div>
              <div className="absolute top-0 left-0 w-8 h-1 bg-[#232466] animate-slideLine"></div>
            </div>

            <p
              className="
                text-slate-600
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[22px]
                2xl:text-2xl
                mb-5
                sm:mb-6
              "
            >
              Adroit Audial LLP is a leading audio solutions company
              specializing in professional audio products, system
              integration, installation, servicing, and customized
              sound solutions for commercial, educational, hospitality,
              entertainment, and institutional environments.
            </p>

            <p
              className="
                text-slate-600
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[22px]
                2xl:text-2xl
                mb-5
                sm:mb-6
              "
            >
              We design and deliver high-performance audio systems for
              auditoriums, theatres, classrooms, conference rooms,
              training facilities, public address systems, background
              music solutions, and large-scale commercial spaces.
            </p>

            <p
              className="
                text-slate-600
                leading-relaxed
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[22px]
                2xl:text-2xl
                mb-8
                lg:mb-10
                xl:mb-12
              "
            >
              With a strong focus on innovation, reliability, and
              customer satisfaction, we provide complete end-to-end
              audio solutions that enhance communication,
              collaboration, learning, and entertainment experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">

              <a
                href="/about-us"
                className="
                  group
                  relative
                  overflow-hidden
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  sm:px-8
                  xl:px-10
                  py-3
                  sm:py-4
                  xl:py-5
                  text-sm
                  sm:text-base
                  xl:text-lg
                  bg-[#232466]
                  text-white
                  font-semibold
                  rounded-xl
                "
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
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  sm:px-8
                  xl:px-10
                  py-3
                  sm:py-4
                  xl:py-5
                  text-sm
                  sm:text-base
                  xl:text-lg
                  border-2
                  border-[#EF5622]
                  text-[#EF5622]
                  font-semibold
                  rounded-xl
                  hover:bg-[#EF5622]
                  hover:text-white
                  transition-all
                  duration-300
                "
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