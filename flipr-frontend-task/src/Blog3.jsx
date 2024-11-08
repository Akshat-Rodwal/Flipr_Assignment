import React from "react";
import { Link } from "react-router-dom";

function Blog3() {
  return (
    <section className="px-6 md:px-12 py-12">
      {/* Title Section */}
      <div className=" mb-8">
        <h1 className="text-4xl font-bold text-[#232536]">All Categories</h1>
      </div>

      {/* Category Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Category Card 1 */}
        {/* Business Card */}
        <Link to="/business" className="border-2 p-6 bg-white flex flex-col items-start hover:bg-yellow-400 transition-colors duration-300">
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/Icon-1.svg"
              alt="Business"
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold text-[#232536]">Business</h3>
          <p className="text-gray-500 mt-2">
            Learn new business Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </Link>

        {/* Category Card 2 */}
        <div className="border-2 p-6 bg-white flex flex-col items-start  hover:bg-yellow-400 transition-colors duration-300">
          {/* SVG Image */}
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/Icon (2).svg"
              alt="Startup"
              className="rounded-full"
            />
          </div>
          {/* Category Name */}
          <h3 className="text-xl font-bold text-[#232536]">Startup</h3>
          {/* Description */}
          <p className="text-gray-500 mt-2">
            Learn new business Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>

        {/* Category Card 3 */}
        <div className="border-2 p-6 bg-white flex flex-col items-start  hover:bg-yellow-400 transition-colors duration-300">
          {/* SVG Image */}
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/icon.svg"
              alt="Economy"
              className="rounded-full"
            />
          </div>
          {/* Category Name */}
          <h3 className="text-xl font-bold text-[#232536]">Economy</h3>
          {/* Description */}
          <p className="text-gray-500 mt-2">
            Learn new business Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>

        {/* Category Card 4 */}
        <div className="border-2 p-6 bg-white flex flex-col items-start  hover:bg-yellow-400 transition-colors duration-300">
          {/* SVG Image */}
          <div className="w-12 h-12 mb-4 bg-[#FBF6EA] rounded-3 flex items-center justify-center">
            <img
              src="src/assets/assets/Client-First - icons/business-and-trade 1.svg"
              alt="Technology"
              className="rounded-full"
            />
          </div>
          {/* Category Name */}
          <h3 className="text-xl font-bold text-[#232536]">Technology</h3>
          {/* Description */}
          <p className="text-gray-500 mt-2">
            Learn new business Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blog3;
