import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import { Container, PrimaryLink } from "../UI";

// hooks
import { HeaderLinks, SocialLinks } from "../../hooks";

function Footer() {
  return (
    <footer>
      <Container className="grid place-items-center bg-slate-900 py-20 text-center text-white">
        <div className="mb-10 flex items-center font-bold tracking-wide">
          <StaticImage
            placeholder="blurred"
            src="https://res.cloudinary.com/hms-software/image/upload/v1708443469/Travelia_without_bg_logo_ylswzk.png"
            alt="Travelia Logo"
            className="max-h-[100px] max-w-[100px]"
          />
          <h2 className="cursor-pointer px-2 text-3xl tracking-wide transition duration-300 hover:text-indigo-600">
            <Link to="/">Travelia Planet</Link>
          </h2>
        </div>
        <nav className="mb-10">
          <ul className="md:flex">
            {HeaderLinks.map((link, index) => (
              <li key={index}>
                <PrimaryLink
                  route={link.route}
                  name={link.name}
                  className={`${HeaderLinks.length - 1 === index ? "" : "md:mr-7"}`}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="mb-10 flex">
          {SocialLinks.map((link, index) => (
            <PrimaryLink
              key={index}
              target="_blank"
              route={link.route}
              component={link.component}
              className={`${SocialLinks.length - 1 === index ? "" : "mr-7"} border-none text-4xl`}
            />
          ))}
        </div>
        <p className="font-semibold text-gray-500">
          © Copyright 2022, Travelia Planet SMC PVT LTD. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
