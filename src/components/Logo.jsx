import React from "react";
import homeIcon from "../assets/Group.svg"

const Logo = () => {
  return (
    <div className="logo">
      <span className="red">K</span>
      <img src={homeIcon} alt="Icône Maison" className="house-icon" /> {/* Icône remplace "A" */}
      <span className="red">s</span>
      <span className="red">a</span>
    </div>
  );
};

export default Logo;