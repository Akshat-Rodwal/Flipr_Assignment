import React from "react";
import Navbar from "./Navbar";

const AboutUs2 = () => {
  return (
    <>
      
      <div className="bg-[#F4F0F8] w-[86%] mx-auto -mt-8">
        {/* New Section Below Image and Stats */}
        <section className="px-16 py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-5">
            {/* Left Section - OUR MISSION */}
            <div className="flex flex-col justify-center p-8">
              <p className="text-[#4C4C4C] text-sm font-medium">OUR MISSION</p>
              <h1 className="text-3xl font-bold text-[#232536] mt-2">
                Creating valuable content for learners around the world
              </h1>
              <p className="text-[#6D6E76] text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>

            {/* Right Section - OUR VISION */}
            <div className="flex flex-col justify-center p-8">
              <p className="text-[#4C4C4C] text-sm font-medium">OUR VISION</p>
              <h1 className="text-3xl font-bold text-[#232536] mt-2">
                A platform that empowers individuals to improve and grow
              </h1>
              <p className="text-[#6D6E76] text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default AboutUs2;
