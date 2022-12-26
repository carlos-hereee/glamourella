/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";
import Buttons from "../component/molecules/Buttons";
import GalleryPhotos from "../component/molecules/GalleryPhotos";
import { AppContext } from "../utils/context/AppContext";
import CardHeader from "../component/molecules/card/CardHeader";

const Gallery = () => {
  const { filterGallery, filteredGallery, isFiltered } =
    useContext(GalleryContext);
  const { gallery } = useContext(AppContext);

  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filterGallery(gallery.sections, content);
  };
  return (
    <section className="primary-container">
      <CardHeader data={gallery} />
      {gallery.isNav && (
        <nav className="navbar">
          {gallery.nav.map((g) => (
            <Buttons name={g} handleClick={handleClick} />
          ))}
        </nav>
      )}
      <div className="card-container">
        {isFiltered
          ? filteredGallery.map((fg) => (
              <GalleryPhotos data={fg} key={fg.uid} />
            ))
          : gallery.sections.map((g) => <GalleryPhotos data={g} key={g.uid} />)}
      </div>
    </section>
  );
};

export default Gallery;
