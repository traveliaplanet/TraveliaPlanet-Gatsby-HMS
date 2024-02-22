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
    <Container id='offers' className="md:gap-24 gap-4 grid md:grid-cols-2">
        {imgLeft && (
          <img
            className="w-full rounded-md object-cover md:h-[600px]"
            src={image}
            placeholder="blurred"
            alt="What we Offer"
          />
        )}
        <div className="md:grid place-items-start place-content-start md:text-left">
          <div>
            {subHeading && (
              <h2 className="mb-4">{subHeading}</h2>
            )}
            <h1 className="mb-4">
              {heading}
            </h1>
            <h4 className="mb-4 ">{description}</h4>
          </div>
          <div>
            {showLinks && (
              <ul className="grid grid-cols-2 gap-4 text-lg font-bold text-indigo-600">
                <li>Tour Guide</li>
                <li>Luxury Transport</li>
                <li>All Facilities regarding the stay</li>
                <li>Sightseeing Places Visit</li>
              </ul>
            )}
            {showButton && (
              <Link to={`/${link}`}>
                <PrimaryButton text={buttonText}/>
              </Link>
            )}
          </div>
        </div>
        {imgRight && (
          <img
            className="w-full rounded-md object-cover md:h-[600px]"
            src={image}
            placeholder="blurred"
            alt="What we Offer"
          />
        )}
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
