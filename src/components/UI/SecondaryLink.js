import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function SecondaryLink({ route, className }) {
  return (
    <Link
      to={route}
      className={`flex items-center text-lg font-semibold tracking-wider text-indigo-600 ${className}`}
      activeClassName="text-indigo-600"
    >
      Learn More <HiOutlineArrowNarrowRight className="ml-2" />
    </Link>
  );
}

export default SecondaryLink;

SecondaryLink.propTypes = {
  route: PropTypes.string,
  className: PropTypes.string
};
