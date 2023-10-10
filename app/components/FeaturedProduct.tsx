"use client";

import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { IProduct } from "@/types/IProduct";
import Cart from "./icons/Cart";

interface Props {
  featuredProduct: IProduct | null;
}

export default function FeaturedProduct({ featuredProduct }: Props) {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{featuredProduct?.title}</Title>
              <Desc>{featuredProduct?.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/products/" + featuredProduct?._id}
                  outline="true"
                  white="true"
                >
                  Read more
                </ButtonLink>
                <Button white="true">
                  <Cart />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src={featuredProduct?.images && featuredProduct.images[0]} />{" "}
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}

const Bg = styled.div`
  background-color: #191716;
  color: white;
  padding: 50px 0;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 50px;

  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;
