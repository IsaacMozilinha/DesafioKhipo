
import React from 'react';
import "./Imagetext.css";


function Imagetext({ imgSrc, text }) {
  return (
    <div className="image-wrapper">
      <img src={imgSrc} alt="Imagem" />
      <p className="image-text">{text}</p>
    </div>
  );
}

export default Imagetext;
