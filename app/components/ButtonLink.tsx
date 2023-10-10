import Link from "next/link";
import styled from "styled-components";
import { ButtonStyle } from "./Button";

export default function ButtonLink({
  children,
  white,
  outline,
  $primary: primary,
  size,
  href,
  ...rest
}: {
  children: React.ReactNode;
} & IButtonLinkProps) {
  return (
    <StyledLink
      white={white}
      outline={outline}
      $primary={primary}
      size={size}
      href={href}
      {...rest}
    >
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)<IButtonProps>`
  ${ButtonStyle}
`;
