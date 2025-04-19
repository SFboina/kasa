import React from 'react';


const Banner  = ({ image ,showText }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      {showText && <div className="banner-text">Chez vous, partout et ailleurs</div>}
    </div>
  );
};

export default Banner;