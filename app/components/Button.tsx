import { primary } from "@/lib/colors";
import { useEffect, useState, MouseEvent } from "react";
import styled, { css } from "styled-components";
import Cartv2 from "./icons/Cartv2";

const AddToCartAnimationStyle = css`
  &.add-to-cart-button {
    background: #333332;
    border: none;
    border-radius: 8px;
    -webkit-box-shadow: 0 3px 13px -2px rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 13px -2px rgba(0, 0, 0, 0.15);
    color: #ffffff;
    display: flex;
    justify-content: space-around;
    min-width: 150px;
    overflow: hidden;
    outline: none;
    padding: 0.4rem;
    position: relative;
    text-transform: uppercase;
    transition: 0.2s ease;
    width: 155px;
    text-indent: 20px;

    @media only screen and (max-width: 600px) {
      width: 200px;
      height: 50px;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover,
    &:focus {
      -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
      -webkit-transform: translateY(-1px);
      transform: translateY(-1px);
    }

    &.added {
      background: #2fbf30;
      -webkit-box-shadow: 0 0 0 1px rgba(11, 252, 3, 0.45);
      box-shadow: 0 0 0 1px rgba(11, 252, 3, 0.45);

      .add-to-cart {
        display: none;
      }

      .added-to-cart {
        display: block;
      }

      .cart-icon {
        animation: drop 0.3s forwards;
        -webkit-animation: drop 0.3s forwards;
        animation-delay: 0.18s;
      }

      .box-1 {
        top: 16px;

        @media only screen and (max-width: 600px) {
          top: 23px;
        }
      }

      .tick {
        animation: grow 0.6s forwards;
        -webkit-animation: grow 0.6s forwards;
        animation-delay: 0.7s;
      }
    }
  }

  .add-to-cart,
  .added-to-cart {
  }

  .added-to-cart {
    display: none;
    position: relative;
  }

  .add-to-cart-box {
    height: 3px;
    position: absolute;
    top: 0;
    width: 8px;
  }

  .box-1 {
    transition: 0.3s ease;
    top: -8px;
    scale: 2;
    left: 9.5px;

    @media only screen and (max-width: 600px) {
      left: 20px;
      top: -5px;
    }
  }

  .cart-icon {
    left: 0;
    position: absolute;

    @media only screen and (max-width: 600px) {
      left: 10px;
    }
  }

  .tick {
    background: #146230;
    border-radius: 100%;
    position: absolute;
    left: 16px;
    transform: scale(0);
    top: 5px;
    width: fit-content;
    height: fit-content;
  }

  @-webkit-keyframes grow {
    0% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes grow {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @-webkit-keyframes drop {
    0% {
      -webkit-transform: translateY(0px);
    }
    100% {
      -webkit-transform: translateY(1px);
    }
  }

  @keyframes drop {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(1px);
    }
  }
`;

export default function Button({
  children,
  $white: white,
  $outline: outline,
  $primary: primary,
  size,
  $block: block,
  $black: black,
  type,
  onClick,
  ...rest
}: {
  children: React.ReactNode;
} & IButtonProps) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isAdded) {
      timeout = setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isAdded]);

  const handleClick = (_e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(_e);
    setIsAdded(true);
  };

  return (
    <StyledButton
      $white={white}
      $outline={outline}
      $primary={primary}
      size={size}
      $block={block}
      $black={black}
      type={type}
      onClick={handleClick}
      className={`add-to-cart-button ${isAdded ? "added" : ""}`}
      $isAdded={isAdded}
      {...rest}
    >
      {primary && outline ? (
        <>
          <Cartv2 />
          {children}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
}

export const ButtonStyle = css<IButtonProps>`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-family: inherit;
  transition: transform 40ms linear;

  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.$block &&
    css`
      display: block;
      margin-right: 5px;
    `}

  ${(props) =>
    props.$white &&
    !props.$outline &&
    css`
      background-color: #fff;
      color: #000;
      transition: all 0.2s;

      &:hover {
        color: #fff;
        box-shadow: 0 0 40px 40px #7a7676 inset;
        outline: 0;
      }

      &:active {
        background-color: #fff;
        color: black;
      }
    `}

  ${(props) =>
    props.$white &&
    props.$outline &&
    css`
      border: 1px solid #fff;
      color: #fff;
      transition: all 0.2s;
      display: block;

      span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.2s;
      }

      span:after {
        content: ">>";
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
      }

      &:hover span {
        padding-right: 25px;
      }

      &:hover span:after {
        opacity: 1;
        right: 0;
      }

      &:active {
        background-color: #ffffff47;
      }
    `}

    ${(props) =>
    props.$black &&
    !props.$outline &&
    css`
      background-color: #000;
      color: #fff;
    `}

  ${(props) =>
    props.$black &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;
    `}

  ${(props) =>
    props.$primary &&
    !props.$outline &&
    css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: #fff;
    `}

    ${(props) =>
    props.$primary &&
    props.$outline &&
    css`
      ${AddToCartAnimationStyle}
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;

      svg {
        height: 20px;
      }
    `}
`;

const StyledButton = styled.button<IButtonProps>`
  ${ButtonStyle}
  ${(props) => props.$primary && props.$outline && AddToCartAnimationStyle}
`;
