import React from "react";

function Contact() {
  return (
    <div>
      {/* Gradient Section */}
      <div className="bg-gradient-to-r from-[#ffa229] to-[#1c4670] text-white py-16">
        <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
          <p className="uppercase text-sm font-semibold">1% of the Industry</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            Welcome to your new digital reality. Now.
          </h1>
          <div className="mt-6">
            <form className="flex flex-col sm:flex-row justify-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 mb-4 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-[#ffa229] px-6 py-2 h-[2.5rem] rounded-r-lg text-white hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Feature text="Instant results" />
            <Feature text="User-friendly interface" />
            <Feature text="Personalized customization" />
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-white py-12">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-10 lg:gap-12">
          <BrandLogo src="/Assets/Coinbase.png" alt="Coinbase" />
          <BrandLogo src="/Assets/Spotify.png" alt="Spotify" />
          <BrandLogo src="/Assets/Dropbox.png" alt="Dropbox" />
          <BrandLogo src="/Assets/Slack.png" alt="Slack" />
          <BrandLogo src="/Assets/Zoom.png" alt="Zoom" />
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-10 bg-gray-50">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Frequent Ask Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <FAQ question="Can I recover deleted files from desktop with this software?" />
          <FAQ question="Is this software free to use?" />
          <FAQ question="Does it work on both Windows and Mac?" />
          <FAQ question="How long does it take to recover files?" />
          <FAQ question="Is technical support available?" />
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300">
            Show more →
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-white py-1 px-[5px] rounded-full">
        <svg
          className="w-[.6rem] fill-[#1c4670]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      </span>
      <span>{text}</span>
    </div>
  );
}

function BrandLogo({ src, alt }) {
  return (
    <img
      className="w-20 sm:w-24 md:w-28 lg:w-32"
      src={src}
      alt={alt}
    />
  );
}

function FAQ({ question }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm mb-4">
      <button className="w-full text-left px-6 py-4 bg-white flex items-center justify-between hover:bg-gray-100 transition-all duration-300">
        <span className="font-medium text-gray-800">{question}</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          className="text-gray-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
        </svg>
      </button>
    </div>
  );
}

export default Contact;
