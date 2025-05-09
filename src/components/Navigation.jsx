import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";


const Navigation = () => {
  const location = useLocation();


  return (
    <div className='navigation'>
      <Logo/>

      <ul>
        <NavLink to="/" >
          <li>ACCUEIL</li>
        </NavLink>
        <NavLink to="/about" >
          <li>A PROPOS</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;