import { Link } from "react-router-dom";

const teamMembers = [
  {
    slug: "nitin-ambavkar",
    name: "Nitin Ambavkar",
    role: "Director",
    image: "/team/Nitin.jpg",
    email: "info@adroitaudial.in",
    phone: "+91 77096 83131",
    shortDesc:
      "AV Specialist | CTS Certified | B.E. (Electronics) | 48+ AV Certifications",
  },
  {
    slug: "Abhishek Anil Mamgain",
    name: "Abhishek Anil Mamgain",
    role: "Technical Head",
    image: "/team/Abhishek.jpg",
    email: "info@adroitaudial.in",
    phone: "+91 77096 83131",
    shortDesc:
      "Dante certified. Aspiring CTS",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-[#EF5622] uppercase tracking-[0.25em] font-semibold">
            Leadership Team
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#232466]">
            Meet Our Experts
          </h2>
        </div>

       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">

            {teamMembers.map((member) => (
                <Link
                key={member.slug}
                to={`/team/${member.slug}`}
                className="group block"
                >
                <div className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

                    <div className="relative overflow-hidden">

                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[450px] object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#232466] via-transparent to-transparent" />

                    {/* Role Badge */}
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-[#232466] text-xs font-semibold px-4 py-2 rounded-full">
                        Leadership Team
                    </div>

                    </div>

                    <div className="p-8">

                    <h3 className="text-2xl font-bold text-[#232466]">
                        {member.name}
                    </h3>

                    <p className="text-[#EF5622] font-semibold mt-2">
                        {member.role}
                    </p>

                    <p className="mt-4 text-slate-600 text-sm leading-relaxed line-clamp-1">
                        {member.shortDesc}
                    </p>

                    <div className="mt-6 flex items-center justify-between">

                        <span className="text-[#232466] font-semibold">
                        View Profile
                        </span>

                        <div className="w-10 h-10 rounded-full bg-[#232466] text-white flex items-center justify-center group-hover:bg-[#EF5622] group-hover:translate-x-1 transition-all duration-300">
                        →
                        </div>

                    </div>

                    </div>

                </div>
                </Link>
            ))}

            </div>

      </div>
    </section>
  );
}