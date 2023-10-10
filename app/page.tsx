import Product from "@/models/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import Header from "./components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "./components/NewProducts";

async function getData() {
  const featuredProductId = "64eea380ca2216b7fd81e720";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    newProducts: JSON.parse(JSON.stringify(newProducts)),
  };
}

export default async function Home() {
  const { featuredProduct, newProducts } = await getData();

  return (
    <div>
      <Header />
      <FeaturedProduct featuredProduct={featuredProduct} />
      <NewProducts newProducts={newProducts} />
    </div>
  );
}
