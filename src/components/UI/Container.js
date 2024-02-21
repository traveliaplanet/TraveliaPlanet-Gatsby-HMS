import propTypes from "prop-types";
import React from "react";

function Container({ children, className }) {
  return (
    <div
      className={`"max-w-[1480px] lg:px-16" mx-auto px-6 md:px-6 ${className}`}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: "",
};

Container.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
};

export default Container;
