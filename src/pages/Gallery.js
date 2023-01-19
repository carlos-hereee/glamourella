/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { GalleryContext } from "../utils/context/GalleryContext";
import { AppContext } from "../utils/context/AppContext";
import Container from "../component/template/Container";

const Gallery = () => {
  const { filterGallery, filteredGallery, isFiltered } = useContext(GalleryContext);
  const { gallery } = useContext(AppContext);

  return (
    <Container
      filter={filterGallery}
      filtered={filteredGallery}
      isFiltered={isFiltered}
      data={gallery}
    />
  );
};

export default Gallery;
