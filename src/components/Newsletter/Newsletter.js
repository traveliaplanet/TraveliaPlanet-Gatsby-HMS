import React from 'react';
import { TbMailOpened } from 'react-icons/tb';

// Components
import { Container } from '../UI';

function Newsletter() {
  return (
    <Container id='Newsletter' className="bg-slate-800 py-28 grid lg:grid-flow-col place-content-center place-items-center gap-4 text-white">
        <TbMailOpened className="text-7xl text-green-500" />
        <div className="text-center ">
          <h1 className="mb-1 text-green-500">Newsletter</h1>
          <p className="text-gray-500">
            Subscribe now to get our latest Tour Packages.
          </p>
        </div>
        <form
          className="grid w-full place-items-center gap-4 md:flex md:gap-0"
          name="newsletter"
          method="POST"
          data-netlify="true"
          action="/thank-you/"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            placeholder="Your Email Address"
            name="email"
            id="email"
            required
            type="email"
            className="w-full rounded-l-md text-gray-200 -mr-2 bg-slate-700 p-4 text-lg font-bold outline-none focus:border-indigo-600"
          />
          <button
            type="submit"
            className="w-full rounded bg-indigo-600 p-4 text-center text-lg font-semibold text-gray-100 transition duration-300 hover:bg-indigo-500"
          >
            Subscribe Now
          </button>
        </form>
    </Container>
  );
}

export default Newsletter;
