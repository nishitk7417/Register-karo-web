import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex h-[72px] items-center justify-between px-5 sm:px-3 md:px-2">
      <div>
        <Link className="relative" to="/">
          <img
            className="w-[355px] h-[69px] absolute z-0 top-[-1rem] hidden lg:block"
            src="/Assets/celebrate.gif"
            alt="celebrate"
          />
          <img
            className="w-[35px] h-[34px] z-20 absolute top-[-1rem] left-[-1rem] transform scale-x-[-1]"
            src="/Assets/cap.png"
            alt="cap"
          />
          <img
            className="w-[200px] h-[36.8px] z-10 relative"
            src="/Assets/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3 p-3">
        <ul className="hidden lg:flex gap-4 mr-2">
          <Link to="/" className="cursor-pointer px-1 rounded-[4px] hover:bg-[#1C4670] hover:text-white">
            Home
          </Link>
          <Link to='/services' className="flex gap-1 items-center cursor-pointer px-1 rounded-[4px] hover:bg-[#1C4670] hover:text-white hover:fill-white">
            Our Services
            <svg
              className="w-[10px] mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </Link>
          <Link to='/blog' className="cursor-pointer px-1 rounded-[4px] hover:bg-[#1C4670] hover:text-white">
            Blog
          </Link>
          <Link to="/contact" className="cursor-pointer px-1 rounded-[4px] hover:bg-[#1C4670] hover:text-white">
            Contact Us
          </Link>
          <Link to="/aboutus" className="cursor-pointer px-1 rounded-[4px] hover:bg-[#1C4670] hover:text-white">
            About Us
          </Link>
        </ul>
        <span className="hidden lg:block">
          <svg
            className="w-[20px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </span>
        <button className="w-[157px] h-[46px] bg-[#FFA229] rounded-[4px] text-white ml-2 hover:bg-[#1C4670] hidden lg:block">
          Talk An Expert
        </button>
        <div className="lg:hidden">
          <svg
            onClick={toggleMenu}
            className="w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white shadow-lg z-50 p-4">
          <ul className="flex flex-col gap-3">
            <Link to="/" onClick={toggleMenu} className="px-4 py-2 text-gray-700 hover:bg-[#1C4670] hover:text-white">
              Home
            </Link>
            <li className="px-4 py-2 text-gray-700 hover:bg-[#1C4670] hover:text-white">
              Our Services
            </li>
            <li className="px-4 py-2 text-gray-700 hover:bg-[#1C4670] hover:text-white">
              Blog
            </li>
            <Link to="/contact" onClick={toggleMenu} className="px-4 py-2 text-gray-700 hover:bg-[#1C4670] hover:text-white">
              Contact Us
            </Link>
            <Link to="/aboutus" onClick={toggleMenu} className="px-4 py-2 text-gray-700 hover:bg-[#1C4670] hover:text-white">
              About Us
            </Link>
            <button className="w-full px-4 py-2 mt-2 bg-[#FFA229] text-white rounded hover:bg-[#1C4670]">
              Talk An Expert
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav2;
