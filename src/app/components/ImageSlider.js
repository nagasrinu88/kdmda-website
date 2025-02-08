'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        console.log('nextIndex:', nextIndex);
        return nextIndex >= images.length ? 0 : nextIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            // layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;