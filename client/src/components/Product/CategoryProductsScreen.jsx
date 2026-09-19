import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "@components/Loader";
import Alert from "@components/Alert";
import { addToCart } from "@slices/cartSlice";
import { useGetProductsByCategoryQuery } from "@slices/productApiSlice";
import { toast } from "react-toastify";

const CategoryProductsScreen = () => {
  const { section, category } = useParams();
  const dispatch = useDispatch();

  const {
    data: products = [],
    isLoading,
    error,
  } = useGetProductsByCategoryQuery({ category, section });
  
  console.log("Products:", products);
  console.log("Products count:", products.length);
  
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
    console.log("IMAGE FROM DB:", image);

    if (!image) return "";

    if (image.startsWith("http://") || image.startsWith("https://")) {
      console.log("IMAGE URL:", image);
      return image;
    }

    if (image.startsWith("/uploads/") || image.startsWith("uploads/")) {
      const url = `https://adroitaudialfullstack.onrender.com/${
        image.startsWith("/") ? image.slice(1) : image
      }`;

      console.log("IMAGE URL:", url);
      return url;
    }

    const url = image.startsWith("/") ? image : `/${image}`;

    console.log("IMAGE URL:", url);

    return url;
  };
  

  return (
    <div className="min-h-screen bg-white">

      <section className="bg-white py-15">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl font-black uppercase text-[#EF5622]">
            {category
              ?.replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#232466]">
            Discover premium {category?.replace(/-/g, " ")} products
            designed for professional audio, commercial installations,
            events, studios and businesses.
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
              const isCorporate = section === "corporate";

              if (isCorporate) {
                return (
                  <div
                    key={product._id}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm"
                  >
                    <Link to={`/co-prod/adroit/${product._id}`}>
                      <div className="bg-white">
                        <img
                          src={getProductImage(product.image)}
                          alt={product.name}
                          className="mx-auto h-56 w-full object-contain"
                        />
                      </div>
                    </Link>

                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#EF5622]">
                        {product.brand}
                      </p>

                      <Link to={`/co-prod/adroit/${product._id}`}>
                        <h3 className="mt-2 line-clamp-1 font-semibold text-slate-800">
                          {product.name}
                        </h3>
                      </Link>

                      <p className="mt-2 line-clamp-3 min-h-[52px] font-semibold text-slate-800/70">
                        {product.description}
                      </p>

                      <Link
                        to={`/co-prod/adroit/${product._id}`}
                        className="mt-5 block w-full rounded-xl bg-[#EF5622] py-3 text-center font-semibold text-white hover:bg-[#232466]"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              }

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
                      ((originalPrice - displayPrice) / originalPrice) * 100
                    )
                  : 0;

              return (
                <div
                  key={product._id}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm"
                >
                  <Link to={`/shop/${product._id}`}>
                    <div className="relative bg-white">
                      {discount > 0 && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#EF5622] px-3 py-1 text-xs font-bold text-white">
                          {discount}% OFF
                        </span>
                      )}

                      <img
                        src={getProductImage(product.image)}
                        alt={product.name}
                        className="mx-auto h-56 w-full object-contain"
                      />
                    </div>
                  </Link>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#EF5622]">
                      {product.brand}
                    </p>

                    <Link to={`/shop/${product._id}`}>
                      <h3 className="mt-2 line-clamp-2 min-h-[52px] font-semibold text-slate-800">
                        {product.name}
                      </h3>
                    </Link>

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

                    <button
                      onClick={() => addToCartHandler(product)}
                      className="mt-5 w-full rounded-xl bg-[#EF5622] py-3 font-semibold text-white hover:bg-[#232466]"
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
