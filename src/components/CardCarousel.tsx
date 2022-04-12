import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ICard } from '../types';
import Card from './Card';

interface ICardCarousel {
  cards: ICard[];
}

export default function CardCarousel({ cards }: ICardCarousel) {
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
    count = (count + 1) % cards.length;
    setCurrentIndex(count);
    slideRef.current?.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const productsLength = cards.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current?.classList.add('fade-anim');
  };

  return (
    <div ref={slideRef} className="px-12 md:px-0 w-full select-none relative">
      <Card
        name={cards[currentIndex].name}
        location={cards[currentIndex].location}
        content={cards[currentIndex].content}
      />

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
