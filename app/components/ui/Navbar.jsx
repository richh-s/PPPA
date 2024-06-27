"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearch, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

import logo from '../../../public/assets/images/logo.png';

const CustomLink = ({ href, children, className }) => {
  const isExternalLink = href.startsWith('http');

  if (isExternalLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`text-black hover:text-gray-300 ${className}`}>
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <div className={`text-black hover:text-gray-300 ${className}`}>
          {children}
        </div>
      </Link>
    );
  }
};

const NavBar = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo and Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <Link href="/" passHref>
              <div className="cursor-pointer">
                <Image src={logo} alt="Logo" width={100} height={100} className="cursor-pointer" />
              </div>
            </Link>
            {/* Company Name */}
            <div>
              <h1 className="text-lg font-bold">የመንግስት ግዥና ንብረት ባለሥልጣን</h1>
              <h2 className="text-sm">Public Procurement and Property Authority</h2>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <Link href="https://facebook.com" passHref>
              <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
                <FaFacebook className="text-sm" />
              </div>
            </Link>
            <Link href="https://twitter.com" passHref>
              <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
                <FaTwitter className="text-sm" />
              </div>
            </Link>
            <Link href="https://linkedin.com" passHref>
              <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
                <FaLinkedin className="text-sm" />
              </div>
            </Link>
            <Link href="https://instagram.com" passHref>
              <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
                <FaInstagram className="text-sm" />
              </div>
            </Link>
            <Link href="https://youtube.com" passHref>
              <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
                <FaYoutube className="text-sm" />
              </div>
            </Link>
            <Link href="https://telegram.org" passHref>
              <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
                <FaTelegramPlane className="text-sm" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Menu Items, Search Bar, and Language Switcher */}
        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
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

          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <div className="absolute left-0 pl-3">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4 py-1 border border-gray-300 rounded-md focus:outline-none text-sm w-[160px]"
              />
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="text-black hover:text-gray-300 focus:outline-none flex items-center"
              >
                English <IoIosArrowDown className="ml-1" />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">አማረኛ</li>
                    {/* Add more language options as needed */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
