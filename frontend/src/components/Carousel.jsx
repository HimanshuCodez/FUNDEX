import React, { useState, useEffect } from "react";

export default function ImageCarousel() {
  const slides = [
    "https://imgs.search.brave.com/tfMpWj90DkRLX259YM5fmbZVD2DpsQKJgFpZvcUsdqs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb29w/ZGVzaWduYXdhcmRz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNS9MZWdl/bmQtTWFuc2lvbi1M/YW5kc2NhcGUtRGVz/aWduLTA0LTljMjkz/ODBmLTE5MjB4ODQx/LmpwZw",
    "https://imgs.search.brave.com/X4Mk39yU5doumBKDXMJGq_OFCgPWkXiT7PHpmQnhEbI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDQxNzE5L3Bob3Rv/L21hbnNpb24tZXh0/ZXJpb3IuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUxSZjBW/aHdxZUFBbWJhUXlG/VGYyd0hOdlpXc3Jp/SldkVUdxZU9UcnNw/eEU9",
    "https://imgs.search.brave.com/WA9OGv4effsifJfSZbqagYGIllC70gEx_WQZJ9ysqPg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjg5/NDk0NTk5L3Bob3Rv/L21hbnNpb24tYXQt/bmlnaHQtc3Vycm91/bmRlZC1ieS1nYXJk/ZW5zLWluLWZsb3Jp/ZGEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWZNMm53V3dJ/bTNXNVFrcFZrQTJC/emViR3JYaV9aUVVh/UHc5UGdab2dkb1k9"
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