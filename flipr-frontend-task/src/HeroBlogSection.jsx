import React from "react";
import featuredImage from "./assets/assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function HeroBlogSection() {
  return (
    <>
      <Navbar />
      <section className="bg-[#F4F0F8] px-6 py-12 md:px-12 md:py-17">
        <div className="max-w-1xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 items-center">

          {/* Left Text Section */}
          <div>
            <p className="text-sm font-semibold text-gray-700">FEATURED POST</p>
            <h1 className="text-4xl font-bold text-black mt-3">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="font-semibold text-gray-600 mt-3">
              By <span className="text-[#592EA9]">John Doe</span> | May 23, 2022
            </p>
            <p className="text-gray-800 mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link to="/post-detail">
            <button className="bg-[#FFD050] text-[#232536] font-semibold px-7 py-2 mt-4">
              Read More &gt;
            </button></Link>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center md:justify-end">
            <img
              src={featuredImage}
              alt="Featured Post"
              className="w-[540px] h-auto" // Custom width with auto height
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBlogSection;
