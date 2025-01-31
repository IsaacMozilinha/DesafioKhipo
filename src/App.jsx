import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Gallery from "../src/components/Gallery";
import Plano from "./Plano";
import Formularios from "./Formularios";  // Adicionei a importação do formulário
import "../src/components/Gallery.css";
import img1 from "./assets/bglink.png";
import img2 from "./assets/bglink.png";

function App() {
  const images = [
    { src: img1, alt: "Imagem 1", text: "Nacional", link: "/pagina2" }, // Link para a página 2 (Plano)
    { src: img2, alt: "Imagem 2", text: "Internacional", link: "/pagina2" }, // Link para a página 2 (Plano)
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página inicial com a galeria de imagens */}
        <Route path="/" element={<Gallery images={images} />} />
        {/* Página 2: Plano */}
        <Route path="/pagina2" element={<Plano />} />
        {/* Página 3: Formulários */}
        <Route path="/Formulario" element={<Formularios />} />
      </Routes>
    </Router>
  );
}

export default App;
