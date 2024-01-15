"use client";

import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { IProduct } from "@/types/IProduct";
import Cart from "./icons/Cart";
import { useCart } from "./CartContext";
import ReadMore from "./icons/ReadMore";
import LoadingSpinner from "./icons/LoadingSpinner";

interface Props {
  featuredProduct: IProduct;
}

export default function FeaturedProduct({ featuredProduct }: Props) {
  const { addProduct } = useCart();

  if (!featuredProduct) {
    return null;
  }

  const { _id, title, description, images } = featuredProduct;

  function addFeaturedToCart() {
    addProduct(featuredProduct?._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{title}</Title>
              <Desc>{description}</Desc>
              <ButtonsWrapper>
                <ButtonLink href={"/product/" + _id} $outline $white>
                  <span>Läs mer</span>
                </ButtonLink>
                <Button $outline $primary onClick={addFeaturedToCart}>
                  Lägg i kundvagn
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src={images && images[0]} />
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

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;

    div:nth-child(1) {
      order: 2;
    }
  }

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

const Desc = styled.div`
  color: white;
  font-size: 0.8rem;
  position: relative;
  max-height: 5rem;
  overflow: hidden;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 0, #191716);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;
