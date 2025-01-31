import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar"
import Gallery from '../src/components/Gallery'
import Plano from "./Plano";
import "../src/components/Gallery.css"
import img1 from "./assets/bglink.png"
import img2 from "./assets/bglink.png"

function App() {
  const images = [
    { src: img1, alt: "Imagem 1", text: "Nacional" },
    { src: img2, alt: "Imagem 2", text: "Internacional" }
  ];

  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Gallery images={images} />} />
        <Route path="/gallery" element={<Plano />} />
      </Routes>
    </Router>
  
  )
}

export default App
