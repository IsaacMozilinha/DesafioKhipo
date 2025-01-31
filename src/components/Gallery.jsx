import ImageWithText from "./Imagetext";
import { Link } from "react-router-dom";
import "../components/Gallery.css";

function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
       <Link to="/gallery" key={index}>
          <ImageWithText imgSrc={image.src} text={image.text} />
          </Link>
      ))}
    </div>
  );
}

export default Gallery;
