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
    <article className="max-w-[450px] px-4">
      <GatsbyImage image={image} className="w-full rounded rounded-tl-[50px] object-cover" />
      <div className="grid h-[350px] place-content-between place-items-stretch border-2 p-4">
        <div className="flex items-center justify-between">
          <h2>{heading}</h2>
          <div className="flex">
            <AiFillStar className="mr-1 fill-current text-3xl text-yellow-500" />
            <p className="text-xl font-bold">{rating}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GoLocation className="rounded-full bg-gray-700 p-1.5 text-3xl text-white" />
            <p className="ml-1 font-bold">{location}</p>
          </div>
          <div className="flex items-center">
            <AiOutlineDollar className="rounded-full bg-gray-700 p-1.5 text-3xl text-white" />
            <p className="ml-1 font-bold">PKR {price}</p>
          </div>
        </div>
        <p className="line-clamp-5">{shortDescription}</p>
        <div className="flex items-center font-bold text-gray-600">
          <AiOutlineClockCircle className="mx-2 text-2xl" />
          <p>{duration} Days Tour</p>
        </div>
      </div>

      <Link to={`/destinations/${slug}/`}>
        <PrimaryButton
          text="Learn More"
          className="rounded-none rounded-bl-[4px] rounded-br-[50px]"
        />
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
