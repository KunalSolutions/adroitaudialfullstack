import { Link } from "react-router-dom";

const DiamondCard = ({ category }) => {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative block w-[220px] h-[220px]"
    >
      {/* Cyan Background Shape */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          rotate-45
          rounded-[40px]
          translate-x-4
          -translate-y-4
        "
      />

      {/* Main Diamond */}
      <div
        className="
          relative
          w-full
          h-full
          overflow-hidden
          rotate-45
          rounded-[40px]
          shadow-2xl
        "
      >
        <img
          src={category.image}
          alt={category.name}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            -rotate-45
            scale-[1.75]
            transition-all
            duration-500
            group-hover:scale-[1.9]
          "
        />

        <div className="absolute inset-0 bg-black/35" />

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            -rotate-45
            px-5
            z-10
          "
        >
          <h3
            className="
              text-white
              font-extrabold
              uppercase
              text-center
              text-[26px]
              leading-tight
            "
          >
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default DiamondCard;