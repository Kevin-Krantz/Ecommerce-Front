"use client";

import styled from "styled-components";
import Button from "./Button";

interface ProductBoxProps {
  title: string;
  price: number;
  description?: string;
  images?: string[];
  category?: string;
  properties?: { [key: string]: any };
  _id?: string;
}

export default function ProductBox({
  title,
  price,
  description,
  images,
  category,
  properties,
  _id,
}: ProductBoxProps) {
  return (
    <ProductWrapper>
      <WhiteBox>
        <div>
          <img src={images && images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button $primary="true" $outline="true">
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div``;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
