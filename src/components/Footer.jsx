import React from "react";
import logo from "../assets/images/logo-white.png";
import { ReactComponent as Facebook } from "../assets/images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../assets/images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../assets/images/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../assets/images/icon-twitter.svg";
import { ReactComponent as Youtube } from "../assets/images/icon-youtube.svg";
import Button from "./Button";

const links = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <div className="grid grid-cols-3 px-44 py-16 bg-dark-blue items-center">
      <div className="flex flex-col justify-between gap-20">
        <img src={logo} alt="logo" className="w-48" />
        <div className="flex gap-5">
          <Facebook className="fill-white hover:fill-lime-green cursor-pointer" />
          <Youtube className="fill-white hover:fill-lime-green cursor-pointer" />
          <Twitter className="fill-white hover:fill-lime-green cursor-pointer" />
          <Pinterest className="fill-white hover:fill-lime-green cursor-pointer" />
          <Instagram className="fill-white hover:fill-lime-green cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-8">
        {links.map((link, index) => (
          <a href="#" className="text-lg text-white hover:text-lime-green">
            {link}
          </a>
        ))}
      </div>
      <div className="flex flex-col gap-8 items-end">
        <Button text="Request Invite" />
        <div className="text-white">© Easybank. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
