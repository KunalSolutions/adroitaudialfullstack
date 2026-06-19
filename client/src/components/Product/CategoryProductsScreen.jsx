import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "@components/Loader";
import Alert from "@components/Alert";

import { addToCart } from "@slices/cartSlice";
import { useGetProductsByCategoryQuery } from "@slices/productApiSlice";
import {  toast } from "react-toastify";

const CategoryProductsScreen = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { category } = useParams();

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
    toast.success(`Item added to cart`)
  };

    console.log("Category:", category);
    console.log("Products:", products);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}

      <section className="bg-[#fff] py-15">

        <div className="mx-auto max-w-7xl px-4 text-center">

          <h1 className="mt-0 text-5xl font-black uppercase text-[#EF5622]">
            {category
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#232466]">
            Discover premium {category.toLowerCase()} solutions
            designed for professional audio, commercial installations,
            events, studios and businesses.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-4 py-6  mb-10">

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert type="error">
            {error?.data?.message || error?.error}
          </Alert>
        ) : (
          <>
            

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {products.map((product) => {

                const displayPrice =
                  product.offerPrice || product.price;

                const discount =
                  product.price > displayPrice
                    ? Math.round(
                        ((product.price - displayPrice) /
                          product.price) *
                          100
                      )
                    : 0;

                return (
                <div
                    key={product._id}
                    className="group overflow-hidden rounded-xl shadow-sm bg-white transition-all duration-300"
                    >
                    <Link to={`/shop/${product._id}`}>
                        <div className="relative bg-white p-0">

                        {/* VARIANT + PRICE LOGIC */}
                        {(() => {
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
                            <>
                                {/* Discount Badge */}
                                {discount > 0 && (
                                <span className="absolute left-3 top-3 rounded-full bg-[#EF5622] px-3 py-1 text-xs font-bold text-white">
                                    {discount}% OFF
                                </span>
                                )}

                                {/* Image */}
                                <img
                                src={product.image}
                                alt={product.name}
                                className="mx-auto h-56 object-contain transition duration-500"
                                />

                                {/* Store calculated values for outside use via data attributes (optional) */}
                                <div
                                data-display-price={displayPrice}
                                data-original-price={originalPrice}
                                className="hidden"
                                />
                            </>
                            );
                        })()}
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

                        {/* PRICE SECTION (same logic reused properly) */}
                        <div className="mt-4 flex items-center gap-2">
                        {(() => {
                            const hasVariants = product.variants?.length > 0;

                            const displayPrice = hasVariants
                            ? product.variants[0].offerPrice
                            : product.offerPrice;

                            const originalPrice = hasVariants
                            ? product.variants[0].price
                            : product.price;

                            return (
                            <>
                                <span className="text-2xl font-bold text-[#232466]">
                                ₹{displayPrice}
                                </span>

                                {originalPrice > displayPrice && (
                                <span className="text-sm text-slate-400 line-through">
                                    ₹{originalPrice}
                                </span>
                                )}
                            </>
                            );
                        })()}
                        </div>

                        {/* ADD TO CART */}
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
          </>
        )}

      </section>

    </div>
  );
};

export default CategoryProductsScreen;