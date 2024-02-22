import React from 'react';
import PropTypes from 'prop-types';

// Components
import SecondaryLink from './SecondaryLink';

function ServiceCard({ component, title, description, className, link }) {
  return (
    <div className="grid max-h-72 transform place-items-center gap-4 py-6 transition-transform duration-300 hover:scale-105 hover:cursor-pointer md:py-0 lg:place-content-between">
      <div className="grid place-content-start place-items-center gap-4">
        <div className={`rounded-full bg-gray-100 p-4 text-2xl text-indigo-600 ${className}`}>
          {component}
        </div>
        <h3>{title}</h3>
        <p className="overflow-hidden lg:h-24">{description}</p>
      </div>
      <SecondaryLink route={link} />
    </div>
  );
}

ServiceCard.propTypes = {
  component: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string
};

export default ServiceCard;
