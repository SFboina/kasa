import React, { useState } from "react"
import "../components/Collapse"

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
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;