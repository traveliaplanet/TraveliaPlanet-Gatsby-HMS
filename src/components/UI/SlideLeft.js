import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLeftCircle } from 'react-icons/ai';

function SlideLeft({ className, onClick }) {
  return (
    <AiFillLeftCircle
      onClick={onClick}
      className={`text-5xl text-indigo-600 hover:text-indigo-500 ${className}`}
    />
  );
}

SlideLeft.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default SlideLeft;
