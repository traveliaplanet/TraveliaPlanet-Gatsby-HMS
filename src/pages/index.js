import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

// Components
import Seo from 'components/SEO';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Services from 'components/Services';
import AllDestinations from 'components/AllDestinations';
import TrendingTours from 'components/TrendingTours';
import Offers from 'components/Offers';
import Testimonials from 'components/Testimonials';
import Questions from 'components/Questions';

function IndexPage({ data }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.posthog) {
      window.posthog.capture('homepage_viewed', {
        url: window.location.href,
        title: document.title,
      });
    }
  }, []);
  
  const Offer = [
    {
      title: 'We have the best Services.',
      description:
        'Travelia Planet has a team of professionals who have been in the tourism industry for many years and who are extremely determined to provide a different vision for travelling to all clients so that they may experience the best and then return satisfied with our service. Travelia Planet management philosophy is based on the simple concept of delivering the highest quality customer services at the best possible price.',
      image: `https://res.cloudinary.com/dl3jrszmx/image/authenticated/s--uc1VS51Y--/v1708694951/Travelia%20Planet%20Website%20Assets/khunjerab_m9ikul.jpg`
    }
  ];
  const popularDestinations = data.allDatoCmsDestination.nodes.filter((i) => i.ispopular);
  const trendingDestinations = data.allDatoCmsDestination.nodes.filter((i) => i.istrending);

  return (
    <Layout>
      <Hero />
      <Services />
      <AllDestinations heading="Popular Destinations" destinations={popularDestinations} />
      <TrendingTours destinations={trendingDestinations} />
      <Offers
        heading={Offer[0].title}
        subHeading="Services"
        image={Offer[0].image}
        description={Offer[0].description}
        showLinks
        imgLeft
      />
      <Testimonials />
      <Questions />
    </Layout>
  );
}
export function Head() {
  return (
    <Seo title="Travelia Planet">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
    </Seo>
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

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;
