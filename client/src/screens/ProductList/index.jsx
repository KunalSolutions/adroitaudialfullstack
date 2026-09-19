import { useState } from 'react';
import { Link } from 'react-router-dom';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from '@slices/productApiSlice';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../constants';

const ProductListScreen = () => {
  const { data, error, isLoading, refetch } = useGetProductsQuery();

  const products = Array.isArray(data)
    ? data
    : Array.isArray(data?.products)
      ? data.products
      : [];

  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 20;

  const categories = [
    ...new Set(
      products
        .map((product) => product.category?.trim())
        .filter(Boolean)
    ),
  ];

  const brands = [
    ...new Set(
      products
        .map((product) => product.brand?.trim())
        .filter(Boolean)
    ),
  ];

  const filteredProducts = products
    .filter((product) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        product.name?.toLowerCase().includes(searchText) ||
        product.brand?.toLowerCase().includes(searchText) ||
        product.category?.toLowerCase().includes(searchText);

      const matchesCategory =
        !categoryFilter ||
        product.category?.trim() === categoryFilter;

      const matchesBrand =
        !brandFilter ||
        product.brand?.trim() === brandFilter;

      return matchesSearch && matchesCategory && matchesBrand;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return (
          new Date(b.createdAt || 0) -
          new Date(a.createdAt || 0)
        );
      }

      if (sortBy === 'oldest') {
        return (
          new Date(a.createdAt || 0) -
          new Date(b.createdAt || 0)
        );
      }

      if (sortBy === 'name-asc') {
        return (a.name || '').localeCompare(b.name || '');
      }

      if (sortBy === 'name-desc') {
        return (b.name || '').localeCompare(a.name || '');
      }

      if (sortBy === 'price-low') {
        return Number(a.price || 0) - Number(b.price || 0);
      }

      if (sortBy === 'price-high') {
        return Number(b.price || 0) - Number(a.price || 0);
      }

      return 0;
    });

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategory = (value) => {
    setCategoryFilter(value);
    setCurrentPage(1);
  };

  const handleBrand = (value) => {
    setBrandFilter(value);
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteProduct(id).unwrap();
        toast.success('Product deleted successfully');
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error?.error);
      }
    }
  };

  const handleCreateProduct = async () => {
    if (window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct().unwrap();
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error?.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#232466]">
              All Products
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage products, inventory and pricing
            </p>
          </div>

          <Link
            to="/admin/product/create"
            className="inline-flex items-center justify-center rounded-2xl bg-[#EF5622] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#d94b1a]"
          >
            + Create Product
          </Link>
        </div>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Alert type="error">
            {error?.data?.message || error?.error}
          </Alert>
        ) : (
          <>

            {/* Filters */}
            <div className="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-4">

              {/* Search */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Search
                </label>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search product..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#EF5622]"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Category
                </label>

                <select
                  value={categoryFilter}
                  onChange={(e) => handleCategory(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#EF5622]"
                >
                  <option value="">All Categories</option>

                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Brand
                </label>

                <select
                  value={brandFilter}
                  onChange={(e) => handleBrand(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#EF5622]"
                >
                  <option value="">All Brands</option>

                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#EF5622]"
                >
                  <option value="recent">
                    Recently Created
                  </option>

                  <option value="oldest">
                    Oldest Created
                  </option>

                  <option value="name-asc">
                    Name A-Z
                  </option>

                  <option value="name-desc">
                    Name Z-A
                  </option>

                  <option value="price-low">
                    Price Low to High
                  </option>

                  <option value="price-high">
                    Price High to Low
                  </option>
                </select>
              </div>

            </div>

            {/* Product Count */}
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Showing{' '}
                <span className="font-semibold text-[#232466]">
                  {filteredProducts.length === 0
                    ? 0
                    : startIndex + 1}
                  -
                  {Math.min(
                    startIndex + productsPerPage,
                    filteredProducts.length
                  )}
                </span>{' '}
                of{' '}
                <span className="font-semibold text-[#232466]">
                  {filteredProducts.length}
                </span>{' '}
                products
              </p>

              <p className="text-sm text-slate-500">
                Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
              </p>
            </div>

            {/* Table */}
            <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              <div className="overflow-x-auto">
                <table className="min-w-full">

                  {/* Table Head */}
                  <thead className="bg-[#232466]">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Product
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Category
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Brand
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Price
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                        Stock
                      </th>

                      <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="divide-y divide-slate-100 bg-white">

                    {paginatedProducts.length > 0 ? (
                      paginatedProducts.map((product) => (
                        <tr
                          key={product._id}
                          className="transition hover:bg-orange-50"
                        >

                          {/* Product */}
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">

                              <img
                                src={
                                  product.image?.startsWith("http")
                                    ? product.image
                                    : product.image?.startsWith("/uploads/")
                                      ? `${BASE_URL.replace("/api/v1", "")}${product.image}`
                                      : product.image
                                }
                                alt={product.name}
                                className="h-16 w-16 rounded-2xl border border-slate-200 object-cover"
                              />

                              <div>
                                <h3 className="font-semibold text-[#232466]">
                                  {product.name}
                                </h3>

                                <p className="mt-1 text-xs text-slate-500">
                                  #{product._id.slice(-8)}
                                </p>
                              </div>

                            </div>
                          </td>

                          {/* Category */}
                          <td className="px-6 py-5 text-sm text-slate-600">
                            {product.category}
                          </td>

                          {/* Brand */}
                          <td className="px-6 py-5 text-sm text-slate-600">
                            {product.brand}
                          </td>

                          {/* Price */}
                          <td className="px-6 py-5">
                            <span className="text-base font-bold text-[#232466]">
                              ₹{product.price}
                            </span>
                          </td>

                          {/* Stock */}
                          <td className="px-6 py-5">
                            {product.countInStock > 0 ? (
                              <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                In Stock ({product.countInStock})
                              </span>
                            ) : (
                              <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                                Out of Stock
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-5">
                            <div className="flex justify-end gap-3">

                              <Link
                                to={`/admin/product/${product._id}/edit`}
                                className="rounded-xl bg-[#232466]/10 px-4 py-2 text-sm font-semibold text-[#232466] transition hover:bg-[#232466]/20"
                              >
                                Edit
                              </Link>

                              <button
                                onClick={() =>
                                  handleDelete(product._id)
                                }
                                className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                              >
                                {loadingDelete
                                  ? 'Deleting...'
                                  : 'Delete'}
                              </button>

                            </div>
                          </td>

                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-6 py-12 text-center text-sm text-slate-500"
                        >
                          No products found.
                        </td>
                      </tr>
                    )}

                  </tbody>

                </table>
              </div>

            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-center gap-2">

                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => page - 1)
                  }
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-[#232466] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    type="button"
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      currentPage === page
                        ? 'bg-[#EF5622] text-white'
                        : 'border border-slate-200 text-[#232466] hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((page) => page + 1)
                  }
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-[#232466] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>

              </div>
            )}

          </>
        )}

      </div>
    </div>
  );
};

export default ProductListScreen;