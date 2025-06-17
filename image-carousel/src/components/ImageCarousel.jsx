import React, { useEffect, useState, useRef } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    startAutoSlide();
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide();
  };

  const handleDotClick = (idx) => {
    setCurrent(idx);
    startAutoSlide();
  };

  return (
    <div className="carousel">
      <img src={images[current]} className="image" />
      <button onClick={prevImage} className="btn btn-prev">
        &#10094;
      </button>
      <button onClick={nextImage} className="btn btn-next">
        &#10095;
      </button>
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
