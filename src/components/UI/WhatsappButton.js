import PropTypes from "prop-types";
import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";

import { Link } from "gatsby";

function WhatsappButton({ text, className, type }) {
  return (
    <Link
      type={type === "button" ? "button" : "submit"}
      target="_blank"
      to="https://wa.me/923216483355"
      className={`flex w-full items-center justify-center rounded bg-green-600 p-4 text-center text-lg font-semibold text-gray-100 transition duration-300 hover:bg-green-500 ${className}`}
    >
      <FaWhatsappSquare className="mx-2 text-4xl" /> {text}
    </Link>
  );
}

WhatsappButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default WhatsappButton;
