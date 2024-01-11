"use client";

import styled from "styled-components";
import Header from "../components/Header";
import Center from "../components/Center";
import Button from "../components/Button";
import { useCart } from "../components/CartContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "@/types/IProduct";
import Table from "../components/Table";
import Input from "../components/Input";
import checkout from "../actions/checkout";
import { useRouter, useSearchParams } from "next/navigation";
import WhiteBox from "../components/WhiteBox";
import Footer from "../components/Footer";

export default function CartPage() {
  const router = useRouter();
  const params = useSearchParams();
  const { cartProducts, addProduct, removeProduct, clearCart } = useCart();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (params.toString().includes("success")) {
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id: string) {
    addProduct(id);
  }
  function lessOfThisProduct(id: string) {
    removeProduct(id);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await checkout(formData);

    if (response && response.url) {
      console.log("Stripe session URL:", response.url);
      router.push(response.url);
    }
  }

  let total = 0;

  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (params.toString().includes("success")) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <WhiteBox>
              <h1>Thanks for your order!</h1>
              <p>We will email you the order details.</p>
            </WhiteBox>
          </ColumnsWrapper>
        </Center>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <WhiteBox style={{ padding: "24px 16px 24px 16px" }}>
            <h2>Kundvagn</h2>
            {!cartProducts.length && <div>Din kundvagn är tom {":("}</div>}
            {products.length > 0 && cartProducts.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images && product.images[0]} />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product._id)
                              .length
                          }
                        </QuantityLabel>

                        <Button onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === product._id)
                          .length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </WhiteBox>
          {!!cartProducts.length && (
            <WhiteBox style={{ padding: "24px 16px 24px 16px" }}>
              <h2>Order information</h2>
              <form method="post" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setName(e.currentTarget.value)
                  }
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setEmail(e.currentTarget.value)
                  }
                />
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setCity(e.currentTarget.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setPostalCode(e.currentTarget.value)
                    }
                  />
                </CityHolder>
                <Input
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setStreetAddress(e.currentTarget.value)
                  }
                />
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setCountry(e.currentTarget.value)
                  }
                />
                <input
                  type="hidden"
                  name="products"
                  value={cartProducts.join(",")}
                />
                <Button $black $block type="submit">
                  Continue to payment
                </Button>
              </form>
            </WhiteBox>
          )}
        </ColumnsWrapper>
      </Center>
      <Footer />
    </>
  );
}

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;
