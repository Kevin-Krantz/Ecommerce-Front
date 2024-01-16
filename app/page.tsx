"use client";

import { useProducts } from "@/hooks/useProducts";
import FeaturedProduct from "./components/FeaturedProduct";
import Header from "./components/Header";
import NewProducts from "./components/NewProducts";
import { IProduct } from "@/types/IProduct";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/icons/LoadingSpinner";
import MobileFooter from "./components/MobileFooter";

export default function Home() {
  const { products, featured } = useProducts();

  if (!products && !featured) {
    return (
      <>
        <Header />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingSpinner color="#000" />
        </div>
        <MobileFooter />
      </>
    );
  }

  return (
    <div>
      <Header />
      <FeaturedProduct featuredProduct={featured as IProduct} />
      <NewProducts newProducts={products as IProduct[]} />
      <MobileFooter />
      <Footer />
    </div>
  );
}
