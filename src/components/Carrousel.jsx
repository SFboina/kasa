import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // pour aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // pour aller à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {/* Affichage des flèches seulement si plusieurs images */}
      {totalImages > 1 && (
        <>
          <button className="prev" onClick={prevSlide}>⬅️</button>
          <button className="next" onClick={nextSlide}>➡️</button>
          <div className="counter">
            {currentIndex + 1} / {totalImages}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
