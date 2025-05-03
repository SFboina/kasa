import React, { useState } from "react"


const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button className="carousel-arrow prev" onClick={prevSlide}>❮</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        <button className="carousel-arrow next" onClick={nextSlide}>❯</button>
        
        {/* Ajout du compteur directement sur l'image */}
        <div className="counter">{currentIndex + 1} / {totalImages}</div>
      </div>
    </div>
  );
};

export default Carrousel;