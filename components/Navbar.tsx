import React, { useState } from "react";

const Home = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <>
      {/* Apply padding for the entire page */}
      <div className="">
        <nav className="bg-white border-b pb-[2vh] border-gray-200">
          <div className="flex items-center h-16 px-4 md:px-8">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-2">
              <img src="./logo1.png" alt="Dihaari Logo" className="h-11 w-11" />
              <span className="text-3xl font-bold">Dihaari</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex">
              <div className="pt-2 hidden md:flex space-x-8 pl-[3vw] text-lg">
                <a href="#home" className="text-gray-700 hover:text-blue-600">
                  Home
                </a>
                <a
                  href="#companies"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Companies
                </a>
                <a href="#groups" className="text-gray-700 hover:text-blue-600">
                  Groups
                </a>
                <a href="#blogs" className="text-gray-700 hover:text-blue-600">
                  Blogs
                </a>
                <div className="flex items-center border border-blue-400 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-blue-50 transition duration-200">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-1 text-sm text-gray-700 placeholder-gray-400 outline-none rounded-l-full bg-transparent w-40 focus:bg-blue-50"
                  />
                  <button className="px-2 py-1 rounded-r-full hover:bg-blue-400 transition duration-200">
                    <img
                      src="./search.png"
                      className="h-4 w-4 text-white"
                      alt="Search Icon"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden ml-auto">
              <button onClick={toggleMobileNav} className="text-gray-700">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Search and Profile */}
            <div className="flex items-center pl-[33vw] space-x-4">
              <button className="ml-auto md:ml-0">
                <img
                  src="./profile.png"
                  alt="Profile Icon"
                  className="h-8 w-8 rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileNavVisible && (
            <div className="flex flex-col space-y-4 mt-4 md:hidden">
              <a href="#home" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#companies" className="text-gray-700 hover:text-blue-600">
                Companies
              </a>
              <a href="#groups" className="text-gray-700 hover:text-blue-600">
                Groups
              </a>
              <a href="#blogs" className="text-gray-700 hover:text-blue-600">
                Blogs
              </a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Home;
