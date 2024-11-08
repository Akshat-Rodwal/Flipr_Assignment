import React from "react";
import logo1 from "./assets/assets/Client-First - IMAGES/Logo 1.svg";
import logo2 from "./assets/assets/Client-First - IMAGES/Logo 2.svg";
import logo3 from "./assets/assets/Client-First - IMAGES/Logo 3.svg";
import logo4 from "./assets/assets/Client-First - IMAGES/Logo 4.svg";
import logo5 from "./assets/assets/Client-First - IMAGES/Logo 5.svg";

function Home7() {
  return (
    <section className="px-6 md:px-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side (Text) */}
        <div className="w-full md:w-[290px] text-left mb-6 md:mb-0">
          <p className="text-lg text-gray-600">We are</p>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#232536]">Featured in</h1>
        </div>

        {/* Right Side (Logos) */}
        <div className="w-full flex flex-wrap justify-start mt-3 md:mt-0 ml-12 mt-5">
          <img src={logo1} alt="Logo 1" className="h-9 w-auto mx-4 mb-4 md:mb-0 " />
          <img src={logo2} alt="Logo 2" className="h-9 w-auto mx-4 mb-4 md:mb-0" />
          <img src={logo3} alt="Logo 3" className="h-9 w-auto mx-4 mb-4 md:mb-0" />
          <img src={logo4} alt="Logo 4" className="h-9 w-auto mx-4 mb-4 md:mb-0" />
          <img src={logo5} alt="Logo 5" className="h-9 w-auto mx-4 mb-4 md:mb-0" />
        </div>
      </div>
    </section>
  );
}

export default Home7;
