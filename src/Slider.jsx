import React, { useCallback, useEffect, useRef, useState } from 'react';
const images = import.meta.glob('/src/assets/**/*.png', {
  eager: true,
  import: 'default',
});
import { SliderContent } from './content';

const Slider = ({ children }) => {
  const imageRef = useRef();
  const [imageList, setImageList] = useState(Object.values(images));
  const [width, setWidth] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  //next button on the slider
  const nextBtn = useCallback(() => {
    if (transitioning || !imageRef.current) return;
    setTransitioning(true);
    imageRef.current.style.transform = `translateX(-${width}px)`;
    imageRef.current.style.transition = 'transform 0.3s linear';
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
    setTimeout(() => {
      imageRef.current.style.transform = `translateX(0)`;
      imageRef.current.style.transition = 'none';
      setImageList((prev) => [...prev.slice(1), prev[0]]);
      setTransitioning(false);
    }, 400);
  }, [transitioning, width, imageList]);
  //code for the prev btm
  const prevBtn = useCallback(() => {
    if (transitioning || !imageRef.current) return;
    setTransitioning(true);
    setImageList((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    requestAnimationFrame(() => {
      imageRef.current.style.transform = `translateX(-${width}px)`;
      imageRef.current.style.transition = 'none';
      requestAnimationFrame(() => {
        imageRef.current.style.transform = `translateX(0)`;
        imageRef.current.style.transition = 'transform 0.3s linear';
        setCurrentIndex(
          (prev) => (prev - 1 + imageList.length) % imageList.length,
        );
      });
    });

    setTimeout(() => {
      setTransitioning(false);
    }, 400);
  }, [transitioning, width, imageList]);
  //auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      nextBtn();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [nextBtn]);
  return (
    <SliderContent.Provider
      value={{ imageList, setWidth, nextBtn, prevBtn, imageRef, currentIndex }}
    >
      {children}
    </SliderContent.Provider>
  );
};

export default Slider;
