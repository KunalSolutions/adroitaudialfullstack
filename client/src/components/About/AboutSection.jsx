import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-5">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Our Story
            </h2>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                Adroit Audial LLP is a leading audio solutions company specializing in manufacturing, retail, servicing, and complete audio system integration solutions. We provide innovative and high-quality audio products and customized solutions for various industries and applications.
            </p>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8">
              Our expertise includes designing and delivering professional audio solutions for Auditoriums, Classrooms, Training Rooms, Theatres, Conference Rooms, PA, BGM, indoor and outdoor music system and other commercial and institutional spaces. With a strong focus on performance, reliability, and customer satisfaction, we create tailored audio environments that meet modern communication and entertainment needs.
            </p>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8">
              We offer multiple in-house brands and an extensive range of professional audio products, including Speakers, Amplifiers, Microphones, DSPs, Mixers, Controllers, Digital Voice Recorders Digital Voice Recorders and various other audio devices. Along with manufacturing advanced technical and non-technical audio products, we also supply and support a wide range of market-leading audio equipment.
            </p>



          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/Hero/01.jpg"
              alt="Our Story"
              className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

        </div>

      </div>
    </section>
  );
}