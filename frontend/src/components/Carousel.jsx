import React, { useState, useEffect } from "react";

export default function ImageCarousel() {
  const slides = [
    "https://techeor.co.in/suceed-15/images/product/b-2.jpg",
    "https://techeor.co.in/suceed-15/images/product/b-4.jpg",
    "https://techeor.co.in/suceed-15/images/product/b-3.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer); // cleanup
  }, [slides.length]);

  return (
    <div className="relative w-full">
      {/* Image container */}
      <div className="relative overflow-hidden">
        <img
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover transition-all duration-1000"
        />

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ❮
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ❯
        </button>
      </div>
    </div>
  );
}