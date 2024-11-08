import React from "react";

// Import images
import image1 from "./assets/assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg";
import image2 from "./assets/assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg";
import image3 from "./assets/assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg";
import image4 from "./assets/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg";

function Blog2() {
  const posts = [
    { image: image4, category: "STARTUP", title: "Design tips for designers that cover<br /> everything you need", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { image: image3, category: "BUSINESS", title: "How to build rapport with Your web <br /> design clients", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { image: image1, category: "START UP", title: "Logo design trends to avoid in 2022", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { image: image2, category: "TCHNNOLOGY", title: "8 Figma design systems you can <br/> download for free today", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { image: image4, category: "ECONOMY", title: "Font sizes in UI design: The complete <br/> guide to follow", description: "Duis aute irure dolor in reprehenderit in Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];

  return (
    <section className="px-6 py-12">
      <div className="max-w-1xl mx-auto pl-9">
        <h1 className="text-4xl font-bold text-black mb-11">All Posts</h1>

        {/* Loop through each post */}
        {posts.map((post, index) => (
          <div key={index} className="flex items-start mb-11">
            {/* Post Image */}
            <img
              src={post.image}
              alt="Post"
              className="w-[550px] h-[290px] object-cover mr-4"
            />

            {/* Post Content */}
            <div className="ml-5">
              <p className="text-sm font-semibold text-[#592EA9] mt-5">
                {post.category}
              </p>
              {/* Use dangerousInnerHTML to parse <br /> properly in title */}
              <h1
                className="text-3xl font-bold text-black mt-3"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              {/* Use dangerousInnerHTML for description to handle <br /> */}
              <p className="text-gray-600 mt-3" dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>
          </div>
        ))}

        {/* Centered Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button className="font-semibold text-gray-500  py-2 ">
            &lt; Prev
          </button>
          <button className="font-semibold text-[#232536]  py-2 ">
            Next &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog2;
