import React from 'react';
import { Link } from 'gatsby';
// components
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { PrimaryLink } from 'components/UI';
import { PrimaryButton } from 'components/UI';

// hooks
import { SocialLinks } from '../hooks';

const PrivacyPolicy = () => (
  <Layout>
    <section id="#thank-you" className="grid place-items-center gap-4 px-4 py-[200px] text-center">
      <h1 className="text-5xl font-medium lg:text-7xl">Privacy Policy</h1>
      <p>
      Your personal data will be processed and information from your device (cookies, unique identifiers, and other device data) may be stored by, accessed by and shared with 0 TCF vendor(s), or used specifically by this site or app.

Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page or in our privacy policy where you can withdraw consent.
      </p>
      
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
    <Seo title="Privacy Policy">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
      <meta name="google-adsense-account" content="ca-pub-1582173148473966" />
    </Seo>
  );
}

export default PrivacyPolicy;
