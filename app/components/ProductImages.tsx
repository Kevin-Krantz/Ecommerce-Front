import { IProduct } from "@/types/IProduct";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  images: IProduct["images"];
}

export default function ProductImages({ images }: Props) {
  const [activeImage, setActiveImage] = useState<string | undefined>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imagesRef = useRef<IProduct["images"]>(images);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  useEffect(() => {
    if (images && images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  console.log(activeImage, "activeImage");

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const currentImages = imagesRef.current;
    if (!currentImages || currentImages.length === 0) return;

    if (event.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % currentImages.length;
        setActiveImage(currentImages[nextIndex]);
        return nextIndex;
      });
    } else if (event.key === "ArrowLeft") {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          (prevIndex - 1 + currentImages.length) % currentImages.length;
        setActiveImage(currentImages[nextIndex]);
        return nextIndex;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const imageWidth = 360;
  const sliderPosition = currentIndex * -imageWidth;

  return (
    <>
      <SliderWrapper>
        <ImagesContainer
          style={{ transform: `translateX(${sliderPosition}px)` }}
        >
          {images?.map((image) => (
            <Slide key={image}>
              <BigImage src={image} />
            </Slide>
          ))}
        </ImagesContainer>
      </SliderWrapper>
      <ImageButtons>
        {images?.map((image, index) => (
          <ImageButton
            key={image}
            $active={image === activeImage}
            onClick={() => {
              setActiveImage(image);
              setCurrentIndex(index);
            }}
          >
            <Image src={image} />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}

interface ActiveProps {
  $active: boolean;
}

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 360px;
  height: 250px;
  margin: auto;
`;

const ImagesContainer = styled.div`
  display: flex;
  transition: transform 0.2s ease-in-out;
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 360px;
  height: 250px;
`;

const BigImage = styled.img`
  width: 360px;
  height: 250px;
  object-fit: contain;
`;

const Image = styled.img`
  width: 50px;
  height: 40px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
`;

const ImageButton = styled.div<ActiveProps>`
  transition: transform 50ms linear;

  border: ${({ $active }) => ($active ? "2px" : "1px")} solid
    ${({ $active }) => ($active ? "#000000" : "#aaaaaa")};

  transform: ${({ $active }) => $active && "scale(1.1)"};

  display: flex;
  align-items: center;
  padding: 12px 2px 12px 2px;
  cursor: pointer;
  border-radius: 5px;
`;
