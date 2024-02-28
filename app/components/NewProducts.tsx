"use client";

import { IProduct } from "@/types/IProduct";
import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";
import Title from "./Title";
interface Props {
  newProducts: IProduct[];
}

export default function NewProducts({ newProducts }: Props) {
  return (
    <Container>
      <Title>Nya Produkter</Title>
      <ProductsGrid products={newProducts} />
    </Container>
  );
}

const Container = styled.div`
  max-width: fit-content;
  margin: 0 auto;
  padding: 0 20px;

  @media only screen and (max-width: 600px) {
    text-align: center;
    padding: unset;
  }
`;
