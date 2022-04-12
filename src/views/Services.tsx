import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import CardCarousel from '../components/CardCarousel';
import Carousel from '../components/Carousel';
import ROUTES from '../routes';
import { ISection } from '../types';

export default function Services({ section }: ISection) {
  const services = [
    {
      img: '/img/services/weekly-img.svg',
      name: 'Regular Weekly & fortnightly Cleans',
    },
    {
      img: '/img/services/tenancy-img.svg',
      name: 'End of Tenancy',
    },
    {
      img: '/img/services/spring-clean-img.svg',
      name: 'Spring/Deep Cleans',
    },
    {
      img: '/img/services/air-bnb-img.svg',
      name: 'AirBnB Preparation',
    },
    {
      img: '/img/services/declutter-img.svg',
      name: 'Decluttering & Organisation',
    },
    {
      img: '/img/services/one-off-img.svg',
      name: 'One-off tasks',
    },
  ];

  const reviews = [
    {
      name: 'John Smith',
      location: 'Banbury',
      content:
        '“We had an amazing experience from start to finish. Many thanks to Shine Time for a brilliant job!”',
    },
    {
      name: 'Mary Williams',
      location: 'Chipping Norton',
      content: '“Polite and pleasent - we loved them.”',
    },
    {
      name: 'Clive Storey',
      location: 'Warmington',
      content:
        '“Wouldn’t hesitate to recommend Shine Time to anyone looking for a cleaner.”',
    },
  ];

  const images = [
    '/img/services/carousel/lady-clean-img.svg',
    '/img/services/carousel/crop-woman-dusting-lamp-during-housework.svg',
    '/img/services/carousel/pair-of-white-sneakers-beside-vacuum-cleaner.svg',
  ];

  return (
    <>
      <div ref={section}>
        <div className="flex flex-col px-5 py-6 md:px-44 md:py-16 bg-primary">
          <h2
            className={`text-5xl font-normal underline capitalize font-cursive text-white text-center pt-2 pb-12`}
          >
            Services
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
            {services.map((srv, i) => (
              <div
                className="flex flex-col items-center justify-evenly space-y-2"
                key={i}
              >
                <Avatar src={srv.img} alt="" />
                <h2 className="text-white text-center font-bold">{srv.name}</h2>
              </div>
            ))}
          </div>
          <div className="pt-8 flex justify-center items-center">
            <button className="bg-white text-xs md:text-xl text-main rounded-md py-2 px-3">
              <Link to={ROUTES.CONTACT}>contact us</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col px-5 py-6 md:px-48 md:py-16">
          <h2
            className={`hidden md:block text-5xl font-normal underline capitalize font-cursive text-red-title text-center py-5`}
          >
            Reviews
          </h2>

          <h2
            className={`block md:hidden text-2xl font-normal underline font-cursive text-red-title text-center py-5`}
          >
            What our clients say
          </h2>

          <div className="md:grid md:grid-cols-3 hidden md:space-x-12">
            {reviews.map((rev, i) => (
              <Card
                key={i}
                name={rev.name}
                location={rev.location}
                content={rev.content}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:hidden space-y-8">
          <CardCarousel cards={reviews} />
        </div>
        <div className="py-6 md:py-16">
          <Carousel carouseImages={images} />
        </div>
      </div>
    </>
  );
}
