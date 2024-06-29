"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  {
    id: 1,
    src: '../assets/images/gallery1.png',
    alt: 'Image 1',
    caption: 'The government purchasing and property authority announced that 74 federal institutions have completed their financial purchase system electronically.'
  },
  {
    id: 2,
    src: '../assets/images/gallery1.png',
    alt: 'Image 2',
    caption: 'Image 2 Caption'
  },
  {
    id: 3,
    src: '../assets/images/gallery1.png',
    alt: 'Image 3',
    caption: 'Image 3 Caption'
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto mt-8 px-4 md:px-16 lg:px-32">
      <h1 className="text-3xl font-bold mb-4 text-[#272727]">Image Gallery</h1>
      <div className="relative w-full overflow-hidden">
        <motion.div
          key={images[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex justify-center items-center relative"
        >
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="w-full h-auto object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            {images[currentIndex].caption}
          </div>
        </motion.div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button onClick={prevSlide} className="p-2 text-white rounded-full text-3xl">
            {'<'}
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button onClick={nextSlide} className="p-2 text-white rounded-full text-3xl">
            {'>'}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="relative w-6 h-2 mx-2 rounded-full bg-gray-700">
          <div className="absolute inset-0 rounded-full bg-gray-700"></div>
        </div>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative w-2 h-2 mx-2 rounded-full ${currentIndex === index ? 'bg-gray-700' : 'bg-gray-400'}`}
          >
            {currentIndex === index && (
              <div className="absolute inset-0 rounded-full bg-gray-700"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
