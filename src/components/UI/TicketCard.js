import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'gatsby';

// Components
import { Container } from './index';

function TicketCard({ origin, destination, departure, description }) {
  return (
    <Container>
      <div className="grid rounded-md border-2 p-4">
        <p>
          Origin: <span className="font-normal">{origin}</span>
        </p>
        <p>
          Destination: <span className="font-normal">{destination}</span>
        </p>
        <p>
          Date: <span className="font-normal">{departure}</span>
        </p>
        <p className="font-normal">{description}</p>
        <div>BUTTON WILL BE HERE</div>
      </div>
    </Container>
  );
}

TicketCard.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string
};

export default TicketCard;
