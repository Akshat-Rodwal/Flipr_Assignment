import React from "react";

// Import images
import image1 from "./assets/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import image2 from "./assets/assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg";
import image3 from "./assets/assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg";

function PostDetail3() {
  const cards = [
    { image: image1, author: "John Doe | Aug 23, 2021", title: "A UX Case Study Creating a Studious Environment for Students", description: "Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit." },
    { image: image2, author: "John Doe | Aug 23, 2021", title: "A UX Case Study Creating a Studious Environment for Students", description: "Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit." },
    { image: image3, author: "John Doe | Aug 23, 2021", title: "A UX Case Study Creating a Studious Environment for Students", description: "Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit Duis aute irure dolor in reprehenderit." },
  ];

  return (
    <section className="px-6 md:px-12 py-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-black mb-5">What to read next</h1>
      
      {/* Cards Container */}
      <div className="flex justify-between">
        {/* Loop through each card */}
        {cards.map((card, index) => (
          <div key={index} className="w-[32%]">
            {/* Card */}
            <div className="bg-white">
              {/* Card Image */}
              <img src={card.image} alt="Card Image" className="w-full h-[340px] object-cover" />
              
              {/* Card Content */}
              <p className="text-sm font-semibold text-gray-700 mt-3">{card.author}</p>
              <h1 className="text-2xl font-bold text-black mt-2">{card.title}</h1>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Horizontal Line Section */}
      <div className="mt-12 ">
        <hr className="border-t-2 border-gray-400 " />
      </div>
    </section>
  );
}

export default PostDetail3;
