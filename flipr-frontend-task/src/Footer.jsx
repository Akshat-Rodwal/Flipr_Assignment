import React from "react";
import facbook from "./assets/assets/Client-First - icons/Negative.svg"; // Check path again
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#232536] text-white py-12 px-6 md:px-12">
      <div className="max-w-1xl mx-auto">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-2xl font-bold mb-6 md:mb-0">
            {"{Finsweet"}
          </div>
          <div className="flex space-x-6 text-gray-300">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <NavLink to="/blog" className="hover:text-white">Blog</NavLink>
            <NavLink to="/aboutUs" className="hover:text-white">About us</NavLink>
            <NavLink to="/contactUs" className="hover:text-white">Contact us</NavLink>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#2d2e40] py-12 px-6 md:px-12 my-11 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 md:mb-0 md:text-left md:w-1/2 mt-2 ml-4">
            Subscribe to our newsletter to get <br /> latest updates and news
          </h2>
          <div className="flex w-full md:w-auto md:mt-0 md:ml-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-6 py-2 w-full md:w-80 bg-[#232536] text-white focus:outline-none placeholder-[#6D6E76] border-[#6D6E76] border-1 mr-5"
            />
            <button className="bg-[#ffd050] text-[#232536] font-semibold px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Information and Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-400">
          <div className="mb-6 md:mb-0">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className="flex space-x-6">
            {/* Facebook SVG icon */}
            <a href="#facebook" aria-label="Facebook" className="hover:text-white">
              {/* <img src={facbook} alt="Facebook" className="hover:text-white w-6 h-6" /> */}
              <i className="fab fa-facebook"></i>
            </a>
            {/* Other social media icons */}
            <a href="#twitter" aria-label="Twitter" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
    