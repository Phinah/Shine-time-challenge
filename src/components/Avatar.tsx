import React from 'react';

export interface IAvatar {
  src: string;
  alt: string;
  size?: string;
  className?: string;
  round?: boolean;
}

export default function Avatar({
  src,
  alt,
  size = '56',
  className,
  round = false,
}: IAvatar) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className={`${
          round ? 'rounded-full' : 'rounded-none'
        } box-content object-contain ${className}`}
        style={{ height: size + 'px', width: size + 'px' }}
      />
    </div>
  );
}

