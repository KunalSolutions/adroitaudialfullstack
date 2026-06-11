import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>

            <span className="inline-block text-[#EF5622] font-semibold tracking-[0.25em] uppercase text-sm mb-4">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#232466] leading-tight mb-6">
              Creating Exceptional Audio Experiences Through Innovation
            </h2>

            <div className="w-24 h-1 bg-[#EF5622] mb-8"></div>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Adroit Audial LLP is a leading audio solutions company
              specializing in manufacturing, retail, servicing, and
              complete audio system integration solutions. We provide
              innovative, high-quality audio products and customized
              solutions for diverse industries and applications.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Our expertise includes designing and delivering professional
              audio solutions for auditoriums, classrooms, training rooms,
              theatres, conference rooms, public address systems, background
              music systems, and various commercial and institutional spaces.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              We offer multiple in-house brands and a comprehensive range
              of professional audio products including speakers,
              amplifiers, microphones, DSPs, mixers, controllers,
              digital voice recorders, and advanced audio technologies
              designed to meet modern communication and entertainment needs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">

               <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#232466] text-white font-semibold hover:bg-[#1b1c52] transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight size={18} />
              </a>

            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/Hero/04.jpeg"
              alt="Adroit Audial"
              className="w-full h-[400px] lg:h-[650px] object-cover rounded-2xl"
            />

            {/* Orange Accent */}
            <div className="absolute -bottom-6 -right-6 hidden lg:block w-40 h-40 bg-[#EF5622] rounded-2xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}