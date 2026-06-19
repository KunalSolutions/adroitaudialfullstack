import ProductModel from "#models/product.model.js";

/**
 * @desc    Fetch all products (with search + pagination)
 * @route   GET /api/v1/products
 * @access  Public
 */
const getProducts = async (req, res) => {
  const pageSize = 1000;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};

  const count = await ProductModel.countDocuments({ ...keyword, isActive: true });

  const products = await ProductModel.find({ ...keyword, isActive: true })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    products,
    page,
    pages: Math.ceil(count / pageSize),
  });
};

/**
 * @desc    Fetch Top Deals
 * @route   GET /api/v1/products/top-deals
 * @access  Public
 */
const getTopDeals = async (req, res) => {
  const products = await ProductModel.find({
    isTopDeal: true,
    isActive: true,
  });

  res.json(products);
};

/**
 * @desc    Fetch products by category
 * @route   GET /api/v1/products/category/:category
 * @access  Public
 */
const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  const exclude = req.query.exclude;

  const products = await ProductModel.find({
    category: {
      $regex: new RegExp(`^${category}$`, "i"),
    },
    _id: { $ne: exclude },
    isActive: true,
  }).limit(8);

  res.json(products);
};

/**
 * @desc    Fetch Top Rated Products (numReviews > 50)
 * @route   GET /api/v1/products/top-rated
 * @access  Public
 */
const getTopRatedProducts = async (req, res) => {
  const products = await ProductModel.find({
    numReviews: { $gt: 50 },
    isActive: true,
  }).sort({ rating: -1 });

  res.json(products);
};

/**
 * @desc    Fetch single product
 * @route   GET /api/v1/products/:id
 * @access  Public
 */
const getProductById = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

/**
 * @desc    Create product
 * @route   POST /api/v1/products
 * @access  Private/Admin
 */
const createProduct = async (req, res) => {
  const {
    name,
    price,
    offerPrice,
    description,
    image,
    brand,
    category,
    section,
    subcategory,
    countInStock,
    content,
    isTopDeal,
    isBestSeller,
    variants, 
  } = req.body;

  const product = new ProductModel({
    name,
    price,
    offerPrice,
    user: req.user._id,
    image,
    brand,
    category,
    section,
    subcategory,
    countInStock,
    description,
    content,
    isTopDeal,
    isBestSeller,
    variants: variants || [], 
    isActive: true,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};
/**
 * @desc    Update product
 * @route   PUT /api/v1/products/:id
 * @access  Private/Admin
 */
const updateProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (product) {
    Object.assign(product, req.body);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

/**
 * @desc    Delete product
 * @route   DELETE /api/v1/products/:id
 * @access  Private/Admin
 */
const deleteProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (product) {
    await ProductModel.deleteOne({ _id: req.params.id });
    res.json({ message: "Product deleted" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

/**
 * @desc    Create review
 * @route   POST /api/v1/products/:id/reviews
 * @access  Private
 */
const createProductReview = async (req, res) => {
  const { rating, comment } = req.body;

  const product = await ProductModel.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

/**
 * @desc    Toggle product active status
 * @route   PUT /api/v1/products/:id/toggle
 * @access  Private/Admin
 */
const toggleProductStatus = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);

  if (product) {
    product.isActive = !product.isActive;
    const updatedProduct = await product.save();

    res.json({
      message: `Product ${
        updatedProduct.isActive ? "Enabled" : "Disabled"
      } successfully`,
      product: updatedProduct,
    });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

export {
  getProducts,
  getProductById,
  getTopDeals,
  getProductsByCategory,
  getTopRatedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  toggleProductStatus,
};