import React from "react";
import { motion } from "framer-motion";
import services from "../../data/Services";

const ServiceSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 lg:px-8">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <h1 className="absolute left-1/2 top-10 -translate-x-1/2 text-[14vw] font-black text-[#232466]/5 whitespace-nowrap">
          AUDIO SOLUTIONS
        </h1>

        <div className="absolute top-20 left-20 h-5 w-5 rounded-full bg-[#EF5622] animate-bounce" />
        <div className="absolute right-24 top-32 h-8 w-8 rounded-full bg-[#232466]/20 animate-pulse" />
        <div className="absolute bottom-24 left-1/3 h-4 w-4 rounded-full bg-[#EF5622] animate-ping" />

        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#232466]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#EF5622]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-[#EF5622]/20 bg-[#EF5622]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#EF5622]">
            Our Expertise
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#232466] md:text-6xl">
            Professional Audio Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Innovative, scalable, and reliable audio systems designed for
            auditoriums, classrooms, boardrooms, hospitality spaces, and
            enterprise environments.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid gap-8 lg:grid-cols-12">

          {services.map((service, index) => {

            const large =
              index === 0 ||
              index === 3 ||
              index === 4 ||
              index === 7;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-xl backdrop-blur-xl ${
                  large
                    ? "lg:col-span-8 lg:h-[500px]"
                    : "lg:col-span-4 lg:h-[500px]"
                }`}
              >
                {/* Image */}
                <img
                  src={service.Image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#232466] via-[#232466]/70 to-transparent" />

                {/* Orange Glow */}
                <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[#EF5622]/30 to-transparent" />
                </div>

                {/* Number */}
                <div className="absolute right-6 top-6 text-7xl font-black text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 z-20 p-8">

                  <div className="mb-4 h-1 w-16 rounded-full bg-[#EF5622] transition-all duration-500 group-hover:w-28" />

                  <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="max-w-xl text-white/80 line-clamp-3">
                    {service.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;