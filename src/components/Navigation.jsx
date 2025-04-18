import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import homeImage from "../assets/img.png";
import aboutImage from "../assets/image source 2.png"; 

const Navigation = () => {
  const location = useLocation();


  return (
    <div className='navigation'>
      <Logo/>

       {/* Affichage dynamique de l’image selon la page */}
       {location.pathname === "/" && <img src={homeImage} alt="Image Home" className="nav-image" />}
      {location.pathname === "/about" && <img src={aboutImage} alt="Image About" className="nav-image" />}

      <ul>
        <NavLink to="/" >
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;