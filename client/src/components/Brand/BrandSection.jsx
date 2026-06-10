import { Link } from "react-router-dom";

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

const homeBrands = [
  "Denon",
  "Marantz",
  "KEF",
  "Klipsch",
  "Polk Audio",
  "ELAC",
];

const studioBrands = [
  "AKG",
  "Beyerdynamic",
  "Audeze",
  "Marshall",
  "Sony",
];

export default function BrandSection() {
  return (
    <section className="py-20 bg-slate-50">
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

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

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
        {/* <div className="mb-14">
          <h3 className="text-2xl font-bold text-[#232466] mb-6">
            Home Audio & Hi-Fi
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {homeBrands.map((brand) => (
              <div
                key={brand}
                className="bg-white border border-slate-200 py-5 px-4 text-center font-semibold text-slate-700 hover:border-[#EF5622] hover:text-[#232466] transition"
              >
                {brand}
              </div>
            ))}

          </div>
        </div> */}

        {/* Studio & Monitoring */}
        {/* <div>
          <h3 className="text-2xl font-bold text-[#232466] mb-6">
            Studio & Monitoring
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

            {studioBrands.map((brand) => (
              <div
                key={brand}
                className="bg-white border border-slate-200 py-5 px-4 text-center font-semibold text-slate-700 hover:border-[#EF5622] hover:text-[#232466] transition"
              >
                {brand}
              </div>
            ))}

          </div>
        </div> */}

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