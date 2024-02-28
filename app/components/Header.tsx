"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useCart } from "./CartContext";
import { useEffect, useRef, useState } from "react";
import StyledHamburger from "./icons/Hamburger";
import { useBodyScrollLock } from "@/hooks/useNavScroll";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const { cartProducts } = useCart();
  const [animate, setAnimate] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  useBodyScrollLock(showNav);

  function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevCartProductsLength = usePrevious(cartProducts.length);

  useEffect(() => {
    if (
      prevCartProductsLength !== undefined &&
      cartProducts.length > prevCartProductsLength
    ) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
  }, [cartProducts.length]);

  return (
    <StyledHeader>
      <Wrapper>
        <LogoWrapper $shownav={showNav}>
          <Svg src="/toy.svg" />
          <Logo href="/">Lekbubblan</Logo>
        </LogoWrapper>
        <StyledNav $shownav={showNav}>
          <NavLink $activeLink={pathName === "/"} href="/">
            Hem
          </NavLink>
          <NavLink
            $activeLink={pathName?.includes("/products")}
            href="/products"
          >
            Produkter
          </NavLink>
          <NavLink href="/categories">Kategorier</NavLink>
          <NavLink href="/account">Konto</NavLink>
          <NavLink
            $activeLink={pathName?.includes("/cart")}
            href="/cart"
            className={animate ? "jump" : ""}
          >
            Kundvagn ({cartProducts.length})
          </NavLink>
        </StyledNav>
        <NavButton
          $shownav={showNav}
          onClick={() => setShowNav((prev) => !prev)}
        >
          <StyledHamburger />
        </NavButton>
      </Wrapper>
    </StyledHeader>
  );
}

interface ActiveProps {
  $shownav?: boolean;
  $activeLink?: boolean;
}

const jumpAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const NavButton = styled.button<ActiveProps>`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: none;
  color: #aaa;
  cursor: pointer;
  position: absolute;
  right: 4px;
  top: 0;
  transition: all 0.2s;
  z-index: 2;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  scale: 0.5;

  &:active {
    color: black;
  }

  @media only screen and (max-width: 600px) {
    position: ${({ $shownav }) => ($shownav ? "fixed" : "absolute")};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledHeader = styled.header`
  background-color: #191716;
  margin: 0 auto;
  padding: 0 50px;

  @media only screen and (max-width: 600px) {
    padding: 0 8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
`;

const LogoWrapper = styled.div<ActiveProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bolder;
  font-size: larger;

  @media only screen and (max-width: 600px) {
    z-index: 2;
    transform: ${({ $shownav }) =>
      $shownav ? "translateX(0%)" : "translateX(-110%)"};
    transition: transform 0.2s ease;
    /* position: fixed; */
    top: 10px;
  }
`;

const Svg = styled.img`
  width: 70px;
  height: auto;
`;

const Logo = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

const StyledNav = styled.nav<ActiveProps>`
  display: flex;
  font-size: large;
  gap: 28px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    row-gap: 50px;
    background-color: #191716;
    z-index: 1;
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: -1px;
    transform: ${({ $shownav }) =>
      $shownav ? "translateX(0%)" : "translateX(-100%)"};
    transition: transform 0.2s ease;
    padding: 90px 20px 20px;
    align-items: center;
  }
`;

const NavLink = styled(Link)<ActiveProps>`
  color: #aaa;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    outline: 0;
  }

  &:active {
    color: black;
  }

  &.jump {
    animation: ${jumpAnimation} 0.5s ease;
  }

  @media only screen and (max-width: 600px) {
    ${({ $activeLink }) =>
      $activeLink &&
      "background-color: #777373; padding: 8px 50px; border: solid 1px white"};
  }
`;
