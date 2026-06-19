import mongoose from "mongoose";

/* =========================
   REVIEW SCHEMA
========================= */
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserModel",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/* =========================
   VARIANT SCHEMA (For TV Sizes)
========================= */
const variantSchema = new mongoose.Schema(
  {
    size: {
      type: String, // 32, 43, 55, 65, 75
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offerPrice: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

/* =========================
   PRODUCT SCHEMA
========================= */
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      default: 0,
    },

    offerPrice: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    content: {
      type: String,
      default: "",
    },

    section: {
      type: String,
      default: "Audio Equipment",
    },

    countInStock: {
      type: Number,
      default: 10,
    },

    rating: {
      type: Number,
      default: 5,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    isTopDeal: {
      type: Boolean,
      default: false,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },

    variants: {
      type: [variantSchema],
      default: [],
    },

    reviews: [reviewSchema],
  },
  {
    timestamps: true,
    collection: "products",
  }
);

const ProductModel = mongoose.model("ProductModel", productSchema);

export default ProductModel;