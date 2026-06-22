import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import {
	useGetProductDetailsQuery,
	useUpdateProductMutation,
	useUploadProductImageMutation,
} from '@slices/productApiSlice';

const ProductEditScreen = () => {
	const { id: productId } = useParams();

	const [name, setName] = useState('');
	const [price, setPrice] = useState();
	const [offprice, setOffprice] = useState();
	const [image, setImage] = useState('');
	const [brand, setBrand] = useState('');
	const [category, setCategory] = useState('');
	const [countInStock, setCountInStock] = useState(0);
	const [description, setDescription] = useState('');
	const [content, setContent] = useState('');

	const navigate = useNavigate();

	const {
		data: product,
		isLoading,
		error,
	} = useGetProductDetailsQuery(productId);

	const [updateProduct, { isLoading: loadingUpdate }] =
		useUpdateProductMutation();

	const [uploadProductImage] = useUploadProductImageMutation();

	useEffect(() => {
		if (product) {
			setName(product.name);
			setPrice(product.price);
			setOffprice(product.offprice);
			setImage(product.image);
			setBrand(product.brand);
			setCategory(product.category);
			setCountInStock(product.countInStock);
			setDescription(product.description);
			setContent(product.content);
		}
	}, [product]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const updatedProduct = {
			productId,
			name,
			price,
      offprice,
			image,
			brand,
			category,
			countInStock,
			description,
			content,
		};
		const result = await updateProduct(updatedProduct).unwrap();
		if (result.error) {
			toast.error(result?.error);
		} else {
			toast.success('Product updated successfully');
			navigate(`/admin/productlist`);
		}
	};

	const handleUploadFile = async (e) => {
		const formData = new FormData();
		formData.append('image', e.target.files[0]);
		try {
			const result = await uploadProductImage(formData).unwrap();
			toast.success(result.message);
			setImage(result.image);
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	return (
  <div className="min-h-screen bg-white">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-10 border-b border-slate-200 pb-6">
        <h1 className="text-4xl font-bold text-[#232466]">
          Edit Product
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage product information, inventory and content.
        </p>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Alert type="error">
          {error?.data?.message || error?.error}
        </Alert>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-3"
        >
          {/* LEFT */}
          <div className="space-y-8 lg:col-span-2">

            {/* BASIC INFO */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#232466]">
                Basic Information
              </h2>

              <div className="mt-6 space-y-6">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#232466]">
                    Product Name
                  </label>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#232466]">
                      Brand
                    </label>

                    <input
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#232466]">
                      Category
                    </label>

                    <input
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#232466]">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                  />
                </div>

              </div>
            </div>

            {/* CONTENT */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#232466]">
                Product Content
              </h2>

              <textarea
                rows={14}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-6 w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
              />

              <p className="mt-3 text-sm text-slate-500">
                Detailed product description and specifications.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            {/* IMAGE */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#232466]">
                Product Image
              </h2>

              <div className="mt-6">

                {image && (
                  <img
                    src={image}
                    alt={name}
                    className="mb-5 h-64 w-full rounded-2xl border-2 border-[#232466]/10 object-cover"
                  />
                )}

                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Image URL"
                  type="text"
                  className="mb-4 w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                />

                <input
                  onChange={handleUploadFile}
                  type="file"
                  className="block w-full rounded-xl border border-dashed border-slate-300 p-3 text-sm"
                />
              </div>
            </div>

            {/* INVENTORY */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#232466]">
                Pricing & Inventory
              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#232466]">
                    Price (₹)
                  </label>

                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#232466]">
                    OffPrice (₹)
                  </label>

                  <input
                    value={offprice}
                    onChange={(e) => setOffprice(e.target.value)}
                    type="number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#232466]">
                    Stock Quantity
                  </label>

                  <input
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                    type="number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                  />
                </div>

                {countInStock > 0 ? (
                  <span className="inline-flex rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700">
                    In Stock ({countInStock})
                  </span>
                ) : (
                  <span className="inline-flex rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* SAVE */}
            <div className="sticky top-6">
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#EF5622] px-5 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#d94b1a]"
              >
                {loadingUpdate
                  ? "Updating Product..."
                  : "Save Changes"}
              </button>
            </div>

          </div>
        </form>
      )}
    </div>
  </div>
);
};

export default ProductEditScreen;
