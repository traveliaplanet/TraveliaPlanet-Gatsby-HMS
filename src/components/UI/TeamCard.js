import PropTypes from "prop-types";
import React from "react";

function TeamCard({ image, title, name, className }) {
  return (
    <div className="grid transform place-items-center gap-4 p-6 transition-transform duration-300 hover:scale-105 hover:cursor-pointer lg:w-1/4">
      <div className={`${className}`}>
        <img
          src={image}
          placeholder="blurred"
          alt="Travelia Team"
          className="h-80 w-60 rounded-lg object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-md mb-1 font-bold uppercase text-indigo-600">
          {title}
        </h3>
        <p className="text-center text-xl font-semibold text-gray-600">
          {name}
        </p>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default TeamCard;
