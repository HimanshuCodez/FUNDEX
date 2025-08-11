import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <img src={slide.image} alt={slide.text} />
       
        </div>
      ))}
    </div>
  );
};

export default Carousel;