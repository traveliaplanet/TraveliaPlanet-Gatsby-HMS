import React from 'react';
// import { Link } from 'gatsby';
// components
import Layout from 'components/Layout';
import Seo from 'components/SEO';
import {  WhatsappButton } from 'components/UI';



const Groups = () =>{
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);
    console.log("Form Data is, ", formData)
    // Convert FormData to JSON
    var jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });
    console.log("JSON Data is, ", jsonData)
const searchTicket = await fetch("https://dev.traveliaplanet.com/flight/search?origin=MUX&destination=DXB&departure_time=2024-03-10T00:00:00.000Z")
const data = await searchTicket.json()
console.log("API Data is, ", data)
  }
  return  (

    <Layout>
      <section id="#group-tickets" className="grid place-items-center gap-4 px-4 py-[200px] text-center">
        <h1>GROUP TICKETS</h1>
        <form
              className="grid w-full cursor-pointer gap-4 text-gray-500 md:w-2/3"
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
                name="date"
                id="date"
                type="datetime-local"
                // required
              />
              
              <button
                type="submit"
                className="w-full rounded bg-indigo-600 p-4 text-center text-lg font-semibold text-gray-100 transition duration-300 hover:bg-indigo-500"
              >
                Search
              </button>
              <WhatsappButton text="Whatsapp Us" />
            </form>
      </section>
    </Layout>
  );
}
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
