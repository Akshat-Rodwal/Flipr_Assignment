import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Import author images and social icons
import authorImage1 from "./assets/assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import authorImage2 from "./assets/assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import authorImage3 from "./assets/assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg";
import authorImage4 from "./assets/assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg";

// New images for authors 5 to 8
import authorImage5 from "./assets/assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg";
import authorImage6 from "./assets/assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083 (2).svg";
import authorImage7 from "./assets/assets/Client-First - IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg";
import authorImage8 from "./assets/assets/Client-First - IMAGES/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg";

// Import social icons
import facebookIcon from "./assets/assets/Client-First - icons/Negative.svg";
import twitterIcon from "./assets/assets/Client-First - icons/Negative (4).svg";
import instagramIcon from "./assets/assets/Client-First - icons/Negative (2).svg";
import linkedinIcon from "./assets/assets/Client-First - icons/Negative (3).svg";

function AboutUs4() {
  return (
    <section className="px-6 md:px-12 py-12">
      <h1 className="text-4xl font-bold text-[#232536] mb-12 text-center">
        List of Authors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Author */}
        <Link to="/author">
          <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
            <img src={authorImage1} alt="Floyd Miles" className="w-30 h-30 rounded-full object-cover mt-3" />
            <h2 className="text-3xl font-bold text-[#232536]">Floyd Miles</h2>
            <p className="text-gray-600">Content Writer @Company</p>
            <div className="flex space-x-4 text-[#232536]">
              <a href="#" aria-label="Facebook" className="hover:opacity-75">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-75">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-75">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </Link>

        {/* Second Author */}
        <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
          <img src={authorImage2} alt="Dianne Russell" className="w-30 h-30 rounded-full object-cover mt-3" />
          <h2 className="text-3xl font-bold text-[#232536]">Dianne Russell</h2>
          <p className="text-gray-600">Content Writer @Company</p>
          <div className="flex space-x-4 text-[#232536]">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Third Author */}
        <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
          <img src={authorImage3} alt="Jenny Wilson" className="w-30 h-30 rounded-full object-cover mt-3" />
          <h2 className="text-3xl font-bold text-[#232536]">Jenny Wilson</h2>
          <p className="text-gray-600">Content Writer @Company</p>
          <div className="flex space-x-4 text-[#232536]">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Fourth Author */}
        <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
          <img src={authorImage4} alt="Leslie Alexander" className="w-30 h-30 rounded-full object-cover mt-3" />
          <h2 className="text-3xl font-bold text-[#232536]">Leslie Alexander</h2>
          <p className="text-gray-600">Content Writer @Company</p>
          <div className="flex space-x-4 text-[#232536]">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Fifth Author */}
        <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
          <img src={authorImage5} alt="Floyd Miles" className="w-30 h-30 rounded-full object-cover mt-3" />
          <h2 className="text-3xl font-bold text-[#232536]">Guy Hawkins</h2>
          <p className="text-gray-600">Content Writer @Company</p>
          <div className="flex space-x-4 text-[#232536]">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Sixth Author */}
        <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
          <img src={authorImage6} alt="Dianne Russell" className="w-30 h-30 rounded-full object-cover mt-3" />
          <h2 className="text-3xl font-bold text-[#232536]">Eleanor Pena</h2>
          <p className="text-gray-600">Content Writer @Company</p>
          <div className="flex space-x-4 text-[#232536]">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Seventh Author */}
        <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
          <img src={authorImage7} alt="Jenny Wilson" className="w-30 h-30 rounded-full object-cover mt-3" />
          <h2 className="text-3xl font-bold text-[#232536]">Robert Fox</h2>
          <p className="text-gray-600">Content Writer @Company</p>
          <div className="flex space-x-4 text-[#232536]">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Eighth Author */}
        <div className="flex flex-col items-center p-6 bg-[#F4F4F4] space-y-4 text-center hover:bg-[#FBF6EA] transition-colors duration-300">
          <img src={authorImage8} alt="Leslie Alexander" className="w-30 h-30 rounded-full object-cover mt-3" />
          <h2 className="text-3xl font-bold text-[#232536]">Jacob Jones</h2>
          <p className="text-gray-600">Content Writer @Company</p>
          <div className="flex space-x-4 text-[#232536]">
            <a href="#" aria-label="Facebook" className="hover:opacity-75">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-75">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-75">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs4;
