import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Container, TeamCard } from '../UI';

// hooks
import { TeamData } from '../../hooks';

function Team({ heading, subHeading }) {
  return (
    <Container id="our-team" className="grid place-items-center gap-4 text-center">
      <h2>{subHeading}</h2>
      <h1>{heading}</h1>
      <h4 className="text-left">
        Travelia Planet has a team of professionals who are extremely determined to provide a
        different vision for travelling to all clients so that they may experience the best and then
        return satisfied with our service. Travelia Planet management philosophy is based on the
        simple concept of delivering the highest quality customer services at the best possible
        price.
      </h4>

      <div className="grid place-content-center place-items-center md:grid-cols-2 lg:grid-cols-4">
        {TeamData.map((team, index) => (
          <TeamCard key={index} image={team.image} title={team.title} name={team.name} />
        ))}
      </div>
    </Container>
  );
}

Team.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
};

export default Team;
