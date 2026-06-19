import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "@components/Loader";
import Alert from "@components/Alert";

import { addToCart } from "@slices/cartSlice";
import { useGetProductsByCategoryQuery } from "@slices/productApiSlice";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SoftwareAndPluginsScreen = () => {
  const dispatch = useDispatch();

  const category = "Software-And-Plugins";

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

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#fff] py-15">
        <div className="mx-auto max-w-7xl px-4 text-center">

          <h1 className="mt-0 text-5xl font-black uppercase text-[#EF5622]">
            Software And Plugins
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#232466]">
            Discover premium software and plugins designed for studios,
            creators, live sound processing, mixing, mastering, and professional audio production.
          </p>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-6 mb-10">

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert type="error">
            {error?.data?.message || error?.error}
          </Alert>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => {
              const hasVariants = product.variants?.length > 0;

              const displayPrice = hasVariants
                ? product.variants[0].offerPrice
                : product.offerPrice;

              const originalPrice = hasVariants
                ? product.variants[0].price
                : product.price;

              return (
                <div
                  key={product._id}
                  className="group overflow-hidden rounded-xl shadow-sm bg-white"
                >
                  <Link to={`/shop/${product._id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mx-auto h-56 object-contain"
                    />
                  </Link>

                  <div className="p-5">

                    <p className="text-xs font-semibold uppercase text-[#EF5622]">
                      {product.brand}
                    </p>

                    <Link to={`/shop/${product._id}`}>
                      <h3 className="mt-2 line-clamp-2 font-semibold text-slate-800">
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
                      onClick={(e) => {
                        e.preventDefault();
                        addToCartHandler(product);
                      }}
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

export default SoftwareAndPluginsScreen;