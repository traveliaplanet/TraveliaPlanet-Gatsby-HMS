import React from 'react';
import { TbMailOpened } from 'react-icons/tb';

function Newsletter() {
  return (
    <section
      id="newsletter"
      className="grid place-content-center place-items-center gap-4 bg-slate-800 px-4 py-16 text-white md:py-28 lg:grid-flow-col"
    >
      <TbMailOpened className="text-7xl text-green-500" />
      <div className="text-center ">
        <h1 className="mb-1 text-green-500">Newsletter</h1>
        <p className="text-gray-500">Subscribe now to get our latest Tour Packages.</p>
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
          className="w-full rounded-md bg-slate-700 p-4 text-lg font-bold text-gray-200 outline-none focus:border-indigo-600 md:-mr-2 md:rounded-l-none"
        />
        <button
          type="submit"
          className="w-full rounded bg-indigo-600 p-4 text-center text-lg font-semibold text-gray-100 transition duration-300 hover:bg-indigo-500"
        >
          Subscribe Now
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
