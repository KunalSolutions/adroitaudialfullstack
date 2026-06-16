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
    <section className="py-12 bg-white mb-10">
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