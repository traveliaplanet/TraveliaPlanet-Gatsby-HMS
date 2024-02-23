import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

// components
import Seo from 'components/SEO';
import Layout from 'components/Layout';
import AllDestinations from 'components/AllDestinations';
import { Container } from 'components/UI';

function destinations({ data }) {
  const internationalDestinations = data.allDatoCmsDestination.nodes.filter(
    (i) => i.isinternational
  );
  const pakistanDestinations = data.allDatoCmsDestination.nodes.filter((i) => i.ispakistani);
  return (
    <Layout>
      <Container id="destinations">
        <div className="flex flex-col items-center justify-center pt-[110px] text-center">
          <div className="lg:w-1/2">
            <h2 className="mb-4">All Destinations</h2>
            <h1 className="mb-4">
              Explore the <span className="text-indigo-600">beauty of Pakistan</span> with us.
            </h1>
            <h4>
            Choose Travelia Planet for an unparalleled adventure in Northern Pakistan, where every moment is crafted to perfection. Whether you're seeking thrilling landscapes, cultural richness, or adventure rides, Travelia Planet is your key to unlocking the treasures of this captivating region. Let your journey begin with us!
            </h4>
          </div>
        </div>
        <article>
          <AllDestinations heading="Pakistan Tours" destinations={pakistanDestinations} />
        </article>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="md:w-1/2">
            <h1 className="mb-4">
              Explore the <span className="text-indigo-600">World</span> with us.
            </h1>
            <h4 className="">
            Our experienced team at Travelia Planet understands that every traveler is unique. That's why we offer customizable itineraries, ensuring your journey reflects your preferences and interests. Whether you're an adventure seeker, a culture enthusiast, or a nature lover, our tours cater to all.
            </h4>
          </div>
        </div>
        <article>
          <AllDestinations heading="International Tours" destinations={internationalDestinations} />
        </article>
      </Container>
    </Layout>
  );
}
export const query = graphql`
  query {
    allDatoCmsDestination {
      nodes {
        duration
        heading
        isinternational
        ispakistani
        ispopular
        istrending
        location
        rating
        price
        shortdescription
        slug
        thumbnail {
          gatsbyImageData(height: 300, width: 400)
        }
      }
    }
  }
`;
export function Head() {
  return (
    <Seo title="Destinations">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
    </Seo>
  );
}
destinations.propTypes = {
  data: PropTypes.object
};
export default destinations;
