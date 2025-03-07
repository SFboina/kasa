import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Card from './Card';

const Home = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch('/script.json')
      .then((response) => response.json())
      .then((data) => {
        setAnnonces(data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données :', error);
      });
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="card-container">
        {annonces.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;