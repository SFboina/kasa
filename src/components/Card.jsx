import React from 'react';
import "../App.css"
import { useNavigate } from 'react-router-dom';

const Card = ({ logement }) => {
const navigate = useNavigate()
  return (
    <div className="card" onClick={() => navigate(`/gallery/${logement.id}`)}>
     <img 
      src={logement.cover} 
      alt={logement.title} 
      className="image-cover" 
      />
      <h2 className="card-title">{logement.title}</h2>
    </div>
  );
};

export default Card;