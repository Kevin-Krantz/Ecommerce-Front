"use client";

import Button from "@/app/components/Button";
import { useCart } from "@/app/components/CartContext";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProductImages from "@/app/components/ProductImages";
import Title from "@/app/components/Title";
import WhiteBox from "@/app/components/WhiteBox";
import Accordion from "@/app/components/common/Accordion";
import Cart from "@/app/components/icons/Cart";
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
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <Title
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          {product?.title}
        </Title>
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
                  <Cart />
                  Lägg i kundvagn
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
      <Footer />
    </>
  );
}

const Center = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 400px) 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;
