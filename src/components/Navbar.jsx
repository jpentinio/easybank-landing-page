import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/images/icon-hamburger.svg";
import Button from "./Button";

const links = ["Home", "About", "Contact", "Blog", "Careers"];

const MenuModal = ({ open }) => {
  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } rounded-md transition-all ease-in delay-150 p-6 flex-col items-center justify-center bg-white w-full absolute top-[80px] shadow-2xl`}
    >
      {links.map((link, index) => (
        <a
          href="#"
          key={index}
          className="flex items-center h-10 sm:h-20 border-b-4 border-white text-grayish-blue hover:border-lime-green hover:text-dark-blue transition-all ease-linear duration-200"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white relative z-50 flex items-center justify-between h-16 lg:h-20 mx-6 lg:mx-44">
      <img src={logo} alt="logo" className="w-auto h-4 sm:h-6" />
      <div className="hidden lg:flex items-center gap-8">
        {links.map((link, index) => (
          <a
            href="#"
            key={index}
            className="flex items-center h-20 border-b-4 border-white text-grayish-blue hover:border-lime-green hover:text-dark-blue transition-all ease-linear duration-200"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button text="Request invite" />
      </div>
      <MenuIcon
        onClick={() => setOpen(open === true ? false : true)}
        className="flex lg:hidden"
      />
      <MenuModal open={open} />
    </div>
  );
};

export default Navbar;
