import { Link } from 'react-router-dom';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import {
	useCreateProductMutation,
	useDeleteProductMutation,
	useGetProductsQuery,
} from '@slices/productApiSlice';
import { toast } from 'react-toastify';

const ProductListScreen = () => {
	const { data, error, isLoading, refetch } = useGetProductsQuery();

	const products = Array.isArray(data)
	? data
	: Array.isArray(data?.products)
	? data.products
	: [];

	console.log(data)

	const [createProduct, { isLoading: loadingCreate }] =
		useCreateProductMutation();
	const [deleteProduct, { isLoading: loadingDelete }] =
		useDeleteProductMutation();

	const handleDelete = async (id) => {
		if (window.confirm('Are you sure?')) {
			try {
				await deleteProduct(id);
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
				await createProduct();
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
  <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

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
          {products.map((product) => (
            <tr
              key={product._id}
              className="transition hover:bg-orange-50"
            >

              {/* Product */}
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">

                  <img
                    src={product.image}
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
                <span className="font-bold text-[#232466] text-base">
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
                    onClick={() => handleDelete(product._id)}
                    className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                  >
                    {loadingDelete ? "Deleting..." : "Delete"}
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </div>
)}

  </div>
</div>

	);
};

export default ProductListScreen;
