import { useContext, useEffect, useState } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";
import Buttons from "../component/atoms/Buttons";
import GalleryPhotos from "../component/molecules/GalleryPhotos";

const Gallery = () => {
  const { gallery, filterGallery, filteredGallery, isFiltered } =
    useContext(GalleryContext);
  const [filter, setFilter] = useState();
  useEffect(() => {
    if (filter) {
      filterGallery(gallery, filter);
    }
  }, [filter]);
  const handleClick = (e) => setFilter(e.currentTarget.textContent);
  return (
    <section className="container">
      <div className="card">
        <h2>Gallery</h2>
        <nav className="navbar">
          <Buttons name="all" handleClick={handleClick} />
          <Buttons name="wig" handleClick={handleClick} />
          <Buttons name="nails" handleClick={handleClick} />
        </nav>
        <div className="gallery-photos">
          {isFiltered
            ? filteredGallery.map((fg) => (
                <GalleryPhotos data={fg} key={fg.uid} />
              ))
            : gallery.map((g) => <GalleryPhotos data={g} key={g.uid} />)}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
