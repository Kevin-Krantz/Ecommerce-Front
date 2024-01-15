"use client";

import Header from "../components/Header";
import Center from "../components/Center";
import { useProducts } from "@/hooks/useProducts";
import ProductsGrid from "../components/ProductsGrid";
import { IProduct } from "@/types/IProduct";
import Title from "../components/Title";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import LoadingSpinner from "../components/icons/LoadingSpinner";

export default function ProductsPage() {
  const { allProducts } = useProducts();

  if (!allProducts) {
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
    <>
      <Header />
      <Center>
        <Title>Alla produkter</Title>
        <ProductsGrid products={allProducts as IProduct[]} />
      </Center>
      <MobileFooter />
      <Footer />
    </>
  );
}
