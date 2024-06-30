
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearch, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTelegramPlane, FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../../public/assets/images/logo.png';

const CustomLink = ({ href, children, className }) => {
  const isExternalLink = href.startsWith('http');

  if (isExternalLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`text-black ${className} whitespace-nowrap`}>
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <div className={`text-black ${className} whitespace-nowrap`}>
          {children}
        </div>
      </Link>
    );
  }
};

const NavBar = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-md ">
      <style jsx>{`
        .gradient-border {
          border-width: 2.82px;
          border-style: solid;
          border-image: linear-gradient(180deg, #C08400 0%, #FFBC07 100%);
          padding-bottom: 2.82px; /* Offset padding to prevent overlap with content */
        }
        .menu-link {
          transition: color 0.3s ease;
          cursor: pointer;
        }
      `}</style>
      <div className="max-w-screen-xl mx-auto px-4  sm:px-6 lg:px-8 relative gradient-border">
        {/* Top Section: Logo and Social Icons */}
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" passHref>
            <div className="cursor-pointer flex items-center  space-x-2 ">
              <Image src={logo} alt="Logo" width={100} height={100} className="cursor-pointer" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-[#092B57]">የመንግስት ግዥና ንብረት ባለሥልጣን</h1>
                <h2 className="text-sm text-[#092B57]">Public Procurement and Property Authority</h2>
              </div>
            </div>
          </Link>

          {/* Menu Icon */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none px-4 py-6">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex justify-center items-center space-x-2">
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
        <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
              <CustomLink href="/" className="menu-link hover:text-gray-700">Home</CustomLink>
              <CustomLink href="/the-agency" className="menu-link hover:text-gray-700">The Agency</CustomLink>
              <CustomLink href="/awards" className="menu-link hover:text-gray-700">Awards</CustomLink>
              <CustomLink href="/bid-closure" className="menu-link hover:text-gray-700">Bid Closure</CustomLink>
              <CustomLink href="/press-media" className="menu-link hover:text-gray-700">Press & Media</CustomLink>
              <CustomLink href="/resources" className="menu-link hover:text-gray-700">Resources</CustomLink>
              <CustomLink href="/ppa-directive" className="menu-link hover:text-gray-700">PPA Directive</CustomLink>
              <CustomLink href="/report" className="menu-link hover:text-gray-700">Report</CustomLink>
              <CustomLink href="/vacancy" className="menu-link hover:text-gray-700">Vacancy</CustomLink>
              <CustomLink href="/contact" className="menu-link hover:text-gray-700">Contact</CustomLink>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 mt-2 sm:mt-0 space-y-2 sm:space-y-0">
              {/* Search Bar */}
              <div className="relative flex items-center">
                <div className="absolute left-0 pl-3">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-4 py-1 border border-gray-300 rounded-md focus:outline-none ml-2 text-sm w-[130px]"
                />
              </div>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="text-black hover:text-gray-700 focus:outline-none flex items-center"
                >
                  English <IoIosArrowDown className="ml-1" />
                </button>
                {showLanguageMenu && (
                  <div className="absolute right-0 mt-2 w-35 h-10 bg-white border border-gray-200 shadow-lg rounded-md z-10 transform transition-transform duration-300 ease-out scale-100">
                    <ul>
                      <li className="px-4 py-2 hover:text-gray-700 cursor-pointer text-center">አማረኛ</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Social Icons for Mobile */}
          <div className="flex sm:hidden space-x-2 mt-2">
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
      </div>
    </div>
  );
};

export default NavBar;
