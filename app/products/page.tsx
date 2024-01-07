"use client";

import Header from "../components/Header";
import Center from "../components/Center";
import { useProducts } from "@/hooks/useProducts";
import ProductsGrid from "../components/ProductsGrid";
import { IProduct } from "@/types/IProduct";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function ProductsPage() {
  const { allProducts } = useProducts();

  return (
    <>
      <Header />
      <Center>
        <Title style={{ padding: "16px" }}>Alla produkter</Title>
        <ProductsGrid products={allProducts as IProduct[]} />
      </Center>
      <Footer />
    </>
  );
}
