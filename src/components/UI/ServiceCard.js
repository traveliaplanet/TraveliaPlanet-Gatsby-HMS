import React from "react";
import PropTypes from "prop-types";

// Components
import SecondaryLink from "./SecondaryLink";

function ServiceCard({ component, title, description, className, link }) {
  return (
    <div className="grid h-96 transform place-items-center p-6 transition-transform duration-300 hover:scale-105 hover:cursor-pointer lg:w-1/4">
      <div
        className={`mb-4 rounded-full bg-gray-100 p-4 text-2xl  text-indigo-600 ${className}`}
      >
        {component}
      </div>
      <h3 className="mb-4 text-xl font-bold text-gray-700">{title}</h3>
      <p className="mb-4 text-center font-semibold text-gray-600">
        {description}
      </p>
      <SecondaryLink route={link} />
    </div>
  );
}

ServiceCard.propTypes = {
  component: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
};

export default ServiceCard;
