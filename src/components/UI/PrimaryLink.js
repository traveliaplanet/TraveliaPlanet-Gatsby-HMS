import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

function PrimaryLink({ route, name, className, component, target }) {
  return (
    <Link
      to={route}
      target={target}
      className={`border-indigo-600 text-lg font-semibold leading-10 tracking-wide transition duration-300 hover:border-b-2 hover:text-indigo-600 ${className}`}
      activeClassName="text-indigo-600"
    >
      {name}
      {component}
    </Link>
  );
}

export default PrimaryLink;

PrimaryLink.propTypes = {
  route: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  component: PropTypes.object,
};
