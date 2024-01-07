"use client";

import Link from "next/link";
import styled from "styled-components";
import { useCart } from "./CartContext";

export default function Header() {
  const { cartProducts } = useCart();
  return (
    <StyledHeader>
      <Wrapper>
        <LogoWrapper>
          <Svg src="/toy.svg" />
          <Logo href="/">Lekbubblan</Logo>
        </LogoWrapper>
        <StyledNav>
          <NavLink href="/">Hem</NavLink>
          <NavLink href="/products">Produkter</NavLink>
          <NavLink href="/categories">Kategorier</NavLink>
          <NavLink href="/account">Konto</NavLink>
          <NavLink href="/cart">Varukorg ({cartProducts.length})</NavLink>
        </StyledNav>
      </Wrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #191716;
  margin: 0 auto;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bolder;
  font-size: larger;
`;

const Svg = styled.img`
  width: 70px;
  height: auto;
`;

const Logo = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 24px;
  font-size: large;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;
