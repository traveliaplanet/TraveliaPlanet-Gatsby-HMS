import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Container } from './index';
import { Link } from 'gatsby';

function OfficeCard({ province, country, street, houseNo, city, email, phone }) {
  return (
    <Container className="max-w-[450px]">
      <div className="grid rounded-md border-2 p-4">
        <h2 className="mb-4 text-3xl">
          {province}, {country}
        </h2>
        <h3>{street}</h3>
        <h3>
          {houseNo}, {city}
        </h3>
        <div>
          <p>
            {' '}
            <Link
              className="hover:text-indigo-600"
              to="mailto:traveliaplanet@gmail.com"
              target="_blank"
            >
              {email}
            </Link>{' '}
          </p>
          <p className="hover:text-indigo-600">
            <Link to={`https://wa.me/${phone}`} target="_blank">
              {phone}
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

OfficeCard.propTypes = {
  country: PropTypes.string,
  province: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  houseNo: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number
};

export default OfficeCard;
