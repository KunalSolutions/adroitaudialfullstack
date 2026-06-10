import React from "react";

const pillars = [
  {
    title: "Innovation",
    description:
      "Continuously developing advanced audio technologies and customized solutions to meet evolving industry needs.",
  },
  {
    title: "Quality",
    description:
      "Maintaining the highest standards in product design, manufacturing, integration, and support services.",
  },
  {
    title: "Customer Commitment",
    description:
      "Understanding client requirements and delivering tailored solutions with exceptional service and long-term support.",
  },
  {
    title: "Reliability",
    description:
      "Providing dependable products and systems that perform consistently across diverse environments and applications.",
  },
  {
    title: "Expertise",
    description:
      "Leveraging industry knowledge, technical excellence, and years of experience to deliver superior audio solutions.",
  },
];

const process = [
  "Consultation & Requirement Analysis",
  "System Design",
  "Product Selection",
  "Installation & Integration",
  "Training & Handover",
  "Ongoing Support",
];

export default function CompanyValues() {
  return (
   <section className="py-14 md:py-20 lg:py-24 bg-slate-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">

      <span className="text-[#EF5622] uppercase tracking-[0.15em] md:tracking-[0.25em] text-xs md:text-sm font-semibold">
        Why Choose Adroit Audial
      </span>

      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#232466] leading-tight">
        Built on Innovation, Quality & Trust
      </h2>

      <div className="w-16 md:w-24 h-1 bg-[#EF5622] mx-auto mt-6 md:mt-8"></div>

    </div>

    {/* Vision + Mission */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-14 md:mb-20 lg:mb-24">

      <div className="bg-white p-6 md:p-8 lg:p-10 border-l-4 border-[#EF5622] shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-[#232466] mb-4">
          Our Vision
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          To become a globally recognized leader in professional audio
          solutions by delivering innovative, high-performance
          technologies that transform the way people communicate,
          learn, collaborate, and experience sound.
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 lg:p-10 border-l-4 border-[#EF5622] shadow-sm">
        <h3 className="text-2xl md:text-3xl font-bold text-[#232466] mb-4">
          Our Mission
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          To design, manufacture, and deliver world-class audio
          products and integrated solutions that exceed customer
          expectations through innovation, quality, technical
          excellence, and dedicated support.
        </p>
      </div>

    </div>

    {/* Pillars */}
    <div className="mb-14 md:mb-20 lg:mb-24">

      <h3 className="text-2xl md:text-3xl font-bold text-[#232466] mb-8 md:mb-10">
        Our Pillars
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 md:gap-6">

        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="bg-white p-5 md:p-6 border border-slate-200 hover:border-[#EF5622] transition-all duration-300"
          >
            <div className="text-[#EF5622] font-bold text-2xl md:text-3xl mb-3 md:mb-4">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h4 className="font-bold text-[#232466] mb-3 text-lg">
              {pillar.title}
            </h4>

            <p className="text-sm text-slate-600 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}

      </div>

    </div>

    {/* Process */}
    <div className="mb-14  md:mb-20 lg:mb-24">

      <h3 className="text-2xl md:text-3xl font-bold text-[#232466] mb-8 md:mb-10">
        Our Process
      </h3>

      <div className="space-y-4 md:space-y-5">

        {process.map((step, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center gap-4 md:gap-6 bg-white p-4 md:p-5 border border-slate-200"
          >
            <div className="min-w-[44px] w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-[#232466] text-white font-bold">
              {index + 1}
            </div>

            <h4 className="font-semibold text-[#232466] text-sm md:text-base leading-relaxed">
              {step}
            </h4>
          </div>
        ))}

      </div>

    </div>


    {/* QA & Safety */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

      <div className="bg-white p-6 md:p-8 lg:p-10 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-[#232466] mb-4 md:mb-5">
          Our Ethos
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          At Adroit Audial LLP, we believe exceptional audio experiences
          have the power to connect, educate, inspire, and transform
          environments. Our ethos is built on innovation, integrity,
          quality, and customer-centricity.
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 lg:p-10 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-[#232466] mb-4 md:mb-5">
          Our Thoughts
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          We believe audio is more than sound—it’s an experience that
          shapes communication, learning, entertainment, and engagement.
          As technology evolves, our focus remains on creating
          intelligent, scalable, and future-ready audio solutions.
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 lg:p-10 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-[#232466] mb-4 md:mb-5">
          Quality Assurance
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          Quality is embedded in every stage of our operations.
          From product development and manufacturing to installation
          and after-sales support, we follow rigorous quality control
          processes to ensure reliability and performance.
        </p>
      </div>

      <div className="bg-white p-6 md:p-8 lg:p-10 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-[#232466] mb-4 md:mb-5">
          Health & Safety
        </h3>

        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          We are committed to maintaining safe working practices for
          employees, clients, and partners through training,
          compliance procedures, risk assessments, and industry
          standard safety protocols.
        </p>
      </div>

    </div>

  </div>
</section>
  )
}