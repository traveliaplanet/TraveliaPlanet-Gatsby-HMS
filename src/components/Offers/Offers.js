import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Container, PrimaryButton } from '../UI';

function Offers({
  image,
  imgLeft,
  imgRight,
  showLinks,
  showButton,
  heading,
  subHeading,
  description,
  buttonText,
  link
}) {
  return (
    <Container>
      <section id="#offers" className="gap-24 py-16 md:grid md:grid-cols-2">
        {imgLeft && (
          <img
            className="mb-10 w-full rounded-md object-cover md:h-[600px]"
            src={image}
            placeholder="blurred"
            alt="What we Offer"
          />
        )}
        <div className="text-center md:grid md:text-left">
          <div>
            {subHeading && (
              <h3 className="mb-4 text-2xl font-semibold text-indigo-600">{subHeading}</h3>
            )}
            <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
              {heading}
            </h2>
            <p className="mb-10 font-medium text-gray-500 md:mb-0 md:text-xl">{description}</p>
          </div>
          <div>
            {showLinks && (
              <ul className="grid grid-cols-2 gap-y-4 gap-x-4 text-lg font-bold text-indigo-600 md:gap-y-10 md:text-xl">
                <li>Tour Guide</li>
                <li>Luxury Transport</li>
                <li>All Facilities regarding the stay</li>
                <li>Sightseeing Places Visit</li>
              </ul>
            )}
            {showButton && (
              <Link to={`/${link}`}>
                <PrimaryButton text={buttonText} className="" />
              </Link>
            )}
          </div>
        </div>
        {imgRight && (
          <img
            className="mb-10 w-full rounded-md object-cover md:h-[600px]"
            src={image}
            placeholder="blurred"
            alt="What we Offer"
          />
        )}
      </section>
    </Container>
  );
}

Offers.propTypes = {
  image: PropTypes.object,
  imgLeft: PropTypes.bool,
  imgRight: PropTypes.bool,
  showLinks: PropTypes.bool,
  showButton: PropTypes.bool,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.string
};

export default Offers;
