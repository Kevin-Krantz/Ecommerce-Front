import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function getData(
  featuredProductId = "64eea380ca2216b7fd81e720",
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
