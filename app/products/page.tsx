"use client";

import Header from "../components/Header";
import Center from "../components/Center";
import styled from "styled-components";
import { useProducts } from "@/hooks/useProducts";
import ProductsGrid from "../components/ProductsGrid";
import { IProduct } from "@/types/IProduct";

export default function ProductsPage() {
  const { allProducts } = useProducts();

  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={allProducts as IProduct[]} />
      </Center>
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
`;
