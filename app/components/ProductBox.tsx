"use client";

import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useCart } from "./CartContext";
import { useEffect } from "react";
import { primary } from "@/lib/colors";
import Cart from "./icons/Cart";
import Cartv2 from "./icons/Cartv2";

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
            <span className="add-to-cart">Lägg i kundvagn</span>
            <span className="added-to-cart">Tillagd!</span>
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  background-color: #fff;
  height: initial;
  width: initial;
  border-radius: 15px;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    border-bottom: 1px solid #bab2b2;
    padding: 20px;
    flex: 1 1 100%;
    border-radius: 0;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  img {
    max-width: 100%;
    max-height: 120px;
    transition: transform 70ms linear, filter 70ms linear;

    @media only screen and (max-width: 600px) {
      max-height: 170px;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
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

  @media only screen and (max-width: 600px) {
    font-size: larger;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font-weight: bolder;
    //asdasdasdasdasdasdasd
  }
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

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
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

  @media only screen and (max-width: 600px) {
    font-weight: bolder;
  }
`;
