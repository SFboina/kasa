import React from 'react';
import "../App.css"
import { useNavigate } from 'react-router-dom';

const Card = ({ logement }) => {
const navigate = useNavigate()
  return (
    <div className="card">
     <img 
          src={logement.cover} 
          alt={logement.title} 
          className="image-cover" 
          onClick={() => navigate(`/gallery/${logement.id}`)}
          />
    </div>
  );
};

export default Card;