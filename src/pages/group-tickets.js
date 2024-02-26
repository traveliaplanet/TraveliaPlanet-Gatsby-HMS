import React from 'react';
// import { Link } from 'gatsby';
// components
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import { WhatsappButton, TicketCard } from 'components/UI';
import { useState } from 'react';

const Groups = () => {
  const [data, setData] = useState([]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log('Form Data is, ', formData);
    // Convert FormData to JSON
    var jsonData = {};
    formData.forEach(function (value, key) {
      jsonData[key] = value;
    });
    console.log('JSON Data is, ', jsonData.departure);
    const request = await fetch(
      `https://dev.traveliaplanet.com/flight/search?origin=${jsonData.origin}&destination=${jsonData.destination}&departure_date=${jsonData.departure}:00.000Z&flexible_date=30`
    );
    const flights = await request.json();
    console.log('API Data is, ', flights);
    if (request.status !== 200) return;
    setData(flights.data);
  };
  //  console.log("Flightr", data)
  return (
    <Layout>
      <section
        id="#group-tickets"
        className="grid w-full gap-4 px-4 lg:px-16 md:px-8 py-[200px] text-center"
      >
        <div className="grid gap-4 place-content-center place-items-center">
        <h1>GROUP TICKETS</h1>
        <form
          className="grid w-full cursor-pointer gap-4 text-gray-500"
          name="contact"
          onSubmit={formSubmitHandler}
        >
          <input
            className="cursor-pointer rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
            name="origin"
            id="origin"
            // required
            type="text"
            placeholder="MUX"
          />
          <input
            className="cursor-pointer rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
            name="destination"
            id="destination"
            // required
            type="text"
            placeholder="DXB"
          />
          <input
            className="cursor-pointer appearance-none rounded border-b-2 p-2 font-semibold outline-none transition duration-300 hover:border-indigo-600 focus:border-none focus:outline-indigo-600"
            name="departure"
            id="departure"
            type="datetime-local"
            // required
          />

          <button
            type="submit"
            className="rounded bg-indigo-600 p-4 text-center text-lg font-semibold text-gray-100 transition duration-300 hover:bg-indigo-500"
          >
            Search
          </button>
          {/* <WhatsappButton text="Whatsapp Us" /> */}
        </form>
        </div>

        <div className="grid gap-y-12 w-full">
          {data.map((d, index) => (
            <TicketCard
              key={index}
              origin={d.origin}
              destination={d.destination}
              description={d.description}
              departure={d.departure_date_time}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export function Head() {
  return (
    <Seo title="Group Tickets">
      <meta
        property="og:image"
        content="https://traveliaplanet.com/static/home-210451c84a308ebfd6aacb3623c135ed.jpg"
      />
    </Seo>
  );
}
export default Groups;
