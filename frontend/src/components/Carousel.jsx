import React, { useState, useEffect } from 'react';

export default function Carousel() {
  // Just paste your image URLs here
  const slides = [
    "https://techeor.co.in/suceed-15/images/product/b-2.jpg",
    "https://techeor.co.in/suceed-15/images/product/b-4.jpg",
    "https://techeor.co.in/suceed-15/images/product/b-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[95vh] overflow-hidden">
      {slides.map((url, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
