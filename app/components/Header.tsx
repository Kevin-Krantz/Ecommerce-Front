"use client";

import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

export default function Header() {
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <LogoWrapper>
            <Svg src="/toy.svg" />
            <Logo href="/">Lekbubblan</Logo>
          </LogoWrapper>
          <StyledNav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">All products</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/account">Account</NavLink>
            <NavLink href="/cart">Cart (0)</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #191716;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Svg = styled.img`
  width: 70px;
  height: auto;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;
