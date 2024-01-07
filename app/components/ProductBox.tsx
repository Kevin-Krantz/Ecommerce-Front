"use client";

import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useCart } from "./CartContext";
import { useEffect } from "react";
import { primary } from "@/lib/colors";
import Cart from "./icons/Cart";

interface ProductBoxProps {
  title: string;
  price: number;
  description?: string;
  images?: string[];
  category?: string;
  properties?: { [key: string]: any };
  _id: string;
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
  const url = `/product/${_id}`;

  const { addProduct } = useCart();

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images && images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            $primary={true}
            $outline={true}
            onClick={() => addProduct(_id)}
          >
            <Cart /> Lägg i kundvagn
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    max-width: 100%;
    max-height: 100px;
    transition: transform 70ms linear, filter 70ms linear;
  }

  &:hover {
    img {
      transform: scale(1.2);
      filter: saturate(2);
    }
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
    justify-content: space-around;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;
