import React from "react";
import heroImage from "./assets/assets/Client-First - IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg"; // Import the image

function PostDetail2() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="w-[90%] h-[610px] bg-cover bg-center mx-auto mb-10"
        style={{ backgroundImage: `url(${heroImage})` }} // Set the background image
      >
        {/* No content inside the hero section */}
      </section>

      {/* Content Below the Hero Image */}
      <div className="w-[60%] mx-auto">
      <h1 className=" text-3xl font-bold text-black mb-4 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </h1>

        <p className=" text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <h1 className=" text-3xl font-bold text-black mb-4 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </h1>
        <p className=" text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className=" text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        {/* Bullet Points Section */}
        <div className=" mb-6">
          
          <ul className="text-2xl font-semibold list-disc list-inside text-gray-600 pt-2 pb-2">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Non Blandit massa enim nec scelerisque</li>
            <li>Neque egestas congue quisque egestas</li>
          </ul>
        </div>

        <p className=" text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        {/* Final Heading and Paragraph */}
        <h1 className=" text-3xl font-bold text-black mb-4 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </h1>
        <p className=" text-gray-600 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
}

export default PostDetail2;
