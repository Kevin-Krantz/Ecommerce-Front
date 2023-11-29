"use client";

import Center from "@/app/components/Center";
import Header from "@/app/components/Header";
import Title from "@/app/components/Title";
import WhiteBox from "@/app/components/WhiteBox";
import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { product } = useProduct(id);

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>Image</WhiteBox>
          <div>
            <Title>{product?.title}</Title>
            <p>{product?.description}</p>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
`;
