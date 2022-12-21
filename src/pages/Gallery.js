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
    filterGallery(gallery, content);
  };
  return (
    <section className="primary-container">
      <CardHeader data={gallery} />
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
