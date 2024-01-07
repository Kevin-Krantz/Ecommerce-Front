import styled from "styled-components";
import ProductBox from "./ProductBox";
import { IProduct } from "@/types/IProduct";

interface Props {
  products: IProduct[];
}

export default function ProductsGrid({ products }: Props) {
  return (
    <StyledProductsGrid>
      {products && products.map((p) => <ProductBox key={p._id} {...p} />)}
    </StyledProductsGrid>
  );
}

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  text-align: center;
  width: max-content;
  margin-bottom: 20px;
`;
