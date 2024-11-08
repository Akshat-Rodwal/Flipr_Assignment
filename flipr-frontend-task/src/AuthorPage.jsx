// Import necessary images and icons
import React from "react";
import authorImage from "./assets/assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg";
import facebookIcon from "./assets/assets/Client-First - icons/Negative.svg";
import twitterIcon from "./assets/assets/Client-First - icons/Negative (4).svg";
import instagramIcon from "./assets/assets/Client-First - icons/Negative (2).svg";
import linkedinIcon from "./assets/assets/Client-First - icons/Negative (3).svg";
import shape1 from "./assets/assets/Client-First - IMAGES/shape.svg";
import shape2 from "./assets/assets/Client-First - IMAGES/shape-1.svg";
import postImage1 from "./assets/assets/Client-First - IMAGES/stained-glass-high-rise-building-1106476.svg";
import postImage2 from "./assets/assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AuthorPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative flex items-center px-12 py-12 "
        style={{ backgroundColor: "#F4F0F8", padding: "7rem 10rem" }}
      >
        {/* Author Image */}
        <img src={authorImage} alt="Author" className="w-35 h-35 object-cover mr-8" />

        {/* Content on the right side */}
        <div>
          <h1 className="text-4xl font-bold text-[#232536] mb-4">
            Hey there, I'm Andrew Johnson and welcome to my<br /> Blog
          </h1>

          <p className="text-gray-700 mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .
          </p>

          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div
          className="absolute flex pb-4"
          style={{ bottom: "-52px", left: "160px", }}
        >
          <img src={shape1} alt="Shape 1" className="w-[910px] h-20" />
          <img src={shape2} alt="Shape 2" className="w-[300px] h-20" />
        </div>
      </section>

      {/* My Posts Section */}
      <section className="px-12 py-12" style={{ padding: "3rem 10rem" }}>
        <h1 className="text-4xl font-bold text-[#232536] mb-12 mt-8">My Posts</h1>

        {/* Post Item 1 */}
        <div className="flex items-start mb-8">
          <img src={postImage1} alt="Post 1" className="w-[400px] h-[300px] object-cover mr-8" />
          <div>
            <p className="text-sm font-semibold text-[#592EA9] mb-2 mt-5">BUSINESS</p>
            <h2 className="text-3xl font-bold text-[#232536] mb-2">
              Font size in UI design: The complete guide to <br />follow
            </h2>
            <p className="text-gray-700 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Post Item 2 */}
        <div className="flex items-start mb-5">
          <img src={postImage2} alt="Post 2" className="w-[400px] h-[300px] object-cover mr-8" />
          <div>
            <p className="text-sm font-semibold text-[#592EA9] mb-2 mt-5">ECONOMY</p>
            <h2 className="text-3xl font-bold text-[#232536] mb-2">
              How to build rapport with your web design client <br />incididunt
            </h2>
            <p className="text-gray-700 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AuthorPage;
