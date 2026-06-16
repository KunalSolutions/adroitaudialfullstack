import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#EF5622]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#232466]/5 blur-3xl rounded-full" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#EF5622]/10 text-[#EF5622] font-semibold tracking-[0.25em] uppercase text-xs mb-6">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#232466] leading-[1.1] mb-6">
              Creating Exceptional Audio Experiences Through Innovation
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-1 bg-[#EF5622] rounded-full"></div>
              <div className="w-8 h-1 bg-[#232466] rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed">
                Adroit Audial LLP is a leading audio solutions company
                specializing in manufacturing, retail, servicing, and
                complete audio system integration solutions. We provide
                innovative, high-quality audio products and customized
                solutions for diverse industries and applications.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                Our expertise includes designing and delivering professional
                audio solutions for auditoriums, classrooms, training rooms,
                theatres, conference rooms, public address systems, background
                music systems, and various commercial and institutional spaces.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                We offer multiple in-house brands and a comprehensive range
                of professional audio products including speakers,
                amplifiers, microphones, DSPs, mixers, controllers,
                digital voice recorders, and advanced audio technologies
                designed to meet modern communication and entertainment needs.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#232466] text-white font-semibold shadow-xl hover:shadow-[#232466]/25 hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Decorative Shape */}
            <div className="absolute -top-6 -left-6 w-40 h-40 border-2 border-[#EF5622]/20 rounded-3xl rotate-12"></div>

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_80px_rgba(35,36,102,0.15)]">
              <img
                src="/Hero/about.png"
                alt="Adroit Audial"
                className="w-full h-[450px] lg:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Glass Card */}
            <div className="absolute bottom-8 left-8 backdrop-blur-xl bg-white/85 border border-white/50 shadow-2xl rounded-3xl px-6 py-5">
              <h4 className="text-[#232466] font-bold text-lg">
                Professional Audio
              </h4>
              <p className="text-slate-500 text-sm">
                Innovative Solutions & Integration
              </p>
            </div>

            {/* Orange Accent */}
            <div className="absolute -bottom-8 -right-8 hidden lg:block w-48 h-48 bg-[#EF5622] rounded-[32px] -z-10"></div>

            {/* Floating Circle */}
            <div className="absolute top-10 -right-5 w-20 h-20 bg-[#232466] rounded-full opacity-90"></div>
          </div>
        </div>
      </div>
    </section>
  );
}