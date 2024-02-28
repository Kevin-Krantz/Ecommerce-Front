import { IProduct } from "@/types/IProduct";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {
  images: IProduct["images"];
}

export default function ProductImages({ images }: Props) {
  const [activeImage, setActiveImage] = useState<string | undefined>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (images && images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  const swiperRef = useRef<SwiperRef>(null);

  const handleSlideChange = () => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const newIndex = swiper.activeIndex;
      setCurrentIndex(newIndex);
      setActiveImage(images && images[newIndex]);
    }
  };

  return (
    <SwiperWrapper>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        style={{ zIndex: 0 }}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <BigImage src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageButtons>
        {images?.map((image, index) => (
          <ImageButton
            key={image}
            $active={image === activeImage}
            onClick={() => {
              setActiveImage(image);
              setCurrentIndex(index);
              swiperRef.current?.swiper.slideTo(index);
            }}
          >
            <Image src={image} />
          </ImageButton>
        ))}
      </ImageButtons>
    </SwiperWrapper>
  );
}

interface ActiveProps {
  $active: boolean;
}

const SwiperWrapper = styled.div`
  --swiper-theme-color: black;
  --swiper-scrollbar-sides-offset: 10%;
  --swiper-scrollbar-size: 5px;

  span.swiper-notification {
    display: none;
  }
`;

const BigImage = styled.img`
  width: 360px;
  height: 250px;
  object-fit: contain;
  display: block;
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
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

  @media only screen and (max-width: 600px) {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
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
