import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Audio System Design & Consultancy",
    description:
      "Professional planning and design of customized audio solutions tailored to your environment and operational needs.",
  },
  {
    title: "Auditorium & Theatre Audio Solutions",
    description:
      "Complete sound reinforcement systems for auditoriums, theatres, and large performance venues.",
  },
  {
    title: "Conference & Boardroom Solutions",
    description:
      "Advanced audio conferencing systems for seamless communication and collaboration.",
  },
  {
    title: "Classroom & Training Room Audio Systems",
    description:
      "Interactive and engaging audio solutions for educational institutions and corporate training facilities.",
  },
  {
    title: "Public Address (PA) Systems",
    description:
      "Reliable public address and announcement systems for commercial, industrial, and institutional applications.",
  },
  {
    title: "Background Music (BGM) Solutions",
    description:
      "Premium indoor and outdoor music systems designed to create the perfect ambience.",
  },
  {
    title: "Professional Audio Equipment Supply",
    description:
      "A comprehensive range of speakers, amplifiers, microphones, DSPs, mixers, controllers, and other professional audio products.",
  },
  {
    title: "System Integration & Installation",
    description:
      "Seamless integration and deployment of audio technologies for optimal performance and user experience.",
  },
  {
    title: "Maintenance & Technical Support",
    description:
      "Preventive maintenance, servicing, troubleshooting, and long-term technical support to ensure uninterrupted operation.",
  },
  {
    title: "Customized Audio Solutions",
    description:
      "Tailor-made solutions designed to meet the specific requirements of commercial, educational, hospitality, entertainment, and institutional sectors.",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">

          <span className="inline-block text-[#EF5622] font-semibold tracking-[0.25em] uppercase text-sm">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-[#232466] leading-tight">
            Delivering Intelligent Audio Solutions For Every Space
          </h2>

          <div className="w-24 h-1 bg-[#EF5622] mx-auto mt-8"></div>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            At Adroit Audial LLP, we provide end-to-end audio solutions
            designed to enhance communication, collaboration, learning,
            and entertainment. From concept and design to installation,
            integration, and ongoing support, we deliver customized
            systems that meet the unique requirements of every project.
          </p>

        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 p-8 transition-all duration-300 hover:border-[#EF5622] hover:shadow-xl"
            >
              <div className="mb-5">

                <span className="text-5xl font-bold text-[#232466]/10 group-hover:text-[#EF5622]/20 transition">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <h3 className="text-xl font-bold text-[#232466] mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-24 bg-[#232466] p-12 md:p-16 text-center">

          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Transforming Spaces Through Sound Excellence
          </h3>

          <p className="max-w-4xl mx-auto mt-6 text-slate-300 text-lg leading-relaxed">
            Whether it's a classroom, conference room, auditorium,
            retail space, hospitality venue, or large-scale commercial
            facility, Adroit Audial LLP delivers innovative audio
            solutions that combine technology, reliability, and
            exceptional performance.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center mt-10 bg-[#EF5622] text-white px-8 py-4 font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ServiceSection;