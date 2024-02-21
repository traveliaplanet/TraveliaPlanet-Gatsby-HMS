import React from 'react';
// components
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { PrimaryButton, Container, OfficeCard, WhatsappButton } from 'components/UI';
// assets
import ContactUs from '../images/contact.svg';

const contact = () => (
  <Layout>
    <Container className="grid place-items-center py-16 ">
      <div className="py-16 md:flex md:items-center ">
        <div className="grid place-items-center  text-center md:place-items-start md:text-start">
          <h2 className="mb-4 text-lg font-semibold text-indigo-600">Contact Us</h2>
          <h3 className="mb-4 text-3xl font-extrabold text-gray-700 md:text-5xl">
            Feel free to <span className="text-indigo-600"> get in touch</span> with us
          </h3>
          <p className="text-lg font-semibold text-gray-500 md:text-xl">
            Have a question about your plan or package? Contact us 24 hours a day 7 days a week for
            the best customer service!
          </p>
          <form
            className="my-6 grid w-full cursor-pointer gap-6 text-gray-500 md:w-2/3"
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thank-you/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              className="cursor-pointer rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
              name="email"
              id="emal"
              required
              type="email"
              placeholder="Your Email Address (required)"
            />
            <input
              className="cursor-pointer rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
              name="name"
              id="name"
              placeholder="Full Name"
            />
            <input
              className="cursor-pointer appearance-none rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
              name="Phone Number"
              id="phone"
              type="number"
              required
              placeholder="Phone Number (required)"
            />
            <input
              className="cursor-pointer rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <input
              className="cursor-pointer rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
              name="country"
              id="country"
              placeholder="Country"
            />
            <textarea
              className="cursor-pointer resize-none rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
              name="Message"
              id="message"
              placeholder="Your Message Here"
              cols="5"
              rows="5"
            >
              Invitation Letter Required for Visa Processing. Information Required for Pakistan
              Tour.
            </textarea>
            <button
              type="submit"
              className="w-full rounded bg-indigo-600 p-4 text-center text-lg font-semibold text-gray-100 transition duration-300 hover:bg-indigo-500"
            >
              Send Message
            </button>
            <WhatsappButton text="Whatsapp Us" />
          </form>
        </div>
        <div>
          <img src={ContactUs} alt="Contact Us" />
        </div>
      </div>
      <div className="grid place-items-center gap-y-10 py-16">
        <div className="grid gap-3 text-center md:w-1/2">
          <h2 className="mb-4 text-lg font-semibold text-indigo-600">Locations</h2>
          <h3 className="mb-4 text-3xl font-extrabold text-gray-700 md:text-5xl">Our Office</h3>
          <p className="text-left text-lg font-semibold text-gray-500 md:text-xl">
            Please contact Travelia Planet Administrative Office or Travel Support at
            <span className="text-indigo-600"> traveliaplanet@gmail.com</span> if you encounter any
            difficulty in accessing the travel package or if you have travel related questions.
          </p>
        </div>
        <OfficeCard
          province="Punjab"
          country="Pakistan"
          street="Office Travelia Planet"
          houseNo="Al-Kareem Center, Pull Daat"
          city="Dera Ghazi Khan"
          email="traveliaplanet@gmail.com"
          phone="+92 321 6483355"
        />
      </div>
    </Container>
  </Layout>
);
export function Head() {
  return (
    <Seo title="Contact Us">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
    </Seo>
  );
}
export default contact;
