import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const HomeCards = () => {
  const sections = [
    {
      title: "Microphones",
      description:
        "Explore premium microphones for studio recording, podcasting, broadcasting, and live performances.",
      image: "https://png.pngtree.com/png-vector/20240126/ourmid/pngtree-microphone-png-free-download-png-image_11496415.png",
      link: "category/microphone",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      title: "Software",
      description:
        "Discover professional audio software, virtual instruments, effects, and creative production tools.",
      image: "/images/software.webp",
      link: "/software",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      title: "Accessories",
      description:
        "Find quality mounts, cables, stands, pop filters, and essential studio accessories.",
      image: "/images/newarrival3.png",
      link: "category/studio-accessories",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-tr from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating dots */}
        <div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>

      </div>
    <div className="max-w-7xl mx-auto px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {sections.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="group block"
        >
          <div
            className={`${item.bg} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
          >
            <div className="flex items-center justify-between p-6">

              {/* Right Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Left Content */}
              <div className="flex-1 pr-4">
                <h3 className="text-2xl font-bold text-[#232466] mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        </Link>
      ))}

      </div>

    </div>
  </section>
  );
};

export default HomeCards;