import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function getData(
  featuredProductId = "66298993001aaaf0f4401774",
  limit = 10
) {
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit,
  });
  const allProducts = await Product.find({}, null, {
    sort: { _id: -1 },
  });

  return {
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
    allProducts: JSON.parse(JSON.stringify(allProducts)),
  };
}

export async function getProductById(productId: string) {
  await mongooseConnect();
  const product = await Product.findById(productId);

  return {
    product: JSON.parse(JSON.stringify(product)),
  };
}
