'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({ heroItems, interval = 5000 }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [heroItems.length]);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroItems[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="relative h-full w-full">
            <Image
              src={heroItems[currentIndex].image}
              alt={heroItems[currentIndex].title}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-orange-400"
            >
              {heroItems[currentIndex].title}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl max-w-2xl text-orange-200"
            >
              {heroItems[currentIndex].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots for navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;