import products from "./data/products.data.js";

const slugs = {};
const duplicates = [];

products.forEach((p) => {
  if (slugs[p.slug]) {
    duplicates.push(p.slug);
  }
  slugs[p.slug] = true;
});

console.log([...new Set(duplicates)]);