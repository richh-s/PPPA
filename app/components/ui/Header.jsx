import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

import logo from '../../../public/assets/images/logo.png'; // Adjust the path to your logo image

const TopNavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjust padding for different screen sizes */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image src={logo} alt="Logo" width={80} height={80} className="cursor-pointer" /> {/* Adjust width and height as needed */}
              <div>
                <div className="text-sm font-bold text-[#092B57]">የመንግስት ግዥና ንብረት ባለሥልጣን</div>
                <div className="text-xs text-[#092B57]">Public Procurement and Property Authority</div>
              </div>
            </div>
          </Link>
          <div className="social-icons flex items-center space-x-4">
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

export default TopNavBar;
