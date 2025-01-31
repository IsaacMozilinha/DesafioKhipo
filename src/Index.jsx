import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Plano from "./Plano"; // Importando a nova página
import Formularios from "./Formularios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Plano />} />
        <Route path="/Formulario" element={<Formularios />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
