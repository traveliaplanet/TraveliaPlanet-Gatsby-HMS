import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { AiFillStar, AiOutlineDollar, AiOutlineClockCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

// Components
import { PrimaryButton } from './index';

function SliderCard({ heading, shortDescription, rating, location, price, image, slug, duration }) {
  return (
    <article className="w-[350px] pr-4">
      <GatsbyImage image={image} className="rounded  rounded-tl-[50px]" />
      <div className="grid h-[350px] place-content-between place-items-stretch border-2 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-700">{heading}</h2>
          <div className="flex">
            <AiFillStar className="fill-current text-3xl text-yellow-500" />
            <p className="text-xl font-bold text-gray-700">{rating}</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <GoLocation className="rounded-full bg-gray-700 p-1.5 text-3xl text-white" />
            <p className="m-1 font-bold text-gray-800">{location}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineDollar className="rounded-full bg-gray-700 p-1.5 text-3xl text-white" />
            <p className="ml-2 font-bold text-gray-800">PKR {price}</p>
          </div>
        </div>
        <p className="line-clamp-5">{shortDescription}</p>
        <div className="flex items-center pt-4 font-bold text-gray-600">
          <AiOutlineClockCircle className="mx-2 text-xl" />
          <p>{duration} Days Tour</p>
        </div>
      </div>

      <Link to={`/destinations/${slug}/`}>
        <PrimaryButton text="Book Now" className="rounded-none rounded-br-[50px]" />
      </Link>
    </article>
  );
}

SliderCard.propTypes = {
  heading: PropTypes.string,
  shortDescription: PropTypes.string,
  rating: PropTypes.number,
  location: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.object,
  slug: PropTypes.string,
  duration: PropTypes.number
};

export default SliderCard;
