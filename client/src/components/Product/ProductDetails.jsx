import { useNavigate, useParams } from "react-router-dom";
import products from "../../data/Products";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();

  const navigate = useNavigate()

  const product = products.find(
    (item) => item.slug === slug
  );

  const price = Number(product.price.replace(/,/g, ""));
  const offPrice = Number(product.offPrice.replace(/,/g, ""));

  const discountPercent = Math.round(
    ((price - offPrice) / price) * 100
  );

  const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: [`https://www.adroitaudial.in${product.image}`],
      description: product.seo.metaDescription,
      sku: product.id,
      category: product.category,
      brand: {
        "@type": "Brand",
        name: product.brand,
      },
      offers: {
        "@type": "Offer",
        url: `https://www.adroitaudial.in/products/${product.slug}`,
        priceCurrency: "INR",
        price: product.offPrice.replace(/,/g, ""),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.adroitaudial.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.adroitaudial.in/products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.category,
          item: `https://www.adroitaudial.in/category/${product.category
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: product.name,
          item: `https://www.adroitaudial.in/products/${product.slug}`,
        },
      ],
    };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.seo.metaTitle}</title>

        <meta
          name="description"
          content={product.seo.metaDescription}
        />

        <meta
          name="keywords"
          content={product.seo.keywords.join(", ")}
        />

        <link
          rel="canonical"
          href={`https://www.adroitaudial.in/products/${product.slug}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.seo.metaTitle} />
        <meta
          property="og:description"
          content={product.seo.metaDescription}
        />
        <meta
          property="og:url"
          content={`https://www.adroitaudial.in/products/${product.slug}`}
        />
        <meta
          property="og:image"
          content={`https://www.adroitaudial.in${product.image}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={product.seo.metaTitle}
  />
  <meta
    name="twitter:description"
    content={product.seo.metaDescription}
  />
  <meta
    name="twitter:image"
    content={`https://www.adroitaudial.in${product.image}`}
  />

  {/* Product Schema */}
  <script type="application/ld+json">
    {JSON.stringify(productSchema)}
  </script>

  {/* Breadcrumb Schema */}
  <script type="application/ld+json">
    {JSON.stringify(breadcrumbSchema)}
  </script>
</Helmet>

     <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center text-[#232466] font-medium hover:text-[#EF5622] transition-colors"
        >
          ← Go Back
        </button>

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm mb-12 text-slate-500">

          <Link
            to="/"
            className="hover:text-[#EF5622] transition-colors"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/products"
            className="hover:text-[#EF5622] transition-colors"
          >
            Products
          </Link>

          <span>/</span>

          <Link
            to={`/category/${product.category
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="hover:text-[#EF5622] transition-colors"
          >
            {product.category}
          </Link>

          <span>/</span>

          <Link
            to={`/category/${product.category
              .toLowerCase()
              .replace(/\s+/g, "-")}/${product.subCategory
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="hover:text-[#EF5622] transition-colors"
          >
            {product.subCategory}
          </Link>

          <span>/</span>

          <span className="font-medium text-[#232466]">
            {product.name}
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Product Image */}
          <div className="bg-slate-50 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-contain"
            />
          </div>

          {/* Product Content */}
          <div>

            <span className="inline-block px-4 py-1 bg-[#EF5622]/10 text-[#EF5622] text-sm font-semibold uppercase tracking-wider">
              {product.brand}
            </span>

            <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#232466] leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <span className="text-4xl font-bold text-[#EF5622]">
                ₹{product.offPrice}
              </span>

              <span className="text-xl text-slate-400 line-through">
                ₹{product.price}
              </span>

              <span className="px-3 py-1 bg-[#232466] text-white text-sm font-semibold rounded-full">
                {discountPercent}% OFF
              </span>

            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm">
                {product.category}
              </span>

              <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm">
                {product.subCategory}
              </span>

            </div>

            {/* Description */}
            <div className="mt-10 border-t border-slate-200 pt-8">

              <h2 className="text-2xl font-bold text-[#232466] mb-4">
                Product Description
              </h2>

              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {product.seo.metaDescription}
              </p>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to={`https://wa.me/919511609437?text=${encodeURIComponent(
                `Hello Adroit Audial, I am interested in the ${product.name}. Please share more details, pricing, and availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-2 font-semibold hover:bg-[#1ebe5d] transition-all duration-300"
              >
                 Enquiry Now
                <span>↗</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default ProductDetails;