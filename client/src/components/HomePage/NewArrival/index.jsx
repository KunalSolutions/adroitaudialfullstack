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
   <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden bg-gradient-to-tr from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-64 sm:w-96 md:w-[450px] h-64 sm:h-96 md:h-[450px] bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-56 sm:w-80 md:w-[400px] h-56 sm:h-80 md:h-[400px] bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating Dots */}
        <div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

        <div className="absolute top-20 right-20 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>

      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">

          {sections.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group block"
            >
              <div
                className={`
                  ${item.bg}
                  rounded-2xl
                  sm:rounded-3xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  xl:hover:-translate-y-3
                  h-full
                `}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">

                  {/* Image */}
                  <div className="flex-shrink-0 order-1 sm:order-2 mb-5 sm:mb-0">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="
                        w-24
                        h-24
                        sm:w-32
                        sm:h-32
                        md:w-36
                        md:h-36
                        lg:w-40
                        lg:h-40
                        xl:w-44
                        xl:h-44
                        2xl:w-52
                        2xl:h-52
                        object-contain
                        group-hover:scale-110
                        transition-all
                        duration-500
                      "
                    />

                  </div>

                  {/* Content */}
                  <div className="flex-1 sm:pr-4 md:pr-6 text-center sm:text-left order-2 sm:order-1">

                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        md:text-[28px]
                        lg:text-[32px]
                        xl:text-[36px]
                        2xl:text-[42px]
                        font-bold
                        text-[#232466]
                        mb-3
                        leading-tight
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-slate-600
                        leading-relaxed
                        text-sm
                        sm:text-base
                        md:text-lg
                        lg:text-xl
                        xl:text-[22px]
                        2xl:text-2xl
                      "
                    >
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