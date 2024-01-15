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
    <Container>
      <Title>Nya Produkter</Title>
      <ProductsGrid products={newProducts} />
    </Container>
  );
}

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

const Container = styled.div`
  max-width: fit-content;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;
