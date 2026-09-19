import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "@components/Loader";
import Alert from "@components/Alert";

import { addToCart } from "@slices/cartSlice";
import { useGetProductsByCategoryQuery } from "@slices/productApiSlice";
import { toast } from "react-toastify";

import { BASE_URL } from "../../constants";

const CategoryProductsScreen = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const {
    data: products = [],
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);

  const addToCartHandler = (product) => {
    dispatch(
      addToCart({
        ...product,
        qty: 1,
        price: product.offerPrice || product.price,
      })
    );

    toast.success("Item added to cart");
  };

  const getProductImage = (image) => {
    if (!image) return "";

    // Full URL
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    // Backend uploaded image
    if (
      image.startsWith("/uploads/") ||
      image.startsWith("uploads/")
    ) {
      const imagePath = image.startsWith("/")
        ? image
        : `/${image}`;

      return `${BASE_URL.replace("/api/v1", "")}${imagePath}`;
    }

    // Frontend public images
    return image.startsWith("/") ? image : `/${image}`;
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-[#fff] py-15">
        <div className="mx-auto max-w-7xl px-4 text-center">

          <h1 className="mt-0 text-5xl font-black uppercase text-[#EF5622]">
            {category
              ?.replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#232466]">
            Discover premium{" "}
            {category?.replace(/-/g, " ")} products designed for
            professional audio, commercial installations, events,
            studios and businesses.
          </p>

        </div>
      </section>

      <section className="mx-auto mb-10 max-w-7xl px-4 py-6">

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert type="error">
            {error?.data?.message || error?.error}
          </Alert>
        ) : products.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-[#232466]">
              No Products Added Yet
            </h2>

            <p className="mt-2 text-slate-500">
              No products are currently available for this category.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => {

              const isCorporateProduct =
                product.section === "Corporate";

              if (isCorporateProduct) {
                return (
                  <div
                    key={product._id}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300"
                  >
                    <Link to={`/co-prod/adroit/${product._id}`}>
                      <div className="relative bg-white p-0">

                      <img
                          src={
                            product.image?.startsWith("http")
                              ? product.image
                              : product.image?.startsWith("/uploads/")
                                ? `https://adroitaudialfullstack.onrender.com${product.image}`
                                : product.image
                          }
                          alt={product.name}
                          className="mx-auto h-56 w-full object-contain transition duration-500"
                        />
                      </div>
                    </Link>

                    <div className="p-5">

                      {/* Brand */}

                      <p className="text-xs font-semibold uppercase tracking-wider text-[#EF5622]">
                        {product.brand}
                      </p>

                      {/* Product Name */}

                      <Link to={`/co-prod/adroit/${product._id}`}>
                        <h3 className="mt-2 line-clamp-1 min-h-[5px] font-semibold text-slate-800">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Description */}

                      <Link to={`/co-prod/adroit/${product._id}`}>
                        <h3 className="mt-2 line-clamp-3 min-h-[52px] font-semibold text-slate-800/70">
                          {product.description}
                        </h3>
                      </Link>

                      {/* View Details */}

                      <Link
                        to={`/co-prod/adroit/${product._id}`}
                        className="mt-5 block w-full rounded-xl bg-[#EF5622] py-3 text-center font-semibold text-white transition hover:bg-[#232466]"
                      >
                        View Details
                      </Link>

                    </div>
                  </div>
                );
              }

              /*
              |--------------------------------------------------------------------------
              | REGULAR PRODUCT CARD
              |--------------------------------------------------------------------------
              */

              const hasVariants = product.variants?.length > 0;

              const displayPrice = hasVariants
                ? product.variants[0].offerPrice
                : product.offerPrice;

              const originalPrice = hasVariants
                ? product.variants[0].price
                : product.price;

              const discount =
                originalPrice > displayPrice
                  ? Math.round(
                      ((originalPrice - displayPrice) /
                        originalPrice) *
                        100
                    )
                  : 0;

              return (
                <div
                  key={product._id}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300"
                >

                  <Link to={`/shop/${product._id}`}>
                    <div className="relative bg-white p-0">

                      {/* Discount Badge */}

                      {discount > 0 && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#EF5622] px-3 py-1 text-xs font-bold text-white">
                          {discount}% OFF
                        </span>
                      )}

                      {/* Image */}
                      <img
                          src={
                            product.image?.startsWith("http")
                              ? product.image
                              : product.image?.startsWith("/uploads/")
                                ? `https://adroitaudialfullstack.onrender.com${product.image}`
                                : product.image
                          }
                          alt={product.name}
                          className="mx-auto h-56 w-full object-contain transition duration-500"
                        />

                    </div>
                  </Link>

                  <div className="p-5">

                    {/* Brand */}

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#EF5622]">
                      {product.brand}
                    </p>

                    {/* Name */}

                    <Link to={`/shop/${product._id}`}>
                      <h3 className="mt-2 line-clamp-2 min-h-[52px] font-semibold text-slate-800">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Price */}

                    <div className="mt-4 flex items-center gap-2">

                      <span className="text-2xl font-bold text-[#232466]">
                        ₹{displayPrice}
                      </span>

                      {originalPrice > displayPrice && (
                        <span className="text-sm text-slate-400 line-through">
                          ₹{originalPrice}
                        </span>
                      )}

                    </div>

                    {/* Add To Cart */}

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCartHandler(product);
                      }}
                      className="mt-5 w-full rounded-xl bg-[#EF5622] py-3 font-semibold text-white transition hover:bg-[#232466]"
                    >
                      Add To Cart
                    </button>

                  </div>
                </div>
              );
            })}

          </div>
        )}

      </section>

    </div>
  );
};

export default CategoryProductsScreen;