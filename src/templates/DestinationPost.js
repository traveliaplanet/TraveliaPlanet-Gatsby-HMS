import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

// Components
import Seo from 'components/SEO';
import Layout from 'components/Layout';
import AboutDestination from 'components/AboutDestination';
import Benefits from 'components/Benefits';

function DestinationPost({ data }) {
  const { Heading, Duration, Location, Price, Rating, shortDescription, Thumbnail } =
    data.strapiDestination;
  return (
    <Layout>
      <div className="relative flex items-center justify-center ">
        <GatsbyImage
          image={Thumbnail.localFile.childImageSharp.gatsbyImageData}
          alt={Heading}
          className="h-96 w-full"
        />
        <h2 className="absolute m-auto text-center text-7xl font-bold text-white">{Heading}</h2>
      </div>
      <AboutDestination
        shortDescription={shortDescription}
        Duration={Duration}
        Price={Price}
        Location={Location}
        Heading={Heading}
        Rating={Rating}
      />
      <Benefits />
    </Layout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    strapiDestination(slug: { eq: $slug }) {
      Duration
      Heading
      Location
      Price
      Rating
      shortDescription
      Thumbnail {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export function Head({ data }) {
  Head.propTypes = {
    data: PropTypes.object
  };
  return (
    <Seo title={data.strapiDestination.Heading}>
      <meta
        property="og:image"
        content={`https://traveliaplanet.com${
          data.strapiDestination?.Thumbnail?.localFile?.publicURL ||
          '/static/home-210451c84a308ebfd6aacb3623c135ed.jpg'
        }`}
      />
    </Seo>
  );
}

DestinationPost.propTypes = {
  data: PropTypes.object,
  Thumbnail: PropTypes.object,
  Heading: PropTypes.string,
  shortDescription: PropTypes.string,
  Duration: PropTypes.number,
  Price: PropTypes.number
};

export default DestinationPost;
