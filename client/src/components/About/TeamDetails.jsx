import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const teamMembers = [
  {
    slug: "nitin-ambavkar",
    name: "Nitin Ambavkar",
    role: "Founder & Managing Director",
    image: "/team/Nitin.jpg",
    email: "info@adroitaudial.in",
    phone: "+91 77096 83131",
    shortDesc:
      "AV Specialist | CTS Certified | B.E. (Electronics) | 48+ AV Certifications",
    description:
      "With over 22 years of hands-on technical experience in the Audio Visual (AV) industry, Nitin Ambavkar is a seasoned AV Specialist and CTS Certified professional with expertise in designing, integrating, commissioning, and supporting professional AV systems across corporate, educational, hospitality, entertainment, and institutional environments. Throughout his career, he has successfully delivered projects ranging from small meeting rooms and huddle spaces to large auditoriums, conference centres, recording studios, digital signage networks, and enterprise AV infrastructures. His approach combines strong technical knowledge, practical problem-solving, and a focus on reliable, user-friendly solutions. Professional Summar As an AV Specialist with more than two decades of technical experience, Nitin has built a reputation for delivering dependable AV solutions that balance performance, usability, and long-term maintainability. His CTS certification reflects a commitment to industry standards and best practices, while his extensive field experience provides practical insight into real-world deployment challenges. He is particularly skilled at translating client requirements into scalable AV solutions and ensuring smooth execution from concept through commissioning and support.",
  },
];

export default function TeamDetails() {
    const { slug } = useParams();

    const member = teamMembers.find(
        (item) => item.slug === slug
    );

    if (!member) return <div>Profile Not Found</div>;

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Floating Background Elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EF5622]/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#232466]/10 blur-3xl rounded-full"
      />

      {/* Rotating Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden lg:block absolute top-40 right-20 w-40 h-40 border border-[#EF5622]/20 rounded-full"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="hidden lg:block absolute bottom-20 left-20 w-72 h-72 border border-[#232466]/10 rounded-full"
      />

      {/* HERO */}
      <div className="relative bg-[#232466] text-white py-24 lg:py-32 overflow-hidden">

        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#EF5622] text-sm font-semibold shadow-lg">
                Leadership Team
              </span>

              <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
                {member.name}
              </h1>

              <h2 className="mt-4 text-2xl md:text-3xl text-[#EF5622] font-semibold">
                {member.role}
              </h2>

              <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {member.shortDesc}
              </p>

            </motion.div>

            {/* Right Image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative"
            >

              <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#EF5622]/20 rounded-[40px] blur-xl" />

              <div className="absolute -top-8 -left-8 w-full h-full border border-white/10 rounded-[40px]" />

              <img
                src={member.image}
                alt={member.name}
                className="relative z-20 w-full rounded-[40px] shadow-[0_35px_80px_rgba(0,0,0,0.45)] border border-white/10"
              />

            </motion.div>

          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-4 py-24">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <div>

            <div className="sticky top-24 bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-[32px] p-8 hover:-translate-y-2 transition-all duration-500">

              <h3 className="text-2xl font-bold text-[#232466] mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div>
                  <span className="text-sm text-slate-500 uppercase">
                    Email
                  </span>
                  <p className="font-semibold text-[#232466] mt-1">
                    {member.email}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-slate-500 uppercase">
                    Phone
                  </span>
                  <p className="font-semibold text-[#232466] mt-1">
                    {member.phone}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-slate-500 uppercase">
                    Position
                  </span>
                  <p className="font-semibold text-[#232466] mt-1">
                    {member.role}
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">

            <h2 className="text-4xl md:text-5xl font-bold text-[#232466] mb-10">
              Professional Profile
            </h2>

            <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-8 md:p-10">

              <p className="text-slate-600 leading-loose text-lg">
                {member.description}
              </p>

            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="bg-white rounded-[30px] p-8 text-center shadow-xl border border-slate-100"
              >
                <h3 className="text-5xl font-black text-[#232466]">
                  24+
                </h3>
                <p className="mt-3 text-slate-500">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="bg-white rounded-[30px] p-8 text-center shadow-xl border border-slate-100"
              >
                <h3 className="text-5xl font-black text-[#232466]">
                  48+
                </h3>
                <p className="mt-3 text-slate-500">
                  Certifications
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="bg-white rounded-[30px] p-8 text-center shadow-xl border border-slate-100"
              >
                <h3 className="text-5xl font-black text-[#232466]">
                  1000+
                </h3>
                <p className="mt-3 text-slate-500">
                  Projects Supported
                </p>
              </motion.div>

            </div>

            {/* Achievement Banner */}
            <div className="mt-16 rounded-[40px] overflow-hidden bg-gradient-to-r from-[#232466] via-[#3134a8] to-[#EF5622] p-[1px]">

              <div className="bg-white rounded-[40px] p-10">

                <h3 className="text-3xl font-bold text-[#232466] mb-6">
                  Professional Highlights
                </h3>

                <div className="grid md:grid-cols-3 gap-8">

                  <div>
                    <h4 className="text-[#EF5622] text-4xl font-bold">
                      24+
                    </h4>
                    <p className="text-slate-600">
                      Years Technical Experience
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#EF5622] text-4xl font-bold">
                      48+
                    </h4>
                    <p className="text-slate-600">
                      Industry Certifications
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#EF5622] text-4xl font-bold">
                      1000+
                    </h4>
                    <p className="text-slate-600">
                      Projects Delivered
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Expertise */}
            <div className="mt-20">

              <h3 className="text-3xl font-bold text-[#232466] mb-8">
                Areas of Expertise
              </h3>

              <div className="flex flex-wrap gap-4">

                {[
                  "AV System Design",
                  "Audio Integration",
                  "Conference Solutions",
                  "CTS Certified",
                  "Digital Signage",
                  "Auditoriums",
                  "Recording Studios",
                  "System Commissioning",
                ].map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#232466] to-[#3d40c0] text-white shadow-lg cursor-pointer"
                  >
                    {item}
                  </motion.span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
