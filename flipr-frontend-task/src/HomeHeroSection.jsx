import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import svgImage from './assets/assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg'; // Import the SVG

function HomeHeroSection() {
  return (
    <>
      <Navbar />
      <section className="w-full h-[80vh] relative bg-[#232536] text-white overflow-hidden">
        {/* Background Image with Radial Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${svgImage}), radial-gradient(circle at top center, rgba(255, 255, 255, 0.7) 30%, rgba(35, 37, 54, 1) 70%)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }} 
        ></div>

        {/* Overlay content */}
        <div className="relative z-10 h-full flex items-center pl-8 md:pl-16 py-12 text-left">
          <div className="max-w-4xl">
            <p className="uppercase text-white mb-2">Posted on Startup</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className="mb-6">
              By <span className="text-[#FFD050]">James West</span> | May 23, 2022
            </p>
            <p className="text-gray-200 mb-6 max-w-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...
            </p>
            <button className="bg-[#FFD050] text-[#232536] font-semibold px-6 py-2 ">
              Read More &gt;
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default HomeHeroSection;
