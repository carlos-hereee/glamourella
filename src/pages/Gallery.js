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
                {g.artistName && g.artistName.split("unsplash") && (
                  <p>
                    Photo by:{" "}
                    {g.artistName
                      .split(" ")
                      .map((name) => {
                        if (name === "unsplash") {
                          return " | Unsplash";
                        }
                        return name.charAt(0).toUpperCase() + name.substring(1);
                      })
                      .join(" ")}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
