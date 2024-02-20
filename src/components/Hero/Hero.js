import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import { Container, PrimaryButton, SecondaryButton } from '../UI';

function Hero() {
  return (
    <section id="#hero" className="grid place-items-center bg-slate-50 lg:flex">
      <Container>
        <div className="grid place-items-center pt-20 lg:place-items-start">
          <h1 className="mb-10 text-4xl font-bold text-gray-700 md:text-6xl">
            Find Perfect Destinations <span className="text-indigo-600">anywhere you go.</span>
          </h1>
          <p className="mb-10 text-lg leading-8 tracking-wide text-gray-600 md:max-w-lg md:text-xl">
            Travelia Planet offers best North Tours, Kashmir Tours, Naran & Kaghan Tours, Skardu
            Tours, Gilgit Baltistan Tours and many more with attractive discounts.
          </p>
          <div className="mb-16">
            <div className="grid-flow-col grid-cols-2 gap-x-4 md:grid md:w-[400px]">
              <Link to="/destinations/">
                <PrimaryButton text="Explore" className="mb-4 md:mr-4" />
              </Link>
              <Link to="/contact/">
                <SecondaryButton text="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <StaticImage
        src="https://res.cloudinary.com/hms-software/image/upload/v1708441153/home_kgo0qr.jpg"
        alt="Home"
        placeholder="blurred"
        className="object-cover lg:h-auto lg:w-3/4"
      />
    </section>
  );
}

export default Hero;
