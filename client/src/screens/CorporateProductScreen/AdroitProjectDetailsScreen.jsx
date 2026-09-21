import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "@slices/productApiSlice";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import { BASE_URL } from '../../constants';

const AdroitProjectDetailsScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <section className="min-h-screen bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <Alert type="error">
            {error?.data?.message || error?.error}
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-16 mt-3 text-[#232466] font-medium hover:text-[#EF5622] transition-colors"
      >
        ← Back
      </button>

      {/* Product Details */}
      <section className="mx-auto max-w-7xl px-4 py-1">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="flex items-center justify-center rounded-2xl p-8">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[500px] w-full object-contain"
            />
          </div>

          {/* Information */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#EF5622]">
              {product?.brand}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#232466]">
              {product?.name}
            </h2>

            {product?.description && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Description
                </h3>

                <p className="mt-3 whitespace-pre-line leading-7 text-gray-600">
                  {product.description}
                </p>
              </div>
            )}

            {/* Query */}
            <div className="mt-8 rounded-2xl p-0">

              <h3 className="text-xl font-bold text-gray-900">
                Interested in this solution?
              </h3>

              <p className="mt-2 text-gray-600">
                Contact our team for product information, pricing,
                installation requirements or a project quotation.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                <Link
                  to="/contact"
                  className="inline-flex rounded-xl bg-[#EF5622] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Send an Enquiry
                </Link>

                <a
                  href="https://wa.me/919511609437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  WhatsApp
                </a>

                {/* Call */}
                <a
                  href="tel:+919511609437"
                  className="inline-flex rounded-xl text-white px-6 py-3 font-semibold bg-[#232466] transition hover:opacity-90"
                >
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Description */}
      <div className="px-20 bg-white rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-[#232466] mb-6">
          Product Details
        </h2>

        <p className="text-slate-600 leading-8">
          {product.description}
        </p>

        {product.content && (
          <div className="mt-6 text-slate-600 leading-8">
            {product.content}
          </div>
        )}

      </div>

    </div>
  );
};

export default AdroitProjectDetailsScreen;