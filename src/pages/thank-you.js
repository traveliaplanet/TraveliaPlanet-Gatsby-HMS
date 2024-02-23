import React from 'react';
import { Link } from 'gatsby';
// components
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { PrimaryLink } from 'components/UI';
import { PrimaryButton } from 'components/UI';

// hooks
import { SocialLinks } from '../hooks';

const thanks = () => (
  <Layout>
    <section id="#thank-you" className="grid place-items-center gap-4 px-4 py-[200px] text-center">
      <h1 className="text-5xl font-medium lg:text-7xl">THANK YOU</h1>
      <h2 className="mb-16">for getting in touch with us</h2>
      <Link to="/">
        <PrimaryButton text="Back to Home" className="px-8 py-2" />
      </Link>
      <div className="flex">
        {SocialLinks.map((link, index) => (
          <PrimaryLink
            key={index}
            target="_blank"
            route={link.route}
            component={link.component}
            className={`${SocialLinks.length - 1 === index ? '' : 'mr-6'} border-none text-[32px] text-gray-600 hover:text-indigo-600`}
          />
        ))}
      </div>
    </section>
  </Layout>
);
export function Head() {
  return (
    <Seo title="Thank You">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
    </Seo>
  );
}
export default thanks;
