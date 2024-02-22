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
      <section className='pt-[110px]'>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="md:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold text-indigo-600">All Destinations</h3>
            <h2 className="mb-8 text-4xl font-extrabold text-gray-700 md:text-5xl">
              Explore the <span className="text-indigo-600">beauty of Pakistan</span> with us.
            </h2>
            <p className="font-medium text-gray-500 md:text-xl">
              Travelia Planet is one of the pioneer travel companies in Pakistan which holds a valid
              license from Securities and Exchange Commission of Pakistan (SECP) Under
              Identification number 0205944
            </p>
          </div>
        </div>
        <article>
          <AllDestinations heading="Pakistan Tours" destinations={pakistanDestinations} />
        </article>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="md:w-1/2">
            <h2 className="mb-8 text-4xl font-extrabold text-gray-700 md:text-5xl">
              Explore the <span className="text-indigo-600">World</span> with us.
            </h2>
            <p className="font-medium text-gray-500 md:text-xl">
              Travelia Planet is one of the pioneer travel companies in Pakistan which holds a valid
              license from Securities and Exchange Commission of Pakistan (SECP) Under
              Identification number 0205944
            </p>
          </div>
        </div>
        <article>
          <AllDestinations heading="International Tours" destinations={internationalDestinations} />
        </article>
      </section>
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
