import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useGetProductsQuery,
  useGetTopDealsQuery,
  useGetTopRatedProductsQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
} from "@slices/productApiSlice";
import { addToCart } from "@slices/cartSlice";
import Loader from "@components/Loader";
import Alert from "@components/Alert";

const ShopPage = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [quickFilter, setQuickFilter] = useState("");

  const { data, isLoading, isError, error } =
    useGetProductsQuery({ keyword: "", pageNumber: 1 });

  const { data: topDeals } = useGetTopDealsQuery();
  const { data: topRated } = useGetTopRatedProductsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: categoryProducts } =
    useGetProductsByCategoryQuery(selectedCategory, {
      skip: !selectedCategory,
    });

  let products = data?.products || [];

  // Category Filter
  if (selectedCategory && categoryProducts) {
    products = categoryProducts;
  }

  // Quick Filters
  if (quickFilter === "deals" && topDeals) {
    products = topDeals;
  }

  if (quickFilter === "rated" && topRated) {
    products = topRated;
  }

  // Price Filter
  if (priceRange) {
    const [min, max] = priceRange.split("-").map(Number);

    products = products.filter((product) => {
      const hasVariants = product?.variants?.length > 0;

      const price = hasVariants
        ? product.variants[0].offerPrice
        : product.offerPrice;

      return price >= min && price <= max;
    });
  }

  const clearFilters = () => {
    setSelectedCategory("");
    setPriceRange("");
    setQuickFilter("");
  };

  const addToCartHandler = (product) => {
    const hasVariants = product.variants?.length > 0;

    const displayPrice = hasVariants
      ? product.variants[0].offerPrice
      : product.offerPrice;

    const stock = hasVariants
      ? product.variants[0].countInStock
      : product.countInStock;

    dispatch(
      addToCart({
        ...product,
        qty: 1,
        price: displayPrice,
        countInStock: stock,
      })
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <div className="text-sm mb-10 text-gray-600">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>{" "}
          / <span className="text-black font-medium">Shop</span>
        </div>

        <div className="grid lg:px-6 md:px-5 sm:px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <Alert type="error">
                {error?.data?.message || error?.error}
              </Alert>
            ) : (
                <>
                {/* Filters */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-4 mb-6">

                    {/* Category */}
                    <select
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setQuickFilter("");
                      }}
                      className="border rounded-lg px-4 py-2"
                    >
                      <option value="">All Categories</option>

                      {categories?.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}

                    </select>

                    {/* Price */}
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="border rounded-lg px-4 py-2"
                    >
                      <option value="">All Prices</option>
                      <option value="0-5000">₹0 - ₹5,000</option>
                      <option value="5000-10000">₹5,000 - ₹10,000</option>
                      <option value="10000-25000">₹10,000 - ₹25,000</option>
                      <option value="25000-50000">₹25,000 - ₹50,000</option>
                      <option value="50000-9999999">₹50,000+</option>
                    </select>

                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 bg-[#232466] text-white rounded-lg"
                    >
                      Clear Filters
                    </button>

                  </div>


                </div>
                {/* <div className="mb-6 text-sm text-gray-600">
                  Showing {products.length} products
                </div> */}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => {
                    const hasVariants = product.variants?.length > 0;

                    const displayPrice = hasVariants
                      ? product.variants[0].offerPrice
                      : product.offerPrice;

                    const originalPrice = hasVariants
                      ? product.variants[0].price
                      : product.price;

                    // ✅ DISCOUNT CALCULATION
                    const discountPercentage =
                      originalPrice > displayPrice
                        ? Math.round(
                            ((originalPrice - displayPrice) /
                              originalPrice) *
                              100
                          )
                        : 0;

                    return (
                      <Link key={product._id} to={`/shop/${product._id}`}>
                        <div className="relative bg-white rounded-lg p-4 shadow-sm transition flex flex-col">

                          {/* Discount Badge */}
                          {discountPercentage > 0 && (
                            <span className="absolute top-2 left-2 bg-[#f74f17] text-white text-xs px-2 py-1 rounded font-semibold">
                              {discountPercentage}% OFF
                            </span>
                          )}

                          {/* Image */}
                          <div className="h-48 flex items-center justify-center mb-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full object-contain"
                            />
                          </div>

                          {/* Name */}
                          <h3 className="text-sm font-medium text-[#333] uppercase min-h-[40px]">
                            {product.brand}
                          </h3>
  
                          {/* Name */}
                          <h3 className="text-sm font-medium text-[#232466] mb-2 line-clamp-2 min-h-[40px]">
                            {product.name}
                          </h3>

                          {/* Price */}
                          <div className="mb-4">
                            {originalPrice > displayPrice ? (
                              <div className="flex items-center gap-2">
                                <span className="text-lg text-[#232466] font-semibold">
                                  ₹{displayPrice}
                                </span>
                                <span className="text-sm line-through text-[#f74f17]">
                                  ₹{originalPrice}
                                </span>
                              </div>
                            ) : (
                              <span className="text-lg font-semibold">
                                ₹{displayPrice}
                              </span>
                            )}
                          </div>

                          {/* Add to Cart */}
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              addToCartHandler(product);
                            }}
                            className="mt-auto bg-[#EF5622] hover:bg-[#f74f17] text-white font-medium py-2 rounded transition"
                          >
                            Add to Cart
                          </button>

                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>

        </div>
            </div>
      </div>
  );
};

export default ShopPage;