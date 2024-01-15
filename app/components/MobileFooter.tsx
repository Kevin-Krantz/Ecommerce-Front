import { useMobileFooter } from "@/hooks/useMobileFooter";
import styled from "styled-components";
import { useCart } from "./CartContext";
import { usePathname, useSearchParams } from "next/navigation";

export default function MobileFooter() {
  const pathName = usePathname();

  const magicLineStyles: MagicLineProps = {
    $fontStack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
    $lineHeight: "5px",
    $items: 5,
    $bg: "rgb(25,23,22)",
    $color: "#FFF",
    $lightBg: "rgb(210,210,210)",
    $lightColor: "gray",
    $primaryBg: "magenta",
    $primaryColor: "#FFF",
  };
  const navRef = useMobileFooter();

  const { cartProducts } = useCart();

  return (
    <Container>
      <StyledNav
        ref={navRef}
        {...magicLineStyles}
        className="mobile-footer"
        role="menulist"
      >
        <a
          href="/"
          role="menuitem"
          className={pathName === "/" ? "active" : ""}
          aria-describedby="nav-current"
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M14 16h-3v-6h-5v6h-3v-9h-1v10h13v-10h-1v9zM7 16v-5h3v5h-3zM16.796 6.473l-0.592 0.807-7.704-5.66-7.704 5.658-0.592-0.806 8.296-6.092 8.296 6.093z"
              fill="#fff"
            />
          </svg>
          Hem
        </a>
        <a
          href="/products"
          role="menuitem"
          className={pathName === "/products" ? "active" : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="7.11111in"
            height="7.11111in"
            version="1.1"
            viewBox="0 0 7111 7111"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <style type="text/css"></style>
            </defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                className="fil0"
                d="M1739 5084l-439 -255 -5 590c0,43 -42,104 -86,104 -17,0 -35,-6 -52,-12l-386 -224c-34,-18 -52,-52 -52,-87l0 -707 -483 -278 0 1751 1503 868 0 -1750zm2338 -2625l0 -590 -426 246 0 1753 1503 -867 0 -1749 -490 279 0 704c0,72 -68,96 -121,126l-310 178c-71,40 -156,1 -156,-80zm201 -702l0 529 190 -109 0 -533 -190 113zm-288 -63l-1441 -899 -498 288 695 397 807 467 437 -253zm-495 -1682c29,-17 69,-17 104,0l1710 985c29,17 52,51 52,86l0 1921 1664 958c29,18 52,52 52,87l0 1975c0,34 -17,69 -52,86l-1716 991c-6,3 -14,6 -23,8 -6,2 -13,3 -19,3l-1 0 -1 0 0 0c0,0 -1,0 -2,0l-2 0c-12,0 -24,-2 -35,-6 -5,-2 -10,-4 -15,-5l-1660 -956 -1657 956c-7,3 -17,6 -28,9 -7,1 -14,2 -21,2l-3 0 -2 0c-12,0 -24,-2 -35,-6 -5,-2 -10,-4 -14,-5l-1705 -991c-29,-17 -52,-52 -52,-86l0 -1975c0,-35 17,-69 52,-87l1647 -948 0 -1925c0,-35 17,-69 52,-87 570,-330 1140,-660 1710,-990zm-366 448l1441 898 474 -275 -1497 -864 -418 241zm-385 222l1436 896 185 -103 -1438 -898 -183 105zm699 3184l0 -1748 -800 -465 -703 -401 0 1749 136 78 1367 787zm2350 1559l0 -582 -426 248 0 1743 1503 -868 0 -1742 -484 276 6 695c0,74 -72,97 -127,126l-317 185c-64,43 -155,-3 -155,-81zm102 -882l186 -109 -1437 -896 -186 108 1437 897zm99 183l0 520 190 -109 0 -522 -190 111zm-288 -67l-1443 -899 -495 287 1501 865 437 -253zm-857 -1240l1446 901 470 -269 -1502 -872 -414 240zm310 3415l0 -1750 -1497 -866 0 1752 1497 864zm-4811 -2787l478 276 1439 -896 -426 -246 -1491 866zm2497 -286l-1438 897 441 254 1497 -861 -500 -290zm604 463l-1503 867 0 1743 1503 -868 0 -1742zm-802 -577l-183 -105 -1437 897 182 105 1438 -897zm-1536 1076l-190 -110 0 530 190 109 0 -529z"
              ></path>
            </g>
          </svg>
          Produkter
        </a>
        <a href="#!" role="menuitem">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Icon-Set"
                transform="translate(-360.000000, -1035.000000)"
                fill="#fff"
              >
                <path
                  d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z"
                  id="plus"
                ></path>
              </g>
            </g>
          </svg>
          Add
        </a>
        <a href="#!" role="menuitem">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="User / User_01">
              <path
                id="Vector"
                d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#fff"
              />
            </g>
          </svg>
          User
        </a>
        <a
          href="/cart"
          role="menuitem"
          className={pathName === "/cart" ? "active" : ""}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-220.000000, -3119.000000)"
                fill="#fff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M180.846448,2977 L167.153448,2977 C166.544448,2977 166.077448,2976.461 166.163448,2975.859 L167.306448,2967.859 C167.376448,2967.366 167.798448,2967 168.296448,2967 L168.999448,2967 L168.999448,2969 C168.999448,2969.552 169.447448,2970 169.999448,2970 C170.552448,2970 170.999448,2969.552 170.999448,2969 L170.999448,2967 L176.999448,2967 L176.999448,2969 C176.999448,2969.552 177.447448,2970 177.999448,2970 C178.552448,2970 178.999448,2969.552 178.999448,2969 L178.999448,2967 L179.703448,2967 C180.201448,2967 180.623448,2967.366 180.693448,2967.859 L181.836448,2975.859 C181.922448,2976.461 181.455448,2977 180.846448,2977 L180.846448,2977 Z M170.999448,2964 C170.999448,2962.346 172.345448,2961 173.999448,2961 C175.654448,2961 176.999448,2962 176.999448,2964 L176.999448,2965 L170.999448,2965 L170.999448,2964 Z M183.979448,2976.717 L182.550448,2966.717 C182.410448,2965.732 181.566448,2965 180.570448,2965 L178.999448,2965 L178.999448,2964 C178.999448,2961 176.756448,2959 173.999448,2959 C171.243448,2959 168.999448,2961.243 168.999448,2964 L168.999448,2965 L167.734448,2965 C166.739448,2965 165.589448,2965.732 165.448448,2966.717 L164.020448,2976.717 C163.848448,2977.922 164.783448,2979 166.000448,2979 L181.999448,2979 C183.216448,2979 184.151448,2977.922 183.979448,2976.717 L183.979448,2976.717 Z"
                    id="shopping_cart-[#1135]"
                  ></path>
                </g>
              </g>
            </g>
            <text
              x={cartProducts.length >= 10 ? "4" : "7.5"}
              y={cartProducts.length >= 10 ? "17" : "17"}
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="8"
              fontWeight={800}
              fill="#ffea00"
            >
              {cartProducts.length}
            </text>
          </svg>
          Kundvagn
        </a>
        <i className="line" id="nav-current">
          current item
        </i>
      </StyledNav>
    </Container>
  );
}

