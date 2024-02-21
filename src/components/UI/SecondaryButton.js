import React from "react";
import PropTypes from "prop-types";

function SecondaryButton({ text, className, type }) {
  return (
    <button
      type={type === "button" ? "button" : "submit"}
      className={`w-full rounded bg-slate-200 p-4 text-center text-lg font-semibold text-gray-700 transition duration-500 hover:bg-slate-300 hover:text-gray-700 ${className}`}
    >
      {text}
    </button>
  );
}

SecondaryButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default SecondaryButton;
