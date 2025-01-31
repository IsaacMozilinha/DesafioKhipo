import React from "react";
import ImageWithText from "./Imagetext";
import "../components/Gallery.css";
import { useNavigate } from "react-router-dom"; // Importando useNavigate

function Gallery({ images }) {
  const navigate = useNavigate(); // Inicializando o hook useNavigate

  // Função chamada ao clicar em uma imagem para redirecionar
  const handleImageClick = (link) => {
    navigate(link); // Passando o link dinâmico
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => handleImageClick(image.link)} // Passando o link correto
        >
          <ImageWithText imgSrc={image.src} text={image.text} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
