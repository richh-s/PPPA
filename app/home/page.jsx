"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    title: "Public Procurement And Property Authority",
    description: "PPA Ensure Fairness, Transparency And Non-Discrimination in Public Procurement in Order To Promote A Competitive Local Industry",
    buttons: [
      { text: "E-GP Portal", href: "#" },
      { text: "Register", href: "#" }
    ],
    imageUrl: "/assets/images/slider1.png",
    overlayType: "full"
  },
  {
    title: "Public Procurement And Property Authority",
    description: "PPA Ensure Fairness, Transparency And Non-Discrimination in Public Procurement in Order To Promote A Competitive Local Industry",
    buttons: [
      { text: "E-GP Portal", href: "#" },
      { text: "Register", href: "#" }
    ],
    imageUrl: "/assets/images/slider2.png",
    overlayType: "gradient"
  },
  {
    title: "Public Procurement And Property Authority",
    description: "PPA Ensure Fairness, Transparency And Non-Discrimination in Public Procurement in Order To Promote A Competitive Local Industry",
    buttons: [
      { text: "E-GP Portal", href: "#" },
      { text: "Register", href: "#" }
    ],
    imageUrl: "/assets/images/slider3.png",
    overlayType: "gradient"
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden py-6 ">
      <AnimatePresence initial={false}>
        {slides.map((slide, index) => (
          index === current && (
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div
                className={`absolute inset-0 flex items-center ${
                  slide.overlayType === "full"
                    ? "bg-blue-300 bg-opacity-50"
                    : "bg-gradient-to-r from-[#0065AE] to-[rgba(15, 49, 97, 0)]"
                } p-10`}
              >
                <div className="text-white max-w-lg lg:ml-[120px] lg:text-left text-center mx-auto">
                  <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="mb-8">{slide.description}</p>
                  <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 justify-center lg:justify-start">
                    {slide.buttons.map((button, idx) => (
                      <a
                        key={idx}
                        href={button.href}
                        className={`py-2 px-4 rounded border-2 ${
                          idx === 0
                            ? "bg-white text-blue-500 border-white"
                            : "text-white border-white hover:bg-white hover:text-blue-500"
                        }`}
                      >
                        {button.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl z-10">
        <FaArrowLeft />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl z-10">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
