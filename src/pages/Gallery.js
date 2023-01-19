/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";
import { AppContext } from "../utils/context/AppContext";
import Container from "../component/template/Container";
import { ServicesContext } from "../utils/context/ServicesContext";

const Gallery = () => {
  const { filterGallery, filteredGallery, isFiltered } = useContext(GalleryContext);
  const { cart } = useContext(ServicesContext);
  const { gallery } = useContext(AppContext);

  return (
    <Container
      filter={filterGallery}
      filtered={filteredGallery}
      isFiltered={isFiltered}
      data={gallery}
      cart={cart.length > 0 ? cart.filter((c) => c.isAccessory) : []}
    />
  );
};

export default Gallery;
