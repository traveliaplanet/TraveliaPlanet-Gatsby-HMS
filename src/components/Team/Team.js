import PropTypes from "prop-types";
import React from "react";

// Components
import { Container, TeamCard } from "../UI";

// hooks
import { TeamData } from "../../hooks";

function Team({ heading, subHeading }) {
  return (
    <Container className="grid place-items-center py-16">
      <h3 className="mb-4 text-center text-2xl font-semibold text-indigo-600">
        {subHeading}
      </h3>
      <h2 className="mb-4 text-center text-4xl font-extrabold text-gray-700 md:text-left md:text-5xl">
        {heading}
      </h2>
      <p className="py-8 text-lg font-medium text-gray-500 opacity-80 md:w-1/2 md:text-center ">
        Travelia Planet has a team of professionals who are extremely determined
        to provide a different vision for travelling to all clients so that they
        may experience the best and then return satisfied with our service.
        Travelia Planet management philosophy is based on the simple concept of
        delivering the highest quality customer services at the best possible
        price.
      </p>

      <div className="items-center justify-center lg:flex">
        {TeamData.map((team, index) => (
          <TeamCard
            key={index}
            image={team.image}
            title={team.title}
            name={team.name}
            className={`${TeamData.length - 1 === index ? "" : "mr-7"} `}
          />
        ))}
      </div>
    </Container>
  );
}

Team.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Team;
