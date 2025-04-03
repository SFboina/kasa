import React from 'react';
import Collapse from "../components/Collapse"


const Card = ({ title, description, cover , pictures , host, rating, location, equipments, tags }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image"/>
      <h2 className="card-title">{title}</h2>
      <div className="card-host">
        <img src={host.picture} alt={host.name} className="host-picture"/>
        <p>{host.name}</p>
      </div>

    <div className="card-rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>⭐</span>
        ))}
      </div>

     <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <Collapse title="Description" content={description} />
      <Collapse 
        title="Équipements" 
        content={
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        } 
      />

      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div className="card-pictures">
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${title} - ${index}`} className="card-picture" />
        ))}
      </div>
    </div>
  );
};

export default Card;