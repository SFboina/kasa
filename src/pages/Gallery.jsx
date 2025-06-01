import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse"
import grayStar from "../assets/star-inactive 1.svg"
import redStar from "../assets/star-active 1.svg"
import Error from "../pages/Error"
const Gallery = () => {
  const { id } = useParams(); // Récupère l’ID du logement depuis l'URL
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("/script.json")
      .then((response) => response.json())
      .then((data) => {
        const logementTrouve = data.find((item) => item.id === id); // Trouver le logement correspondant
        setLogement(logementTrouve);
      })
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, [id]);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="gallery container">
     

      {/* Affichage unique de l'image cliquée et ses infos */}
       {/* Carrousel d'images */}
       <Carrousel images={logement.pictures} />

{/* Infos du logement (Ajouté depuis `Carrousel`) */}
<div className="gallery-info">
  <div className="column-1">
    <h2 className="gallery-title">{logement.title}</h2>
    <p className="gallery-location">{logement.location}</p>
    {/* Tags */}
    <div className="gallery-tags">
      {logement.tags.map((tag, index) => (
        <span key={`${tag}-${index}`} className="tag">{tag}</span>
      ))}
    </div>
  </div>
  <div className="column-2">
    {/* Infos sur l'hôte */}
    <div className="gallery-host">
      <p>{logement.host.name}</p>
      <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
    </div>
    {/* Score en étoiles */}
    <div className="gallery-rating">
      {Array.from({ length: 5 }, (_, index) => (
        <img 
          key={index} 
          src={index < parseInt(logement.rating) ? redStar : grayStar} 
          alt="Étoile" 
          className="svg-icon" 
        />
      ))}
    </div>
  </div>




</div>
  {/* Description et équipements sous Collapse */}
  <div className="container-collapse-gallery">
    <Collapse title="Description" content={logement.description} />
    <Collapse 
      title="Équipements" 
      content={
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={`${equipment}-${index}`}>{equipment}</li>
          ))}
        </ul>
      } 
    />
  </div>
</div>
);
};

export default Gallery;
