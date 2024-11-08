import React from "react";
import Navbar from "./Navbar";

function BusinessPage() {
  return (
    <><Navbar /><div>
          {/* Hero Section */}
          <section className="h-[230px] bg-[#F4F0F8] flex justify-center items-center">
              <div className="text-center">
                  <h1 className="text-4xl font-bold text-black mb-2">Business</h1>
                  <p className="text-sm text-gray-600 pt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore.
                  </p>
                  <p className="text-sm font-semibold text-gray-600 mt-4">BLOG {'>'} BUSINESS</p>
              </div>
          </section>
      </div></>
  );
}

export default BusinessPage;
