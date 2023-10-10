"use client";

import { IProduct } from "@/types/IProduct";
import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

interface Props {
  newProducts: IProduct[];
}

export default function NewProducts({ newProducts }: Props) {
  return (
    <Center>
      <ProductsGrid>
        {newProducts.map((p) => (
          <ProductBox key={p._id} {...p} />
        ))}
      </ProductsGrid>
    </Center>
  );
}

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 30px;
`;
