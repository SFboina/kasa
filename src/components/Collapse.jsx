import React, { useState } from "react"
import "../components/Collapse"
import chevronDown from "../assets/chevron-down.png"
import chevronUp from "../assets/chevron-up.png"

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <button className={`toggle-btn ${isOpen ? "open" : ""}`}>
          {isOpen ? <img src={chevronUp} alt="chevron-up" /> : <img src={chevronDown} alt="chevron-down" />}
        </button>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;