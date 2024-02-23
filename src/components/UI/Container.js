import propTypes from 'prop-types';
import React from 'react';

function Container({ children, className, id }) {
  return (
    <section id={`#${id}`} className={`"max-w-[1480px] mx-auto p-4 md:p-8 lg:p-16 ${className}`}>
      {children}
    </section>
  );
}

Container.defaultProps = {
  className: ''
};

Container.propTypes = {
  children: propTypes.node,
  id: propTypes.string,
  className: propTypes.string
};

export default Container;
