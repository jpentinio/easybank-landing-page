import React from "react";
import logo from "../assets/images/logo.svg";
import Button from "./Button";

const links = ["Home", "About", "Contact", "Blog", "Careers"];

const Navbar = () => {
  return (
    <div className="bg-white relative z-50 flex items-center justify-between h-20 mx-44">
      <img src={logo} alt="logo" className="w-auto h-6" />
      <div className="flex items-center gap-8">
        {links.map((link, index) => (
          <a
            href="#"
            key={index}
            className="flex items-center h-20 border-b-4 border-white text-grayish-blue hover:border-lime-green hover:text-dark-blue"
          >
            {link}
          </a>
        ))}
      </div>
      <Button text="Request invite" />
    </div>
  );
};

export default Navbar;
