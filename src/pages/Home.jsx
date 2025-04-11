import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [annonces, setAnnonces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/script.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setAnnonces(data.slice(0, 6));// Garde uniquement les 6 premières annonces
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données :', error);
      });
  }, []);

  return (
    <div className="home">
      <Navigation/>
      <Banner />
      <div className="image-grid">
        {annonces.map((logement) => (
          <Card logement={logement} key={logement}/>
        ))}
      </div>
    </div>
  );
};

export default Home;