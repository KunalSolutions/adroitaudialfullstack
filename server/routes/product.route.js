import express from "express";

import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getTopDeals,
  getProductsByCategory,
  getTopRatedProducts,
  toggleProductStatus,
  getCategories,
} from "#controllers/product.controller.js";

import { admin, protect } from "#middlewares/auth.middleware.js";

const router = express.Router();

/* -------------------- PUBLIC ROUTES -------------------- */

// All products (with pagination + search)
router.route("/").get(getProducts);

// Top Deals
router.get("/top-deals", getTopDeals);

// Top Rated (numReviews > 50)
router.get("/top-rated", getTopRatedProducts);

// category 
router.get('/categories', getCategories);

// Products by Category
router.get("/category/:category", getProductsByCategory);

// Single product
router.route("/:id").get(getProductById);

/* -------------------- PRIVATE ADMIN ROUTES -------------------- */

// Create product
router.route("/").post(protect, admin, createProduct);

// Update / Delete product
router
  .route("/:id")
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

// Toggle active status
router.put("/:id/toggle", protect, admin, toggleProductStatus);

// Add review
router.route("/:id/reviews").post(protect, createProductReview);

export default router;