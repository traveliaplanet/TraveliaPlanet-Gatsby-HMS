import React from 'react';
// components
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { PrimaryButton, Container, OfficeCard, WhatsappButton } from 'components/UI';
// assets
import ContactUs from '../images/contact.svg';

const contact = () => (
  <Layout>
    <Container className="grid place-items-center py-16 " />
    <p>THANK YOU</p>
  </Layout>
);
export function Head() {
  return (
    <Seo title="Contact Us">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
    </Seo>
  );
}
export default contact;
