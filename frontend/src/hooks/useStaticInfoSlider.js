import { useState, useEffect } from "react";

export default function useStaticInfoSlider() {
  const [slide, setSlide] = useState(1);

  const moveToSlide = (index) => {
    setSlide(index);
  };
  const nextSlide = () => {
    setSlide(slide + 1);
    if (slide === 3) {
      setSlide(1);
    }
  };
  const prevSlide = () => {
    setSlide(slide - 1);
    if (slide === 1) {
      setSlide(3);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalId);
  });
  return { prevSlide, nextSlide, moveToSlide, slide };
}
