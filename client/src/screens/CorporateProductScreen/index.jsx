import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Loader from "@components/Loader";
import Alert from "@components/Alert";

import { addToCart } from "@slices/cartSlice";
import { useGetProductsQuery } from "@slices/productApiSlice";
import { toast } from "react-toastify";

const CorporateProductScreen = () => {
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    error,
  } = useGetProductsQuery({ keyword: "", pageNumber: "" });

  const products = data?.products || [];

  const repeetProducts = products.filter(
    (product) =>
      product.brand?.trim().toLowerCase() === "sonic" &&
      product.category?.trim().toLowerCase() === "ceiling speaker"
  );

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

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}

      <section className="bg-[#fff] py-15">
        <div className="mx-auto max-w-7xl px-4 text-center">

          <h1 className="mt-0 text-5xl font-black uppercase text-[#EF5622]">
            Sonic
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#232466]">
            Discover premium Sonic audio solutions
            designed for professional audio, commercial installations,
            events, studios and businesses.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 mb-10">

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert type="error">
            {error?.data?.message || error?.error}
          </Alert>
        ) : (
          <>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {repeetProducts.map((product) => {

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
                    className="group overflow-hidden rounded-xl shadow-sm bg-white transition-all duration-300"
                  >

                    <Link >
                      <div className="relative bg-white p-0">

                        {/* Image */}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="mx-auto h-56 object-contain transition duration-500"
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
                        <h3 className="mt-2 min-h-[5px] font-semibold text-slate-800">
                          {product.name}
                        </h3>
                      </Link>

                       <Link to={`/shop/${product._id}`}>
                        <h3 className="mt-2 line-clamp-2 min-h-[52px] font-semibold text-slate-800/70">
                          {product.description}
                        </h3>
                      </Link>

                      <Link
                        to={`/co-prod/adroit/${product._id}`}
                        className="mt-5 block w-full rounded-xl bg-[#EF5622] py-3 text-center font-semibold text-white transition hover:bg-[#232466]"
                      >
                        View Details
                      </Link>
                      

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

export default CorporateProductScreen;