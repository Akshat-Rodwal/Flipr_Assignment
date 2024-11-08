import React from "react";

// Import images
import aboutUsImage from "./assets/assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg"; // Updated path
import shape1 from "./assets/assets/Client-First - IMAGES/shape-1.svg";
import shape2 from "./assets/assets/Client-First - IMAGES/shape.svg";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (<><Navbar /><div className="bg-white">
      {/* About Us Section */}
      <section className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side - Title */}
              <div className="flex flex-col justify-center ml-40 w-[70%] bg-white p-5 z-10"> {/* Added z-10 */}
                  <p className="text-[#232536] text-sm font-medium">ABOUT US</p>
                  <h1 className="text-4xl font-bold text-[#232536] mt-2">
                      We are a team of <br /> content writers who <br /> share their learnings
                  </h1>
              </div>

              {/* Right side - Description */}
              <div className="flex flex-col justify-center">
                  <p className="text-[#6D6E76] text-lg mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
          </div>

          {/* Full-width Image below the title and description */}
          <div className="w-[90%] mx-auto h-[500px] overflow-hidden -mt-12 relative "> {/* Added relative positioning */}
              <img
                  className="w-full h-full object-cover object-center"
                  src={aboutUsImage}
                  alt="About Us" />
                  {/* Stats Section */}
          <div className="-mt-[135px] w-[50%] grid grid-cols-1 md:grid-cols-3 ml-20  mb-[11px]">
              <div className="bg-[#FFD050] text-black p-6 text-center">
                  <p className="text-3xl font-bold">12+</p>
                  <p className="mt-2">Blogs Published</p>
              </div>
              <div className="bg-[#FFD050] text-black p-6 text-center">
                  <p className="text-3xl font-bold">18K+</p>
                  <p className="mt-2">Views on Finsweet</p>
              </div>
              <div className="bg-[#FFD050] text-black p-6 text-center">
                  <p className="text-3xl font-bold">30K+</p>
                  <p className="mt-2">Total active Users</p>
              </div>
          </div>
                  <div className="flex -mt-3 ml-20">
              <img className="w-[20%] " src={shape1} alt="Shape 1" />
              <img className="w-[60%]" src={shape2} alt="Shape 2" />
          </div>
          </div>

          

          
      </section>
  </div></>
  );
};

export default AboutUs;
