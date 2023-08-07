import React from "react";

const Button = ({ text }) => {
  return (
    <button className="px-8 py-3 font-semibold text-white rounded-full w-fit bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-70">
      {text}
    </button>
  );
};

export default Button;
