"use client";

import styled from "styled-components";
import Header from "../components/Header";
import Center from "../components/Center";
import { useCart } from "../components/CartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "@/types/IProduct";
import checkout from "../actions/checkout";
import { useRouter, useSearchParams } from "next/navigation";
import WhiteBox from "../components/WhiteBox";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import CartForm from "../components/CartForm";
import CartProductsTable from "../components/CartProductsTable";
import Image from "next/image";

interface IFormState {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  streetAddress: string;
  town: string;
}

export default function CartPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { cartProducts, addProduct, removeProduct, clearCart } = useCart();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [formState, setFormState] = useState<IFormState>({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    streetAddress: "",
    town: "",
  });

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }

    if (params.toString().includes("success")) {
      clearCart();
    }
  }, [cartProducts]);

  function addToCart(id: string) {
    addProduct(id);
  }
  function lessOfThisProduct(id: string) {
    removeProduct(id);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await checkout(formData);

    if (res && res.errors) {
      const errors = res.errors.map((err) => err.replace(/`/g, ""));
      setFormErrors(errors);
    } else if (res && res.url) {
      router.push(res.url);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const updatedErrors = formErrors.filter((error) => {
      const errorKey = name.toLowerCase();

      return !error.includes(
        errorKey
          .replace("town", "postort")
          .replace("name", "namn")
          .replace("phone", "mobilnummer")
          .replace("postalcode", "postnummer")
          .replace("streetaddress", "adress")
          .replace("email", "e-post")
      );
    });

    setFormErrors(updatedErrors);
  };

  const includesSuccess = params.toString().includes("success");

  if (includesSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper $includesSuccess={includesSuccess}>
            <WhiteBox>
              <h1>Thanks for your order!</h1>
              <p>We will email you the order details.</p>
            </WhiteBox>
          </ColumnsWrapper>
        </Center>
        <MobileFooter />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <WhiteBox>
            <h2>Kundvagn</h2>
            {!cartProducts.length && (
              <div>
                Din kundvagn är tom {":("}
                <ResponsiveImage
                  src={"/images/emptycart.png"}
                  priority
                  alt="Product Not Found Image"
                  width="700"
                  height="500"
                />
              </div>
            )}
            {products.length > 0 && cartProducts.length > 0 && (
              <CartProductsTable
                products={products}
                addToCart={addToCart}
                cartProducts={cartProducts}
                lessOfThisProduct={lessOfThisProduct}
              />
            )}
          </WhiteBox>
          {!!cartProducts.length && (
            <CartForm
              formState={formState}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              formErrors={formErrors}
              cartProducts={cartProducts}
            />
          )}
        </ColumnsWrapper>
      </Center>
      <MobileFooter />
      <Footer />
    </>
  );
}

interface ColumnProps {
  $includesSuccess?: boolean;
}

const ColumnsWrapper = styled.div<ColumnProps>`
  display: grid;
  grid-template-columns: ${({ $includesSuccess }) =>
    $includesSuccess ? "unset" : "1.3fr 0.8fr"};
  gap: 40px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: unset;
    gap: unset;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

const ResponsiveImage = styled(Image)`
  width: 700px;
  height: 500px;

  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 300px;

    filter: contrast(120%);
    filter: saturate(150%);
  }
`;