interface MagicLineProps {
  $fontStack: string;
  $lineHeight: string;
  $items: number;
  $bg: string;
  $color: string;
  $lightBg: string;
  $lightColor: string;
  $primaryBg: string;
  $primaryColor: string;
}

const Container = styled.div`
  position: fixed;
  bottom: -1px;
  width: 100%;
`;

const StyledNav = styled.nav<MagicLineProps>`
  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.12),
    0 22.3px 17.9px rgba(0, 0, 0, 0.08), 0 100px 80px rgba(0, 0, 0, 0.04);
  position: relative;
  width: auto;
  height: 5rem;
  color: ${({ $color }) => $color};
  font-size: 1rem;
  font-family: ${({ $fontStack }) => $fontStack};
  padding: 0;
  background: ${({ $bg }) => $bg};
  overflow: hidden;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  a {
    position: relative;
    overflow: hidden;
    width: calc(100% / ${({ $items }) => $items});
    height: 100%;
    display: inline-block;
    padding: 0;
    color: currentColor;
    line-height: 12;
    font-size: 0.725em;
    text-align: center;
    text-decoration: none;
    text-indent: -9999rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    will-change: background, line-height;
    transition: background 0.15s ease-in-out, line-height 0.2s ease 0.2s;
    &:hover,
    &:focus {
      background-color: rgba(128, 128, 128, 0.3);
      svg {
        transform: scale(1.25);
        opacity: 0.6;
      }
    }
    &:focus,
    &:active {
      outline: none;
      svg {
        opacity: 0.8;
      }
    }
    &:active {
      svg {
        opacity: 1;
      }
    }
    svg {
      position: absolute;
      fill: currentColor;
      top: calc(30% + ${({ $lineHeight }) => $lineHeight} / 2);
      left: 30%;
      width: 40%;
      height: 40%;
      transform: scale(1);
      transform-origin: center;
      will-change: opacity, transform, top;
      transition: opacity 0.2s ease, transform 0.2s ease, top 0.2s ease;
      opacity: 0.4;
      pointer-events: none;
    }
    &.active {
      background-color: rgba(128, 128, 128, 0.15);
      text-indent: 0;
      line-height: 10;
      transition-delay: 0s, 0s, 0s;
      svg {
        top: calc(17.5% + ${({ $lineHeight }) => $lineHeight} / 2);
        transform-origin: center bottom;
        opacity: 1;
      }
      &:hover,
      &:focus,
      &:active {
        svg {
          transform: scale(1);
        }
      }
    }
    &.traversing svg {
      transition-delay: 0s, 0s, 0s;
      animation: 0.15s traversing ease-out both;
    }
  }
  .line {
    position: absolute;
    left: 0;
    top: 0;
    width: auto;
    height: ${({ $lineHeight }) => $lineHeight};
    text-indent: -9999rem;
    transform: translateX(-50%);
    border-radius: calc(${({ $lineHeight }) => $lineHeight} / 2);
    background: currentColor;
    transition: left 0.5s ease-out;
    z-index: 10;
  }

  @keyframes traversing {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 600px) {
  }
`;
