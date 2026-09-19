import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCreateProductMutation,
  useUploadProductImageMutation,
} from "@slices/productApiSlice";

const ProductCreate = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [uploadProductImage, { isLoading: isUploading }] =
    useUploadProductImageMutation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    content: "",
    image: "",
    section: "",
    category: "",
    subCategory: "",
    brand: "",
    price: "",
    offerPrice: "",
    countInStock: "",
    isTopDeal: false,
    isBestSeller: false,
    isActive: true,
  });

  const [imageMode, setImageMode] = useState("upload");
  const [imagePreview, setImagePreview] = useState("");

  const [variants, setVariants] = useState([]);
  const [hasVariants, setHasVariants] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const data = new FormData();
      data.append("image", file);

      const response = await uploadProductImage(data).unwrap();

      setFormData((prev) => ({
        ...prev,
        image: response.image,
      }));

      setImagePreview(URL.createObjectURL(file));

      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error(
        error?.data?.message || error?.error || "Image upload failed"
      );
    }
  };

  const handleImageUrlChange = (e) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      image: value,
    }));

    setImagePreview(value);
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: "",
    }));

    setImagePreview("");
  };

  const addVariant = () => {
    setVariants([
      ...variants,
      {
        size: "",
        price: "",
        offerPrice: "",
        countInStock: "",
      },
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

    if (!formData.image) {
      toast.error("Please upload an image or enter an image URL");
      return;
    }

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

              {/* Product Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                />
              </div>

              {/* Product Image */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Product Image
                </label>

                <div className="mb-5 flex gap-3">

                  <button
                    type="button"
                    onClick={() => setImageMode("upload")}
                    className={`rounded-xl px-5 py-3 text-sm font-semibold ${
                      imageMode === "upload"
                        ? "bg-[#232466] text-white"
                        : "border border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    Upload Image
                  </button>

                  <button
                    type="button"
                    onClick={() => setImageMode("url")}
                    className={`rounded-xl px-5 py-3 text-sm font-semibold ${
                      imageMode === "url"
                        ? "bg-[#232466] text-white"
                        : "border border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    Image URL
                  </button>

                </div>

                {imageMode === "upload" && (
                  <div className="rounded-2xl border-2 border-dashed border-slate-300 p-6">

                    <label className="flex cursor-pointer flex-col items-center justify-center">

                      <span className="font-semibold text-[#232466]">
                        {isUploading
                          ? "Uploading image..."
                          : "Upload a Image"}
                      </span>

                      <span className="mt-1 text-sm text-slate-500">
                        JPG, JPEG, PNG or WEBP
                      </span>

                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                        className="hidden"
                      />

                    </label>
                  </div>
                )}

                {imageMode === "url" && (
                  <input
                    type="url"
                    placeholder="https://example.com/product-image.jpg"
                    value={formData.image}
                    onChange={handleImageUrlChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                  />
                )}

                {/* Image Preview */}
                {imagePreview && (
                  <div className="mt-6">

                    <p className="mb-3 text-sm font-semibold text-slate-700">
                      Image Preview
                    </p>

                    <div className="relative flex w-fit rounded-2xl border border-slate-200 bg-slate-50 p-3">

                      <img
                        src={
                          imagePreview.startsWith("blob:")
                            ? imagePreview
                            : imagePreview.startsWith("http")
                            ? imagePreview
                            : `${import.meta.env.VITE_API_URL?.replace(
                                "/api/v1",
                                ""
                              )}${imagePreview}`
                        }
                        alt="Product preview"
                        className="h-48 w-48 rounded-xl object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white hover:bg-red-600"
                      >
                        ×
                      </button>

                    </div>

                    {formData.image && (
                      <p className="mt-3 break-all text-xs text-slate-500">
                        {formData.image}
                      </p>
                    )}

                  </div>
                )}
              </div>

              {/* Short Description */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Short Description
                </label>

                <textarea
                  name="description"
                  rows={4}
                  placeholder="Enter short description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                />
              </div>

              {/* Full Content */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Content
                </label>

                <textarea
                  name="content"
                  rows={8}
                  placeholder="Enter detailed content"
                  value={formData.content}
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

                <select
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                >
                  <option value="">Select Section</option>
                  <option value="Regular">Regular</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
                >
                  <option value="">Select Category</option>

                  <option value="Speakers">Speakers</option>
                  <option value="Microphones">Microphones</option>
                  <option value="Amplifiers">Amplifiers</option>
                  <option value="Mixers">Mixers</option>
                  <option value="Audio Interfaces">Audio Interfaces</option>
                  <option value="Audio Processors">Audio Processors</option>
                  <option value="Conference Systems">Conference Systems</option>
                  <option value="Ceiling Speakers">Ceiling Speakers</option>
                  <option value="Wall Mount Speakers">Wall Mount Speakers</option>
                  <option value="Installation Audio">Installation Audio</option>
                  <option value="PA Systems">PA Systems</option>
                  <option value="Subwoofers">Subwoofers</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Cables">Cables</option>
                  <option value="Stands">Stands</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Sub Category
                </label>

                <input
                  type="text"
                  name="subCategory"
                  placeholder="Sub Category"
                  value={formData.subCategory}
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
                  value={formData.brand}
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
                    value={formData.price}
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
                    value={formData.offerPrice}
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
                    value={formData.countInStock}
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
                          onChange={(e) =>
                            handleVariantChange(index, e)
                          }
                          className="rounded-xl border border-slate-300 px-4 py-3"
                        />

                        <input
                          type="number"
                          name="price"
                          placeholder="Price"
                          value={variant.price}
                          onChange={(e) =>
                            handleVariantChange(index, e)
                          }
                          className="rounded-xl border border-slate-300 px-4 py-3"
                        />

                        <input
                          type="number"
                          name="offerPrice"
                          placeholder="Offer Price"
                          value={variant.offerPrice}
                          onChange={(e) =>
                            handleVariantChange(index, e)
                          }
                          className="rounded-xl border border-slate-300 px-4 py-3"
                        />

                        <input
                          type="number"
                          name="countInStock"
                          placeholder="Stock"
                          value={variant.countInStock}
                          onChange={(e) =>
                            handleVariantChange(index, e)
                          }
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
                  checked={formData.isTopDeal}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#EF5622]"
                />

                <span>Top Deal</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isBestSeller"
                  checked={formData.isBestSeller}
                  onChange={handleChange}
                  className="h-5 w-5 accent-[#EF5622]"
                />

                <span>Best Seller</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
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
              disabled={isLoading || isUploading}
              className="rounded-xl bg-[#EF5622] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#d84b1b] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUploading
                ? "Uploading Image..."
                : isLoading
                ? "Creating Product..."
                : "Create Product"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
