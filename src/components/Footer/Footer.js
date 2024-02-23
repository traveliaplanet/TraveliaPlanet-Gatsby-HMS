import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Components
import { PrimaryLink } from '../UI';

// hooks
import { HeaderLinks, SocialLinks } from '../../hooks';

function Footer() {
  return (
    <footer
      id="#footer"
      className="grid place-content-center place-items-center gap-8 bg-slate-900 py-20 text-center text-gray-200 md:gap-4"
    >
      <div className="flex items-center justify-between font-bold">
        <StaticImage
          placeholder="blurred"
          src="https://res.cloudinary.com/hms-software/image/upload/v1708443469/Travelia_without_bg_logo_ylswzk.png"
          alt="Travelia Planet Logo"
          className="max-h-[80px] max-w-[80px]"
        />
        <h1 className="w-full cursor-pointer pl-4 text-xl text-gray-200 transition duration-300 hover:text-indigo-600 md:ml-4 md:text-3xl ">
          <Link to="/">Travelia Planet</Link>
        </h1>
      </div>
      <nav className="">
        <ul className="md:flex">
          {HeaderLinks.map((link, index) => (
            <li key={index}>
              <PrimaryLink
                route={link.route}
                name={link.name}
                className={`${HeaderLinks.length - 1 === index ? '' : 'md:mr-6'}`}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex">
        {SocialLinks.map((link, index) => (
          <PrimaryLink
            key={index}
            target="_blank"
            route={link.route}
            component={link.component}
            className={`${SocialLinks.length - 1 === index ? '' : 'mr-7'} border-none text-[30px]`}
          />
        ))}
      </div>
      <p className="px-4 font-semibold text-gray-500">
        © Copyright 2022, Travelia Planet SMC PVT LTD. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
