"use client";

import { useProducts } from "@/hooks/useProducts";
import FeaturedProduct from "./components/FeaturedProduct";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
import { IProduct } from "@/types/IProduct";

export default function Home() {
  const { products, featured } = useProducts();

  return (
    <div>
      <Header />
      <FeaturedProduct featuredProduct={featured as IProduct} />
      <NewProducts newProducts={products} />
    </div>
  );
}
