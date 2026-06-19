import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "@slices/productApiSlice";

const ProductCreate = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    content: "",
    image: "",
    section: "",
    category: "",
    subcategory: "",
    brand: "",
    price: "",
    offerPrice: "",
    countInStock: "",
    isTopDeal: false,
    isBestSeller: false,
    isActive: true,
  });

  const [variants, setVariants] = useState([]);
  const [hasVariants, setHasVariants] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Add new variant row
  const addVariant = () => {
    setVariants([
      ...variants,
      { size: "", price: "", offerPrice: "", countInStock: "" },
    ]);
  };

  const handleVariantChange = (index, e) => {
    const updated = [...variants];
    updated[index][e.target.name] = e.target.value;
    setVariants(updated);
  };

  const removeVariant = (index) => {
    const updated = variants.filter((_, i) => i !== index);
    setVariants(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({
        ...formData,
        price: Number(formData.price),
        offerPrice: Number(formData.offerPrice),
        countInStock: Number(formData.countInStock),
        variants: hasVariants
          ? variants.map((v) => ({
              size: v.size,
              price: Number(v.price),
              offerPrice: Number(v.offerPrice),
              countInStock: Number(v.countInStock),
            }))
          : [],
      }).unwrap();

      toast.success("Product created successfully");
      navigate("/admin/productlist");
    } catch (error) {
      toast.error(error?.data?.message || error?.error);
    }
  };

  return (
   <div className="min-h-screen bg-white">
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-[#232466]">
        Create Product
      </h1>
      <p className="mt-2 text-slate-500">
        Add a new product to your catalog
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Basic Information */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-[#232466]">
          Basic Information
        </h2>

        <div className="grid gap-6">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Short Description
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Enter short description"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Content
            </label>
            <textarea
              name="content"
              rows={8}
              placeholder="Enter detailed content"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

        </div>
      </div>

      {/* Category Information */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-[#232466]">
          Category Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Section
            </label>
            <input
              type="text"
              name="section"
              placeholder="Section"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Subcategory
            </label>
            <input
              type="text"
              name="subcategory"
              placeholder="Subcategory"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

        </div>
      </div>

      {/* Variant Settings */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#232466]">
              Product Variants
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Enable for TVs, Displays and products with multiple sizes.
            </p>
          </div>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={hasVariants}
              onChange={() => setHasVariants(!hasVariants)}
              className="h-5 w-5 accent-[#EF5622]"
            />
            <span className="font-medium text-slate-700">
              Has Variants
            </span>
          </label>
        </div>

        {!hasVariants && (
          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Offer Price
              </label>
              <input
                type="number"
                name="offerPrice"
                placeholder="Offer Price"
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Stock
              </label>
              <input
                type="number"
                name="countInStock"
                placeholder="Stock"
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none"
              />
            </div>

          </div>
        )}

        {hasVariants && (
          <div className="mt-8">

            <button
              type="button"
              onClick={addVariant}
              className="mb-6 rounded-xl bg-[#232466] px-5 py-3 font-semibold text-white hover:bg-[#1b1c52]"
            >
              + Add Variant
            </button>

            <div className="space-y-4">
              {variants.map((variant, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <div className="grid gap-4 md:grid-cols-4">

                    <input
                      type="text"
                      name="size"
                      placeholder="Size"
                      value={variant.size}
                      onChange={(e) => handleVariantChange(index, e)}
                      className="rounded-xl border border-slate-300 px-4 py-3"
                    />

                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={variant.price}
                      onChange={(e) => handleVariantChange(index, e)}
                      className="rounded-xl border border-slate-300 px-4 py-3"
                    />

                    <input
                      type="number"
                      name="offerPrice"
                      placeholder="Offer Price"
                      value={variant.offerPrice}
                      onChange={(e) => handleVariantChange(index, e)}
                      className="rounded-xl border border-slate-300 px-4 py-3"
                    />

                    <input
                      type="number"
                      name="countInStock"
                      placeholder="Stock"
                      value={variant.countInStock}
                      onChange={(e) => handleVariantChange(index, e)}
                      className="rounded-xl border border-slate-300 px-4 py-3"
                    />

                  </div>

                  <button
                    type="button"
                    onClick={() => removeVariant(index)}
                    className="mt-4 text-sm font-semibold text-red-600 hover:text-red-700"
                  >
                    Remove Variant
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>

      {/* Product Flags */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-[#232466]">
          Product Status
        </h2>

        <div className="flex flex-wrap gap-8">

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isTopDeal"
              onChange={handleChange}
              className="h-5 w-5 accent-[#EF5622]"
            />
            <span>Top Deal</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isBestSeller"
              onChange={handleChange}
              className="h-5 w-5 accent-[#EF5622]"
            />
            <span>Best Seller</span>
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isActive"
              defaultChecked
              onChange={handleChange}
              className="h-5 w-5 accent-[#EF5622]"
            />
            <span>Active</span>
          </label>

        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-[#EF5622] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#d84b1b]"
        >
          {isLoading ? "Creating Product..." : "Create Product"}
        </button>
      </div>

    </form>
  </div>
</div>
  );
};

export default ProductCreate;