"use client";

import Button from "@/app/components/Button";
import { useCart } from "@/app/components/CartContext";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import MobileFooter from "@/app/components/MobileFooter";
import ProductImages from "@/app/components/ProductImages";
import WhiteBox from "@/app/components/WhiteBox";
import Accordion from "@/app/components/common/Accordion";
import LoadingSpinner from "@/app/components/icons/LoadingSpinner";
import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { product } = useProduct(id);
  const { addProduct } = useCart();

  if (!product) {
    return (
      <>
        <Header />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingSpinner color="#000" />
        </div>
        <MobileFooter />
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <StyledH1>{product?.title}</StyledH1>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product?.images} />
          </WhiteBox>
          <div>
            <Accordion title="Produktbeskrivning">
              <p>{product?.description}</p>
            </Accordion>
            <PriceRow>
              <div>
                <Price>{product?.price}:-</Price>
              </div>
              <div>
                <Button $primary $outline onClick={() => addProduct(id)}>
                  Lägg i kundvagn
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
      <MobileFooter />
      <Footer />
    </>
  );
}

const Center = styled.div`
  margin: 0 auto 8px auto;
  padding: 0 20px;
`;

const StyledH1 = styled.h1`
  font-size: 1.5em;
  margin-block: unset;
  margin-inline: unset;
  padding: 16px;
  display: flex;
  justify-content: center;
  margin-top: 16px;

  @media only screen and (max-width: 600px) {
  }
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 400px) 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  margin-top: 16px;
  margin-bottom: 16px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: unset;
    grid-auto-rows: unset;
    display: unset; */
  }
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const Price = styled.span`
  font-size: 1.4rem;
`;
