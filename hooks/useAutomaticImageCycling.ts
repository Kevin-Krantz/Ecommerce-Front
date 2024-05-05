import { useState, useEffect } from "react";

export function useAutomaticImageCycling(images: string[], interval: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycleImages = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      setIndex(nextIndex);
    }, interval);

    return () => clearInterval(cycleImages);
  }, [images.length, interval, index]);

  index === 0 ? (interval = 0) : 1000;

  return { currentImage: images[index], index };
}
