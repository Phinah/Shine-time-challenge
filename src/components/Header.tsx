import React, { useRef } from 'react';
import Avatar from './Avatar';

export default function Header() {
  return (
    <div className="py-28 bg-sudsy-image md:bg-iron-image bg-cover bg-no-repeat md:h-[50vw] md:max-h-[50vw]">
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex flex-col items-center -mt-10 md:items-end md:mt-16 md:mr-96">
          <div className="flex md:flex-col gap-1 md:gap-3 mb-4 md:mb-12">
            <h2 className="font-cursive text-white text-2xl md:text-7xl">
              Looking for the
            </h2>
            <br />
            <h2 className="font-cursive text-white text-2xl md:text-7xl text-center">
              time to Shine?
            </h2>
          </div>

          <div className="block md:flex md:gap-8 md:items-center">
            <button className="bg-white text-xs md:text-2xl text-main font-bold rounded-md py-3 px-9">
              contact us
            </button>
            <div className="hidden md:block">
              <Avatar src={'/img/white-fb-btn.svg'} alt="" size={'55'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}