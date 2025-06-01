import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation'; 


const Error = () => { 
  return (
    <>
    <div className="error">
      <h1 className="error-title">404</h1>
      <p className="error-text">Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
    </div>
    </>
  );
};

export default Error;
