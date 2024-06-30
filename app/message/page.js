import React from 'react';

const Message = () => {
  return (
    <div className="container mx-auto mt-8 px-4 md:px-16 lg:px-24">
      <div className="flex justify-center">
        <div className="p-6 bg-white rounded-lg w-full">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="flex flex-col items-center mb-4 md:mr-8 md:mb-0">
              <img
                src="../assets/images/haji.png"
                alt="H.E ATO Haji Ibsa Gendo"
                className="w-64 h-auto mb-4 md:mb-0"
              />
              <div className="px-2 py-2 bg-[#054A7E] text-white font-bold text-center truncate max-w-[300px]">
                H.E ATO Haji Ibsa Gendo
              </div>
            </div>

            <div className="flex flex-col flex-grow items-center md:items-start text-center md:text-left">
              <h2 className="text-xl font-bold mb-4 text-[#001431]">Message From Head</h2>
              <p className="text-[#001431] mb-4">
                Welcome to the Websites of Public Procurement and Property Authority.
                <br className="mb-2" />
                By building the capacity of government procurement and property management in all federal budget offices that implement government procurement and property disposal; by monitoring and controlling whether procurement and property management is carried out effectively; by establishing a modern and efficient operating system based on research, which are observed in the sector. He is working to establish a clear, efficient, fair and accountable government procurement and asset management system that can overcome the problems of good governance and procedural obstacles
                <span className="text-[#CA9400]"> Read more &#8594;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;



