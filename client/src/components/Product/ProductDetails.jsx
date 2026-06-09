import { useNavigate, useParams } from "react-router-dom";
import products from "../../data/Products";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  const navigate = useNavigate()

  const product = products.find(
    (item) => item.slug === slug
  );

  const price = Number(product.price.replace(/,/g, ""));
  const offPrice = Number(product.offPrice.replace(/,/g, ""));

  const discountPercent = Math.round(
    ((price - offPrice) / price) * 100
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.seo.metaTitle}</title>

        <meta
          name="description"
          content={product.seo.metaDescription}
        />

        <meta
          name="keywords"
          content={product.seo.keywords.join(", ")}
        />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4">
            <Link onClick={() => navigate(-1)} >
            <p  className="mb-3 underline text-lg hover:opacity-90" >Go back</p>
            </Link>
            <div className="flex flex-wrap items-center gap-2 text-sm mb-10">
                <Link
                    to="/"
                    className="relative inline-block text-gray-500 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:text-black after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                    Home
                </Link>

                <span className="text-gray-400">/</span>

                 <Link
                to={`/category/${product.category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                className="relative inline-block text-gray-500 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:text-black after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                {product.category}
                </Link>
                <span className="text-gray-400">/</span>

                <Link
                    to={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}/${product.subCategory.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative inline-block text-gray-500 cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:text-black after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                    {product.subCategory}
                </Link>
                <span className="text-gray-400">/</span>

                <Link
                    to={`#`}
                    className="text-slate-900 font-bold hover:text-primary transition-colors"
                >
                    {product.name}
                </Link>
                </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Product Image */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full shadow-xs"
              />
            </div>

            {/* Product Content */}
            <div>
                
              <p className="text-sm uppercase tracking-wider text-gray-500">
                {product.brand}
              </p>

              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-3xl text-rose-700 font-bold text-primary">
                  ₹{product.offPrice}
                </span>

                <span className="text-xl text-gray-400 line-through">
                  ₹{product.price}
                </span>

                <span className="text-white bg-rose-700 px-2 rounded-full font-semibold">
                  {discountPercent}% OFF
                </span>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-sm">
                    {product.category}
                  </span>

                  <span className="px-3 py-1 bg-gray-100 text-sm">
                    {product.subCategory}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-3">
                  Product Description
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {product.seo.metaDescription}
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition">
                  Enquire Now
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;