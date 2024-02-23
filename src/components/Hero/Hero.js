import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import { PrimaryButton, SecondaryButton } from '../UI';

function Hero() {
  return (
    <section
      id="#hero"
      className="mx-auto grid w-full place-content-between place-items-center gap-24 bg-slate-50 pb-8 md:grid-cols-2 lg:pb-0"
    >
      <div className="mx-auto px-6 pt-32 md:pl-6 md:pr-0 lg:pl-16 xl:pt-0">
        <div className="grid w-full place-items-center lg:place-items-start">
          <h1 className="mb-4">
            Find Perfect Destinations <span className="text-indigo-600">anywhere you go.</span>
          </h1>
          <h4 className="mb-4">
            Travelia Planet offers best North Tours, Kashmir Tours, Naran & Kaghan Tours, Skardu
            Tours, Gilgit Baltistan Tours and many more with attractive discounts.
          </h4>
          <div className="grid w-full gap-4 md:grid-cols-2">
            <Link to="/destinations/">
              <PrimaryButton text="Explore" />
            </Link>
            <Link to="/contact/">
              <SecondaryButton text="Contact Us" />
            </Link>
          </div>
        </div>
      </div>
      <StaticImage
        src="https://res.cloudinary.com/dl3jrszmx/image/authenticated/s--qaTEZcTZ--/v1708694953/Travelia%20Planet%20Website%20Assets/home_c2h5il.jpg"
        alt="Home"
        placeholder="blurred"
        className="h-[600px] object-cover"
      />
    </section>
  );
}

export default Hero;
