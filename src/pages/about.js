import React from 'react';
// import { Link } from 'gatsby';

// components
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import Offers from 'components/Offers';
import Services from 'components/Services';
import Team from 'components/Team';

const aboutData = [
  {
    image:
      'https://res.cloudinary.com/dl3jrszmx/image/authenticated/s--vO6gjX4O--/v1708694942/Travelia%20Planet%20Website%20Assets/mapAbout_odd7ub.jpg',
    heading: 'Explore the beauty of Pakistan with us.',
    subHeading: 'ABOUT TRAVELIA PLANET SMC PVT LTD',
    description:
      'Travelia Planet is one the pioneer travel companies in Pakistan which holds a valid license from Securities and Exchange Commission of Pakistan (SECP) Under Identification number 0205944 and International Air Transport Association (IATA) under License Number: 27348591',
    buttonText: 'Explore Destinations',
    link: 'destinations'
  },
  {
    image:
      'https://res.cloudinary.com/dl3jrszmx/image/authenticated/s--3Y5WKRj_--/v1708694938/Travelia%20Planet%20Website%20Assets/visionAbout_i8qrdg.jpg',
    heading: 'To create a world, where everyone is encouraged to travel.',
    subHeading: 'OUR VISION',
    description:
      'We believe that travelling broadens the mind and changes the way you think. The people you meet and the experiences you have give you an improved ability to empathise with different situations and people.',
    buttonText: 'Contact Us',
    link: 'contact'
  }
];
const about = () => (
  <Layout>
    <section className="pt-[110px]">
      <Offers
        imgRight
        image={aboutData[0].image}
        heading={aboutData[0].heading}
        subHeading={aboutData[0].subHeading}
        description={aboutData[0].description}
        buttonText={aboutData[0].buttonText}
        isRight
        showButton
        link={aboutData[0].link}
      />
      <Offers
        imgLeft
        image={aboutData[1].image}
        heading={aboutData[1].heading}
        subHeading={aboutData[1].subHeading}
        description={aboutData[1].description}
        buttonText={aboutData[1].buttonText}
        isRight
        showButton
        link={aboutData[1].link}
      />
      <Services heading="We follow these." subHeading="OUR VALUES" showValues />
      <Team heading="Meet these Fine Folks." subHeading="Our Team" />
    </section>
  </Layout>
);
export function Head() {
  return (
    <Seo title="About Us">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
<meta name="google-adsense-account" content="ca-pub-1582173148473966">
    </Seo>
  );
}
export default about;
