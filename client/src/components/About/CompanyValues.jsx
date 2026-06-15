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
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#EF5622]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#232466]/5 blur-3xl rounded-full"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-24">

          <span className="inline-flex px-5 py-2 rounded-full bg-[#EF5622]/10 text-[#EF5622] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold">
            Why Choose Adroit Audial
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#232466] leading-tight">
            Built on Innovation, Quality & Trust
          </h2>

          <div className="flex justify-center gap-3 mt-8">
            <div className="w-16 h-1 bg-[#EF5622] rounded-full"></div>
            <div className="w-8 h-1 bg-[#232466] rounded-full"></div>
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 lg:mb-28">

          <div className="group bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-[#EF5622]/10 flex items-center justify-center mb-6">
              <span className="text-[#EF5622] font-bold text-xl">01</span>
            </div>

            <h3 className="text-3xl font-bold text-[#232466] mb-5">
              Our Vision
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To become a globally recognized leader in professional audio
              solutions by delivering innovative, high-performance
              technologies that transform the way people communicate,
              learn, collaborate, and experience sound.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-[#EF5622]/10 flex items-center justify-center mb-6">
              <span className="text-[#EF5622] font-bold text-xl">02</span>
            </div>

            <h3 className="text-3xl font-bold text-[#232466] mb-5">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To design, manufacture, and deliver world-class audio
              products and integrated solutions that exceed customer
              expectations through innovation, quality, technical
              excellence, and dedicated support.
            </p>
          </div>

        </div>

        {/* Pillars */}
        <div className="mb-20 lg:mb-28">

          <h3 className="text-3xl md:text-4xl font-bold text-[#232466] mb-12">
            Our Pillars
          </h3>

          <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-6">

            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:border-[#EF5622]/30 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#232466] to-[#3c3ea0] flex items-center justify-center text-white font-bold text-lg mb-5 group-hover:scale-110 transition-all">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h4 className="font-bold text-[#232466] mb-4 text-xl">
                  {pillar.title}
                </h4>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Process */}
        <div className="mb-20 lg:mb-28">

          <h3 className="text-3xl md:text-4xl font-bold text-[#232466] mb-12">
            Our Process
          </h3>

          <div className="space-y-5">

            {process.map((step, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="min-w-[60px] w-15 h-15 rounded-2xl bg-[#232466] text-white font-bold flex items-center justify-center text-lg group-hover:bg-[#EF5622] transition-all duration-300">
                  {index + 1}
                </div>

                <h4 className="font-semibold text-[#232466] text-base md:text-lg">
                  {step}
                </h4>
              </div>
            ))}

          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {[
            {
              title: "Our Ethos",
              content:
                "At Adroit Audial LLP, we believe exceptional audio experiences have the power to connect, educate, inspire, and transform environments. Our ethos is built on innovation, integrity, quality, and customer-centricity.",
            },
            {
              title: "Our Thoughts",
              content:
                "We believe audio is more than sound—it’s an experience that shapes communication, learning, entertainment, and engagement. As technology evolves, our focus remains on creating intelligent, scalable, and future-ready audio solutions.",
            },
            {
              title: "Quality Assurance",
              content:
                "Quality is embedded in every stage of our operations. From product development and manufacturing to installation and after-sales support, we follow rigorous quality control processes to ensure reliability and performance.",
            },
            {
              title: "Health & Safety",
              content:
                "We are committed to maintaining safe working practices for employees, clients, and partners through training, compliance procedures, risk assessments, and industry standard safety protocols.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl border border-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-[#232466] mb-5">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}