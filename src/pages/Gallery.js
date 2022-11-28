/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";
import Buttons from "../component/atoms/Buttons";
import GalleryPhotos from "../component/molecules/GalleryPhotos";

const Gallery = () => {
  const { gallery, filterGallery, filteredGallery, isFiltered } =
    useContext(GalleryContext);

  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filterGallery(gallery, content);
  };
  return (
    <section className="container">
      <div className="card-container">
        <h2>Gallery</h2>
        <nav className="navbar">
          {/* {
          gallery && gallery.map(g=> <Buttons name={g.type}/>)
          } */}
          <Buttons name="all" handleClick={handleClick} />
          <Buttons name="promotion" handleClick={handleClick} />
          <Buttons name="wig" handleClick={handleClick} />
          <Buttons name="braids" handleClick={handleClick} />
          <Buttons name="manicure" handleClick={handleClick} />
          <Buttons name="pedicure" handleClick={handleClick} />
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
