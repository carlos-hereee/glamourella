/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";
import Buttons from "../component/molecules/Buttons";
import { AppContext } from "../utils/context/AppContext";
import CardHeader from "../component/molecules/card/CardHeader";
import { ServicesContext } from "../utils/context/ServicesContext";
import Card from "../component/organisms/Card";

const Gallery = () => {
  const { filterGallery, filteredGallery, isFiltered } =
    useContext(GalleryContext);
  const { gallery } = useContext(AppContext);
  const { addToCart } = useContext(ServicesContext);

  const handleClick = (e) => {
    let content = e.currentTarget.textContent.split(" ").join("").toLowerCase();
    filterGallery(gallery.sections, content);
  };
  console.log("data.sections", gallery);
  return (
    <section className="primary-container">
      <CardHeader data={gallery} />
      {gallery.isNav && (
        <nav className="navbar">
          {gallery.nav.map((g) => (
            <Buttons name={g} handleClick={handleClick} key={g} />
          ))}
        </nav>
      )}
      <div className="card-container">
        {isFiltered
          ? filteredGallery.map((fg) => (
              <Card data={fg} key={fg.uid} click={addToCart} />
            ))
          : gallery.sections.map((g) => (
              <Card data={g} key={g.uid} click={addToCart} />
            ))}
      </div>
    </section>
  );
};

export default Gallery;
