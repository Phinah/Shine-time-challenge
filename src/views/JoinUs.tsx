import { Link } from 'react-router-dom';
import ROUTES from '../routes';
import { ISection } from '../types';

export default function JoinUs({ section }: ISection) {
  return (
    <>
      <div
        className="py-24 bg-join-us-image md:h-[40vw] md:max-h-[40vw]"
        ref={section}
      >
        <div className="container mx-auto px-2 md:px-96">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-cursive underline text-red text-2xl md:text-5xl">
              Join us
            </h2>
            <h2 className="text-sm md:text-2xl text-center text-secondary pt-5 md:pt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              nunc volutpat tincidunt urna.
            </h2>
            <div className="pt-6 md:pt-16 flex justify-center items-center">
              <button className="bg-main text-xs md:text-xl text-white font-bold rounded-md py-2 px-3">
                contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
