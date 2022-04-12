import React from 'react';
import { ICard } from '../types';

export default function Card({ name, location, content }: ICard) {
  return (
    <div
      className={`bg-card-color shadow-card py-6 px-4 rounded-md`}
      role="presentation"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-main text-xl font-black">{name}</h2>
        <h2 className="text-sm font-black">{location}</h2>

        <p className="italic text-lg pt-9 pb-11">{content}</p>
      </div>
    </div>
  );
}
