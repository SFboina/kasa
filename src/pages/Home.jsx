import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Navigation from '../components/Navigation';

const Home = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch('/script.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAnnonces(data);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données :', error);
      });
  }, []);

  return (
    <div className="home">
      <Navigation/>
      <Banner />
      <div className="card-container">
        {annonces.map((item) => {
          return (
          <Card
            key={item.id}
            title={item.title}
            cover={item.cover}
            pictures={item.pictures}
            description={item.description}
            host={item.host}
            rating={item.rating} 
            location={item.location} 
            equipments={item.equipments} 
            tags={item.tags}
          />
        )})}
      </div>
    </div>
  );
};

export default Home;