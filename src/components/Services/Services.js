import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Container, ServiceCard } from '../UI';

// hooks
import { ServiceLinks } from '../../hooks';

function Services({ heading, subHeading, showValues }) {
  return (
    <Container id="services" className="grid place-items-center gap-4 text-center">
      {subHeading && <h2>{subHeading}</h2>}
      {heading && <h1>{heading}</h1>}
      {showValues && (
        <ul className="grid list-decimal grid-cols-2 gap-x-4 gap-y-2 rounded-md border-2 text-base font-medium text-gray-600 transition-transform duration-300 hover:scale-105 hover:border-indigo-600  md:grid-cols-4">
          <li>Aim for positivity</li>
          <li> Integrity </li>
          <li>Do what is right</li>
          <li>Quality; it always wins</li>
          <li>Encourage growth</li>
          <li>Lead by example</li>
          <li>Value every relationship</li>
          <li>Take pride in what you do</li>
          <li>Back yourself</li>
          <li>Be approachable</li>
          <li>Community is key</li>
          <li>Teamwork</li>
        </ul>
      )}

      <div className="grid place-content-center place-items-center md:grid-cols-2 lg:grid-cols-4">
        {ServiceLinks.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            component={service.component}
            link={service.url}
          />
        ))}
      </div>
    </Container>
  );
}

Services.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  showValues: PropTypes.bool
};

export default Services;
