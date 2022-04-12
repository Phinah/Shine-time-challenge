import React from 'react';
import Avatar from '../components/Avatar';

export default function Footer() {
  return (
    <div className="px-4 md:px-14 py-10 md:py-20 w-full bottom-0 bg-bgfooter">
      <div className="grid grid-cols-3 gap-12 md:gap-0">
        <div className="flex flex-col ml-2 md:ml-14 pb-5 font-bold">
          <p className="text-sm md:text-2xl pb-4 font-bold text-footer">
            Contact Details
          </p>
          <p className="text-white text-xs md:text-base">5557 483961</p>
          <p className="text-white text-xs md:text-base">05557 345098</p>
          <a className="text-white text-xs md:text-base underline cursor-pointer">
            hello@shinetimebanbury.co.uk
          </a>
        </div>
        <div className="flex flex-col items-center ml-2 md:ml-14 pb-5">
          <p className="text-sm md:text-2xl pb-4 font-bold text-footer">
            Find us on
          </p>
          <Avatar
            src={'/img/white-fb-btn.svg'}
            alt=""
            size={'55'}
            className="hidden md:block"
          />
          <Avatar
            src={'/img/white-fb-btn.svg'}
            alt=""
            size={'24'}
            className="block md:hidden"
          />
        </div>
        <div className="flex flex-col font-bold ml-2 md:ml-14 pb-5">
          <p className="text-sm md:text-2xl pb-4 text-footer">Useful Links</p>
          <a className="cursor-pointer text-white text-xs md:text-base">
            COVID-19
          </a>
          <a className="cursor-pointer text-white text-xs md:text-base">
            Partner 1
          </a>
          <a className="cursor-pointer text-white text-xs md:text-base">
            Partner 2
          </a>
          <a className="cursor-pointer text-white text-xs md:text-base">
            Top Tips
          </a>
        </div>
      </div>
      <h1 className="text-center pt-16 text-footer font-bold">
        © Shinetime Banbury | 2022
      </h1>
    </div>
  );
}
