import styled from "styled-components";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
import WhiteBox from "./WhiteBox";

interface IFormState {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  streetAddress: string;
  town: string;
}

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formState: IFormState;
  formErrors: string[];
  cartProducts: string[];
}

export default function CartForm({
  handleSubmit,
  handleInputChange,
  formState,
  formErrors,
  cartProducts,
}: Props) {
  return (
    <WhiteBox>
      <h2>Kund information</h2>
      <form method="post" onSubmit={handleSubmit}>
        {formErrors.length > 0 && (
          <ErrorMessage message={formErrors} type="namn" />
        )}
        <Input
          type="text"
          placeholder="Namn (förnamn och efternamn)"
          value={formState.name}
          name="name"
          onChange={handleInputChange}
        />
        {formErrors.length > 0 && (
          <ErrorMessage message={formErrors} type="e-post" />
        )}
        <Input
          type="text"
          placeholder="E-post"
          value={formState.email}
          name="email"
          onChange={handleInputChange}
        />
        <CityHolderErrors>
          {formErrors.length > 0 && (
            <ErrorMessage message={formErrors} type="mobilnummer" />
          )}
          {formErrors.length > 0 && (
            <ErrorMessage message={formErrors} type="postnummer" />
          )}
        </CityHolderErrors>
        <CityHolder>
          <Input
            type="text"
            placeholder="Mobilnummer"
            value={formState.phone}
            name="phone"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Postnummer"
            value={formState.postalCode}
            name="postalCode"
            onChange={handleInputChange}
          />
        </CityHolder>
        {formErrors.length > 0 && (
          <ErrorMessage message={formErrors} type="adress" />
        )}
        <Input
          type="text"
          placeholder="Adress"
          value={formState.streetAddress}
          name="streetAddress"
          onChange={handleInputChange}
        />
        {formErrors.length > 0 && (
          <ErrorMessage message={formErrors} type="postort" />
        )}
        <Input
          type="text"
          placeholder="Postort"
          value={formState.town}
          name="town"
          onChange={handleInputChange}
        />
        <input type="hidden" name="products" value={cartProducts.join(",")} />
        <Button $black $block type="submit">
          Till betalning
        </Button>
      </form>
    </WhiteBox>
  );
}

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const CityHolderErrors = styled.div`
  display: flex;
`;
