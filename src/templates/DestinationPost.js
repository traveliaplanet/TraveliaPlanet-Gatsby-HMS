import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// Components
import Seo from 'components/SEO';
import Layout from 'components/Layout';
import AboutDestination from 'components/AboutDestination';
import Benefits from 'components/Benefits';

export const query = graphql`
  query ($slug: String!) {
    datoCmsDestination(slug: { eq: $slug }) {
      duration
      heading
      location
      price
      rating
      tourPlan
      shortdescription
      thumbnail {
        gatsbyImageData
      }
    }
  }
`;

function DestinationPost({ data }) {
  const datoCmsData = data.datoCmsDestination;
  return (
    <Layout>
      <div className="relative flex items-center justify-center ">
        <GatsbyImage
          image={datoCmsData.thumbnail?.gatsbyImageData}
          alt={datoCmsData.heading}
          className="h-96 w-full object-cover"
        />
        <h2 className="absolute m-auto text-center text-5xl font-bold text-white md:text-7xl">
          {datoCmsData.heading}
        </h2>
      </div>
      <AboutDestination
        shortDescription={datoCmsData.shortdescription}
        Duration={datoCmsData.duration}
        Price={datoCmsData.price}
        Location={datoCmsData.location}
        Heading={datoCmsData.heading}
        Rating={datoCmsData.rating}
        tourPlan={datoCmsData.tourPlan}
      />
      <Benefits />
    </Layout>
  );
}

export function Head({ data }) {
  Head.propTypes = {
    data: PropTypes.object
  };
  return (
    <Seo title={data.datoCmsDestination.heading}>
      <meta
        property="og:image"
        content={`https://traveliaplanet.com${
          data.strapiDestination?.url || '/static/home-210451c84a308ebfd6aacb3623c135ed.jpg'
        }`}
      />
    </Seo>
  );
}

DestinationPost.propTypes = {
  data: PropTypes.object,
  thumbnail: PropTypes.object,
  heading: PropTypes.string,
  shortdescription: PropTypes.string,
  duration: PropTypes.number,
  price: PropTypes.number
};

export default DestinationPost;
