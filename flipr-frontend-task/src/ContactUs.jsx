import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <section className="py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Contact Us
          </h3>
          <h1 className="text-4xl font-bold text-[#232536] mb-4">
            Let’s Start a Conversation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="bg-[#592EA9] text-white p-16 flex flex-col md:flex-row justify-between items-center mb-10 max-w-3xl mx-auto">
          <div className="mb-6 md:mb-0 md:flex-1 md:pr-8">
            <h3 className="text-sm  mb-1 text-gray-300">Working hours</h3>
            <hr className="border-t border-gray-300 my-2 w-full mt-3 mb-4" />
            <p className="font-bold text-xl">Monday To Friday</p>
            <p className="font-bold text-xl">9:00 AM to 8:00 PM</p>
            <p className="text-sm text-gray-300 mt-2">Our Support Team is available 24/7</p>
          </div>
          <div className="md:flex-1 md:pl-8 mb-4">
            <h3 className="text-sm  mb-1 text-gray-300">Contact Us</h3>
            <hr className="border-t border-gray-300 my-2 w-full mt-3 mb-4" />
            <p className="font-bold text-xl">020 7993 2905</p>
            <p className="text-sm text-gray-300 mt-2">hello@finsweet.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto ">
          <form className="space-y-6 ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2] text-[#232536]"
              
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2]"
            />
            <select
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2] text-gray-600"
              defaultValue=""
            >
              <option value="" disabled>
                Query Related
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#7A40F2] h-32"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#FFD050] text-[#232536] font-semibold hover:bg-[#e6c044] transition mb-5"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ContactUs;
