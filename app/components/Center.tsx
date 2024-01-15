import styled from "styled-components";

export default function Center({ children }: { children: React.ReactNode }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  @media only screen and (max-width: 600px) {
    padding: unset;
    text-align: center;
  }
`;
