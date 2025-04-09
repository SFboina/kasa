import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Carrousel from "../components/Carrousel";
import Card from "../components/Card"

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
    return <p>Chargement...</p>;
  }

  return (
    <div className="gallery">
     

      {/* Affichage unique de l'image cliquée et ses infos */}
      <Carrousel
        images={logement.pictures}
        title={logement.title}
        host={logement.host}
        rating={logement.rating}
        location={logement.location}
        equipments={logement.equipments}
        tags={logement.tags}
        description={logement.description}
      />
       <Card title={logement.title} cover={logement.cover} />
    </div>
  );
};

export default Gallery;
