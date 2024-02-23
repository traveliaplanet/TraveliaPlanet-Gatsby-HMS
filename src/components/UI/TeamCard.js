import PropTypes from 'prop-types';
import React from 'react';

function TeamCard({ image, title, name, className }) {
  return (
    <div className="grid transform place-items-center gap-4 p-6 transition-transform duration-300 hover:scale-105 hover:cursor-pointer md:h-[450px] md:p-2">
      <div className={`${className}`}>
        <img
          src={image}
          placeholder="blurred"
          alt="Travelia Team"
          className="h-80 w-60 rounded-md object-cover"
        />
      </div>
      <div className="text-center">
        <h2>{title}</h2>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string
};

export default TeamCard;
