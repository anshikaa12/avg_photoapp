import React from "react";
import { useImages } from "../services/imageapi";

function Images() {
  const { images } = useImages();
  return (
    <div className="image-gal">
      {images.map((image) => {
        return (
          <div className="image" key={image.id}>
            <img src={image.url_s} alt="..." />
          </div>
        );
      })}
    </div>
  );
}

export default Images;
