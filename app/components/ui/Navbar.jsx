"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Menu Items */}
          <div className="flex items-center space-x-6">
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/the-agency">The Agency</CustomLink>
            <CustomLink href="/awards">Awards</CustomLink>
            <CustomLink href="/bid-closure">Bid Closure</CustomLink>
            <CustomLink href="/press-media">Press & Media</CustomLink>
            <CustomLink href="/resources">Resources</CustomLink>
            <CustomLink href="/ppa-directive">PPA Directive</CustomLink>
            <CustomLink href="/report">Report</CustomLink>
            <CustomLink href="/vacancy">Vacancy</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
          </div>
          
          {/* Right side - Language Switcher and Search */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                English <IoIosArrowDown className="inline-block ml-1" />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  {/* Amharic menu options */}
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amharic Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amharic Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Amharic Option 3</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="absolute right-0 top-0 mt-1 mr-1 focus:outline-none">
                <svg
                  className="h-4 w-4 text-gray-500 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 18l-6-6 6-6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Custom Link component to handle navigation using Next.js Link
const CustomLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="text-white hover:text-gray-300">{children}</a>
    </Link>
  );
};

export default NavBar;
