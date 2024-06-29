// components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[#003366] text-white py-16 w-full mt-12 mb-8  ">
      <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center ">
      <div className="bg-white rounded-lg p-2 lg:p-4 w-3/4 lg:w-auto lg:h-[230px] lg:max-w-[200px] flex items-center justify-center lg:mr-6">
          <img src="../assets/images/banner1.png" alt="EGP Logo" className="h-auto max-w-full" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:max-w-[800px] ">
            A Transform public procurement through digitalization Economic Reform Agenda
          </h1>
          <p className="text-sm mb-4 lg:max-w-[500px] ">
            Create more efficient and simplified procurement processes, realize fast time to value, promote equal opportunities for the business community, and better regulatory compliance.
          </p>
          <button className="bg-[#FFC107] text-[#212529] px-4 py-3 flex items-center">
            SEE HOW EGP WORKS
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;


