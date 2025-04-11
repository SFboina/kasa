import React, { useState } from "react"
import Collapse from "../components/Collapse"

const Carrousel = ({ images, title, host, rating, location, equipments, tags, description }) => {
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
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="next" onClick={nextSlide}>❯</button>
      
  {/* Ajout du compteur directement sur l'image */}
    <div className="counter">{currentIndex + 1} / {totalImages}</div>
    </div>

      {/* Infos du logement */}
      <div className="carousel-info">
        <h2>{title}</h2>
        <p className="carousel-location">📍 {location}</p>
        <div className="carousel-host">
          <img src={host.picture} alt={host.name} className="host-picture"/>
          <p>{host.name}</p>
        </div>

        {/* Score en étoiles */}
        <div className="carousel-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < parseInt(rating, 10) ? "star filled" : "star"}>
              ⭐
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="carousel-tags">
          {tags.map((tag, index) => (
            <span key={`${tag}-${index}`} className="tag">{tag}</span>
          ))}
        </div>

        {/* Description et équipements sous Collapse */}
        <Collapse title="Description" content={description} />
        <Collapse 
          title="Équipements" 
          content={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li>
              ))}
            </ul>
          } 
        />
      </div>
    </div>
  );
};

export default Carrousel;