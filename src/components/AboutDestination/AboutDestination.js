import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { AiFillStar, AiOutlineDollar, AiOutlineClockCircle } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

// Components
import { Container, PrimaryButton } from 'components/UI';

function AboutDestination({
  tourPlan,
  Location,
  Duration,
  Price,
  Heading,
  shortDescription,
  Rating,
  Departure
}) {
  return (
    <Container>
      <div className="mb-4 grid place-content-center place-items-start gap-12 md:mb-8 md:grid-cols-3 ">
        <dl className="w-full rounded-md bg-indigo-600 p-4 text-white">
          <dt className="font-semibold">Location</dt>
          <dd className="mb-1 flex items-center text-lg font-normal">
            <GoLocation className="mr-1" />
            {Location}
          </dd>
          <dt className="font-semibold">Duration</dt>
          <dd className="mb-1 flex items-center text-lg font-normal">
            <AiOutlineClockCircle className="mr-1" /> {Duration} Days {Duration - 1} Nights
          </dd>
          <dt className=" font-semibold">Price</dt>
          <dd className="mb-1 flex items-center text-lg font-normal">
            <AiOutlineDollar className="mr-1" />
            PKR {Price}
          </dd>
          <dt className="font-semibold">Rating</dt>
          <dd className="mb-1 flex items-center text-lg font-normal">
            <AiFillStar className="mr-1" />
            {Rating}
          </dd>
          <dt className="font-semibold">Departure From</dt>
          <dd className="flex items-center text-lg font-normal">
            <GoLocation className="mr-1" />
            {Departure}
          </dd>
        </dl>
        <div className="grid place-content-center place-items-start gap-4 md:col-span-2">
          <h2>About place</h2>
          <h1>Explore {Heading} with us</h1>
          <h4 className="mb-8">{shortDescription}</h4>
        </div>
      </div>
      <div className="grid gap-4">
        <h2>Tour Plan</h2>
        <pre className="mb-10 w-full whitespace-pre text-pretty text-start font-medium text-gray-500 md:text-lg">
          {tourPlan}
        </pre>
        <Link to="/contact/">
          <PrimaryButton text="Book Now" className="md:w-52" />
        </Link>
      </div>
    </Container>
  );
}

AboutDestination.propTypes = {
  Duration: PropTypes.number,
  Location: PropTypes.string,
  shortDescription: PropTypes.string,
  tourPlan: PropTypes.string,
  Heading: PropTypes.string,
  Departure: PropTypes.string,
  Rating: PropTypes.number,
  Price: PropTypes.number
};

export default AboutDestination;
