import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Carrousel from '../components/Carrousel';
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
      <div className="image-grid">
        {annonces.map((logement) => (
          <img key={logement.id} src={logement.cover} alt={logement.title} className="image-cover" onClick={() => navigate(`/gallery/${logement.id}`)}/>
        ))}
      </div>
    </div>
  );
};

export default Home;