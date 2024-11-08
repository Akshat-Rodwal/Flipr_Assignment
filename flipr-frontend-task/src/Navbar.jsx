// Navbar.jsx
import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" flex items-center justify-between px-6 md:px-12 py-3 bg-[#232536] z-50">
      {/* Logo */}
      <div className="text-white font-bold text-2xl mr-auto">
        {"{Finsweet"}
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex items-center space-x-8 text-gray-300 mr-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'text-white font-bold' : 'hover:text-white'}
        >
          Home
        </NavLink>
        <NavLink 
          to="/blog" 
          className={({ isActive }) => isActive ? 'text-white font-bold' : 'hover:text-white'}
        >
          Blog
        </NavLink>
        <NavLink 
          to="/aboutUs" 
          className={({ isActive }) => isActive ? 'text-white font-bold' : 'hover:text-white'}
        >
          About Us
        </NavLink>
        <NavLink 
          to="/contactUs" 
          className={({ isActive }) => isActive ? 'text-white font-bold' : 'hover:text-white'}
        >
          Contact Us
        </NavLink>
      </div>

      {/* Subscribe Button */}
      <button className="bg-white text-[#232536] font-semibold px-4 py-2 md:ml-4">
        Subscribe
      </button>
    </nav>
  );
}

export default Navbar;
