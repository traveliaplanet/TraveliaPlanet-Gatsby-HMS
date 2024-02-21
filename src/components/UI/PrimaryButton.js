import React from "react";
import PropTypes from "prop-types";

function PrimaryButton({ text, className, type }) {
  return (
    <button
      type={type === "button" ? "button" : "submit"}
      className={`w-full rounded bg-indigo-600 p-4 text-center text-lg font-semibold text-gray-100 transition duration-300 hover:bg-indigo-500 ${className}`}
    >
      {text}
    </button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default PrimaryButton;
