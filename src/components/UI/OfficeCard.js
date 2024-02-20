import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Container } from './index';

function OfficeCard({ province, country, street, houseNo, city, email, phone }) {
  return (
    <Container className="mb-10 max-w-[400px]">
      <div className="rounded-md border-2 p-6">
        <h2 className="mb-3 text-2xl font-bold text-gray-700 md:text-3xl">
          {province}, {country}
        </h2>
        <div className="mb-4 text-lg font-semibold text-gray-500 md:text-base">
          <h3>{street}</h3>
          <h3>
            {houseNo}, {city}
          </h3>
        </div>
        <div className="mb-4 text-lg font-semibold text-gray-400 md:text-base">
          <p>{email}</p>
          <p>{phone}</p>
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
