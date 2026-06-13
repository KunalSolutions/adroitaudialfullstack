import React from "react";
import { motion } from "framer-motion";
import services from "../../data/Services";

const ServiceSection = () => {
  return (
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-5 md:px-6 lg:px-8">

    {/* Background Effects */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

    ```
    <h1 className="absolute left-1/2 top-4 sm:top-6 md:top-8 lg:top-10 -translate-x-1/2 text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black text-[#232466]/5 whitespace-nowrap">
      AUDIO SERVICES
    </h1>

    <div className="absolute top-16 left-4 sm:left-10 md:left-16 lg:left-20 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-full bg-[#EF5622] animate-bounce" />

    <div className="absolute right-4 sm:right-10 md:right-16 lg:right-24 top-24 sm:top-28 md:top-32 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 rounded-full bg-[#232466]/20 animate-pulse" />

    <div className="absolute bottom-20 left-1/3 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#EF5622] animate-ping" />

    <div className="absolute -left-20 sm:-left-28 md:-left-32 lg:-left-40 top-0 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#232466]/10 blur-3xl" />

    <div className="absolute -right-20 sm:-right-28 md:-right-32 lg:-right-40 bottom-0 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px] rounded-full bg-[#EF5622]/10 blur-3xl" />
    ```

      </div>

      <div className="relative mx-auto max-w-7xl">

    ```
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-center"
    >
      <span className="inline-block rounded-full border border-[#EF5622]/20 bg-[#EF5622]/10 px-3 py-2 sm:px-4 md:px-5 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-[#EF5622]">
        Our Expertise
      </span>

      <h2 className="mt-4 sm:mt-5 md:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#232466] leading-tight">
        Professional Audio Services
      </h2>

      <p className="mx-auto mt-4 sm:mt-5 md:mt-6 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
        Innovative, scalable, and reliable audio systems designed for
        auditoriums, classrooms, boardrooms, hospitality spaces, and
        enterprise environments.
      </p>
    </motion.div>

    {/* Responsive Bento Grid */}
    <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 lg:grid-cols-12">

      {services.map((service, index) => {

        const large =
          index === 0 ||
          index === 3 ||
          index === 4 ||
          index === 7;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`group relative overflow-hidden rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] border border-white/20 bg-white shadow-xl backdrop-blur-xl
            h-[280px]
            sm:h-[320px]
            md:h-[380px]
            lg:h-[500px]
            ${
              large
                ? "lg:col-span-8"
                : "lg:col-span-4"
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
            <div className="absolute right-3 top-3 sm:right-4 sm:top-4 lg:right-6 lg:top-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white/10">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 z-20 p-4 sm:p-5 md:p-6 lg:p-8">

              <div className="mb-3 sm:mb-4 h-1 w-12 sm:w-14 lg:w-16 rounded-full bg-[#EF5622] transition-all duration-500 group-hover:w-24 lg:group-hover:w-28" />

              <h3 className="mb-2 sm:mb-3 lg:mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-white/80 line-clamp-3 leading-relaxed">
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