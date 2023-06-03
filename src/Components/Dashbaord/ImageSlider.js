import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://www.cuchd.in/includes/assets/images/ranking-banner-2.webp',
    'https://www.cuchd.in/includes/assets/images/highest-patents-banner.webp',
    'https://www.cuchd.in/includes/assets/images/qs-subject-banner-updated.webp',
    'https://www.cuchd.in/includes/assets/images/hero-slide-1.webp'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <button onClick={prevSlide}><FiArrowLeft sx={30} /></button>
      <div className="slider">
        <div className="slide-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide}><FiArrowRight sx={30} /></button>
    </div>
  );
};

export default ImageSlider;
