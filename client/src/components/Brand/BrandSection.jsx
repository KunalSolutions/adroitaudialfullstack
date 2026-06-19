import { Link } from "react-router-dom";

{/* Professional Audio */}
const brands = [
  {
    name: "Yamaha",
    image: "/Brands/01.svg",
  },
  {
    name: "JBL Professional",
    image: "/Brands/02.avif",
  },
  {
    name: "Shure",
    image: "/Brands/03.png",
  },
  {
    name: "QSC",
    image: "/Brands/04.png",
  },
  {
    name: "Bose Professional",
    image: "/Brands/05.png",
  },
  {
    name: "soundcraft",
    image: "/Brands/06.png",
  },
  {
    name: "midas",
    image: "/Brands/07.png",
  },
  {
    name: "d&b",
    image: "/Brands/08.png",
  },
];

{/* Home Audio */}
const studioBrands = [
  {
    name: "denon",
    image: "/Brands/16.png",
  },
  {
    name: "maratnz",
    image: "/Brands/17.svg",
  },
  {
    name: "internationkef",
    image: "/Brands/18.png",
  },
  {
    name: "klipsch",
    image: "/Brands/19.svg",
  },
  {
    name: "polk",
    image: "/Brands/20.png",
  },
  {
    name: "accoustice",
    image: "/Brands/09.svg",
  },
  {
    name: "elac",
    image: "/Brands/10.svg",
  },
  {
    name: "focal",
    image: "/Brands/11.png",
  },
  {
    name: "technics",
    image: "/Brands/12.svg",
  },
];

{/* Studio & Monitoring */}
const homeBrands = [
  {
    name: "beyer",
    image: "/Brands/13.svg",
  },
  {
    name: "marshell",
    image: "/Brands/14.png",
  },
  {
    name: "Sony",
    image: "/Brands/15.svg",
  },
];

export default function BrandSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-t from-slate-50 via-white to-orange-50">

      {/* Live Background */}
      <div className="absolute inset-0 pointer-events-none">
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-[#EF5622] uppercase tracking-[0.25em] text-sm font-semibold">
            Trusted Global Brands
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#232466]">
            Brands We Work With
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 text-lg">
            We partner with leading global manufacturers to deliver
            professional audio, conferencing, studio, commercial,
            hospitality, and entertainment solutions with proven
            reliability and performance.
          </p>

          <div className="w-20 h-1 bg-[#EF5622] mx-auto mt-6"></div>

        </div>

        {/* Professional Audio */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-[#232466] mb-6">
            Professional Audio
          </h3>

         <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 hover:border-[#EF5622] p-8 flex flex-col items-center justify-center transition-all duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-16 object-contain transition duration-300"
              />

            </div>
          ))}

        </div>
        </div>

        {/* Home Audio */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-[#232466] mb-6">
            Home Audio & Hi-Fi
          </h3>

           <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

            {studioBrands.map((studio, index) => (
                <div
                key={index}
                className="group bg-white border border-slate-200 hover:border-[#EF5622] p-8 flex flex-col items-center justify-center transition-all duration-300"
                >
                <img
                    src={studio.image}
                    alt={studio.name}
                    className="h-16 object-contain transition duration-300"
                />

                </div>
            ))}

            </div>
        </div>

        {/* Studio & Monitoring */}
        <div>
          <h3 className="text-2xl font-bold text-[#232466] mb-6">
            Studio & Monitoring
          </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

            {homeBrands.map((home, index) => (
                <div
                key={index}
                className="group bg-white border border-slate-200 hover:border-[#EF5622] p-8 flex flex-col items-center justify-center transition-all duration-300"
                >
                <img
                    src={home.image}
                    alt={home.name}
                    className="h-16 object-contain transition duration-300"
                />

                </div>
            ))}

            </div>
          
        </div>

        {/* Bottom Content */}
        <div className="mt-16 bg-[#232466] p-8 md:p-12 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Delivering Complete Audio Solutions
          </h3>

          <p className="text-white/80 max-w-4xl mx-auto leading-relaxed">
            From conference rooms and auditoriums to recording studios,
            educational institutions, hospitality venues, live events,
            and commercial facilities, Adroit Audial delivers reliable,
            scalable, and future-ready audio solutions using globally
            trusted technologies and industry-leading brands.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-[#EF5622] text-white px-8 py-4 font-semibold hover:bg-[#d94a18] transition"
          >
            Discuss Your Project
          </Link>

        </div>

      </div>
    </section>
    );
}