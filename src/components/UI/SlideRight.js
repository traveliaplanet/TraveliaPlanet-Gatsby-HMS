import React from 'react';
import PropTypes from 'prop-types';
import { AiFillRightCircle } from 'react-icons/ai';

function SlideRight({ className, onClick }) {
  return (
    <AiFillRightCircle
      onClick={onClick}
      className={`text-5xl text-indigo-600 hover:text-indigo-500 ${className}`}
    />
  );
}

SlideRight.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default SlideRight;
