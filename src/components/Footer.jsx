import React from "react";
import Logo from "./Logo"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <p className="footer-text">© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;