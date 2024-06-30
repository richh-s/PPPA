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

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-md mb-4">
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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative gradient-border">
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
        <div className="flex flex-col sm:flex-row justify-between items-center">
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

          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            {/* Search Bar */}
            <div className="relative flex items-center">
              <div className="absolute left-0 pl-3">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-4  py-1 border border-gray-300 rounded-md focus:outline-none text-sm w-[140px]"
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
      </div>
    </div>
  );
};

export default NavBar;
// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { IoIosArrowDown, IoMenu } from 'react-icons/io5';
// import { FaSearch, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

// import logo from '../../../public/assets/images/logo.png';

// const CustomLink = ({ href, children, className }) => {
//   const isExternalLink = href.startsWith('http');

//   if (isExternalLink) {
//     return (
//       <a href={href} target="_blank" rel="noopener noreferrer" className={`text-black ${className} whitespace-nowrap`}>
//         {children}
//       </a>
//     );
//   } else {
//     return (
//       <Link href={href}>
//         <div className={`text-black ${className} whitespace-nowrap`}>
//           {children}
//         </div>
//       </Link>
//     );
//   }
// };

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false); // State for menu visibility
//   const [showLanguageMenu, setShowLanguageMenu] = useState(false); // State for language menu visibility

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const toggleLanguageMenu = () => {
//     setShowLanguageMenu(!showLanguageMenu);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full bg-white text-black z-50 shadow-md mb-4">
//       <style jsx>{`
//         .gradient-border {
//           border-width: 2.82px;
//           border-style: solid;
//           border-image: linear-gradient(180deg, #C08400 0%, #FFBC07 100%);
//           padding-bottom: 2.82px; /* Offset padding to prevent overlap with content */
//         }
//         .menu-link {
//           transition: color 0.3s ease;
//           cursor: pointer;
//         }
//         .menu-icon {
//           cursor: pointer;
//         }
//       `}</style>
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative gradient-border">
//         {/* Top Section: Logo and Social Icons */}
//         <div className="flex flex-col sm:flex-row justify-between items-center py-2">
//           <div className="flex items-center space-x-2">
//             {/* Logo */}
//             <Link href="/" passHref>
//               <div className="cursor-pointer">
//                 <Image src={logo} alt="Logo" width={100} height={100} className="cursor-pointer" />
//               </div>
//             </Link>
//             {/* Company Name */}
//             <div>
//               <h1 className="text-lg font-bold">የመንግስት ግዥና ንብረት ባለሥልጣን</h1>
//               <h2 className="text-sm">Public Procurement and Property Authority</h2>
//             </div>
//           </div>
//           {/* Social Icons */}
//           <div className="flex space-x-2 mt-2 sm:mt-0">
//             <Link href="https://facebook.com" passHref>
//               <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
//                 <FaFacebook className="text-sm" />
//               </div>
//             </Link>
//             <Link href="https://twitter.com" passHref>
//               <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
//                 <FaTwitter className="text-sm" />
//               </div>
//             </Link>
//             <Link href="https://linkedin.com" passHref>
//               <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
//                 <FaLinkedin className="text-sm" />
//               </div>
//             </Link>
//             <Link href="https://instagram.com" passHref>
//               <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
//                 <FaInstagram className="text-sm" />
//               </div>
//             </Link>
//             <Link href="https://youtube.com" passHref>
//               <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
//                 <FaYoutube className="text-sm" />
//               </div>
//             </Link>
//             <Link href="https://telegram.org" passHref>
//               <div className="text-white bg-[#092B57] p-1 rounded-full hover:bg-opacity-75 cursor-pointer">
//                 <FaTelegramPlane className="text-sm" />
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Bottom Section: Menu Items, Search Bar, and Language Switcher */}
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           {/* Menu Icon for Mobile */}
//           <div className="flex items-center sm:hidden">
//             <IoMenu className="text-3xl menu-icon" onClick={toggleMenu} />
//           </div>

//           {/* Menu Items - Hidden by default on small screens */}
//           <div className={`sm:flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-6 ${showMenu ? 'block' : 'hidden'}`}>
//             <CustomLink href="/" className="menu-link hover:text-gray-700">Home</CustomLink>
//             <CustomLink href="/the-agency" className="menu-link hover:text-gray-700">The Agency</CustomLink>
//             <CustomLink href="/awards" className="menu-link hover:text-gray-700">Awards</CustomLink>
//             <CustomLink href="/bid-closure" className="menu-link hover:text-gray-700">Bid Closure</CustomLink>
//             <CustomLink href="/press-media" className="menu-link hover:text-gray-700">Press & Media</CustomLink>
//             <CustomLink href="/resources" className="menu-link hover:text-gray-700">Resources</CustomLink>
//             <CustomLink href="/ppa-directive" className="menu-link hover:text-gray-700">PPA Directive</CustomLink>
//             <CustomLink href="/report" className="menu-link hover:text-gray-700">Report</CustomLink>
//             <CustomLink href="/vacancy" className="menu-link hover:text-gray-700">Vacancy</CustomLink>
//             <CustomLink href="/contact" className="menu-link hover:text-gray-700">Contact</CustomLink>
//           </div>

//           {/* Search Bar and Language Switcher - Adjusted for mobile */}
//           <div className="flex items-center space-x-2 mt-2 sm:mt-0 w-full sm:w-auto">
//             {/* Search Bar */}
//             <div className="relative flex items-center">
//               <div className="absolute left-0 pl-3">
//                 <FaSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="pl-8 pr-4  py-1 border border-gray-300 rounded-md focus:outline-none text-sm w-[140px]"
//               />
//             </div>

//             {/* Language Switcher */}
//             <div className="relative">
//               <button
//                 onClick={toggleLanguageMenu}
//                 className="text-black hover:text-gray-700 focus:outline-none flex items-center"
//               >
//                 English <IoIosArrowDown className="ml-1" />
//               </button>
//               {showLanguageMenu && (
//                 <div className="absolute right-0 mt-2 w-35 h-10 bg-white border border-gray-200 shadow-lg rounded-md z-10 transform transition-transform duration-300 ease-out scale-100">
//                   <ul>
//                     <li className="px-4 py-2 hover:text-gray-700 cursor-pointer text-center">አማረኛ</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
