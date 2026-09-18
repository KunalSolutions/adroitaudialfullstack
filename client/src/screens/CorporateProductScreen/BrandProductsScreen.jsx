import { Link, useParams } from "react-router-dom";

import Loader from "@components/Loader";
import Alert from "@components/Alert";

import { useGetProductsByBrandQuery } from "@slices/productApiSlice";

const BrandProductsScreen = () => {
  const { brand } = useParams();

  const {
    data: repeetProducts = [],
    isLoading,
    error,
  } = useGetProductsByBrandQuery(brand);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#fff] py-15">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mt-0 text-5xl font-black uppercase text-[#EF5622]">
            {brand}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#232466]">
            Discover premium {brand} audio solutions designed for professional
            audio, commercial installations, events, studios and businesses.
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
        ) : repeetProducts.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-[#232466]">
              No Products Added Yet
            </h2>
            <p className="mt-2 text-slate-500">
              No products are currently available for this brand.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {repeetProducts.map((product) => (
              <div
                key={product._id}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300"
              >
                <Link to={`/co-prod/adroit/${product._id}`}>
                  <div className="relative bg-white p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mx-auto h-56 object-contain transition duration-500"
                    />
                  </div>
                </Link>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#EF5622]">
                    {product.brand}
                  </p>

                  <Link to={`/co-prod/adroit/${product._id}`}>
                    <h3 className="mt-2 min-h-[5px] line-clamp-1 font-semibold text-slate-800">
                      {product.name}
                    </h3>
                  </Link>

                  <Link to={`/co-prod/adroit/${product._id}`}>
                    <h3 className="mt-2 line-clamp-3 min-h-[52px] font-semibold text-slate-800/70">
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
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default BrandProductsScreen;