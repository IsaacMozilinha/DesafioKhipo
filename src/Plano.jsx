import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import img1 from "./assets/bglink.png";
import img2 from "./assets/bglink.png";
import img3 from "./assets/bglink.png"; // Nova imagem

function Plano() {
  const images = [
    { src: img1, text: "Basic", link: "#" },
    { src: img2, text: "Pro", link: "#" },
    { src: img3, text: "Premium", link: "#" } 
  ];

  return (
    <div>
      <Navbar />
      <Gallery images={images} />
    </div>
  );
}

export default Plano;
