import fs from 'fs';
import products from './convertedProducts.json' with { type: 'json' };

const cleanedProducts = products.map((product) => {
  const { subcategory, ...rest } = product;
  return rest;
});

fs.writeFileSync(
  './products-clean.json',
  JSON.stringify(cleanedProducts, null, 2)
);

console.log('✅ subcategory removed successfully');
