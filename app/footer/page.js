// components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-12 w-full mt-12">
      <div className="container mx-auto px-4 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <img src="../assets/images/footer.png" alt="Logo" className="w-32 mb-4" />
            <p className="text-sm">
              6 Killo Infront Of Yekatit 12 Referral Hospital Addis Ababa Ethiopia
            </p>
            <p className="text-sm">9452 Call Center</p>
            <p className="text-sm">011 552 38 33 / 011 552 84 11</p>
            <p className="text-sm">fppa@fppa.gov.et</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Ministry</h3>
            <ul className="space-y-2 text-sm">
              <li>The Agency</li>
              <li>About Us</li>
              <li>Message From Minister</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>VACANCIES</li>
              <li>Bid</li>
              <li>Forms</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-l"
              />
              <button className="bg-[#003366] text-blue-900 px-4 py-2 rounded-r">Submit</button>
            </form>
            <h3 className="font-bold mt-4 mb-2">Follow us</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-lg" />
              <FaTwitter className="text-lg" />
              <FaLinkedinIn className="text-lg" />
              <FaInstagram className="text-lg" />
              <FaYoutube className="text-lg" />
              <FaTelegramPlane className="text-lg" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
          Copyright 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
