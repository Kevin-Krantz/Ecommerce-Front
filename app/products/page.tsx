"use client";

import Header from "../components/Header";
import Center from "../components/Center";
import { useProducts } from "@/hooks/useProducts";
import ProductsGrid from "../components/ProductsGrid";
import { IProduct } from "@/types/IProduct";
import Title from "../components/Title";

export default function ProductsPage() {
  const { allProducts } = useProducts();

  return (
    <>
      <Header />
      <Center>
        <Title>All Products</Title>
        <ProductsGrid products={allProducts as IProduct[]} />
      </Center>
    </>
  );
}
