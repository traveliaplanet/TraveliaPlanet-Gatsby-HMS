import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { AiFillStar, AiOutlineDollar, AiOutlineClockCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

// Components
import { Container, PrimaryButton } from 'components/UI';

function AboutDestination({ Location, Duration, Price, Heading, shortDescription, Rating }) {
  return (
    <Container className="py-16">
      <div className="items-center justify-center md:flex md:p-16">
        <div className="grid place-items-center rounded-lg bg-indigo-600 p-6 text-white md:mr-16 md:w-1/2 md:place-items-start md:text-2xl">
          <dl>
            <dt className="font-semibold">Location</dt>
            <dd className="mb-2 flex items-center text-lg font-normal">
              <GoLocation className="mr-2" />
              {Location}
            </dd>
            {/* <dt className="font-semibold">Departure From</dt>
            <dd className="mb-2 flex items-center text-lg font-normal">
              <GoLocation />
              Thokar Niaz Baig, Lahore
            </dd> */}
            <dt className="font-semibold">Duration</dt>
            <dd className="mb-2 flex items-center text-lg font-normal">
              <AiOutlineClockCircle className="mr-2" /> {Duration} Days {Duration - 1} Nights
            </dd>
            <dt className=" font-semibold">Price</dt>
            <dd className="mb-2 flex items-center text-lg font-normal">
              <AiOutlineDollar className="mr-2" />
              PKR {Price}
            </dd>
            <dt className="font-semibold">Rating</dt>
            <dd className="mb-2 flex items-center text-lg font-normal">
              <AiFillStar className="mr-2" />
              {Rating}
            </dd>
          </dl>
        </div>
        <div className="my-16 text-center md:my-0 md:grid md:text-left">
          <h3 className="mb-4 text-lg font-semibold text-indigo-600">About place</h3>
          <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
            Explore {Heading} with us
          </h2>
          <p className="mb-10 font-medium text-gray-500 md:text-xl">{shortDescription}</p>
          <Link to="/contact/">
            <PrimaryButton text="Book Now" className="md:w-1/3" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

AboutDestination.propTypes = {
  Duration: PropTypes.number,
  Location: PropTypes.string,
  shortDescription: PropTypes.string,
  Heading: PropTypes.string,
  Rating: PropTypes.number,
  Price: PropTypes.number
};

export default AboutDestination;
