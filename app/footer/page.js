// components/Footer.js
"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaTelegramPlane, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
 
  return (
    <footer className="bg-[#003366] text-white py-12 w-full">
      <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-full ">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="md:col-span-2 flex flex-col items-start">
            <img src="../assets/images/footer.png" alt="Logo" className="w-32 mb-4" />
            <div className="text-white">
              <p className="text-sm">የመንግስት ግዥና ንብረት ባለሥልጣን</p>
              <p className="text-sm">Public Procurement and Property Authority</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-bold mb-2 text-[#D2AC47]">Contacts</h3>
            <ul className="space-y-2 text-sm">
             
              <li className="flex items-center">
                <svg width="18" height="18" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.80433 9.02067 10 8.55 10 8C10 7.45 9.80433 6.979 9.413 6.587C9.021 6.19567 8.55 6 8 6C7.45 6 6.97933 6.19567 6.588 6.587C6.196 6.979 6 7.45 6 8C6 8.55 6.196 9.02067 6.588 9.412C6.97933 9.804 7.45 10 8 10ZM8 20C5.31667 17.7167 3.31267 15.5957 1.988 13.637C0.662667 11.679 0 9.86667 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.021 0.741667 5.88333 0 8 0C10.1167 0 11.979 0.741667 13.587 2.225C15.1957 3.70833 16 5.7 16 8.2C16 9.86667 15.3377 11.679 14.013 13.637C12.6877 15.5957 10.6833 17.7167 8 20Z" fill="white"/>
                </svg>
                6 Killo Infront Of Yekatit 12 Referral Hospital Addis Ababa Ethiopia
              </li>
              <li className="flex items-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M-4.5897e-08 1.05C-3.27836e-08 0.749999 0.0999985 0.499999 0.299999 0.299999C0.5 0.0999992 0.75 -7.54021e-07 1.05 -7.40908e-07L5.1 -5.63877e-07C5.33333 -5.53678e-07 5.53767 0.0749994 5.713 0.224999C5.88833 0.374999 6.00067 0.566666 6.05 0.799999L6.75 4.25C6.78333 4.48333 6.76233 4.721 6.687 4.963C6.61167 5.205 6.49933 5.40067 6.35 5.55L4 7.9C4.76667 9.16667 5.675 10.325 6.725 11.375C7.775 12.425 8.9 13.3 10.1 14L12.55 11.6C12.7 11.45 12.871 11.354 13.063 11.312C13.255 11.27 13.4673 11.266 13.7 11.3L17.2 11.95C17.4333 11.9833 17.625 12.0917 17.775 12.275C17.925 12.4583 18 12.6667 18 12.9L18 16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18C14.8 18 12.704 17.5207 10.662 16.562C8.62 15.6033 6.81167 14.3367 5.237 12.762C3.66233 11.1873 2.39567 9.379 1.437 7.337C0.478334 5.295 -0.000667712 3.19933 -4.5897e-08 1.05Z" fill="white"/>
                </svg>
                9452 Call Center
              </li>
              <li className="flex items-center">
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg " className="mr-2">
                  <path d="M17 5H16V2C16 0.9 15.1 0 14 0H8C6.9 0 6 0.9 6 2V16H18C19.1 16 20 15.1 20 14V8C20 6.34 18.66 5 17 5ZM8 2H14V5H8V2ZM12 13H8V8H12V13ZM14 13C13.45 13 13 12.55 13 12C13 11.45 13.45 11 14 11C14.55 11 15 11.45 15 12C15 12.55 14.55 13 14 13ZM14 10C13.45 10 13 9.55 13 9C13 8.45 13.45 8 14 8C14.55 8 15 8.45 15 9C15 9.55 14.55 10 14 10ZM17 13C16.45 13 16 12.55 16 12C16 11.45 16.45 11 17 11C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13ZM17 10C16.45 10 16 9.55 16 9C16 8.45 16.45 8 17 8C17.55 8 18 8.45 18 9C18 9.55 17.55 10 17 10ZM2.5 4C1.83696 4 1.20107 4.26339 0.732233 4.73223C0.263392 5.20107 0 5.83696 0 6.5V14.5C0 15.163 0.263392 15.7989 0.732233 16.2678C1.20107 16.7366 1.83696 17 2.5 17C3.16304 17 3.79893 16.7366 4.26777 16.2678C4.73661 15.7989 5 15.163 5 14.5V6.5C5 6.1717 4.93534 5.84661 4.8097 5.54329C4.68406 5.23998 4.49991 4.96438 4.26777 4.73223C4.03562 4.50009 3.76002 4.31594 3.45671 4.1903C3.15339 4.06466 2.8283 4 2.5 4Z" fill="white"/>
                </svg>
                011 552 38 33 / 011 552 84 11
              </li>
              <li className="flex items-center">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM10 8.825C10.0833 8.825 10.171 8.81234 10.263 8.787C10.355 8.76167 10.4423 8.72434 10.525 8.675L17.6 4.25C17.7333 4.16667 17.8333 4.06234 17.9 3.937C17.9667 3.81167 18 3.67434 18 3.525C18 3.19167 17.8583 2.94167 17.575 2.775C17.2917 2.60834 17 2.61667 16.7 2.8L10 7L3.3 2.8C3 2.61667 2.70834 2.61267 2.425 2.788C2.14167 2.96334 2 3.209 2 3.525C2 3.69167 2.03333 3.83767 2.1 3.963C2.16667 4.08834 2.26667 4.184 2.4 4.25L9.475 8.675C9.55834 8.725 9.646 8.76267 9.738 8.788C9.83 8.81334 9.91734 8.82567 10 8.825Z" fill="white"/>
                </svg>
                fppa@fppa.gov.et
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold mb-2 text-[#D2AC47]">Ministry</h3>
            <ul className="space-y-2 text-sm">
              <li>The Agency</li>
              <li>About Us</li>
              <li>Message From Minister</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold mb-2 text-[#D2AC47]">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>VACANCIES</li>
              <li>Bid</li>
              <li>Forms</li>
            </ul>
          </div>
          <div className="md:col-span-2">
  <h3 className="font-bold mb-2">Subscribe to Our Newsletter</h3>
  <div className="bg-white p-1 rounded-md flex items-center mb-4 w-[300px]">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-2  text-black rounded-l focus:outline-none"
    />
    <button className="bg-[#003366] text-white px-2 py-1 rounded focus:outline-none ml-2">
      Submit
    </button>
  </div>
  <div className="relative footer-watermark flex items-center space-x-2 whitespace-nowrap mt-4">
    <h3 className="font-bold relative z-10">Follow us</h3>
    <div className="bg-white p-1 rounded-full relative z-10">
      <FaFacebookF className="text-sm text-[#003366]" />
    </div>
    <div className="bg-white p-1 rounded-full relative z-10">
      <FaTwitter className="text-sm text-[#003366]" />
    </div>
    <div className="bg-white p-1 rounded-full relative z-10">
      <FaLinkedinIn className="text-sm text-[#003366]" />
    </div>
    <div className="bg-white p-1 rounded-full relative z-10">
      <FaInstagram className="text-sm text-[#003366]" />
    </div>
    <div className="bg-white p-1 rounded-full relative z-10">
      <FaYoutube className="text-sm text-[#003366]" />
    </div>
    <div className="bg-white p-1 rounded-full relative z-10">
      <FaTelegramPlane className="text-sm text-[#003366]" />
    </div>
    <style jsx>{`
      .footer-watermark {
        position: relative;
        z-index: 1;
      }
      .footer-watermark::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 400px; /* Increase the size of the watermark */
        height: 200px; /* Increase the size of the watermark */
        background-image: url('/assets/images/mask.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.2;
        z-index: 0;
      }
    `}</style>
  </div>
</div>

        </div>
        <div className="mt-8 text-center text-sm border-t border-[#A4A4A4] pt-4">
          Copyright 2023. All rights reserved.
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;
