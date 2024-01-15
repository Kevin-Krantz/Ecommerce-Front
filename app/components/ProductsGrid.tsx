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

  @media only screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    gap: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
  }
`;
