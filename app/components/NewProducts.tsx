"use client";

import { IProduct } from "@/types/IProduct";
import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
interface Props {
  newProducts: IProduct[];
}

export default function NewProducts({ newProducts }: Props) {
  return (
    <Center>
      <Title>Nya Produkter</Title>
      <ProductsGrid products={newProducts} />
    </Center>
  );
}

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;
