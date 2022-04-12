import { data } from 'autoprefixer';
import React, { useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';

export default function Carousel({
  carouseImages,
}: {
  carouseImages: string[];
}) {
  let count = 0;
  let slideInterval: number;
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    slideRef.current?.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current?.addEventListener('animationend', removeAnimation);
    slideRef.current?.addEventListener('mouseenter', pauseSlider);
    slideRef.current?.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    //eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 2000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % carouseImages.length;
    setCurrentIndex(count);
    slideRef.current?.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const productsLength = carouseImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add('fade-anim');
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      {/* <div className="aspect-w-16 aspect-h-9"> */}
      <img
        src={carouseImages[currentIndex]}
        alt=""
        className="object-cover w-full md:max-h-[38vw]"
      />
      {/* </div> */}

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          {/* <AiOutlineVerticalRight size={30} /> */}
        </button>
        <button
          className="rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          {/* <AiOutlineVerticalLeft size={30} /> */}
        </button>
      </div>
    </div>
  );
}
