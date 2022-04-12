import { RefObject } from 'react';
export const scrollDown = (ref: RefObject<HTMLDivElement>) => {
  window.scrollTo({
    top: ref.current?.offsetTop,
    behavior: 'smooth',
  });
};
