
// src/components/CategorySection.jsx

import {
  HiOutlineTv,
  HiOutlineSpeakerWave,
  HiOutlineCube,
  HiOutlineVideoCamera,
  HiOutlineWrenchScrewdriver,
  HiOutlineRectangleStack,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

const categories = [
  {
    id: 1,
    name: "Displays",
    icon: <HiOutlineTv size={28} />,
  },
  {
    id: 1,
    name: "Displays",
    icon: <HiOutlineComputerDesktop size={28} />,
  },
  
  {
    id: 2,
    name: "Audio",
    icon: <HiOutlineSpeakerWave size={28} />,
  },
  {
    id: 3,
    name: "LED Wall",
    icon: <HiOutlineRectangleStack size={28} />,
  },
  {
    id: 4,
    name: "Projectors",
    icon: <HiOutlineVideoCamera size={28} />,
  },
  {
    id: 5,
    name: "Accessories",
    icon: <HiOutlineCube size={28} />,
  },
  {
    id: 6,
    name: "Installation",
    icon: <HiOutlineWrenchScrewdriver size={28} />,
  },
];

const CategorySection = () => {
  return (
    <section className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex gap-8 overflow-x-auto scrollbar-hide">

          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center min-w-[90px] cursor-pointer hover:text-blue-600 transition"
            >
              <div className="text-gray-700">
                {cat.icon}
              </div>

              <span className="text-sm mt-2 font-medium">
                {cat.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CategorySection;