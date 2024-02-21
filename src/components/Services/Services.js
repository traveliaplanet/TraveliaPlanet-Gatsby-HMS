import PropTypes from "prop-types";
import React from "react";

// Components
import { Container, ServiceCard } from "../UI";

// hooks
import { ServiceLinks } from "../../hooks";

function Services({ heading, subHeading, showValues }) {
  return (
    <Container className="grid place-items-center py-16">
      <section id="#services" className="text-center">
        <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
          {subHeading}
        </h3>
        <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-700 md:text-5xl">
          {heading}
        </h2>
        {showValues && (
          <ul className="text-md mb-8 grid list-decimal grid-cols-2 gap-x-4 gap-y-2 rounded-md border-2 p-8 font-medium text-gray-600 transition-transform duration-300 hover:scale-105 hover:border-indigo-600  md:grid-cols-4">
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

        <div className="items-center justify-center lg:flex">
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
      </section>
    </Container>
  );
}

Services.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  showValues: PropTypes.bool,
};

export default Services;
