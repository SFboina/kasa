import React from 'react';
import Navigation from '../components/Navigation';
import Collapse from '../components/Collapse';

const sections = [
  { title: "Fiabilité", content: "Nous garantissons une sécurité maximale pour nos utilisateurs." },
  { title: "Respect", content: "Le respect est au cœur de nos valeurs et de nos interactions." },
  { title: "Service", content: "Nous offrons un service de qualité, disponible 24h/24." },
  { title: "Sécurité", content: "Toutes les données sont protégées et sécurisées." },
];

const About = () => {
  return (
    <div>
      <Navigation/>
      <h1> À propos </h1>
      {sections.map((section, index) => (
        <Collapse key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

export default About;