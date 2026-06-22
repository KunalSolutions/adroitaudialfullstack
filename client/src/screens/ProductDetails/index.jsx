import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "@slices/productApiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "@slices/cartSlice";
import Loader from "@components/Loader";
import Alert from "@components/Alert";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const { data: product, isLoading, isError, error } =
    useGetProductDetailsQuery(id);

  // If product has variants, select first by default
  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  const currentPrice =
  selectedVariant?.offerPrice ??
  selectedVariant?.price ??
  product?.offerPrice ??
  product?.price ??
  0;

  const currentOriginalPrice =
    selectedVariant?.price ??
    product?.price ??
    0;

  const currentStock =
    selectedVariant?.countInStock ?? product?.countInStock;


  const addToCartHandler = () => {
    dispatch(
      addToCart({
        ...product,
        qty,
        selectedSize: selectedVariant?.size || null,
        price: currentPrice,
        countInStock: currentStock,
      })
    );
    toast.success(`Item added to cart`)
  };

  const handleCheckout = () => {
		navigate('/login?redirect=/shipping');
	};

  if (isLoading) return <Loader />;
  if (isError) return <Alert type="error">{error?.data?.message}</Alert>;


return (
  <div className="min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group mb-8 inline-flex items-center gap-3 text-slate-600 hover:text-[#EF5622] transition-all"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-10">

        {/* IMAGE SIDE */}
        <div className="lg:col-span-6">

          <div className="sticky top-24">

            <div className="overflow-hidden rounded-3xl">

              <div className="relative">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-contain p-8 hover:scale-105 transition duration-700"
                />
              </div>

            </div>

          </div>

        </div>

        {/* CONTENT SIDE */}
        <div className="lg:col-span-6">

          <div className="bg-white rounded-3xl p-6 sm:p-8">

            {/* Category */}
            <span className="inline-flex px-4 py-2 rounded-full bg-[#EF5622]/10 text-[#EF5622] text-sm font-semibold">
              {product.category}
            </span>

            {/* Product Name */}
            <h1 className="mt-5 text-3xl md:text-4xl font-black text-[#232466] leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="text-yellow-500">
                ⭐⭐⭐⭐⭐
              </div>

              <span className="text-slate-500 text-sm">
                {product.rating} ({product.numReviews} Reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <span className="text-4xl font-black text-[#232466]">
                ₹{currentPrice}
              </span>

              {currentOriginalPrice > currentPrice && (
                <>
                  <span className="text-xl text-slate-400 line-through">
                    ₹{currentOriginalPrice}
                  </span>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{currentOriginalPrice - currentPrice}
                  </span>
                </>
              )}

            </div>

            {/* Divider */}
            <div className="h-px bg-slate-200 my-8" />

            {/* Variants */}
            {product.variants?.length > 0 && (
              <div>

                <h3 className="font-semibold text-[#232466] mb-4">
                  Select Variant
                </h3>

                <div className="flex flex-wrap gap-3">

                  {product.variants.map((variant) => (
                    <button
                      key={variant._id}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setQty(1);
                      }}
                      className={`px-5 py-3 rounded-2xl border font-medium transition-all
                      ${
                        selectedVariant?.size === variant.size
                          ? "bg-[#232466] text-white border-[#232466]"
                          : "bg-white border-slate-200 hover:border-[#EF5622]"
                      }`}
                    >
                      {variant.size}
                    </button>
                  ))}

                </div>
              </div>
            )}

            {/* Stock */}
            <div className="mt-8">

              {currentStock > 0 ? (
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                  ● In Stock
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full">
                  ● Out Of Stock
                </div>
              )}

            </div>

            {/* Qty + Add To Cart */}
            {currentStock > 0 && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="h-14 px-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#EF5622]"
                >
                  {[...Array(currentStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      Qty {x + 1}
                    </option>
                  ))}
                </select>

                <button
                  onClick={addToCartHandler}
                  className="flex-1 h-20 py-5 lg:h-15  rounded-2xl bg-[#EF5622] hover:bg-[#232466] text-white font-bold transition-all duration-300 md"
                >
                  Add To Cart
                </button>

              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

              <div className="bg-slate-200 rounded-2xl p-4 text-center">
                <p className="text-sm font-semibold text-[#232466]">
                  Secure Checkout
                </p>
              </div>

              <div className="bg-slate-200 rounded-2xl p-4 text-center">
                <p className="text-sm font-semibold text-[#232466]">
                  Genuine Products
                </p>
              </div>

              <div className="bg-slate-200 rounded-2xl p-4 text-center">
                <p className="text-sm font-semibold text-[#232466]">
                  Fast Delivery
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Description */}
      <div className="mt-14 bg-white rounded-3xl p-8">

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
  </div>
);
};

export default ProductScreen;