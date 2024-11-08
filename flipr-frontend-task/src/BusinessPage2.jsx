import React from "react";

// Import images
import image4 from "./assets/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg";

// Import category icons
import icon1 from "./assets/assets/Client-First - icons/Icon (2).svg";
import icon2 from "./assets/assets/Client-First - icons/Icon-1.svg";
import icon3 from "./assets/assets/Client-First - icons/icon.svg";
import icon4 from "./assets/assets/Client-First - icons/business-and-trade 1.svg";
import Footer from "./Footer";

function BusinessPage2() {
  const posts = [
    { image: image4, category: "BUSINESS", title: "Top 6 free website mockup tools 2022", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.." },
    { image: image4, category: "BUSINESS", title: "Step-by-step guide to choosing great font paors", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.." },
    { image: image4, category: "BUSINESS", title: "Ten free foogle fonts that you should use", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.." },
    { image: image4, category: "BUSINESS", title: "What did I learn from doing 50+ design sprints?", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.." },
  ];

  return (
    <>
      <section className="px-6 py-12 mb-5 mt-5">
        <div className="max-w-1xl mx-auto pl-9 flex space-x-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-10 w-2/3">
            {posts.map((post, index) => (
              <div key={index} className="flex items-start">
                {/* Post Image */}
                <img
                  src={post.image}
                  alt="Post"
                  className="w-[250px] h-[270px] object-cover mr-4" // Reduced size
                />

                {/* Post Content */}
                <div className="ml-4">
                  <p className="text-sm font-semibold text-[#592EA9] mt-5">
                    {post.category}
                  </p>
                  <h1
                    className="text-2xl font-bold text-black mt-3" // Reduced font size
                    dangerouslySetInnerHTML={{ __html: post.title }} />
                  <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: post.description }} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Section (Categories and All Tags) */}
          <div className="w-[270px]">
            {/* Categories */}
            <h1 className="text-3xl font-bold text-black mb-6 ">Categories</h1>
            <div className="space-y-5">
    {/* Category Cards */}
    <div className="flex items-center space-x-4 border p-3 hover:bg-[#FFD050]">
      <div className="w-10 h-10 bg-[#FBF6EA] rounded-3 flex justify-center items-center">
        <img src={icon1} alt="Startup" className="w-5 h-4" />
      </div>
      <h3 className="text-lg font-semibold text-[#232536] px-3 py-2">Startup</h3>
    </div>

    <div className="flex items-center space-x-4 border p-3 hover:bg-[#FFD050]">
      <div className="w-10 h-10 bg-[#FBF6EA] rounded-3 flex justify-center items-center">
        <img src={icon2} alt="Business" className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-semibold text-[#232536] px-3 py-2">Business</h3>
    </div>

    <div className="flex items-center space-x-4 border p-3 hover:bg-[#FFD050]">
      <div className="w-10 h-10 bg-[#FBF6EA] rounded-3 flex justify-center items-center">
        <img src={icon3} alt="Economy" className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-semibold text-[#232536] px-3 py-2">Economy</h3>
    </div>

    <div className="flex items-center space-x-4 border p-3 hover:bg-[#FFD050]">
      <div className="w-10 h-10 bg-[#FBF6EA] rounded-3 flex justify-center items-center">
        <img src={icon4} alt="Technology" className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-semibold text-[#232536] px-3 py-2">Technology</h3>
    </div>
  </div>

            {/* All Tags Section - Below Categories */}
            <div className="mt-12">
              <h1 className="text-3xl font-bold text-black mb-6">All Tags</h1>
              <div className="space-y-4">
                {/* First Set of Buttons */}
                <div className="flex space-x-4">
                  <button className="border border-[#232536] text-[#232536] w-[200px] py-2 px-4 rounded-5 hover:bg-[#592EA9] hover:text-white">
                    Business
                  </button>
                  <button className="border border-[#232536] text-[#232536] w-[250px] py-2 px-4 rounded-5 hover:bg-[#592EA9] hover:text-white">
                    Experience
                  </button>
                </div>

                {/* Second Set of Buttons */}
                <div className="flex space-x-4">
                  <button className="border border-[#232536] text-[#232536] w-[100px] py-2 px-4  rounded-5 hover:bg-[#592EA9] hover:text-white">
                    Screen
                  </button>
                  <button className="border border-[#232536] text-[#232536] w-[400px] py-2 px-4 rounded-5 hover:bg-[#592EA9] hover:text-white">
                    Technology
                  </button>
                </div>

                {/* Third Set of Buttons */}
                <div className="flex space-x-4">
                  <button className="border border-[#232536] text-[#232536] w-[170px] py-2 px-4 rounded-5 hover:bg-[#592EA9] hover:text-white">
                    Marketing
                  </button>
                  <button className="border border-[#232536] text-[#232536] w-[100px] py-2 px-4 rounded-5 hover:bg-[#592EA9] hover:text-white ">
                    Life
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BusinessPage2;
