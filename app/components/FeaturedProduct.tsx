"use client";

import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { IProduct } from "@/types/IProduct";
import { useCart } from "./CartContext";
import DOMPurify from "dompurify";
import { useAutomaticImageCycling } from "@/hooks/useAutomaticImageCycling";

interface Props {
  featuredProduct: IProduct;
}

export default function FeaturedProduct({ featuredProduct }: Props) {
  const { addProduct } = useCart();

  if (!featuredProduct) {
    return null;
  }

  const { _id, title, description, images } = featuredProduct;

  const imagesWithDuplicate = images
    ? [...images, images[0]]
    : ["No Images Found!"];

  const { currentImage, index } = useAutomaticImageCycling(
    imagesWithDuplicate,
    1500
  );

  const translateX = -(100 * index) + "%";

  function addFeaturedToCart() {
    addProduct(featuredProduct?._id);
  }

  const createMarkup = (htmlContent: string) => {
    const cleanHTML = DOMPurify.sanitize(htmlContent);
    return { __html: cleanHTML };
  };

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{title}</Title>
              {description && (
                <Desc dangerouslySetInnerHTML={createMarkup(description)} />
              )}
              <ButtonsWrapper>
                <ButtonLink href={"/product/" + _id} $outline $white>
                  <span>Läs mer</span>
                </ButtonLink>
                <Button $outline $primary onClick={addFeaturedToCart}>
                  <span className="add-to-cart">Lägg i kundvagn</span>
                  <span className="added-to-cart">Tillagd!</span>
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <SliderWrapper>
              <ImageSlider
                $translateX={translateX}
                style={{ transform: `translateX(${translateX})` }}
              >
                {imagesWithDuplicate.map((image, idx) => (
                  <SlideImage
                    key={idx}
                    src={image}
                    alt={`Featured Product ${idx}`}
                  />
                ))}
              </ImageSlider>
            </SliderWrapper>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}

interface ImageSliderProps {
  $translateX?: string;
}

const Bg = styled.div`
  background-color: #191716;
  color: white;
  padding: 30px 0;

  /* background-image: url("/images/grain.jpg");
  background-repeat: round; */
  /* background-size: contain; */
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;

    div:nth-child(1) {
      order: 2;
    }
  }

  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2rem;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Desc = styled.div`
  color: white;
  font-size: 0.8rem;
  position: relative;
  max-height: 5rem;
  overflow: hidden;
  line-height: 14px;

  .product-description h2 {
    font-size: 12px;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 0, #191716);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const ImageSlider = styled.div<ImageSliderProps>`
  display: flex;
  transition: ${({ $translateX }) =>
    $translateX === "0%" ? "unset" : "transform 0.5s ease-out"};
`;

const SlideImage = styled.img`
  flex: 0 0 100%;
  width: 100%;
  height: auto;
`;
