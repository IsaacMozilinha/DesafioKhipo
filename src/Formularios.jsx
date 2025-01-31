import React from "react";
import Formulario from "./components/Formulario.jsx";

import { Navbar as BootstrapNavbar } from "react-bootstrap"; // Navbar do react-bootstrap
import Navbar from "./components/Navbar"; // Corrigindo o caminho para o seu componente Navbar




function Formularios() {
  return (
    <div>
        
      <Navbar /> {/* Seu componente Navbar */}
      <Formulario />
    </div>
  );
}

export default Formularios;
