import { IProduct } from "@/types/IProduct";
import styled from "styled-components";
import Button from "./Button";

interface Props {
  products: IProduct[];
  cartProducts: string[];
  lessOfThisProduct: (id: string) => void;
  addToCart: (id: string) => void;
}

export default function CartProductsTable({
  products,
  addToCart,
  cartProducts,
  lessOfThisProduct,
}: Props) {
  const totalPrice = products.reduce((acc, product) => {
    const quantity = cartProducts.filter((id) => id === product._id).length;
    return acc + quantity * product.price;
  }, 0);

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Produkt</th>
          <th>Antal</th>
          <th>Pris</th>
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
              <FlexContainer>
                <Button $black onClick={() => lessOfThisProduct(product._id)}>
                  -
                </Button>
                <QuantityLabelContainer>
                  <QuantityLabel>
                    {cartProducts.filter((id) => id === product._id).length}
                  </QuantityLabel>
                </QuantityLabelContainer>

                <Button $black onClick={() => addToCart(product._id)}>
                  +
                </Button>
              </FlexContainer>
            </td>
            <td>
              <FlexContainer>
                {cartProducts.filter((id) => id === product._id).length *
                  product.price}
                :-
              </FlexContainer>
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td>totalt: {totalPrice}:-</td>
        </tr>
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;

  th {
    text-align: center;
    text-transform: uppercase;
    color: #000;
    font-weight: 600;
  }

  td {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
const ProductInfoCell = styled.td`
  padding: 10px 0;
  text-align: center;
  display: grid;
  justify-items: center;
  grid-gap: 8px;
  font-size: small;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;

  button {
    width: 60px;
    height: 35px;
    justify-content: center;
  }
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabelContainer = styled.div`
  width: 30px;
  text-align: center;
`;

const QuantityLabel = styled.div`
  padding: 0 8px;
`;
