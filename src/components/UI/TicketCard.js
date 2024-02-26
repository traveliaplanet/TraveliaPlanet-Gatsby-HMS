import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'gatsby';
// 3rd party Components
import { FaPlaneDeparture, FaPlaneArrival  } from "react-icons/fa";

// Components
import { WhatsappButton } from './index';

function TicketCard({ origin, destination, departure, description }) {
  return (
      <div className="grid w-full gap-4 rounded-md border-2 p-4">
        <div className='flex gap-8 w-full items-center justify-between'>
        <h2 className='flex gap-2 items-center justify-between'>
        <FaPlaneDeparture />  Origin: <span className="font-normal text-gray-600">{origin}</span>
        </h2>
        <h2 className='flex gap-2 items-center justify-between'>
        <FaPlaneArrival />  Destination: <span className="font-normal">{destination}</span>
        </h2>
        <h2 className='w-full'>
          Date: <span className="font-normal text-lg text-gray-600">{departure}</span>
        </h2>
        <WhatsappButton className='py-2' text="Whatsapp Us" />
        </div>
        <h4 className="font-normal text-gray-600">{description}</h4>
      </div>
  );
}

TicketCard.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string
};

export default TicketCard;
