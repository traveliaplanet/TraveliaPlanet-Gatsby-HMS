import React from "react";
import PropTypes from "prop-types";

function BenefitsCard({ component, title, className }) {
  return (
    <div className="grid place-items-center transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
      <div
        className={`mb-4 rounded-full bg-gray-100 p-2 text-xl text-indigo-600  md:text-3xl ${className}`}
      >
        {component}
      </div>
      <h3 className="mb-4 text-xs font-bold text-gray-700 md:text-xl">
        {title}
      </h3>
    </div>
  );
}

BenefitsCard.propTypes = {
  component: PropTypes.object,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default BenefitsCard;
