import React, { useState, useEffect } from "react";
import Carrousel from "../components/Carrousel";

const Gallery = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/script.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur lors du chargement :", error));
  }, []);

  return (
    <div className="gallery">
      <h1>Galerie des logements</h1>

      {/* Affichage des logements avec leurs infos et le carrousel */}
      {logements.map((item) => (
        <Carrousel
          key={item.id}
          images={item.pictures}
          title={item.title}
          host={item.host}
          rating={item.rating}
          location={item.location}
          equipments={item.equipments}
          tags={item.tags}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
