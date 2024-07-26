import React from "react";
import {
  FaGithub,
  FaTwitterSquare,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="font-bold text-white text-xl mx-2 w-10">Itsmhyne_</h1>
        {/* <img src={logo} alt="logo" className="mx-2 w-10" /> */}
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaWhatsapp />
        <FaFacebook />
        <FaInstagram />
        <FaGithub />
        {/* <FaTwitterSquare /> */}
      </div>
    </nav>
  );
};

export default Navbar;
