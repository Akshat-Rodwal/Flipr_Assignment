// PostDetail.js
import React from 'react';
import cheerfullImage from './assets/assets/Client-First - IMAGES/Image.svg'; // Use appropriate image
import iconImage from './assets/assets/Client-First - icons/Icon (2).svg'; // Use the provided image path
import Navbar from './Navbar';

function PostDetail() {
  return (
    <><Navbar /><section className="px-6 py-12 ml-[400px] mt-3">
          <div className="max-w-1xl mx-auto text-left">

              {/* Author Details */}
              <div className="flex items-center  mt-8">
                  <img src={cheerfullImage} alt="Author" className="h-11 w-11 rounded-full mr-3" />
                  <div>
                      <h1 className="text-lg font-semibold text-[#592EA9] ">Andrew Jonson</h1>
                      <p className="text-sm text-gray-600">Posted on 27th January 2022</p>
                  </div>
              </div>

              {/* Post Title */}
              <h1 className="text-4xl font-bold text-black mt-8">Step-by-step guide to choosing <br />great font pairs</h1>

              {/* Icon and Category */}
              <div className="flex items-center  mt-8 mb-3">
                  <img src={iconImage} alt="Icon" className="h-4 w-5 mr-1" />
                  <p className="text-sm font-semibold text-[#232536] ">Startup</p>
              </div>

          </div>
      </section></>
  );
}

export default PostDetail;
