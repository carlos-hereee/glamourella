import { useContext } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";

const Gallery = () => {
  const { gallery } = useContext(GalleryContext);
  console.log("gallery", gallery);
  return (
    <section className="container">
      <div className="card">
        <h2>Gallery</h2>
        <div className="gallery-photos">
          {gallery &&
            gallery.map((g) => (
              <div key={g.uid} className="gallery-photo">
                <img
                  src={g.src}
                  alt={g.fileName}
                  className="photo"
                  crossOrigin="anonymous"
                />
                <span>Credit to: {g.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
