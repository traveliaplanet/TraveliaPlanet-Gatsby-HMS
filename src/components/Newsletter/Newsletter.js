import React from 'react';
import { TbMailOpened } from 'react-icons/tb';

// Components
import { PrimaryButton, Container } from '../UI';

function Newsletter() {
  return (
    <Container className="bg-slate-800 py-28">
      <div className="grid place-items-center gap-4 text-white md:flex md:items-center md:justify-center">
        <TbMailOpened className="text-7xl text-green-500" />
        <div className="text-center ">
          <h2 className="mb-2 text-4xl font-bold md:mb-1 md:text-5xl">Newsletter</h2>
          <p className="font-semibold text-gray-500">
            Subscribe now to get our latest Tour Packages.
          </p>
        </div>
        <form
          className="grid w-full place-items-center gap-4 md:flex md:w-1/3 md:gap-0"
          name="Newsletter"
          id="newsletter"
          method="POST"
          data-netlify="true"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            placeholder="Your Email Address"
            name="email"
            id="email"
            required
            type="email"
            className="w-full rounded-l-md border-r-0 bg-slate-700 py-4 pl-4 text-lg font-bold outline-none focus:border focus:border-indigo-600"
          />
          <PrimaryButton
            text="Subscribe Now "
            type="submit"
            className="md:rounded-l-0  bg-green-500 md:w-2/3 md:rounded-t-none md:rounded-b-none md:rounded-r-md"
          />
        </form>
      </div>
    </Container>
  );
}

export default Newsletter;
