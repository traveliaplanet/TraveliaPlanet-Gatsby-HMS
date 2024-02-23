import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

// Components
import { PrimaryLink } from '../UI';

// hooks
import { HeaderLinks } from '../../hooks';

function Header() {
  const [toggleButton, setToggleButton] = useState(false);

  const mobileNav = () => {
    setToggleButton(!toggleButton);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  return (
    <header
      className={`z-100 flex h-[110px] w-full items-center justify-between px-6 py-4 md:p-6 lg:px-16 ${
        sticky
          ? 'shadow-sticky fixed z-[9999] bg-white !bg-opacity-90 backdrop-blur-sm transition'
          : 'fixed z-[9999] bg-inherit '
      }`}
    >
      <div className="flex items-center justify-between font-bold">
        <StaticImage
          placeholder="blurred"
          src="https://res.cloudinary.com/dl3jrszmx/image/authenticated/s--wpzVYDfa--/v1708695091/Travelia%20Planet%20Website%20Assets/Travelia_without_bg_logo_jdhlvo.png"
          alt="Travelia Planet Logo"
          className="max-h-[80px] max-w-[80px]"
        />
        <h1
          className={`w-full cursor-pointer pl-4 text-xl transition duration-300 hover:text-indigo-600 md:ml-4 md:text-2xl ${sticky ? 'text-indigo-600' : 'text-gray-700'}`}
        >
          <Link to="/">Travelia Planet</Link>
        </h1>
      </div>
      <button
        onClick={mobileNav}
        type="button"
        className="z-20 cursor-pointer text-3xl text-gray-700 hover:text-indigo-600 md:hidden"
      >
        {toggleButton ? <ImCross /> : <FaBars />}
      </button>
      <nav
        className={`rounded-lg md:block  ${
          toggleButton ? 'absolute left-0 top-0 z-10 w-full border-2 bg-white' : 'hidden '
        }`}
      >
        <ul className="text-md grid place-content-center place-items-center font-semibold text-gray-700 md:grid-flow-col">
          {HeaderLinks.map((link, index) => (
            <li key={index}>
              <PrimaryLink
                route={link.route}
                name={link.name}
                className={`${HeaderLinks.length - 1 === index ? '' : 'md:mr-6'} ${
                  toggleButton && 'mr-0'
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
