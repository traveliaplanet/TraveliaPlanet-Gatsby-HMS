import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

// Components
import { Container, PrimaryLink } from '../UI';

// hooks
import { HeaderLinks } from '../../hooks';

function Header() {
  const [toggleButton, setToggleButton] = useState(false);

  const mobileNav = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <Container>
      <header className="flex items-center justify-between bg-transparent py-4 ">
        <div className="flex items-center justify-between font-bold">
          <StaticImage
            placeholder="blurred"
            src="https://res.cloudinary.com/hms-software/image/upload/v1708443469/Travelia_without_bg_logo_ylswzk.png"
            alt="Travelia Logo"
            height={80}
            width={80}
          />
          <h2 className="text-bold ml-2 cursor-pointer px-2 text-xl tracking-wide text-gray-700 transition duration-300 hover:text-indigo-600 md:ml-4 md:text-3xl">
            <Link to="/">Travelia Planet</Link>
          </h2>
        </div>
        <button
          onClick={mobileNav}
          type="button"
          className="z-20 cursor-pointer text-3xl text-gray-700 hover:text-indigo-600 md:hidden"
        >
          {toggleButton ? <ImCross /> : <FaBars />}
        </button>
        <nav
          className={`rounded-lg p-6 md:block  ${
            toggleButton ? 'absolute left-0 top-0 z-10 w-full border-2 bg-white' : 'hidden '
          }`}
        >
          <ul className="text-md grid place-items-center font-semibold tracking-wide text-gray-700 md:flex">
            {HeaderLinks.map((link, index) => (
              <li key={index}>
                <PrimaryLink
                  route={link.route}
                  name={link.name}
                  className={`${HeaderLinks.length - 1 === index ? '' : 'mr-7'} ${
                    toggleButton && 'mr-0'
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
