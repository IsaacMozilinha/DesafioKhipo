import React from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import img1 from "./assets/bglink.png";
import img2 from "./assets/bglink.png";
import img3 from "./assets/bglink.png"; 

function Plano() {
  const navigate = useNavigate(); // Inicializando o hook

  // Função para redirecionar para a página do formulário
  const handleImageClick = (link) => {
    navigate(link); // Redireciona para o link fornecido
  };

  const images = [
    { src: img1, text: "Basic", link: "/Formulario" },  // Para a página de formulário
    { src: img2, text: "Pro", link: "/Formulario" },     // Para a página de formulário
    { src: img3, text: "Premium", link: "/Formulario" },  // Para a página de formulário
  ];

  return (
    <div>
      <Navbar />
      {/* Passando handleImageClick para o Gallery */}
      <Gallery images={images} onImageClick={handleImageClick} />
    </div>
  );
}

export default Plano;
